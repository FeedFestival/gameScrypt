import { Injectable } from '@angular/core';
import { LoginOpt, SocialUser } from 'angularx-social-login';
import { Observable, of, Subject } from 'rxjs';
import { _isNilOrEmpty } from '../lodash-utils';

@Injectable({ providedIn: 'root' })
export class AuthMockService {

    authSubject = new Subject<SocialUser | any>();
    readonly logItIn = false;
    readonly socialUser: any = {
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

    get authState(): Observable<SocialUser | any> {
        setTimeout(_ => {
            if (this.logItIn === false) {
                this.authSubject.next(null);
                return;
            }
            this.authSubject.next(this.socialUser);
            this.authSubject.complete();
        });
        return this.authSubject;
    }

    constructor() { }

    signIn(providerId: string, opt?: LoginOpt): Promise<SocialUser | any> {
        if (_isNilOrEmpty(providerId)) {
            console.error('No providerId');
            return of(null).toPromise();
        }
        setTimeout(_ => {
            this.authSubject.next(this.socialUser);
            this.authSubject.complete();
        });
        return of(this.socialUser).toPromise();
    }

    signOut(revoke?: boolean): Promise<any> {
        setTimeout(_ => {
            this.authSubject.next(null);
            this.authSubject.complete();
        });
        return of(null).toPromise();
    }
}
