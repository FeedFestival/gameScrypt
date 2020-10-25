import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export const gdprDoc = (sanitized: DomSanitizer): GDPR_ML => {
    return {
        en: {
            WHAT_ARE_COOKIES_TITLE: 'What Are Cookies ?',
            WHAT_ARE_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
As is common practice with almost all professional websites this site uses cookies, which are tiny
files that are downloaded to your computer, to improve your experience. This page describes what
information they gather, how we use it and why we sometimes need to store these cookies. We will
also share how you can prevent these cookies from being stored however this may downgrade or 'break'
certain elements of the sites functionality.

For more general information on cookies see the Wikipedia article on
<a href="https://en.wikipedia.org/wiki/HTTP_cookie">HTTP Cookies</a>.
</p>`),
            HOW_COOKIES_TITLE: 'How We Use Cookies ?',
            HOW_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no
industry standard options for disabling cookies without completely disabling the functionality and
features they add to this site.
<span style="color: $orange;">
    It is recommended that you leave on all cookies if you are not sure whether you need them or
    not in case they are used to provide a service that you use.
</span>
</p>
`),
            DISABLING_COOKIES_TITLE: 'Disabling Cookies',
            DISABLING_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
You can prevent the setting of cookies by adjusting the settings on your browser
(see your browser Help for how to do this).
Be aware that disabling cookies will affect the functionality of this and many other websites that
you visit. Disabling cookies will usually result in also disabling certain functionality and
features of the this site. Therefore it is recommended that you do not disable cookies.
</p>
`),
            THIRD_PARTIES_TITLE: 'Third Party Cookies',
            THIRD_PARTIES: sanitized.bypassSecurityTrustHtml(`<p>
In some special cases we also use cookies provided by trusted third parties. The following section
details which third party cookies you might encounter through this site.
</p>
<p>
This site uses Google Analytics which is one of the most widespread and trusted analytics solution
on the web for helping us to understand how you use the site and ways that we can improve your
experience. These cookies may track things such as how long you spend on the site and the pages that
you visit so we can continue to produce engaging content.
</p>
<p>
For more information on Google Analytics cookies, see the official Google Analytics
<a href="https://marketingplatform.google.com/about/analytics/terms/us/">page</a>.
</p>
<p>
From time to time we test new features and make subtle changes to the way that the site is delivered.
When we are still testing new features these cookies may be used to ensure that you receive a
consistent experience whilst on the site whilst ensuring we understand which optimisations our users
appreciate the most.
</p>
<p>
The Google AdSense service we use to serve advertising uses a DoubleClick cookie to serve more
relevant ads across the web and limit the number of times that a given ad is shown to you.
</p>
<p>
For more information on Google AdSense see the official Google Adsense <a
    href="https://policies.google.com/technologies/ads">Advertising Terms</a>.
</p>
<p>
We also use social media buttons and/or plugins on this site that allow you to connect with your
social network in various ways. For these to work the following social media sites including;
facebook, twitter, will set cookies through our site which may be used to enhance your profile on
their site or contribute to the data they hold for various purposes outlined in their respective
privacy policies.
</p>
<ul>
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
`),
            MORE_INFO_TITLE: 'More Information',
            MORE_INFO: sanitized.bypassSecurityTrustHtml(`<p>
Hopefully that has clarified things for you and as was previously mentioned if there is something
that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it
does interact with one of the features you use on our site. However if you are still looking for
more information then you can contact us through one of our preferred contact methods.
</p>
<p>
Email: <a href="mailto:daniel.gamescrypt@gmail.com">daniel.gamescrypt@gmail.com</a>
</p>`)
        },
        ro: {
            WHAT_ARE_COOKIES_TITLE: 'Ce sunt cookie-urile?',
            WHAT_ARE_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
Așa cum este o practică obișnuită cu aproape toate site-urile web profesionale, acest site folosește
cookie-uri, care sunt mici fișiere care sunt descărcate pe computer, pentru a vă îmbunătăți experiența.
Această pagină descrie informațiile pe care le adună, cum le folosim și de ce trebuie uneori să stocăm
aceste cookie-uri.
Noi vom împărtășiți, de asemenea, modul în care puteți preveni stocarea acestor cookie-uri, cu toate acestea,
acest lucru poate retrograda sau „strica” anumite elemente ale funcționalității site-ului.

Pentru informații mai generale despre cookie-uri, consultați articolul Wikipedia de pe
<a href="https://en.wikipedia.org/wiki/HTTP_cookie">HTTP Cookies</a>.
</p>`),
            HOW_COOKIES_TITLE: 'Cum folosim cookie-urile?',
            HOW_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
Folosim cookie-uri din mai multe motive detaliate mai jos. Din păcate în majoritatea cazurilor nu există
opțiuni standard din industrie pentru dezactivarea cookie-urilor fără a dezactiva complet funcționalitatea și
caracteristicile pe care le adaugă la acest site.
<span style="color: $orange;">
    Este recomandat să lăsați toate cookie-urile dacă nu sunteți sigur dacă aveți nevoie de ele sau
    nu în cazul în care acestea sunt utilizate pentru a furniza un serviciu pe care îl utilizați.
</span>
</p>
`),
            DISABLING_COOKIES_TITLE: 'Dezactivarea cookie-urilor',
            DISABLING_COOKIES: sanitized.bypassSecurityTrustHtml(`<p>
Puteți preveni setarea cookie-urilor ajustând setările din browserul dvs.
(consultați Ajutor pentru browser pentru a face acest lucru).
Rețineți că dezactivarea cookie-urilor va afecta funcționalitatea acestui site și a multor alte site-uri
web pe care tu vizitezi. Dezactivarea cookie-urilor va duce, de obicei, la dezactivarea anumitor
funcționalități și caracteristici ale aceslui site. Prin urmare, este recomandat să nu dezactivați cookie-urile.
</p>
`),
            THIRD_PARTIES_TITLE: 'Cookie-uri de la terți',
            THIRD_PARTIES: sanitized.bypassSecurityTrustHtml(`<p>
În unele cazuri speciale, folosim și cookie-uri furnizate de terți de încredere (Facebook, Google).
Următoarea secțiune contine detalii despre cookie-urile terților pe care le-ați putea întâlni
prin intermediul acestui site.
</p>
<p>
Acest site folosește Google Analytics, care este una dintre cele mai răspândite și de încredere soluții de analiză
pe web pentru a ne ajuta să înțelegem modul în care utilizați site-ul și modalitățile prin care vă putem îmbunătăți
experienţă. Aceste cookie-uri pot urmări lucruri, cum ar fi cât timp petreceți pe site și paginile care
pe care le vizitați, astfel încât să putem continua să producem conținut interesant.
</p>
<p>
Pentru mai multe informații despre cookie-urile Google Analytics, consultați Google Analytics oficial
<a href="https://marketingplatform.google.com/about/analytics/terms/us/">page</a>.
</p>
<p>
Din când în când testăm noi funcții și facem modificări subtile modului în care site-ul este livrat.
Când încă testăm funcții noi, aceste cookie-uri pot fi utilizate pentru a vă asigura că primiți o
experiență consecventă în timp ce vă aflați pe site, asigurându-ne, în același timp, că înțelegem
ce optimizări apreciază utilizatorii noștri cel mai mult.
</p>
<p>
Serviciul Google AdSense pe care îl folosim pentru a difuza publicitate folosește un cookie DoubleClick
pentru a difuza mai mult reclame relevante de pe web și pentru a limita de câte ori vi se afișează un anumit anunț.
</p>
<p>
Pentru mai multe informații despre Google AdSense, consultați Google Adsense Oficial
<a href="https://policies.google.com/technologies/ads">Advertising Terms</a>.
</p>
<p>
De asemenea, folosim butoane și/sau plugin-uri de social media pe acest site care vă permit să vă conectați la
rețeaua socială preferata în diferite moduri. Pentru ca acestea să funcționeze următoarele site-uri de socializare,
inclusiv; facebook, twitter, google, instagram, tiktok va seta cookie-uri prin intermediul site-ului nostru,
care pot fi utilizate pentru a vă îmbunătăți profilul site-ul lor sau contribuie la datele pe care le dețin
în diverse scopuri prezentate în respectivele lor politici de confidențialitate.
</p>
<ul>
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
`),
            MORE_INFO_TITLE: 'Mai multe informatii',
            MORE_INFO: sanitized.bypassSecurityTrustHtml(`<p>
Sperăm că acest lucru a clarificat lucrurile pentru dvs. și așa cum sa menționat anterior dacă există ceva
de care nu sunteți sigur dacă aveți nevoie sau nu, este de obicei mai sigur să lăsați cookie-urile activate
în cazul în care acestea interacționează cu una dintre funcțiile pe care le utilizați pe site-ul nostru.
Cu toate acestea, dacă încă mai căutați mai multe informații, atunci ne puteți contacta printr-una dintre
metodele noastre de contact.
</p>
<p>
Email: <a href="mailto:daniel.gamescrypt@gmail.com">daniel.gamescrypt@gmail.com</a>
</p>`)
        }
    };
}

// tslint:disable-next-line: class-name
export interface GDPR_ML {
    en: GDPR_TERMS;
    ro: GDPR_TERMS;
}
// tslint:disable-next-line: class-name
export interface GDPR_TERMS {
    WHAT_ARE_COOKIES_TITLE: SafeHtml;
    WHAT_ARE_COOKIES: SafeHtml;
    HOW_COOKIES_TITLE: SafeHtml;
    HOW_COOKIES: SafeHtml;
    DISABLING_COOKIES_TITLE: SafeHtml;
    DISABLING_COOKIES: SafeHtml;
    THIRD_PARTIES_TITLE: SafeHtml;
    THIRD_PARTIES: SafeHtml;
    MORE_INFO_TITLE: SafeHtml;
    MORE_INFO: SafeHtml;
}
