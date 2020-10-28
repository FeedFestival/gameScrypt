import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { MockRequestTime } from 'src/app/app.constants';
import { _isNilOrEmpty } from '../lodash-utils';
import { OurUser } from './login.service';

@Injectable({ providedIn: 'root' })
export class AuthMockService {

    authSubject = new Subject<OurUser | any>();
    // tslint:disable-next-line: variable-name
    _logItIn = false;

    get authState(): Observable<OurUser | any> {
        setTimeout(_ => {
            if (this._logItIn === false) {
                this.authSubject.next(null);
                return;
            }
            this.authSubject.next(SOCIAL_USER);
        }, MockRequestTime);
        return this.authSubject;
    }

    constructor() { }

    signIn(providerId: string, opt?: any): Promise<OurUser | any> {
        if (_isNilOrEmpty(providerId)) {
            console.error('No providerId');
            return of(null).toPromise();
        }
        setTimeout(_ => {
            this.authSubject.next(SOCIAL_USER);
        }, MockRequestTime);
        return of(SOCIAL_USER).toPromise();
    }

    signOut(revoke?: boolean): Promise<any> {
        return of(null).toPromise();
    }
}

export const SOCIAL_USER = {
    name: 'Dani Sim',
    email: 'simionescudani07\u0040gmail.com',
    picture: {
        data: {
            height: 50,
            is_silhouette: false,
            // tslint:disable-next-line: max-line-length
            url: 'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=10216113288767381&height=50&width=50&ext=1606296306&hash=AeTtxEjaa3lYBdDXc1I',
            width: 50
        }
    },
    first_name: 'Dani',
    last_name: 'Sim',
    id: '10216113288767381'
};
