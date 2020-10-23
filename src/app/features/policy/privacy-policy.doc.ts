import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

export class PrivacyPolicy {

    ABOUT?: string;
    TERMS?: {
        TITLE: string;
        TERMS_OF_SERVICE_AGREEMENT: string;
        LIMITED_LICENSE_TITLE: string;
    };
    LEGAL_DOCUMENTS_ADVERTISING?: string;

    constructor(private sanitized?: DomSanitizer) { }

    _(): IPrivacyPolicy {
        return {
            ABOUT: this.sanitized.bypassSecurityTrustHtml(`<p>
        GameScrypt website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.
    </p>
    <p>
        It is very different from other websites that show case their games.
    </p>`),
            TERMS: {
                TITLE: 'Terms of Service',
                TERMS_OF_SERVICE_AGREEMENT: this.sanitized.bypassSecurityTrustHtml(`<p>
        These gamescrypt.com Analytics Terms of Service (this "<b>Agreement</b>") are entered into by gamescrypt.com
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
                LIMITED_LICENSE_TITLE: 'Limited License'
            },
            LEGAL_DOCUMENTS_ADVERTISING: this.sanitized.bypassSecurityTrustHtml(`<div class="col-12 m-auto">
        <h3>
            Advertising
        </h3>
    </div>
    <div class="col-11 m-auto">
        <p>
            <a class="hyperlink" href="#" routerLink="/home"><cool-text full="gameScrypt"></cool-text></a>
                might show AdSense ads.
        </p>
        <h4>
            IMPORTANT!
        </h4>
    </div>
    <div class="col-10 m-auto">
        <p>
            Please stop using the website if you disagree with any of the terms above.
        </p>
    </div>`)
        };
    }
}

// export const PRIVACY_POLICY: PrivacyPolicy = {
//     ABOUT: `<p>
//     GameScrypt website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.
// </p>
// <p>
//     It is very different from other websites that show case their games.
// </p>`,
//     TERMS: {
//         TITLE: 'Terms of Service',
//         TERMS_OF_SERVICE_AGREEMENT: `<p>
//     These gamescrypt.com Analytics Terms of Service (this "<b>Agreement</b>") are entered into by gamescrypt.com
//     and the entity executing this Agreement ("<b>You</b>"). This Agreement governs Your use
//     of this website (the "<b>Service</b>"). BY STAYING ON THIS WEBSITE, AND USING THE SERVICE, YOU
//     ACKNOWLEDGE
//     THAT YOU HAVE REVIEWED AND ACCEPT THIS AGREEMENT AND ARE AUTHORIZED TO ACT ON BEHALF OF, AND BIND TO
//     THIS AGREEMENT. In consideration of the foregoing, the parties agree as specified below.

//     We may amend this Agreement at any time by posting the amended terms on our Website. We may or may
//     not post notices on the homepage of our Website when such changes occur.

//     We refer to this Agreement, our Privacy Policy accessible below, and any other terms, rules, or
//     guidelines on our Website collectively as our "Legal Terms." You explicitly and implicitly agree to
//     be bound by our Legal Terms each time you access our Website. If you do not wish to be so bound,
//     please do not use or access our Website.
// </p>`,
//         LIMITED_LICENSE_TITLE: 'Limited License'
//     },
//     LEGAL_DOCUMENTS_ADVERTISING: `<div class="col-12 m-auto">
//     <h3>
//         Advertising
//     </h3>
// </div>
// <div class="col-11 m-auto">
//     <p>
//         <a class="hyperlink" href="#" routerLink="/home"><cool-text full="gameScrypt"></cool-text></a>
//             might show AdSense ads.
//     </p>
//     <h4>
//         IMPORTANT!
//     </h4>
// </div>
// <div class="col-10 m-auto">
//     <p>
//         Please stop using the website if you disagree with any of the terms above.
//     </p>
// </div>`
// };

export interface IPrivacyPolicy {
    ABOUT?: SafeHtml;
    TERMS?: {
        TITLE: SafeHtml;
        TERMS_OF_SERVICE_AGREEMENT: SafeHtml;
        LIMITED_LICENSE_TITLE: SafeHtml;
    };
    LEGAL_DOCUMENTS_ADVERTISING?: SafeHtml;
}
