import { Injectable } from '@angular/core';
import { OurUser } from 'src/app/shared/header/login.service';
import { _isNilOrEmpty, _isNilOrZero, _isNumber, _isString } from 'src/app/shared/lodash-utils';

@Injectable({ providedIn: 'root' })
export class HomeService {

    userId: string | number;

    constructor() { }

    loggedIn(user: OurUser) {
        if (_isNilOrEmpty(user)) {
            this.userId = null;
            return false;
        }
        this.userId = user.id;
        return true;
    }
}
