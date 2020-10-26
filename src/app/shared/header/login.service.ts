import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpDefaultOptions } from 'src/app/app.constants';
import { GameScryptUtils } from 'src/app/features/home-page/gamescrypt.utils';

@Injectable({ providedIn: 'root' })
export class LoginService {

    saveEventEmitter: EventEmitter<void> = new EventEmitter<void>();
    canSaveEventEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor(
        private http: HttpClient
    ) {
    }

    saveUser(user): Observable<any> {
        const requestOptions: any = {
            ...HttpDefaultOptions,
            responseType: 'text'
        }
        return this.http.post<any>(
            GameScryptUtils.baseRequestUrl() + 'UserService/Register.php?a=' + GameScryptUtils.getAnotate(true),
            user,
            requestOptions
        );
    }
}
