import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { faCoffee, faEnvelope, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService, AuthServiceConfig, LoginOpt } from 'angularx-social-login';
import { LocalStorageService } from 'ngx-webstorage';
import { STORAGE_KEY } from 'src/app/app.constants';
import { HomeService } from 'src/app/features/home-page/home.service';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';
import { ConfirmDialogText } from '../components/confirm/confirm-dialog-text';
import { ConfirmDialogComponent } from '../components/confirm/confirm-dialog.component';
import { _isNil, _isNilOrEmpty } from '../lodash-utils';
import { LoginDialogComponent } from '../login/login-dialog.component';
import { AppEventManager } from '../navigation/event-manager.service';
import { EventContent } from '../navigation/event-with-content.model';
import { EVENT } from '../navigation/events-manager.constants';
import { OnResizeService } from '../on-resize/on-resize.service';
import { LoginService, OurUser } from './login.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges {

    @Input() scrollClass = '';

    faCoffee = faCoffee;
    faEnvelope = faEnvelope;
    faShoppingCart = faShoppingCart;
    faHeart = faHeart;

    user: OurUser;
    loggedIn = false;

    bp: string;

    private loginDialog: MatDialogRef<LoginDialogComponent>;

    constructor(
        private authService: AuthService,
        private authServiceConfig: AuthServiceConfig,
        private loginService: LoginService,
        private appEventManager: AppEventManager,
        private matDialog: MatDialog,
        private onResizeService: OnResizeService,
        private localStorage: LocalStorageService,
        private homeService: HomeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {

        if (this.getStoredUser() === false) {
            this.authService.authState.subscribe(this.onUserAuthenticated);
        }
    }

    private getStoredUser() {
        const storedUser = this.localStorage.retrieve(STORAGE_KEY.USER);
        if (_isNilOrEmpty(storedUser) === false) {

            this.user = storedUser;
            this.loggedIn = this.homeService.loggedIn(storedUser);

            this.loginService.getUser(storedUser.id)
                .subscribe((response: any) => {

                    this.syncUser(response);
                    this.loggedIn = this.homeService.loggedIn(this.user);

                    if (_isNil((this.authService as any)._logItIn) === false) {
                        (this.authService as any)._logItIn = true;
                    }

                    const options: LoginOpt = {
                        auth_type: 'reauthenticate',
                        client_id: storedUser.facebook_id,
                        fetch_basic_profile: true
                    };
                    this.authServiceConfig.providers.get('FACEBOOK')
                        .signIn(options)
                        .then(facebookUser => {
                            this.user = (facebookUser as any);
                        });
                });
        }
        return this.loggedIn;
    }

    private onUserAuthenticated = (loggedUser) => {

        if (this.loggedIn) {
            if (_isNilOrEmpty(this.loginDialog) === false
                && this.loginDialog.componentInstance.uiAccess.loggingOut) {
                this.loginDialog.componentInstance.onLoggedIn(false, null);
            }
            return;
        }

        this.user = loggedUser;
        this.loggedIn = this.homeService.loggedIn(this.user);

        if (_isNilOrEmpty(this.loginDialog) === false) {
            this.loginDialog.componentInstance.onLoggedIn(this.loggedIn, this.user);
        }

        if (this.loggedIn === false) {
            return;
        }

        this.loginService.saveUser(this.user)
            .subscribe((response: any) => {
                this.syncUser(response);

                this.localStorage.store(STORAGE_KEY.USER, this.user);
                if (_isNilOrEmpty(this.loginDialog) === false) {
                    this.loginDialog.componentInstance.onLoggedIn(this.loggedIn, this.user);
                }
            });
    }

    private syncUser(response) {
        this.user = {
            ...this.user,
            facebook_id: this.user.id
        };
        this.user.id = response.body.id;
        this.user.roles = response.body.roles;
        //
        this.loginService.setLoggedUser(this.user);
        //
        const bearerToken = response.headers.get('Authorization');
        if (bearerToken && bearerToken.slice(0, 7) === 'Bearer ') {
            const jwt = bearerToken.slice(7, bearerToken.length);
            this.loginService.storeAuthenticationToken(jwt);
            return jwt;
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        // if (changes) {
        //     if (changes.scrollClass && changes.scrollClass.currentValue) {
        //         if (this.scrollClass === 'drop') {

        //         }
        //     }
        // }
    }

    login() {
        this.loginDialog = this.matDialog
            .open(LoginDialogComponent, {
                data: {
                    loggedIn: this.loggedIn,
                    user: this.user
                },
                panelClass: 'dialog-class',
                hasBackdrop: true,
                disableClose: false
            });
        this.loginDialog.afterClosed().subscribe(options => {
            if (_isNilOrEmpty(options) === false) {
                if (options.loggingOut) {
                    this.user = null;
                    this.loggedIn = this.homeService.loggedIn(this.user);
                    this.localStorage.store(STORAGE_KEY.USER, this.user);
                    this.goTo('');
                }
                if (_isNilOrEmpty(options.redirect) === false) {
                    this.goTo(options.redirect);
                }
            }
            this.loginDialog = null;
        });
    }

    goHome() {
        this.goTo('');
    }

    goTo(route) {
        this.appEventManager.broadcast(
            new EventContent(EVENT.NAVIGATE, { goRoute: route })
        );
    }

    goToWriteTool() {
        const confirmData: ConfirmDialogText = {
            title: 'WriteTool Redirect',
            question: 'You are about to get redirect to the WriteTool',
            confirm: 'Go To WriteTool',
            cancel: 'Stay here'
        };
        this.matDialog.open(ConfirmDialogComponent, { data: confirmData, panelClass: 'dialog-class', hasBackdrop: true })
            .afterClosed().subscribe(isConfirmed => {
                if (isConfirmed) {
                    const userFacebookId = '';
                    window.location.href = 'http://writetool.gamescrypt.com/' + userFacebookId;
                }
            });
    }

    openPage(pageOption) {

        const newArgs = {};
        newArgs[pageOption] = true;

        this.matDialog.open(PageDialogComponent, {
            data: {
                args: newArgs
            },
            panelClass: 'dialog-class',
            disableClose: false,
            hasBackdrop: true
        });
    }
}
