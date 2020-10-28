import { HttpHeaders } from '@angular/common/http';

export const HttpDefaultHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
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
    // withCredentials: true,
    // useXDomain: true,
    'cache': false,
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
    'If-Modified-Since': '0',
    // 'responseType': 'json'
};

export const MockRequestTime = 1000;

export const STORAGE_KEY = {
    COOKIE_ACCEPTED: 'isCookieAccepted',
    TERMS_LANG: 'termsLanguage',
    USER: 'user',
    TOKEN: 'authenticationToken',
    STORM: 'storm',
};

export const COUNTRIES: { ROMANIA: { keys: string[], lang: string }, OTHER: { keys: string[], lang: string } } = {
    ROMANIA: {
        keys: ['Ro', 'Romania'],
        lang: 'ro'
    },
    OTHER: {
        keys: [],
        lang: 'en'
    }
};

export const ScrollBreakpoints = {
    xs: {
        max: 20,
        min: 50
    },
    sm: {
        max: 150,
        min: 333
    }
};

export const APP_VERSION = {
    _: '1.0.2',
    UPDATE: '26/10/2020',
    TERMS_DATE: {
        POSTED: '22/10/2020',
        LAST_UPDATED: '25/10/2020'
    },
    // 
    // URL: 'https://gamescrypt.com/be/';
    // FACEBOOK_ID: '485626875687512',     // gamescrypt
    FACEBOOK_ID: '2528185860808048',     // gamescrypt_local
    URL: 'https://localhost/gameScrypt/be/',
    SECRET: 'gameScrypt'
};
