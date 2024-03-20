import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { __sanitizeComponent } from 'src/app/shared/utils';

export const cookiesDoc = (sanitized: DomSanitizer): COOKIES_ML => {
    return {
        en: {
            COOKIES_TITLE: 'Cookies',
            COOKIES_DEFINITION: sanitized.bypassSecurityTrustHtml(`<p>
    A cookie is a small file that can be placed on your device that allows us to
    recognise and remember you. It is sent to your browser and stored on your computer's hard drive or
    tablet or mobile device. When you visit our sites, we may collect information from you automatically
    through cookies or similar technology.
</p>`),
            WHAT_COOKIES_TITLE: 'What types of cookies do we use ?',
            LISTING_THE_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
    We use four types of cookies, which we describe in this section.
</p>
<p>
    <b>Essential</b> - cookies that are essential to provide you with services you have requested. For example,
    these include the cookies that make it possible for you to stay logged into your `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt' }) +
                ` account and make comments.
    If you set your browser to block these cookies, then these functions and services
    will not work for you. In particular, we won't be able to save your preferences about cookies.
</p>
<p>
    <b>Performance</b> - cookies which measure how often you visit our sites, the Google Analytics cookie gives
    us information such as your journey between pages and whether you have downloaded anything (details
    of how to opt out of it are below).
</p>
<p>
    <b>Functionality</b> - cookies that are used to recognise you and remember your preferences or settings
    when you return to our site, so that we can provide you with a more personalised experience. For
    example, if you are based in Romania, we will remember this and make sure that you receive the Romanian
    homepage when you visit our site, rather than the US or United Kindgom homepage. A mix of first-party and
    third-party cookies are used.
</p>
<p>
    <b>Advertising</b> - cookies that are used to collect information about your visit to our site, the content
    you have viewed, the links you have followed and information about your browser, device and your IP
    address. We have set out more details on this below.
</p>
<p>
    We use <b>Google Analytics</b> to track visitor activity. This third party tool is using cookies which you may
    disable in your browser.
</p>`)
        },
        ro: {
            COOKIES_TITLE: 'Cookie-uri',
            COOKIES_DEFINITION: sanitized.bypassSecurityTrustHtml(`<p>
    Un cookie este un fișier mic care poate fi plasat pe dispozitivul dvs. care ne permite sa te
    recunoaștem și sa ne amintim de tine.
    Acesta este trimis în browserul dvs. și stocat pe hard diskul computerului,
    pe tabletă sau pe dispozitiv mobil.
    Când vizitați site-urile noastre, este posibil să colectăm informații de la dvs. automat
    prin cookie-uri sau tehnologie similară.
</p>`),
            WHAT_COOKIES_TITLE: 'Ce tipuri de cookie folosim?',
            LISTING_THE_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
    Folosim patru tipuri de cookie-uri, pe care le descriem în această secțiune.
</p>
<p>
    <b> Esențial </b> - cookie-uri care sunt esențiale pentru a vă oferi serviciile pe care le-ați solicitat. De exemplu,
    acestea includ cookie-urile care vă permit să rămâneți conectat la contul dvs. și sa comentati.
    Dacă setați browserul dvs. să blocheze aceste cookie-uri, atunci aceste funcții și servicii
    nu vor funcționa pentru tine. În special, nu vom putea salva preferințele dvs. despre cookie-uri.
</p>
<p>
    <b> Performanță </b> - cookie-uri care măsoară frecvența cu care vizitați site-urile noastre,
    oferite de cookie-ul Google Analytics, informații despre noi, cum ar fi călătoria dvs. între pagini și
    dacă ați descărcat ceva (detalii despre cum să renunțați la aceasta sunt mai jos).
</p>
<p>
    <b> Funcționalitate </b> - cookie-uri care sunt utilizate pentru a vă recunoaște și a vă aminti preferințele sau setările
    când vă întoarceți pe site-ul nostru, astfel încât să vă putem oferi o experiență mai personalizată.
    De exemplu, dacă aveți sediul în România, ne vom aminti acest lucru și ne vom asigura că primiți unele pagini in Română,
    mai degrabă decât pagina de pornire din United Kindgom. Un amestec de prim-petrecere și
    sunt utilizate cookie-uri de la terți.
</p>
<p>
    <b> Publicitate </b> - cookie-uri care sunt utilizate pentru a colecta informații despre vizita dvs.
    pe site-ul nostru, conținutul pe care le-ați vizualizat, linkurile pe care le-ați urmat și informații
    despre browserul dvs., dispozitivul și adresa IP. Am prezentat mai multe detalii despre aceasta mai jos.
</p>
<p>
    Folosim <b>Google Analytics</b> pentru a urmări activitatea vizitatorilor.
    Acest instrument terță parte folosește cookie-uri pe care le puteți dezactivați în browserul dvs.
</p>`)
        }
    };
};

// tslint:disable-next-line: class-name
export interface COOKIES_ML {
    en: COOKIES_TERMS;
    ro: COOKIES_TERMS;
}
// tslint:disable-next-line: class-name
export interface COOKIES_TERMS {
    COOKIES_TITLE: SafeHtml;
    COOKIES_DEFINITION: SafeHtml;
    WHAT_COOKIES_TITLE: SafeHtml;
    LISTING_THE_COOKIES: SafeHtml;
}
