import { DomSanitizer } from '@angular/platform-browser';
import { aboutDoc, ABOUT_ML } from './privacy-policy-docs/about-docs';
import { cookiesDoc, COOKIES_ML } from './privacy-policy-docs/cookies-docs';
import { gdprDoc, GDPR_ML } from './privacy-policy-docs/gdpr-docs';
import { legalDoc, LEGAL_ML } from './privacy-policy-docs/legal-docs';
import { privacyDoc, PRIVACY_ML } from './privacy-policy-docs/privacy-docs';
import { snsDoc, SNS_ML } from './privacy-policy-docs/sns-docs';
import { termsDoc, TERMS_ML } from './privacy-policy-docs/terms-docs';

export class PrivacyPolicy {

    constructor(private sanitized: DomSanitizer) { }

    _(): IPrivacyPolicy {
        return {
            ABOUT: aboutDoc(this.sanitized),
            TERMS: termsDoc(this.sanitized),
            PRIVACY: privacyDoc(this.sanitized),
            COOKIES: cookiesDoc(this.sanitized),
            GDPR: gdprDoc(this.sanitized),
            SNS: snsDoc(this.sanitized),
            // ---------------------------------------------------------------------------------------------------------------
            //
            // ---------------------------------------------------------------------------------------------------------------
            LEGAL: legalDoc(this.sanitized)
        };
    }
}

export interface IPrivacyPolicy {
    ABOUT: ABOUT_ML;
    TERMS: TERMS_ML;
    PRIVACY: PRIVACY_ML;
    COOKIES: COOKIES_ML;
    GDPR: GDPR_ML;
    SNS: SNS_ML;
    LEGAL: LEGAL_ML;
}
