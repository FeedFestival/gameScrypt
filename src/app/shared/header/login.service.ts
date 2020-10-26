import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
// import * as jwt_decode from 'jwt-decode';
import jwt_decode from 'jwt-decode';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { HttpDefaultOptions, STORAGE_KEY } from 'src/app/app.constants';
import { GameScryptUtils } from 'src/app/features/home-page/gamescrypt.utils';

@Injectable({ providedIn: 'root' })
export class LoginService {

    private _user: OurUser;

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorageService
    ) { }

    saveUser(user): Observable<any> {
        const requestOptions: any = {
            ...HttpDefaultOptions,
            observe: 'response'
        };
        return this.http.post<any>(
            GameScryptUtils.baseRequestUrl() + 'UserService/Register.php?a=' + GameScryptUtils.getAnotate(true),
            user,
            requestOptions
        );
    }

    getUser(userId): Observable<any> {
        const requestOptions: any = {
            ...HttpDefaultOptions,
            observe: 'response'
        };
        return of();
    }

    call(rq: string, extras?: any): Observable<any> {
        return of();
    }

    setLoggedUser(ourUser: OurUser) {
        this._user = ourUser;
    }

    loggedUser(): OurUser {
        return this._user;
    }

    storeAuthenticationToken(jwt): void {
        this.localStorage.store(STORAGE_KEY.TOKEN, jwt);
    }

    isTokenExpired(token?: string): boolean {
        if (!token) {
            token = this.getToken();
        }
        if (!token) {
            return true;
        }
        const date = this.getTokenExpirationDate(token);
        return date === undefined ? false : !(date.valueOf() > new Date().valueOf());
    }

    getToken(): any {
        return this.localStorage.retrieve(STORAGE_KEY.TOKEN);
    }

    private getTokenExpirationDate(token: string): Date {
        const decoded = jwt_decode(token);
        const expiryDate = (decoded as any).exp;

        if (expiryDate === undefined) {
            return null;
        }

        const date = new Date(0);
        date.setUTCSeconds(expiryDate);
        return date;
    }
}

export interface OurUser extends SocialUser {
    facebook_id?: string;
    roles?: string[];
}
