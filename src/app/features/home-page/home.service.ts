import { Injectable } from '@angular/core';
import { SocialUser } from 'angularx-social-login';
// import { SocialUser } from 'angularx-social-login/lib/entities/user';
import { _isNilOrEmpty, _isNilOrZero, _isNumber, _isString } from 'src/app/shared/lodash-utils';

@Injectable({ providedIn: 'root' })
export class HomeService {

    userId: string | number;

    constructor() { }

    loggedIn(user: SocialUser) {
        if (_isNilOrEmpty(user)) {
            this.userId = null;
            return false;
        }
        this.userId = user.id;
        return true;
    }
}
