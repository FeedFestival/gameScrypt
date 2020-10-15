import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameScryptUtils } from 'src/app/features/home-page/story.utils';

@Injectable({ providedIn: 'root' })
export class HeaderService {

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

export const HttpDefaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    // 'Origin': 'http://localhost:4200'
    // 'UserId': '1445866905885',
    // 'SessionID': '9F5A5548743EA42C69D2685E41FCB50E',
    // 'JSESSIONID': 'C57B67E0039E7AF4BDA8E2002B54EE4A'
    //  Cookie: JSESSIONID=C57B67E0039E7AF4BDA8E2002B54EE4A; UserID=1531381765430; SessionID=9F5A5548743EA42C69D2685E41FCB50E
});

export const HttpDefaultOptions = {
    headers: HttpDefaultHeaders,
    withCredentials: false,
    // useXDomain: true,
    'cache': false,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'If-Modified-Since': '0',
    // 'responseType': 'text'
};
