import { Routes } from '@angular/router';
import { CookiesComponent } from 'src/app/features/policy/cookies/cookies.component';
import { GdprComponent } from 'src/app/features/policy/gdpr/gdpr.component';
import { LegalDocsComponent } from 'src/app/features/policy/legal-documents.component';
import { PrivacyComponent } from 'src/app/features/policy/privacy/privacy.component';
import { SnsComponent } from 'src/app/features/policy/sns/sns.component';
import { TermsComponent } from 'src/app/features/policy/terms/terms.component';
import { TERMS_PRIVACY } from './termsAndPrivacy.seo';


export const termsAndPrivacyRoutes: Routes = [
    { path: TERMS_PRIVACY.LEGAL, component: LegalDocsComponent },
    { path: TERMS_PRIVACY.LEGAL + '/ro', component: LegalDocsComponent, data: { lang: 'ro' } },
    { path: TERMS_PRIVACY.TERMS, component: TermsComponent },
    { path: TERMS_PRIVACY.TERMS + '/ro', component: TermsComponent, data: { lang: 'ro' } },
    { path: TERMS_PRIVACY.PRIVACY, component: PrivacyComponent },
    { path: TERMS_PRIVACY.PRIVACY + '/ro', component: PrivacyComponent, data: { lang: 'ro' } },
    { path: TERMS_PRIVACY.COOKIES, component: CookiesComponent },
    { path: TERMS_PRIVACY.COOKIES + '/ro', component: CookiesComponent, data: { lang: 'ro' } },
    { path: TERMS_PRIVACY.SNS, component: SnsComponent },
    { path: TERMS_PRIVACY.SNS + '/ro', component: SnsComponent, data: { lang: 'ro' } },
    { path: TERMS_PRIVACY.GDPR, component: GdprComponent },
    { path: TERMS_PRIVACY.GDPR + '/ro', component: GdprComponent, data: { lang: 'ro' } },
];
