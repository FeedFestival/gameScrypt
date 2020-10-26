import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService, FacebookLoginProvider } from 'angularx-social-login';
import { LoginService, OurUser } from '../header/login.service';
import { _isNilOrEmpty } from '../lodash-utils';
import { LoginPhase, LoginUiAccess, LOGIN_PHASE, __isDan, __isDuringStorm, __isInAir, __isIt } from './login.access';

@Component({
    selector: 'app-login',
    templateUrl: './login-dialog.component.html',
    styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent {

    uiAccess: LoginUiAccess = {
        loggedIn: false,
        title: 'Login to gameScrypt',
        phase: LOGIN_PHASE.LOADING_PHASE,
        loggingOut: false,
        buttonDanishMow: false
    };

    LOGIN_PHASE: LoginPhase = LOGIN_PHASE;

    constructor(
        public dialogRef: MatDialogRef<LoginDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: { loggedIn: boolean, user: OurUser },
        private authService: AuthService,
        private loginService: LoginService
    ) {
        this.onLoggedIn(data.loggedIn, data.user);
    }

    login() {
        if (this.uiAccess.loggedIn) {
            return;
        }
        this.uiAccess.phase = LOGIN_PHASE.LOADING_PHASE;
        this.uiAccess.title = 'Loging in...';
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    }

    onLoggedIn(loggedIn: boolean, user?: OurUser) {
        this.uiAccess.loggedIn = loggedIn;
        if (this.uiAccess.loggedIn) {
            this.uiAccess.phase = LOGIN_PHASE.LOGGED_IN_PHASE;
        } else {
            if (this.uiAccess.loggingOut) {
                this.dialogRef.close({ loggingOut: this.uiAccess.loggingOut });
                return;
            }
            this.uiAccess.phase = LOGIN_PHASE.LOGIN_PHASE;
        }

        if (_isNilOrEmpty(user) === false) {
            this.uiAccess.title = 'Logged in as ' + user.name;

            this.uiAccess.buttonDanishMow = __isInAir(user.roles)
                && __isDuringStorm(user.roles) && __isDan(user.roles) && __isIt(user.roles);
            if (this.uiAccess.buttonDanishMow) {
                this.loginService.call('extra-utils')
                    .subscribe(extra => {
                        this.uiAccess.butName = extra.name;
                        this.uiAccess.butRoute = extra.content;
                    });
            }

        } else {
            this.uiAccess.title = 'Login to gameScrypt';
        }
    }

    redirect(redirectUrl: string): void {
        const previousPhase = JSON.parse(JSON.stringify(this.uiAccess.phase));
        this.uiAccess.phase = LOGIN_PHASE.LOADING_PHASE;
        this.loginService.call('validate', { storm: true })
            .subscribe(extra => {
                this.dialogRef.close({ redirect: redirectUrl });
            }, (e) => {
                this.uiAccess.buttonDanishMow = false;
                this.uiAccess.butName = '';
                this.uiAccess.butRoute = '';
            }, () => {
                this.uiAccess.phase = previousPhase;
            });
    }

    signOut(): void {
        this.uiAccess.phase = LOGIN_PHASE.LOADING_PHASE;
        this.uiAccess.title = 'Loging out...';
        this.uiAccess.loggingOut = true;
        setTimeout(() => {
            this.onLoggedIn(false, null);
        });
    }

    leave() {
        this.dialogRef.close();
    }
}
