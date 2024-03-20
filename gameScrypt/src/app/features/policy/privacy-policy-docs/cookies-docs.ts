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
    Un cookie este un fisier mic care poate fi plasat pe dispozitivul dvs. care ne permite sa te
    recunoastem si sa ne amintim de tine.
    Acesta este trimis în browserul dvs. si stocat pe hard diskul computerului,
    pe tableta sau pe dispozitiv mobil.
    Cand vizitati site-urile noastre, este posibil sa colectam informatii de la dvs. automat
    prin cookie-uri sau tehnologie similara.
</p>`),
            WHAT_COOKIES_TITLE: 'Ce tipuri de cookie folosim?',
            LISTING_THE_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
    Folosim patru tipuri de cookie-uri, pe care le descriem în aceasta sectiune.
</p>
<p>
    <b> Esential </b> - cookie-uri care sunt esentiale pentru a va oferi serviciile pe care le-ati solicitat. De exemplu,
    acestea includ cookie-urile care va permit sa ramaneti conectat la contul dvs. si sa comentati.
    Daca setati browserul dvs. sa blocheze aceste cookie-uri, atunci aceste functii si servicii
    nu vor functiona pentru tine. În special, nu vom putea salva preferintele dvs. despre cookie-uri.
</p>
<p>
    <b> Performanta </b> - cookie-uri care masoara frecventa cu care vizitati site-urile noastre,
    oferite de cookie-ul Google Analytics, informatii despre noi, cum ar fi calatoria dvs. între pagini si
    daca ati descarcat ceva (detalii despre cum sa renuntati la aceasta sunt mai jos).
</p>
<p>
    <b> Functionalitate </b> - cookie-uri care sunt utilizate pentru a va recunoaste si a va aminti preferintele sau setarile
    cand va întoarceti pe site-ul nostru, astfel încat sa va putem oferi o experienta mai personalizata.
    De exemplu, daca aveti sediul în Romania, ne vom aminti acest lucru si ne vom asigura ca primiti unele pagini in Romana,
    mai degraba decat pagina de pornire din United Kindgom. Un amestec de prim-petrecere si
    sunt utilizate cookie-uri de la terti.
</p>
<p>
    <b> Publicitate </b> - cookie-uri care sunt utilizate pentru a colecta informatii despre vizita dvs.
    pe site-ul nostru, continutul pe care le-ati vizualizat, linkurile pe care le-ati urmat si informatii
    despre browserul dvs., dispozitivul si adresa IP. Am prezentat mai multe detalii despre aceasta mai jos.
</p>
<p>
    Folosim <b>Google Analytics</b> pentru a urmari activitatea vizitatorilor.
    Acest instrument terta parte foloseste cookie-uri pe care le puteti dezactivati în browserul dvs.
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
