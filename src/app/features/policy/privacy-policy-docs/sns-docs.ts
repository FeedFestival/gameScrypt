import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { __sanitizeComponent } from 'src/app/shared/utils';

export const snsDoc = (sanitized: DomSanitizer): SNS_ML => {
    return {
        en: {
            SOCIAL_NETWORKING_SERVICES_TITLE: 'Social Networking Services',
            SOCIAL_NETWORKING_SERVICES: sanitized.bypassSecurityTrustHtml(`<p>
    You may register to join the Service by logging into your account with a third party social
    networking service CSNS via our Service (e.g.. Facebook and maybe other third party services
    that let you sign in using your existing credentials with those services). If you choose to register
    via an SNS, or to later link your account with the Service to your account with an SNS. we will use
    the Personal Information you have provided to the SNS (such as your name, email address that you
    made publicly available via the SNS) to create your account.
</p>`),
            WHAT_WE_COLLECT_TITLE: 'What Data Does Gamescrypt Website Collect\?',
            WHAT_WE_COLLECT: sanitized.bypassSecurityTrustHtml(`<p>
When you create a `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` Account If you want to access data collected by your Device from
our Service App, you will also have the option to create your `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` account using a credential like your Facebook account. If you choose to do so,
we will ask permission to access basic information from that account, like your name, profile picture,
you can stop sharing that information with us at any time by removing `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `'s access to that account by Facebook.
</p>
<p>
If you connect to our Service through Facebook you may have the opportunity to connect to `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` through Facebook's API when you register for our Service or after you have
registered for our Service.
</p>
<p>
If you connect to `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` through Facebook, either when you register or after you have registered,
we will collect, store, and use in accordance with this Privacy Policy the information you agreed that
Facebook could provide to `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` through its API.
</p>
<p>
Your agreement (and our access to your information) takes place when you instruct, accept or allow
Facebook to register you for a `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` account or otherwise connect to our Service through Facebook.
The information our Service may access, collect and store may include the following, among other
information, as allowed by you, Facebook's API, and your Facebook privacy settings:
</p>
<ul>
<li>
    your name
</li>
<li>
    your profile picture
</li>
<li>
    your email address
</li>
</ul>`),
            INFORMATION_OTHER_SOURCES_TITLE: 'Information from other sources',
            INFORMATION_OTHER_SOURCES: sanitized.bypassSecurityTrustHtml(`<p>
Facebook connect `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` allows you to sign up and log in using your Facebook account. If you
sign up using Facebook.
Facebook will ask your permission to share certain information from your Facebook account with
our Service.
</p>
<p>
This includes your first name, last name, email address, a link to your Facebook profile, profile
picture.
<b>in order for us to save the content you make on our server as being yours.</b>
</p>
<p>
This information is collected by Facebook and is provided to us under the terms of
<a href="https://www.facebook.com/policy.php">Facebook's privacy policy</a>.
You can control the information that we receive from Facebook using the privacy settings in your Facebook
account.
</p>
<p>
If you do not wish to share your `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` activity with your Facebook friends, you can control this from the Settings page on
the Website - for more information, see the Choice and Control section below.
</p>
<p>
If you signed up using Facebook by mistake you can email us at
<a href="mailto:owner.gamescrypt@gmail.com">owner.gamescrypt@gmail.com.</a>
</p>`),
            SNS_RELATIONSHIP_TITLE: 'SNS Relationship',
            SNS_RELATIONSHIP: sanitized.bypassSecurityTrustHtml(`<p>
Note that the information we collect from and through an SNS may depend on the privacy
settings you have set with the SNS and the permissions you grant to us in connection with
linking your account with the Service to your account with an SNS. Other than what we may
share with the SNS as described below, the Personal Information an SNS has about you is obtained
by the SNS independent of our Service, and `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` is not responsible for it.
</p>
<p>
The ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` Service also may permit additional interactions between it and a third party
website. service, or other content provider, such as enabling you to like" or share content to a
third party SNS.
If you choose to like" or share content, or to otherwise share information
from or via our Service with a third party site or service, that information may be publicly
displayed, and the third party may have access to information about you and your use of our Service
(and we may have access to information about you from that third party).
</p>
<p>
These features may collect your IP address, which page you are visiting on our site, and may
set a cookie to enable the feature to function properly.
Your interactions with third parties through SNS or similar features are governed by the
respective privacy policies of those third parties.
You represent that you are entitled to use your SNS account for the purposes described herein
without breach by you of any of the terms and conditions that govern the SNS, and without
obligating ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` to pay any fees or making `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` subject to any usage limitations imposed by such SNS.
</p>`),
            SNS_DISABLE_ANYTIME: sanitized.bypassSecurityTrustHtml(`<p>
You can disable the link between your `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` account and your SNS account at any time though the "Settings" section of our
Service. Please note that your relationship with any SNS is governed solely by your agreement(s)
with such SNS.
<b>If your SNS account terminates, then functions enabled through the link between your `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `account and your SNS account will terminate as well.</b>
</p>`)
        },
        ro: {
            SOCIAL_NETWORKING_SERVICES_TITLE: 'Servicii de rețele sociale',
            SOCIAL_NETWORKING_SERVICES: sanitized.bypassSecurityTrustHtml(`<p>
Vă puteți înregistra pentru a vă alătura Serviciului conectându-vă la contul dvs. cu o terță parte Serviciu de
Rețea Socială 'CSNS' prin intermediul Serviciului nostru (de exemplu, Facebook și poate alte servicii terțe
care vă permit să vă conectați folosind acreditările existente cu aceste servicii). Dacă alegeți să vă înregistrați
prin intermediul unui SNS sau pentru a vă conecta ulterior contul cu Serviciul la contul dvs. cu un SNS. noi vom folosi
Informațiile personale pe care le-ați furnizat către SNS (cum ar fi numele dvs., adresa de e-mail pe care le-ați furnizat)
puse la dispoziția publicului prin intermediul SNS) pentru a vă crea contul.
</p>`),
            WHAT_WE_COLLECT_TITLE: 'Ce date colectează Gamescrypt Website\?',
            WHAT_WE_COLLECT: sanitized.bypassSecurityTrustHtml(`<p>
Când creați un cont `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` puteți, dacă doriți, să accesați datele colectate de dispozitivul dvs.
de la aplicația noastră, veți avea, de asemenea, opțiunea de a vă crea contul `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` folosind un serviciu acreditat precum cel al Facebook-ului. Dacă alegeți să faceți
acest lucru, vă vom cere permisiunea de a accesa baza informații din acel cont, cum ar fi numele dvs.,
fotografia de profil, puteți opri distribuirea acestor informații cu noi în orice moment, eliminând accesul `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `la contul respectiv de către Facebook.
</p>
<p>
Dacă vă conectați la Serviciul nostru prin Facebook, este posibil să aveți ocazia să vă conectați la
` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin API-ul Facebook când vă înregistrați pentru Serviciul nostru sau după ce v-ați
înregistrat pentru Serviciul nostru.
</p>
<p>
Dacă vă conectați la ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin Facebook, fie când vă înregistrați, fie după ce vă înregistrați,
vom colecta, stoca și utiliza în conformitate cu această politică de confidențialitate informațiile
pe care le-ați acceptat cu Facebook ca ar putea furniza `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin intermediul API-ului său.
</p>
<p>
Acordul dvs. (și accesul nostru la informațiile dvs.) are loc atunci când instruiți, acceptați sau
permiteți Facebook pentru a vă înregistra pentru un cont `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` sau pentru a vă conecta în alt mod la Serviciul nostru prin Facebook.
Informațiile pe care Serviciul nostru le poate accesa, colecta și stoca pot include următoarele,
printre altele informații, permise de dvs., API-ul Facebook și setările dvs. de confidențialitate
cu Facebook-ul sunt:
</p>
<ul>
<li>
    numele tau
</li>
<li>
    poza ta de profil
</li>
<li>
    adresa ta de email
</li>
</ul>`),
            INFORMATION_OTHER_SOURCES_TITLE: 'Informații din alte surse',
            INFORMATION_OTHER_SOURCES: sanitized.bypassSecurityTrustHtml(`<p>
Facebook connect `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` vă permite să vă înscrieți și să vă conectați utilizând contul dvs. de Facebook.
Facebook vă va cere permisiunea de a partaja anumite informații din contul dvs. Facebook serviciul nostru.
</p>
<p>
Aceasta include prenumele, prenumele, adresa de e-mail, un link către profilul dvs. Facebook, profilul
imagine.
<b>
    pentru ca noi să salvăm conținutul pe care îl creați pe serverul nostru ca fiind al dvs.
</b>
</p>
<p>
Aceste informații sunt colectate de Facebook și ne sunt furnizate în condițiile date de
<a href="https://www.facebook.com/policy.php"> politica de confidențialitate Facebook </a>.
Puteți controla informațiile pe care le primim de la Facebook utilizând setările de confidențialitate din contul
deFacebook.
</p>
<p>
Dacă nu doriți să partajați activitatea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` cu prietenii dvs. de pe Facebook, puteți controla aceasta din pagina Setări de pe site.
</p>
<p>
Dacă v-ați înscris folosind Facebook din greșeală ne puteți trimite un e-mail la
<a href="mailto:owner.gamescrypt@gmail.com">owner.gamescrypt@gmail.com.</a>
</p>`),
            SNS_RELATIONSHIP_TITLE: 'Relația SNS',
            SNS_RELATIONSHIP: sanitized.bypassSecurityTrustHtml(`<p>
Rețineți că informațiile pe care le colectăm de la și prin intermediul unui SNS pot depinde de
confidențialitatea setărilor pe care le-ați setat cu acel SNS și permisiunile pe care ni le acordați
în legătură cu conectarea contului dvs. cu serviciul nostru la contul dvs. cu un SNS. În afară de ceea ce putem sa
partajam cu SNS-ul așa cum este descris mai jos, sunt obținute informațiile personale pe care le are
un SNS despre dvs. de către SNS <b>independent de Serviciul nostru</b>, iar `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu este responsabil pentru acesta.
</p>
<p>
Serviciul ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` poate permite, de asemenea, interacțiuni suplimentare între acesta și un site web terț.
Serviciului sau alt furnizor de conținut, poate sa va ofere posibilitatea de a da like sau sa distribuiti
conținut sau pentru a partaja altfel informații de la sau prin intermediul Serviciului nostru cu un site
sau serviciu terță parte, care informație poate fi afișata public, iar terțul poate avea acces la informații
despre dvs. și despre utilizarea dvs. din Serviciul nostru (și este posibil să avem acces la informații
despre dvs. de la terți).
</p>
<p>
Aceste funcții pot colecta adresa dvs. IP, pe ce pagină vizitați pe site-ul nostru și poate
setați un cookie pentru a permite funcției să funcționeze corect.
Interacțiunile dvs. cu terți prin SNS sau funcții similare sunt guvernate de
politicile de confidențialitate ale acelor terțe părți.
Declarați că aveți dreptul să utilizați contul dvs. SNS în scopurile descrise aici
fără încălcarea de către dvs. a oricăruia dintre termenii și condițiile care guvernează SNS și fără
obligarea ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` la plata oricăror taxe sau supunerea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` a oricărei utilizări/limitările impuse de astfel de SNS.
</p>`),
            SNS_DISABLE_ANYTIME: sanitized.bypassSecurityTrustHtml(`<p>
Cu toate acestea, puteți dezactiva oricând legătura dintre contul dvs. `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` și contul dvs. SNS secțiunea „Setări” a Serviciului nostru.
Vă rugăm să rețineți că relația dvs. cu orice SNS este guvernată numai prin acordul (acordurile)
dvs. cu astfel de SNS.
<b>
    Dacă contul dvs. SNS se încheie, atunci funcțiile sunt activate prin link-ul dintre `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `contul dvs. și contul dvs. SNS se vor încheia, de asemenea.
</b>
</p>`)
        }
    };
}

// tslint:disable-next-line: class-name
export interface SNS_ML {
    en: SNS_T;
    ro: SNS_T;
}
// tslint:disable-next-line: class-name
export interface SNS_T {
    SOCIAL_NETWORKING_SERVICES_TITLE: SafeHtml;
    SOCIAL_NETWORKING_SERVICES: SafeHtml;
    WHAT_WE_COLLECT_TITLE: SafeHtml;
    WHAT_WE_COLLECT: SafeHtml;
    INFORMATION_OTHER_SOURCES_TITLE: SafeHtml;
    INFORMATION_OTHER_SOURCES: SafeHtml;
    SNS_RELATIONSHIP_TITLE: SafeHtml;
    SNS_RELATIONSHIP: SafeHtml;
    SNS_DISABLE_ANYTIME: SafeHtml;
}
