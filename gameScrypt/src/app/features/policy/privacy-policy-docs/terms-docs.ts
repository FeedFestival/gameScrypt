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
    Acesti Termenii si Conditii de Analitica `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` (acest „<b> Acord </b>”) sunt încheiate de catre `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    si entitatea care executa acest Acord („<b> Dvs. </b>”). Prezentul Acord guverneaza utilizarea Dvs.
    a acestui site web („<b> Serviciul </b>”).
    RaMaNIND PE ACEST SITE WEB sI FOLOSIND SERVICIUL, RECUNOAsTEtI Ca AtI EXAMINAT sI ACCEPTAT ACEST
    ACORD sI SUNTEtI AUTORIZAT Sa ACtIONAtI NUMAI ÎN DOMENIUL SI IN CONCORDANtA CU ACEST ACORD.
    Avand în vedere cele de mai sus, partile sunt de acord, dupa cum se specifica mai jos.
    <br/>
        Putem modifica acest Acord în orice moment, postand termenii modificati pe site-ul nostru web. Putem
        sa postam (sau nu) notificari pe pagina de pornire a site-ului nostru web atunci cand apar astfel de modificari.
    <br/>
    Ne referim la acest Acord, la Politica noastra de confidentialitate accesibila mai jos si la orice alti termeni, reguli sau
    liniile directoare de pe site-ul nostru colectiv ca „Termeni legali”.
    Sunteti de acord în mod explicit si implicit sa respectati Termenii nostri legali de fiecare data cand accesati
    site-ul nostru web.
    Daca nu doriti sa fiti atat de legat, va rugam sa nu utilizati sau sa accesati site-ul nostru web.
</p>`),
            LIMITED_LICENSE_TITLE: 'Licenta limitata',
            YOUR_RIGHTS: sanitized.bypassSecurityTrustHtml(`<p>
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` va acorda o licenta neexclusiva, netransferabila, revocabila pentru a accesa si utiliza
    site-ul web pentru ca dvs. sa participati la competitii, sa cititi articole, sa comentati jocurile noastre, sa le folositi
    Pachete si scripturi Unity, utilizati WriteTool si primiti alte continuturi media prin intermediul
    serviciului nostru, strict în conformitate cu Termenii nostri legali.
</p>`),
            COPYRIGHT_AND_TRADEMARKS: 'Drepturi de autor si marci comerciale',
            WEBSITE_PROPERTY: sanitized.bypassSecurityTrustHtml(`<p>
    Cu exceptia cazului în care se prevede altfel, toate materialele, inclusiv fara limitare, sigle, nume de marca, imagini,
    modele, fotografii, videoclipuri, materiale scrise si alte materiale care apar ca parte a site-ului nostru web cu exceptia(*)
    <b> sunt </b> drepturi de autor, marci comerciale, marci de servicii, îmbracaminte comerciala si / sau
    alte proprietati intelectuale, indiferent daca înregistrat sau neînregistrat
    („<b> Proprietate intelectuala </b>”) detinut, controlat sau licentiat de
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `.
</p>
<p>
    Site-ul nostru în ansamblu este protejat de drepturile de autor si de îmbracaminte comerciala.
    Nimic de pe site-ul nostru nu ar trebui interpretat ca acordarea, implicit, de oprire sau
    orice licenta sau drept de utilizare a oricarei proprietati intelectuale afisate sau utilizate pe site-ul
    nostru web cu exceptia(*), <b> fara permisiunea prealabila scrisa a proprietarului de proprietate intelectuala </b>.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    îsi aplica în mod agresiv drepturile de proprietate intelectuala în cea mai mare masura a legii.
</p>
<p>
    Numele si siglele Serviciului nostru nu pot fi utilizate în niciun fel
    mod, inclusiv în publicitate sau publicitate referitoare la distribuirea materialelor pe site-ul nostru web,
    fara permisiunea scrisa prealabila de la`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Utilizarea corecta a Proprietatii Intelectuale `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` necesita o recunoastere adecvata.
    Alte nume de produse si companii mentionate pe site-ul nostru web
    pot fi proprietatea intelectuala a proprietarilor respectivi, cu exceptia(*).
</p>
<p>
    Site-ul nostru web contine linkuri catre site-uri web detinute sau operate de alte parti decat` +
                __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `. Astfel de link-uri sunt furnizate numai pentru referinta. Serviciul nostru nu
    monitorizeaza sau controleaza site-urile externe si nu este responsabil pentru continutul acestora.
    includerea de link-uri catre un site web extern de catre `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + ` nu implica
    orice aprobare a materialului de pe site-ul nostru web sau, cu exceptia cazului în care este
    divulgat în mod expres altfel, orice
    sponsorizare, afiliere sau asociere cu proprietarul, operatorul sau sponsorul sau si nici prin
    includerea link-urilor de catre `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `implica faptul ca Serviciul nostru este autorizat sa utilizeze orice nume comercial, marca comerciala,
    sigla, sigiliu legal sau oficial sau simbol protejat prin drepturi de autor care pot fi reflectate pe site-ul web conectat.
</p>`),
            NO_WARRANTY_TITLE: 'Fara garantii; Excluderea raspunderii; Despagubire',
            NO_WARRANTY_INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    Site-ul nostru web este operat de`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                `pe baza „asa cum este”, „asa cum este disponibil”, fara reprezentari sau garantii de orice fel.
    În masura permisa de lege, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` renunta în mod specific la
    toate garantiile si conditiile de orice fel, inclusiv toate garantiile si conditiile implicite de
    comercializabilitate, aptitudini pentru un anumit scop, titlu si neîncalcare pentru site-ul nostru si orice altceva,
    contractele si serviciile pe care le achizitionati prin intermediul acestuia.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) + `
    nu va avea nicio raspundere sau responsabilitate pentru orice erori sau omisiuni în continutul site-ul web,
    pentru contracte sau servicii vandute prin intermediul site-ului nostru web, pentru actiunea sau inactiunea dvs.
    în legatura cu site-ul nostru web sau pentru orice daune aduse
    computerul sau datele dvs. sau orice alte daune pe care le-ati putea avea în legatura cu site-ul nostru web.
</p>
<p>
    Utilizarea site-ului nostru web si a oricaror contracte sau servicii sunt pe propriul risc.
    Nici în niciun caz nu trebuie ca `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` sau agentii lor sa fie raspunzatori pentru orice actiune directa, indirecta, punitiva,
    daune accidentale, speciale sau consecinte care decurg din sau în vreun fel legate de utilizarea site-ul nostru web,
    contractele si serviciile achizitionate prin intermediul site-ului nostru web, întarzierea sau incapacitatea de a ne utiliza
    site-ul web sau care apar în alt mod în legatura cu site-ul nostru web, contracte sau servicii conexe, indiferent daca
    pe baza de contract, delict, raspundere stricta sau altfel, chiar daca este informat despre posibilitatea unor astfel de daune.
    Raspunderea `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` în niciun caz nu va depasi suma platita de dvs. Serviciului nostru
    pentru tranzactia care a dat nastere unei astfel de despagubiri.
</p>
<p>
    Unele jurisdictii nu permit excluderea sau limitarea daunelor accidentale sau indirecte,
    deci este posibil ca excluderea de mai sus sa nu se aplice pentru dvs.
</p>
<p>
    Fara a limita cele de mai sus, `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu reprezinta sau garanteaza ca informatiile de pe
    site-ul web este corect, complet, fiabil, util sau actual sau pe care site-ul nostru web va functiona fara
    întrerupere sau eroare.
</p>
<p>
    Sunteti de acord ca, de fiecare data, va veti adresa unor avocati de la care achizitionati servicii pentru orice pretentii
    orice natura, inclusiv pierderea, deteriorarea sau garantia. Serviciul nostru si afiliatii lor respectivi fac nr
    reprezentare sau garantii cu privire la orice contracte si servicii oferite prin intermediul site-ului nostru web.
</p>`),
            DISCLAIMER_TITLE: 'Disclaimer privind continutul',
            CONTENT_DISCLAIMER: sanitized.bypassSecurityTrustHtml(`<p>
    Înregistrarile `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` pe site-ul nostru web sunt facute în momentele stabilite la discretia sa. Tu nu ar trebui sa
    presupupui ca informatiile continute pe site-ul nostru web au fost actualizate sau contin în mod curent
    informatie.`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` nu examineaza postarile anterioare pentru a stabili daca acestea raman corecte si
    informatiile continute în astfel de postari pot fi înlocuite.
</p>
<p>
    <b>
        INFORMAtII sI MATERIALE DIN PE PE SITE SUNT FURNIZATE PENTRU REVIZUIREA DUMNEAVOASTRa ÎN CONFORMITATE
        CU NOTIFICaRILE, TERMENII sI CONDItIILE STABILITE AICI.
        ACESTE MATERIALE NU SUNT GARANTATE SAU REPREZENTATE PENTRU A FI COMPLETE, CORECTE SAU PaNa LA DATA.
        ACESTE MATERIALE POATE FI SCHIMBATE DIN TIMP ÎN TIMP FaRa NOTIFICARE.
    </b>
</p>`),
            INDEMNIFICATION_TITLE: 'Despagubire',
            INDEMNIFICATION: sanitized.bypassSecurityTrustHtml(`<p>
    Sunteti de acord sa aparati, sa despagubiti si sa mentineti Serviciul nostru inofensiv pentru si împotriva
    oricaror revendicari, daune, costuri si cheltuieli, inclusiv onorariile avocatilor, rezultate din sau
    legate de utilizarea de catre dvs. a site-ul web sau orice contracte sau servicii pe care le achizitionati
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
