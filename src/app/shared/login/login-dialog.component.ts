import { AfterViewInit, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';

@Component({
    selector: 'app-login',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit, AfterViewInit {

    page: any = {
        loggedIn: false,
        title: 'Login'
    };

    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any,
        private authService: AuthService
    ) {
        this.page.loggedIn = data.loggedIn;
    }

    ngOnInit() {
        // this.scrollToTop();
    }

    ngAfterViewInit() {
        // this.scrollToTop();
    }

    login() {
        if (this.page.loggedIn) {
            return;
        }
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    signOut(): void {
        this.authService.signOut();
    }

    // scrollToTop() {
    //     setTimeout(() => {
    //         this.scrollRef.scrollTo({
    //             top: 0
    //         });
    //         this.show = true;
    //     }, 1000);
    // }

    leave() {
        this.dialogRef.close();
    }
}
