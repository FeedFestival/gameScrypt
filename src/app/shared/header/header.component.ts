import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { faCoffee, faEnvelope, faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';
import { LocalStorageService } from 'ngx-webstorage';
import { HomeService } from 'src/app/features/home-page/home.service';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';
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
        private router: Router,
        private authService: AuthService,
        private matDialog: MatDialog,
        private headerService: HeaderService,
        private navigationService: NavigationService,
        private onResizeService: OnResizeService,
        private localStorage: LocalStorageService,
        private storyService: HomeService
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {

        const user = this.localStorage.retrieve('user');
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
                        this.localStorage.store('user', ourUser);
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
        this.router.navigateByUrl('/acasa');
    }

    goTo(route) {
        this.router.navigateByUrl('/' + route);
    }

    goToWriteTool() {
        window.location.href = 'https://gamescrypt.com';
    }

    openPage(pageOption) {

        const newArgs = {};
        newArgs[pageOption] = true;

        this.matDialog.open(PageDialogComponent, {
            data: {
                args: newArgs
            },
            disableClose: false,
            hasBackdrop: true
        });
    }
}
