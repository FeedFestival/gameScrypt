import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { __sanitizeComponent } from 'src/app/shared/utils';

export const termsDoc = (sanitized: DomSanitizer): TERMS_ML => {
    return {
        en:
        {
            TITLE: 'Terms of Service',
            TERMS_OF_SERVICE_AGREEMENT: sanitized.bypassSecurityTrustHtml(`<p>
    These ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` Analytics Terms of Service (this "<b>Agreement</b>") are entered into by `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    and the entity executing this Agreement ("<b>You</b>"). This Agreement governs Your use
    of this website (the "<b>Service</b>"). BY STAYING ON THIS WEBSITE, AND USING THE SERVICE, YOU
    ACKNOWLEDGE
    THAT YOU HAVE REVIEWED AND ACCEPT THIS AGREEMENT AND ARE AUTHORIZED TO ACT ON BEHALF OF, AND BIND TO
    THIS AGREEMENT. In consideration of the foregoing, the parties agree as specified below.
    <br/>
    We may amend this Agreement at any time by posting the amended terms on our Website. We may or may
    not post notices on the homepage of our Website when such changes occur.
    <br/>
    We refer to this Agreement, our Privacy Policy accessible below, and any other terms, rules, or
    guidelines on our Website collectively as our "Legal Terms." You explicitly and implicitly agree to
    be bound by our Legal Terms each time you access our Website. If you do not wish to be so bound,
    please do not use or access our Website.
</p>`),
            LIMITED_LICENSE_TITLE: 'Limited License',
            YOUR_RIGHTS: sanitized.bypassSecurityTrustHtml(`<p>
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` grants you a non-exclusive, non-transferable, revocable license to access and use our
    Website in order for you to participate in competitions, read articles, comment on our games, use our
    Unity packages and scripts, use the WriteTool and recieve other media content through our
    Service, strictly in accordance with our Legal Terms.
</p>`),
            COPYRIGHT_AND_TRADEMARKS: 'Copyrights and Trademarks',
            WEBSITE_PROPERTY: sanitized.bypassSecurityTrustHtml(`<p>
    Unless otherwise stated, all materials including without limitation, logos, brand names, images,
    designs, photographs, video clips, written and other materials that appear as part of our Website with the exception(*)
    <b>are</b> copyrights, trademarks, service marks, trade dress and/or other intellectual property whether
    registered or unregistered ("<b>Intellectual Property</b>") owned, controlled or licensed by
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `.
</p>
<p>
    Our Website as a whole is protected by copyright and trade dress. Nothing on our Website should be
    construed as granting, by implication, estoppel or otherwise, any license or right to use any
    Intellectual Property displayed or used on our Website with the exception(*),
    <b>without the prior written permission of the Intellectual Property owner</b>.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    aggressively enforces its intellectual property rights to the fullest extent of the law.
</p>
<p>
    The names and logos of our Service, may not be used in any
    way, including in advertising or publicity pertaining to distribution of materials on our Website,
    without prior, written permission from `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Fair use of `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `’s Intellectual
    Property requires proper acknowledgment. Other product and company names mentioned in our Website
    may be the Intellectual Property of their respective owners, with the exception(*).
</p>
<p>
    Our Website contains links to Websites owned or operated by parties other than ` +
                __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Such links are provided for your reference only.
    Our Service does not monitor or control outside Websites and is not responsible for their content.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `’s inclusion of links to an outside Website does not imply
    any endorsement of the material on our Website or, unless expressly disclosed otherwise, any
    sponsorship, affiliation or association with its owner, operator or sponsor, nor does
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `’
    inclusion of the links imply that our Service is authorized to use any trade name, trademark, logo,
    legal or official seal, or copyrighted symbol that may be reflected in the linked Website.
</p>`),
            NO_WARRANTY_TITLE: 'No Warranties; Exclusion of Liability; Indemnification',
            NO_WARRANTY_INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    Our website is operated by `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` on an "as is," "as available" basis, without representations
    or warranties of any kind. To the fullest extent permitted by law, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` specifically disclaims
    all warranties and conditions of any kind, including all implied warranties and conditions of
    merchantability, fitness for a particular purpose, title and noninfringement for our website and any
    contracts and services you purchase through it.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    shall not have any liability or responsibility for any errors or omissions in the content of our
    website, for contracts or services sold through our website, for your action or inaction in connection
    with our website or for any damage to
    your computer or data or any other damage you may incur in connection with our website.
</p>
<p>
    Your use of our website and any contracts or services are at your own risk.
    In no event shall either `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` or their agents be liable for any direct, indirect, punitive,
    incidental, special or consequential damages arising out of or in any way connected with the use of
    our website, contracts and services purchased through our website, the delay or inability to use our
    website or otherwise arising in connection with our website, contracts or related services, whether
    based on contract, tort, strict liability or otherwise, even if advised of the possibility of any such damages.
    In no event shall `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` liability for any damage claim exceed the amount paid by you to our Service
    for the transaction giving rise to such damage claim.
</p>
<p>
    Some jurisdictions do not allow the exclusion or limitation of incidental or consequential damages,
    so the above exclusion may not apply to you.
</p>
<p>
    Without limiting the foregoing, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` do not represent or warrant that the information on the
    webite is accurate, complete, reliable, useful, timely or current or that our website will operate without
    interruption or error.
</p>
<p>
    You agree that all times, you will look to attorneys from whom you purchase services for any claims of
    any nature, including loss, damage, or warranty. our Service and their respective affiliates make no
    representation or guarantees about any contracts and services offered through our website.
</p>`),
            DISCLAIMER_TITLE: 'Content Disclaimer',
            CONTENT_DISCLAIMER: sanitized.bypassSecurityTrustHtml(`<p>
    Postings on our Website are made at such times as `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` determines in its discretion. You should not
    assume that the information contained on our Website has been updated or otherwise contains current
    information.`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` does not review past postings to determine whether they remain accurate and
    information contained in such postings may have been superseded.
</p>
<p>
    <b>
    THE INFORMATION AND MATERIALS IN OUR
    WEBSITE ARE PROVIDED FOR YOUR REVIEW IN ACCORDANCE WITH THE NOTICES, TERMS AND CONDITIONS SET FORTH
    HEREIN. THESE MATERIALS ARE NOT GUARANTEED OR REPRESENTED TO BE COMPLETE, CORRECT OR UP TO DATE.
    THESE MATERIALS MAY BE CHANGED FROM TIME TO TIME WITHOUT NOTICE.
    </b>
</p>`),
            INDEMNIFICATION_TITLE: 'Indemnification',
            INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    You agree to defend, indemnify and hold our Service harmless from and against any and all claims,
    damages, costs and expenses, including attorneys' fees, arising from or related to your use of our
    Website or any Contracts or Services you purchase through it.
</p>`)
        },
        ro: {
            TITLE: 'Termenii serviciului',
            TERMS_OF_SERVICE_AGREEMENT: sanitized.bypassSecurityTrustHtml(`<p>
    Acești Termenii și Condiții de Analitică `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` (acest „<b> Acord </b>”) sunt încheiate de către `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    și entitatea care execută acest Acord („<b> Dvs. </b>”). Prezentul Acord guvernează utilizarea Dvs.
    a acestui site web („<b> Serviciul </b>”).
    RĂMÂNIND PE ACEST SITE WEB ȘI FOLOSIND SERVICIUL, RECUNOAȘTEȚI CĂ AȚI EXAMINAT ȘI ACCEPTAT ACEST
    ACORD ȘI SUNTEȚI AUTORIZAT SĂ ACȚIONAȚI NUMAI ÎN DOMENIUL SI IN CONCORDANȚA CU ACEST ACORD.
    Având în vedere cele de mai sus, părțile sunt de acord, după cum se specifică mai jos.
    <br/>
        Putem modifica acest Acord în orice moment, postând termenii modificați pe site-ul nostru web. Putem
        sa postam (sau nu) notificări pe pagina de pornire a site-ului nostru web atunci când apar astfel de modificări.
    <br/>
    Ne referim la acest Acord, la Politica noastră de confidențialitate accesibilă mai jos și la orice alți termeni, reguli sau
    liniile directoare de pe site-ul nostru colectiv ca „Termeni legali”.
    Sunteți de acord în mod explicit și implicit sa respectați Termenii noștri legali de fiecare dată când accesați
    site-ul nostru web.
    Dacă nu doriți să fiți atât de legat, vă rugăm să nu utilizați sau să accesați site-ul nostru web.
</p>`),
            LIMITED_LICENSE_TITLE: 'Licență limitată',
            YOUR_RIGHTS: sanitized.bypassSecurityTrustHtml(`<p>
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` vă acordă o licență neexclusivă, netransferabilă, revocabilă pentru a accesa și utiliza
    site-ul web pentru ca dvs. să participați la competiții, să citiți articole, să comentați jocurile noastre, să le folosiți
    Pachete și scripturi Unity, utilizați WriteTool și primiți alte conținuturi media prin intermediul
    serviciului nostru, strict în conformitate cu Termenii noștri legali.
</p>`),
            COPYRIGHT_AND_TRADEMARKS: 'Drepturi de autor și mărci comerciale',
            WEBSITE_PROPERTY: sanitized.bypassSecurityTrustHtml(`<p>
    Cu excepția cazului în care se prevede altfel, toate materialele, inclusiv fără limitare, sigle, nume de marcă, imagini,
    modele, fotografii, videoclipuri, materiale scrise și alte materiale care apar ca parte a site-ului nostru web cu excepția(*)
    <b> sunt </b> drepturi de autor, mărci comerciale, mărci de servicii, îmbrăcăminte comercială și / sau
    alte proprietăți intelectuale, indiferent dacă înregistrat sau neînregistrat
    („<b> Proprietate intelectuală </b>”) deținut, controlat sau licențiat de
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `.
</p>
<p>
    Site-ul nostru în ansamblu este protejat de drepturile de autor și de îmbrăcăminte comercială.
    Nimic de pe site-ul nostru nu ar trebui interpretat ca acordarea, implicit, de oprire sau
    orice licență sau drept de utilizare a oricărei proprietăți intelectuale afișate sau utilizate pe site-ul
    nostru web cu excepția(*), <b> fără permisiunea prealabilă scrisă a proprietarului de proprietate intelectuală </b>.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    își aplică în mod agresiv drepturile de proprietate intelectuală în cea mai mare măsură a legii.
</p>
<p>
    Numele și siglele Serviciului nostru nu pot fi utilizate în niciun fel
    mod, inclusiv în publicitate sau publicitate referitoare la distribuirea materialelor pe site-ul nostru web,
    fără permisiunea scrisă prealabilă de la`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Utilizarea corectă a Proprietatii Intelectuale `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` necesită o recunoaștere adecvată.
    Alte nume de produse și companii menționate pe site-ul nostru web
    pot fi proprietatea intelectuală a proprietarilor respectivi, cu excepția(*).
</p>
<p>
    Site-ul nostru web conține linkuri către site-uri web deținute sau operate de alte părți decât` +
                __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Astfel de link-uri sunt furnizate numai pentru referință. Serviciul nostru nu
    monitorizează sau controlează site-urile externe și nu este responsabil pentru conținutul acestora.
    includerea de link-uri către un site web extern de către `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + ` nu implică
    orice aprobare a materialului de pe site-ul nostru web sau, cu excepția cazului în care este
    divulgat în mod expres altfel, orice
    sponsorizare, afiliere sau asociere cu proprietarul, operatorul sau sponsorul său și nici prin
    includerea link-urilor de către `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `implică faptul că Serviciul nostru este autorizat să utilizeze orice nume comercial, marcă comercială,
    siglă, sigiliu legal sau oficial sau simbol protejat prin drepturi de autor care pot fi reflectate pe site-ul web conectat.
</p>`),
            NO_WARRANTY_TITLE: 'Fără garanții; Excluderea răspunderii; Despăgubire',
            NO_WARRANTY_INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    Site-ul nostru web este operat de`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `pe baza „așa cum este”, „așa cum este disponibil”, fără reprezentări sau garanții de orice fel.
    În măsura permisă de lege, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` renunță în mod specific la
    toate garanțiile și condițiile de orice fel, inclusiv toate garanțiile și condițiile implicite de
    comercializabilitate, aptitudini pentru un anumit scop, titlu și neîncălcare pentru site-ul nostru și orice altceva,
    contractele și serviciile pe care le achiziționați prin intermediul acestuia.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    nu va avea nicio răspundere sau responsabilitate pentru orice erori sau omisiuni în conținutul site-ul web,
    pentru contracte sau servicii vândute prin intermediul site-ului nostru web, pentru acțiunea sau inacțiunea dvs.
    în legătură cu site-ul nostru web sau pentru orice daune aduse
    computerul sau datele dvs. sau orice alte daune pe care le-ați putea avea în legătură cu site-ul nostru web.
</p>
<p>
    Utilizarea site-ului nostru web și a oricăror contracte sau servicii sunt pe propriul risc.
    Nici în niciun caz nu trebuie ca `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` sau agenții lor sa fie răspunzători pentru orice acțiune directă, indirectă, punitivă,
    daune accidentale, speciale sau consecințe care decurg din sau în vreun fel legate de utilizarea site-ul nostru web,
    contractele și serviciile achiziționate prin intermediul site-ului nostru web, întârzierea sau incapacitatea de a ne utiliza
    site-ul web sau care apar în alt mod în legătură cu site-ul nostru web, contracte sau servicii conexe, indiferent dacă
    pe bază de contract, delict, răspundere strictă sau altfel, chiar dacă este informat despre posibilitatea unor astfel de daune.
    Răspunderea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` în niciun caz nu va depăși suma plătită de dvs. Serviciului nostru
    pentru tranzacția care a dat naștere unei astfel de despăgubiri.
</p>
<p>
    Unele jurisdicții nu permit excluderea sau limitarea daunelor accidentale sau indirecte,
    deci este posibil ca excluderea de mai sus să nu se aplice pentru dvs.
</p>
<p>
    Fără a limita cele de mai sus, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu reprezintă sau garantează că informațiile de pe
    site-ul web este corect, complet, fiabil, util sau actual sau pe care site-ul nostru web va funcționa fără
    întrerupere sau eroare.
</p>
<p>
    Sunteți de acord că, de fiecare dată, vă veți adresa unor avocați de la care achiziționați servicii pentru orice pretenții
    orice natură, inclusiv pierderea, deteriorarea sau garanția. Serviciul nostru și afiliații lor respectivi fac nr
    reprezentare sau garanții cu privire la orice contracte și servicii oferite prin intermediul site-ului nostru web.
</p>`),
            DISCLAIMER_TITLE: 'Disclaimer privind conținutul',
            CONTENT_DISCLAIMER: sanitized.bypassSecurityTrustHtml(`<p>
    Înregistrările `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` pe site-ul nostru web sunt făcute în momentele stabilite la discreția sa. Tu nu ar trebui să
    presupupui că informațiile conținute pe site-ul nostru web au fost actualizate sau conțin în mod curent
    informație.`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu examinează postările anterioare pentru a stabili dacă acestea rămân corecte și
    informațiile conținute în astfel de postări pot fi înlocuite.
</p>
<p>
    <b>
        INFORMAȚII ȘI MATERIALE DIN PE PE SITE SUNT FURNIZATE PENTRU REVIZUIREA DUMNEAVOASTRĂ ÎN CONFORMITATE
        CU NOTIFICĂRILE, TERMENII ȘI CONDIȚIILE STABILITE AICI.
        ACESTE MATERIALE NU SUNT GARANTATE SAU REPREZENTATE PENTRU A FI COMPLETE, CORECTE SAU PÂNĂ LA DATA.
        ACESTE MATERIALE POATE FI SCHIMBATE DIN TIMP ÎN TIMP FĂRĂ NOTIFICARE.
    </b>
</p>`),
            INDEMNIFICATION_TITLE: 'Despăgubire',
            INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    Sunteți de acord să apărați, să despăgubiți și să mențineți Serviciul nostru inofensiv pentru și împotriva
    oricăror revendicări, daune, costuri și cheltuieli, inclusiv onorariile avocaților, rezultate din sau
    legate de utilizarea de către dvs. a site-ul web sau orice contracte sau servicii pe care le achiziționați
    prin intermediul acestuia.
</p>`)
        }
    };
};

// tslint:disable-next-line: class-name
export interface TERMS_ML {
    en: TERMS_TERMS;
    ro: TERMS_TERMS;
}
// tslint:disable-next-line: class-name
export interface TERMS_TERMS {
    TITLE: SafeHtml;
    TERMS_OF_SERVICE_AGREEMENT: SafeHtml;
    LIMITED_LICENSE_TITLE: SafeHtml;
    YOUR_RIGHTS: SafeHtml;
    COPYRIGHT_AND_TRADEMARKS: SafeHtml;
    WEBSITE_PROPERTY: SafeHtml;
    NO_WARRANTY_TITLE: SafeHtml;
    NO_WARRANTY_INDEMNIFICATION: SafeHtml;
    DISCLAIMER_TITLE: SafeHtml;
    CONTENT_DISCLAIMER: SafeHtml;
    INDEMNIFICATION_TITLE: SafeHtml;
    INDEMNIFICATION: SafeHtml;
}
