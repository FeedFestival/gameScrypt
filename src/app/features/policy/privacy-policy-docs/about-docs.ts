import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { __sanitizeComponent } from 'src/app/shared/utils';

export const aboutDoc = (sanitized: DomSanitizer): ABOUT_ML => {
    return {
        en: {
            ABOUT: sanitized.bypassSecurityTrustHtml(`<p>
    GameScrypt website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.
</p>
<p>
    It is very different from other websites that show case their games.
</p>`),
            TITLE: 'This is the place to be awesome!',
            WHAT_WEBSITE_DOES: sanitized.bypassSecurityTrustHtml(`<p>
    It is a Games Website that contains Free Online Competitions and Ladders, Alternative Writing through Write Tool App,
    Unity Utils Classes and Workflow and Oppinions featured in Blog.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt' }) +
                ` was also designed for showcasing <b>Games</b> Created and nurtured by `
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` Developers, as well as looking towards having a Competitive Esports Team, we work hard to
    create a comunity, don't forget to check out our <b>Discord Server</b>.
</p>`)
        },
        ro: {
            ABOUT: sanitized.bypassSecurityTrustHtml(`<p>
    GameScrypt website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.
</p>
<p>
    Glad you are here and part of this awesome comunity.
</p>`),
            TITLE: 'Este locul in care poți fi awesome!',
            WHAT_WEBSITE_DOES: sanitized.bypassSecurityTrustHtml(`<p>
    Este un site de jocuri care conține competiții online gratuite, scriere alternativă prin aplicația WriteTool,
    Utilitați in lucrul cu Unity și opinii personale ale mele sau ale altora prezentate în Blog.
    ` + __sanitizeComponent('cool-text', { full: 'gameScrypt' }) +
                ` a fost, de asemenea, conceput pentru prezentarea <b> Jocurilor </b> create și alimentate de Dezvoltatorii`
                + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
                ` , precum și munca către a crea o echipă de esport competitivă, lucrăm din greu
    pentru a dezvolta o comunitate, nu uitați să consultați <b> serverul nostru de Discord </b>.
</p>`),
        }
    };
};

// tslint:disable-next-line: class-name
export interface ABOUT_ML {
    en: ABOUT_TERMS;
    ro: ABOUT_TERMS;
}
// tslint:disable-next-line: class-name
export interface ABOUT_TERMS {
    ABOUT: SafeHtml;
    TITLE: SafeHtml;
    WHAT_WEBSITE_DOES: SafeHtml;
}
