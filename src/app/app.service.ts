
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable, of } from 'rxjs';
import { APP_VERSION, HttpDefaultOptions, STORAGE_KEY } from './app.constants';
import { _isNil, _isNilOrEmpty } from './shared/lodash-utils';

@Injectable({ providedIn: 'root' })
export class AppService {

    langEvent: EventEmitter<string> = new EventEmitter<string>();

    constructor(
        private http: HttpClient,
        private localStorage: LocalStorageService,
    ) { }

    getIPAddress() {
        return this.http.get('http://api.ipify.org/?format=json');
    }

    getLocation(ip: string) {
        const url = 'http://www.geoplugin.net/json.gp?ip=' + ip;
        return this.http.get(url);
    }

    getCountry(): Observable<any> {
        const url = APP_VERSION.URL + 'UserService/Country.php?';
        return this.http.get<any>(url, HttpDefaultOptions);
    }

    setLang(lang: string) {
        this.localStorage.store(STORAGE_KEY.TERMS_LANG, lang.toLowerCase());
    }

    getLang() {
        return this.localStorage.retrieve(STORAGE_KEY.TERMS_LANG);
    }

    emitLangEvent() {
        this.langEvent.emit(this.getLang());
    }

    getLangEvent(): EventEmitter<string> | Observable<string> {
        const lang = this.getLang();
        if (_isNilOrEmpty(lang)) {
            return this.langEvent;
        }
        return of(lang);
    }
}
