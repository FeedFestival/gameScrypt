import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { faCoffee, faEnvelope, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService, AuthServiceConfig, LoginOpt, SocialUser } from 'angularx-social-login';
import { LocalStorageService } from 'ngx-webstorage';
import { STORAGE_KEY } from 'src/app/app.constants';
import { HomeService } from 'src/app/features/home-page/home.service';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';
import { ConfirmDialogText } from '../components/confirm/confirm-dialog-text';
import { ConfirmDialogComponent } from '../components/confirm/confirm-dialog.component';
import { _isNilOrEmpty } from '../lodash-utils';
import { LoginDialogComponent } from '../login/login-dialog.component';
import { AppEventManager } from '../navigation/event-manager.service';
import { EventContent } from '../navigation/event-with-content.model';
import { EVENT } from '../navigation/events-manager.constants';
import { OnResizeService } from '../on-resize/on-resize.service';
import { LoginService } from './login.service';

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

    user: SocialUser;
    loggedIn: boolean;

    bp: string;

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
        const storedUsed = this.localStorage.retrieve(STORAGE_KEY.USER);
        if (_isNilOrEmpty(storedUsed) === false) {
            this.user = storedUsed;
            this.loggedIn = this.homeService.loggedIn(this.user);

            const options: LoginOpt = {
                auth_type: 'reauthenticate',
                client_id: storedUsed.facebook_id,
                fetch_basic_profile: true
            };
            this.authServiceConfig.providers.get('FACEBOOK')
                .signIn(options)
                .then(facebookUser => {
                    this.user = facebookUser;
                });
        } else {
            this.authService.authState
                .subscribe((loggedUser) => {
                    this.user = loggedUser;
                    this.loggedIn = this.homeService.loggedIn(this.user);
                    if (this.loggedIn === false) {
                        return;
                    }

                    console.log(this.user);

                    this.loginService.saveUser(this.user)
                        .subscribe((userId) => {
                            const ourUser = {
                                ...this.user,
                                facebook_id: this.user.id
                            };
                            ourUser.id = userId;
                            this.localStorage.store(STORAGE_KEY.USER, ourUser);
                        });
                });
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
        this.matDialog
            .open(LoginDialogComponent, {
                data: {
                    loggedIn: this.loggedIn
                },
                panelClass: 'dialog-class',
                hasBackdrop: true,
                disableClose: false
            })
            .afterClosed()
            .subscribe(isConfirmed => {

            });
    }

    goHome() {
        this.goTo('acasa');
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
