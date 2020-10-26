import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { STORAGE_KEY } from 'src/app/app.constants';
import { SOCIAL_USER } from './auth.mock.service';
import { OurUser } from './login.service';

@Injectable({ providedIn: 'root' })
export class LoginMockService {

    constructor(
        private localStorage: LocalStorageService
    ) { }

    saveUser(user): Observable<any> {
        const ourUser: OurUser = {
            ...(SOCIAL_USER as any),
            id: 1,
            // roles: ['AIR', 'DAN', 'IT', 'STORM']
        };
        return of(ourUser);
    }

    getUser(): Observable<OurUser> {
        const ourUser: OurUser = {
            ...(SOCIAL_USER as any),
            id: 1,
            // roles: ['AIR', 'DAN', 'IT', 'STORM']
        };
        return of(ourUser);
    }

    call(rq: string, extras?: any): Observable<any> {
        if (rq === 'extra-utils') {
            const url = '/' + rq + '.php';
            const reponse = {
                name: 'Admin Panel',
                content: 'dramatis-pignorate',
                storm: '155661181611315454'
            };
            this.localStorage.store(STORAGE_KEY.STORM, reponse.storm);
            return of(reponse);
        }
        if (rq === 'validate') {
            const url = '/' + rq + '.php';
            if (extras.storm) {
                const storm = this.localStorage.retrieve(STORAGE_KEY.STORM);
            }
            const reponse = {
                name: 'validate',
                content: 'true'
            };
            return of(reponse);
        }
    }
}
