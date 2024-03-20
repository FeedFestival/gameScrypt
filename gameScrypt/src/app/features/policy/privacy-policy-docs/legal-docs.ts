import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { __sanitizeComponent } from 'src/app/shared/utils';

export const legalDoc = (sanitized: DomSanitizer): LEGAL_ML => {
    return {
        en: {
            LEGAL_DOCUMENTS_ADVERTISING: sanitized.bypassSecurityTrustHtml(`
<div class="col-12 m-auto">
    <h3>
        Advertising
    </h3>
</div>
<div class="col-11 m-auto">
    <p>
        <a class="hyperlink" href="#" routerLink="/home">
        ` + __sanitizeComponent('cool-text', { full: 'gameScrypt' }) + `
        </a> might show AdSense ads.
    </p>
    <h4>
        IMPORTANT!
    </h4>
</div>
<div class="col-10 m-auto">
    <p>
        Please stop using the website if you disagree with any of the terms above.
    </p>
</div>`)
        },
        ro: {
            LEGAL_DOCUMENTS_ADVERTISING: sanitized.bypassSecurityTrustHtml(`
<div class="col-12 m-auto">
    <h3>
        Advertising
    </h3>
</div>
<div class="col-11 m-auto">
    <p>
        <a class="hyperlink" href="#" routerLink="/home">
        ` + __sanitizeComponent('cool-text', { full: 'gameScrypt' }) + `
        </a> might show AdSense ads.
    </p>
    <h4>
        IMPORTANT!
    </h4>
</div>
<div class="col-10 m-auto">
    <p>
        Please stop using the website if you disagree with any of the terms above.
    </p>
</div>`)
        }
    };
};

// tslint:disable-next-line: class-name
export interface LEGAL_ML {
    en: LEGAL_T;
    ro: LEGAL_T;
}
// tslint:disable-next-line: class-name
export interface LEGAL_T {
    LEGAL_DOCUMENTS_ADVERTISING: SafeHtml;
}
