import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { faCoffee, faEnvelope, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LocalStorageService } from 'ngx-webstorage';
import { STORAGE_KEY } from 'src/app/app.constants';
import { HomeService } from 'src/app/features/home-page/home.service';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';
import { ConfirmDialogText } from '../components/confirm/confirm-dialog-text';
import { ConfirmDialogComponent } from '../components/confirm/confirm-dialog.component';
import { AppEventManager } from '../navigation/event-manager.service';
import { EventContent } from '../navigation/event-with-content.model';
import { EVENT } from '../navigation/events-manager.constants';
import { NavigationService } from '../navigation/navigation.service';
import { OnResizeService } from '../on-resize/on-resize.service';
import { HeaderService } from './header.service';

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
        private headerService: HeaderService,
        private appEventManager: AppEventManager,
        private matDialog: MatDialog,
        private onResizeService: OnResizeService,
        private localStorage: LocalStorageService,
        private storyService: HomeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {

        const user = this.localStorage.retrieve(STORAGE_KEY.USER);
        if (user !== null) {

            this.user = user;
            this.storyService.isLoggedIn = this.loggedIn = true;
            this.storyService.loggedIn(this.user.id);

            // tslint:disable-next-line: max-line-length
            // config.providers.get('FACEBOOK').signIn({ auth_type: 'reauthenticate', client_id: user.facebook_id, fetch_basic_profile: true })
            //     .then(user => {
            //         this.user = user;
            //     }, error => {
            //         console.log("TCL: HeaderComponent -> ngOnInit -> error", error)
            //     });
        } else {

            this.authService.authState.subscribe((user) => {
                this.user = user;
                this.loggedIn = (user != null);
                if (!this.user) {
                    return;
                }
                this.storyService.loggedIn(this.user.id);
                console.log(this.user);
                if (!this.user) {
                    return;
                }
                this.headerService.saveUser(this.user)
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
        if (this.loggedIn) {
            return;
        }
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }

    goHome() {
        this.goTo('acasa');
    }

    goTo(route) {
        const content = new EventContent(EVENT.NAVIGATE, { goRoute: route });
        this.appEventManager.broadcast(content);
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
