import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';

@Injectable({ providedIn: 'root' })
export class HomeService {

    isLoggedIn = false;
    userId = '';

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorageService
    ) { }

    loggedIn(userId) {
        this.userId = userId;
        this.isLoggedIn = true;
    }

    comparer() {
        if (this.isLoggedIn) {
            return 'id';
        }
        return 'guid';
    }
}
