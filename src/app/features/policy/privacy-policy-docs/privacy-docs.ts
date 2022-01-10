import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { APP_VERSION } from 'src/app/app.constants';
import { __sanitizeComponent } from 'src/app/shared/utils';
import { aboutDoc } from './about-docs';

export const privacyDoc = (sanitized: DomSanitizer): PRIVACY_ML => {
    return {
        en: {
            PRIVACY_TITLE: 'Privacy Policy',
            DATA_COLECTED: sanitized.bypassSecurityTrustHtml(`<p>
    <b>We are not collecting personal data but we do use third party applications that may do.</b>
    Please verify their privacy policies to find out more: <b>Google Analytics, Google Adsense, Gmail, Facebook,
    Youtube</b>. We might add or remove thrid party applications to the website at any time without notice.
    Please check the source code of the site or use browser plugins to identify them.
</p>
<ul>
    <li>
        Google Analytics: <a href="https://marketingplatform.google.com/about/analytics/terms/us/">Terms</a>
    </li>
    <li>
        Google Adsense: <a href="https://policies.google.com/technologies/ads">Advertising Terms</a>
    </li>
    <li>
        Gmail: <a href="https://policies.google.com/privacy?hl=en-US">Privacy & Terms</a>
    </li>
    <li>
        Facebook: <a href="https://www.facebook.com/policy.php">Privacy Policy</a>
    </li>
    <li>
        Youtube: <a href="https://www.youtube.com/about/policies/#community-guidelines">Community
            Policy</a>
    </li>
</ul>
<p>
    Our Privacy Policy was posted on ` + APP_VERSION.TERMS_DATE.POSTED + ` and last updated on
    ` + APP_VERSION.TERMS_DATE.LAST_UPDATED + `.
    It governs the privacy terms of our Website, located at www.gamescrypt.com.
    Any capitalized terms not defined in our Privacy Policy, have the meaning as specified in
    our Terms of Use accessible above.
</p>`),
            WHAT_WEBSITE_DOES_TITLE: 'What does the website do?',
            WHAT_WEBSITE_DOES: aboutDoc(sanitized).en.WHAT_WEBSITE_DOES,
            DEFINITIONS_TITLE: 'Definitions',
            DEFINITIONS: sanitized.bypassSecurityTrustHtml(`<p>
    "Personally Identifiable Information" is non-public information that is personally identifiable to
    you and obtained in order for us to provide you within our Website. Personally Identifiable
    Information may include information such as your name, email address, and other related information
    that you provide to us or that we obtain about you.
</p>
<p>
    "Non Personal Information" is information that is not personally identifiable to you and that we
    automatically collect when you access our Website with a web browser. It may also include publicly
    available information that is shared between you and others.
</p>`),
            YOUR_PRIVACY_TITLE: 'Your Privacy',
            YOUR_PRIVACY: sanitized.bypassSecurityTrustHtml(`<p>
    Our Service follows all legal requirements to protect your privacy. Our Privacy Policy is a legal
    statement that explains how we may collect information from you, how we may share your information,
    and how you can limit our sharing of your information.
</p>

<p>
    Generally, you control the amount and type of information you provide to us when using our Website.
    You are not required to provide us with any Personally Identifiable Information as a <b>Visitor</b>.
</p>
<p>
    When you use our Website, we automatically collect certain computer information by the interaction of
    your mobile phone or web browser with our Website. Such information is typically considered
    Non Personal Information.
</p>`)
        },
        ro: {
            PRIVACY_TITLE: 'Politica de Confidentialitate',
            DATA_COLECTED: sanitized.bypassSecurityTrustHtml(`<p>
    <b> Nu colectam date cu caracter personal, dar folosim aplicatii terta parte care ar putea face acest lucru. </b>
    Va rugam sa verificati politicile lor de confidentialitate pentru a afla mai multe:
        <b> Google Analytics, Google Adsense, Gmail, Facebook, Youtube </b>.
    S-ar putea sa adaugam sau sa eliminam aplicatii thrid party pe site în orice moment, fara notificare prealabila.
    Va rugam sa verificati codul sursa al site-ului sau sa utilizati pluginurile browserului pentru a le identifica.
</p>
<ul>
    <li>
        Google Analytics: <a href="https://marketingplatform.google.com/about/analytics/terms/us/">Terms</a>
    </li>
    <li>
        Google Adsense: <a href="https://policies.google.com/technologies/ads">Advertising Terms</a>
    </li>
    <li>
        Gmail: <a href="https://policies.google.com/privacy?hl=en-US">Privacy & Terms</a>
    </li>
    <li>
        Facebook: <a href="https://www.facebook.com/policy.php">Privacy Policy</a>
    </li>
    <li>
        Youtube: <a href="https://www.youtube.com/about/policies/#community-guidelines">Community
            Policy</a>
    </li>
</ul>
<p>
    Politica noastra de confidentialitate a fost postata la ` + APP_VERSION.TERMS_DATE.POSTED + ` si actualizata
    ultima data la ` + APP_VERSION.TERMS_DATE.LAST_UPDATED + `.
    Aceasta guverneaza conditiile de confidentialitate ale site-ului nostru web, situat la www.gamescrypt.com.
    Orice termeni cu majuscule care nu sunt definiti în Politica noastra de confidentialitate are semnificatia
    specificata în Termenii de utilizare accesibila mai sus.
</p>`),
            WHAT_WEBSITE_DOES_TITLE: 'Ce face site-ul web?',
            WHAT_WEBSITE_DOES: aboutDoc(sanitized).ro.WHAT_WEBSITE_DOES,
            DEFINITIONS_TITLE: 'Definitii',
            DEFINITIONS: sanitized.bypassSecurityTrustHtml(`<p>
    ”Informatii de identificare personala” sunt informatii non-publice care va pot identificate personal sau care pot
    fi obtinute de noi pentru a va oferi în cadrul site-ului nostru web o experienta personalizata.
    Informatii de identificare personala pot include informatii precum numele dvs., adresa de e-mail si
    alte informatii conexe pe care ni le furnizati sau pe care le obtinem despre dvs. din SNS-uri.
</p>
<p>
    „Informatii non-personale” sunt informatii care nu va pot fi identificate personal si pe care noi
    le colectam automat cand accesati site-ul nostru de pe un browser web.
    Poate include, de asemenea, în mod public informatiile disponibile care sunt partajate între dvs. si alte persoane.
</p>`),
            YOUR_PRIVACY_TITLE: 'Confidentialitatea dvs.',
            YOUR_PRIVACY: sanitized.bypassSecurityTrustHtml(`<p>
    Serviciul nostru respecta toate cerintele legale pentru a va proteja confidentialitatea.
    Politica noastra de confidentialitate este o declaratie legala care explica modul în care putem
    colecta informatii de la dvs., cum putem partaja informatiile dvs., si cum puteti limita partajarea informatiilor dvs.
</p>
<p>
    În general, controlati cantitatea si tipul de informatii pe care ni le furnizati atunci cand utilizati site-ul nostru web.
    Nu vi se cere sa ne furnizati informatii de identificare personala ca <b> Vizitator </b>.
</p>
<p>
    Cand utilizati site-ul nostru web, colectam automat anumite informatii despre computer prin interactiunea dintre
    telefonul mobil sau browserul web cu site-ul nostru. Astfel de informatii sunt de obicei luate în considerare ca
    <b>Informatii non-personale</b>.
</p>`)
        }
    };
};

// tslint:disable-next-line: class-name
export interface PRIVACY_ML {
    en: PRIVACY_TERMS;
    ro: PRIVACY_TERMS;
}
// tslint:disable-next-line: class-name
export interface PRIVACY_TERMS {
    PRIVACY_TITLE: SafeHtml;
    DATA_COLECTED: SafeHtml;
    WHAT_WEBSITE_DOES_TITLE: SafeHtml;
    WHAT_WEBSITE_DOES: SafeHtml;
    DEFINITIONS_TITLE: SafeHtml;
    DEFINITIONS: SafeHtml;
    YOUR_PRIVACY_TITLE: SafeHtml;
    YOUR_PRIVACY: SafeHtml;
}
