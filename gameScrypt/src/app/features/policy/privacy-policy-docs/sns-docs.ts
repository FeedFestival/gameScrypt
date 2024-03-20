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
            SOCIAL_NETWORKING_SERVICES_TITLE: 'Servicii de retele sociale',
            SOCIAL_NETWORKING_SERVICES: sanitized.bypassSecurityTrustHtml(`<p>
Va puteti înregistra pentru a va alatura Serviciului conectandu-va la contul dvs. cu o terta parte Serviciu de
Retea Sociala 'CSNS' prin intermediul Serviciului nostru (de exemplu, Facebook si poate alte servicii terte
care va permit sa va conectati folosind acreditarile existente cu aceste servicii). Daca alegeti sa va înregistrati
prin intermediul unui SNS sau pentru a va conecta ulterior contul cu Serviciul la contul dvs. cu un SNS. noi vom folosi
Informatiile personale pe care le-ati furnizat catre SNS (cum ar fi numele dvs., adresa de e-mail pe care le-ati furnizat)
puse la dispozitia publicului prin intermediul SNS) pentru a va crea contul.
</p>`),
            WHAT_WE_COLLECT_TITLE: 'Ce date colecteaza Gamescrypt Website\?',
            WHAT_WE_COLLECT: sanitized.bypassSecurityTrustHtml(`<p>
Cand creati un cont `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` puteti, daca doriti, sa accesati datele colectate de dispozitivul dvs.
de la aplicatia noastra, veti avea, de asemenea, optiunea de a va crea contul `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` folosind un serviciu acreditat precum cel al Facebook-ului. Daca alegeti sa faceti
acest lucru, va vom cere permisiunea de a accesa baza informatii din acel cont, cum ar fi numele dvs.,
fotografia de profil, puteti opri distribuirea acestor informatii cu noi în orice moment, eliminand accesul `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `la contul respectiv de catre Facebook.
</p>
<p>
Daca va conectati la Serviciul nostru prin Facebook, este posibil sa aveti ocazia sa va conectati la
` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin API-ul Facebook cand va înregistrati pentru Serviciul nostru sau dupa ce v-ati
înregistrat pentru Serviciul nostru.
</p>
<p>
Daca va conectati la ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin Facebook, fie cand va înregistrati, fie dupa ce va înregistrati,
vom colecta, stoca si utiliza în conformitate cu aceasta politica de confidentialitate informatiile
pe care le-ati acceptat cu Facebook ca ar putea furniza `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` prin intermediul API-ului sau.
</p>
<p>
Acordul dvs. (si accesul nostru la informatiile dvs.) are loc atunci cand instruiti, acceptati sau
permiteti Facebook pentru a va înregistra pentru un cont `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` sau pentru a va conecta în alt mod la Serviciul nostru prin Facebook.
Informatiile pe care Serviciul nostru le poate accesa, colecta si stoca pot include urmatoarele,
printre altele informatii, permise de dvs., API-ul Facebook si setarile dvs. de confidentialitate
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
            INFORMATION_OTHER_SOURCES_TITLE: 'Informatii din alte surse',
            INFORMATION_OTHER_SOURCES: sanitized.bypassSecurityTrustHtml(`<p>
Facebook connect `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` va permite sa va înscrieti si sa va conectati utilizand contul dvs. de Facebook.
Facebook va va cere permisiunea de a partaja anumite informatii din contul dvs. Facebook serviciul nostru.
</p>
<p>
Aceasta include prenumele, prenumele, adresa de e-mail, un link catre profilul dvs. Facebook, profilul
imagine.
<b>
    pentru ca noi sa salvam continutul pe care îl creati pe serverul nostru ca fiind al dvs.
</b>
</p>
<p>
Aceste informatii sunt colectate de Facebook si ne sunt furnizate în conditiile date de
<a href="https://www.facebook.com/policy.php"> politica de confidentialitate Facebook </a>.
Puteti controla informatiile pe care le primim de la Facebook utilizand setarile de confidentialitate din contul
deFacebook.
</p>
<p>
Daca nu doriti sa partajati activitatea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` cu prietenii dvs. de pe Facebook, puteti controla aceasta din pagina Setari de pe site.
</p>
<p>
Daca v-ati înscris folosind Facebook din greseala ne puteti trimite un e-mail la
<a href="mailto:owner.gamescrypt@gmail.com">owner.gamescrypt@gmail.com.</a>
</p>`),
            SNS_RELATIONSHIP_TITLE: 'Relatia SNS',
            SNS_RELATIONSHIP: sanitized.bypassSecurityTrustHtml(`<p>
Retineti ca informatiile pe care le colectam de la si prin intermediul unui SNS pot depinde de
confidentialitatea setarilor pe care le-ati setat cu acel SNS si permisiunile pe care ni le acordati
în legatura cu conectarea contului dvs. cu serviciul nostru la contul dvs. cu un SNS. În afara de ceea ce putem sa
partajam cu SNS-ul asa cum este descris mai jos, sunt obtinute informatiile personale pe care le are
un SNS despre dvs. de catre SNS <b>independent de Serviciul nostru</b>, iar `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu este responsabil pentru acesta.
</p>
<p>
Serviciul ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` poate permite, de asemenea, interactiuni suplimentare între acesta si un site web tert.
Serviciului sau alt furnizor de continut, poate sa va ofere posibilitatea de a da like sau sa distribuiti
continut sau pentru a partaja altfel informatii de la sau prin intermediul Serviciului nostru cu un site
sau serviciu terta parte, care informatie poate fi afisata public, iar tertul poate avea acces la informatii
despre dvs. si despre utilizarea dvs. din Serviciul nostru (si este posibil sa avem acces la informatii
despre dvs. de la terti).
</p>
<p>
Aceste functii pot colecta adresa dvs. IP, pe ce pagina vizitati pe site-ul nostru si poate
setati un cookie pentru a permite functiei sa functioneze corect.
Interactiunile dvs. cu terti prin SNS sau functii similare sunt guvernate de
politicile de confidentialitate ale acelor terte parti.
Declarati ca aveti dreptul sa utilizati contul dvs. SNS în scopurile descrise aici
fara încalcarea de catre dvs. a oricaruia dintre termenii si conditiile care guverneaza SNS si fara
obligarea ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` la plata oricaror taxe sau supunerea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` a oricarei utilizari/limitarile impuse de astfel de SNS.
</p>`),
            SNS_DISABLE_ANYTIME: sanitized.bypassSecurityTrustHtml(`<p>
Cu toate acestea, puteti dezactiva oricand legatura dintre contul dvs. `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` si contul dvs. SNS sectiunea „Setari” a Serviciului nostru.
Va rugam sa retineti ca relatia dvs. cu orice SNS este guvernata numai prin acordul (acordurile)
dvs. cu astfel de SNS.
<b>
    Daca contul dvs. SNS se încheie, atunci functiile sunt activate prin link-ul dintre `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `contul dvs. si contul dvs. SNS se vor încheia, de asemenea.
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
