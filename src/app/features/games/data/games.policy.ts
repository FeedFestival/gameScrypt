import { DomSanitizer } from '@angular/platform-browser';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { __sanitizeComponent } from 'src/app/shared/utils';
import { GamesPolicyOpt, GAMES_POLICY } from '../models/game';

export const GAMES_BASIC_POLICY = (sanitized: DomSanitizer, opt: GamesPolicyOpt): GAMES_POLICY => {
    return {
        GAMESCRYPT_GAMES_TITLE: 'Gamescrypt Games and '
            + (opt ? (opt.name ? opt.name : 'other Games made by Gamescrypt') : 'other Games made by Gamescrypt'),
        GAMESCRYPT_GAMES: sanitized.bypassSecurityTrustHtml(`<p>
    These terms apply to the use of games and other products developed by Gamescrypt.
    (the “Company”, “we”, “us” aka. `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `), develops, publishes and otherwise provides games and
    game-related services that can be used alone, with friends or through a social network, via the
    Internet and by way of stationary and mobile devices.
</p>
<p>
    This privacy and data policy (“Privacy Policy”) applies and has effect for `
            + (opt ? (opt.name ? opt.name : ` all our games and other software and products made available by us
    (together the "Game(s)"), as well as any other online features relating to the Games including our website
    (the “Website”)`) : ` all our games and other software and products made available by us (together the "Game(s)"),
        as well as any other online features relating to the Games including our website (the “Website”)`) +
            `, (including online network play connectivity and interactivity).`
            + (!opt || !opt.name ?
                'Together the Game(s), the Website, the Forums and Support Centre are referred to as the “Online Services”.' : '') +
            `
    If you have any questions or comments about this Privacy Policy, please contact us at
    <a href="mailto:owner.gamescrypt@gmail.com">owner.gamescrypt@gmail.com.</a>.
</p>
<p>
    The Company is committed to protecting the privacy of Internet users who use`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `’s games and game - related services on stationary or mobile devices, whether accessed through, (i)`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `’s website or through a third - party website(the “Platform”), such as Facebook, in which`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `’s application runs, or(ii) an iOS or Android application that the`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` provides(the “App”) through
    an application download service, such as App Store, Google Play or the like(each being an
“Application Store”), (the “Services”).This Privacy Policy is intended to inform you of the ways in
    which information that is obtained through`
            + (opt ? (opt.name ? opt.name : 'the game / our service') : 'the game / our service') +
            ` is collected and used and the ways in which the`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` will protect the personal information that you provide.By using the Services, you consent
to the collection, use and transfer of your information in accordance with this Privacy Policy and
the Terms and Conditions of Use for `
            + (opt ? (opt.name ? opt.name : 'the game') : 'the game') +
            ` and our`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` Cookies Policy.Therefore, the`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` asks that you read this Privacy Policy before further using any of the Services / Games.
</p>
<p>
    BY INSTALLING, USING, REGISTERING TO OR OTHERWISE ACCESSING THE SERVICES, YOU AGREE TO THIS PRIVACY
    POLICY AND GIVE AN EXPLICIT AND INFORMED CONSENT TO THE PROCESSING OF YOUR PERSONAL DATA IN ACCORDANCE
    WITH THIS PRIVACY POLICY. IF YOU DO NOT AGREE TO THIS PRIVACY POLICY, PLEASE DO NOT INSTALL, USE,
    REGISTER TO OR OTHERWISE ACCESS THE SERVICES.
</p>`),
        GAMESCRYPT_GAMES_POLICY: sanitized.bypassSecurityTrustHtml(`<p>
    The Privacy Policy may be revised or amended from time to time with or without notice. Please also review `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` policies found at <a href="https://gamescrypt.com/terms">TERMS & CONDITIONS</a>.
</p>
<p>
    Each time you access `
            + (opt ? (opt.name ? opt.name : 'the game / our service') : 'the game / our service') +
            `, you agree to be bound by the most recent Privacy Policy then in effect, which is posted
    for your review. If `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` makes any material changes to this Privacy Policy, `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` will notify you or not of those changes by posting them through the Game / Services or other notification,
    including when those changes will become effective. Your continued use of the Services after any changes
    to this Privacy Policy will constitute your acceptance of and agreement to such changes.
    Please refer to this Privacy Policy regularly so that you will always know what information `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` gathers, how `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` might use that information, and whether and how `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` might disclose that information to others.
</p>`),
        INFORMATION_VOLUNTARILY_PROVIDED_TITLE: sanitized.bypassSecurityTrustHtml(`
    Information That Is Voluntarily Provided to or Collected by `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ``),
        INFORMATION_VOLUNTARILY_PROVIDED: sanitized.bypassSecurityTrustHtml(`<p>
    The decision to supply your personal information is yours. By and through the Platform or an
    Application Store or otherwise, `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` may collect information that is voluntarily provided by users of the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            `, including,
    but not limited to, name, locale, user ID for the Platform, `
            + (_isNilOrEmpty(opt) ? '_' : (opt.friendsInformation ? 'friends registered in the Platform, ' : ' ') +
                + (opt.purchaseInformation ? 'purchase information for in-game currency, ' : ' ') +
                + (opt.imageInformation ? 'image information, ' : ' ')) +
            `(collectively, “Personal Information”) in accordance with the`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` Terms & Conditions of Use and this Privacy Policy.
</p>
<p>
    In addition, the Company may collect (i) device data: the data regarding the device or any computer you
    may use to download or stream a copy of the App onto your device (such information is referred to as
    “Device Data”), including, where available, the device's or computer's unique device identifiers, operating
    system, browser type and mobile network information, for system administration and to report aggregate
    information to our advertisers; and (ii) log data: the `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `’s servers automatically record certain information about how a person uses the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            ` (such information is referred to as “Log Data”), Log Data may include
    information such as a user’s Internet Protocol (IP) address, browser type, operating system, the web page that
    a user was visiting before accessing the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            `, the pages or features of the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            ` to which a user
    browsed and the time spent on those pages or features, search terms, the links on the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            ` that a user clicked on and other statistics.
</p>
<p>
    The Company may associate Device Data and Log Data with your Personal Information and will treat the combined
    information as Personal Information in accordance with this Privacy Policy for as long as it is combined.
</p>`),
        OUR_USE_OF_PERSONAL_INFO_TITLE: 'The Company’s Use of Personal Information',
        OUR_USE_OF_PERSONAL_INFO: sanitized.bypassSecurityTrustHtml(`<p>`
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` collects, stores and uses Personal Information for the sole purpose (“Purpose of Use”) of (a)
    enhancing your gaming experience and providing you with `
            + (opt ? (opt.name ? opt.name : 'games') : 'games') +
            ` and related games solely in connection with the `
            + (opt ? (opt.name ? opt.name : 'games') : 'games') +
            `; (b) the `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` or its affiliated companies’ marketing, promoting and advertising
    their products; (c) enforcing the `
            + (opt ? (opt.namePlural ? opt.namePlural : 'games') : 'games') +
            `’ Terms & Conditions of Use; and (d) responding to claims that
    any content violates the rights of third parties.
</p>
<p>
    The `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` may change the Purpose of Use at any time to the extent which is reasonably considered by the
    Company to be related to and compatible with the Purpose of Use before the change.
    If `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` changes the Purpose of Use, `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` shall, but is not required to post changes through the Games and make
    changes to this Privacy Policy as appropriate.
</p>
<p>
    The `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` will not sell, exchange or otherwise distribute your Personal Information to unaffiliated third
    parties without your consent, except to the extent required by applicable laws and regulations.
    `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` uses Log Data to administer the Games, and analyzes (and may engage third parties to
    analyze) this information to improve and enhance the Games by expanding their features and functionality
    and tailoring them to our users’ needs and preferences. `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` may use a person’s IP address to fight
    spam, malware and identity theft. `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` also uses the IP Address to generate aggregate, non-identifying information about how the games are used.
</p>`),
        VIEWING_PERSONAL_INFO_TITLE: 'Viewing Personal Information through Games',
        VIEWING_PERSONAL_INFO: sanitized.bypassSecurityTrustHtml(`<p>
    The `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` prohibits any user from using Personal Information of other users in any manner whatsoever except
    for the sole purpose of utilizing the Company’s Games (Youtube Playthroughs). `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` recommends that users employ caution to ensure that their security settings allow only those who
    are trustworthy to view their Personal Information. `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` is not responsible for providing additional protection in this regard.
</p>`),
        LINKS_THIRD_PARTY_TITLE: 'Viewing Personal Information through Services',
        LINKS_THIRD_PARTY: sanitized.bypassSecurityTrustHtml(`<p>
    The ` + (opt ? (opt.name ? opt.name : 'games') : 'games') +
            ` may be provided through the Platform or Application Store, or the Company may provide links to
    the Platform or Application Store, but only as a convenience to the Services’ users. The Platform or
    Application Store are not under the `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            `’s control. The provision of Services through the Platform or Application Store or the inclusion
    of a link is not necessarily an endorsement by `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` of the Platform or Application Store. `
            + __sanitizeComponent('cool-text', { full: 'gameScrypt', afterFull: '.com' }) +
            ` is not responsible for the privacy practices or the contents of the Platform or Application
    Store or any link contained in the Platform or Application Store. Any Personal Information provided
    through the Platform or Application Store will occur on the Platform or Application Store alone, and
    the Personal Information will be collected exclusively by that third party that provides the Platform
    or Application Store and will be controlled by its privacy policy alone. Users that gain access to the
    Services from the Platform or Application Store must first read and agree to comply with the terms of use,
    privacy policy and other rules and guidelines of the Platform or Application Store prior to accessing
                ` + (opt ? (opt.name ? opt.name : 'games') : 'games') +
            `. You understand, acknowledge and agree that all access to and use of any such third party
    website by you shall be at your own risk.
</p>`),
        WHERE_WE_STORE_INFO_TITLE: 'Where We Store and Process Your Information',
        WHERE_WE_STORE_INFO: sanitized.bypassSecurityTrustHtml(`<p>
    The information that we collect from you may be transferred to, and stored at, destinations outside
    the European Economic Area ("EEA") such as Japan and the United States of America. We may use the
    storage facilities of third party suppliers (such as Amazon Web Services, VULTR) for the purpose of
    storing your information and these facilities may also be located outside the EEA.
</p>
<p>
    Your information may also be processed by staff operating outside the EEA who work for us or for one
    of our suppliers (such as Amazon Web Services, VULTR) for the purposes set out in this Privacy Policy.
    By submitting your information on the Service and Play our Game, you agree to such transfer, storing or processing.
</p>`),
        YOUR_RIGHTS_TITLE: 'Your Rights',
        YOUR_RIGHTS: sanitized.bypassSecurityTrustHtml(`<p>
    You have the following rights over the way we process personal data relating to you, as set out in the table below.
    We aim to comply without undue delay, and within one month at the latest.
</p>
<p>
    To make a request, please let our Data Protection Officer know by sending an email to
    <a href="mailto:owner.gamescrypt@gmail.com">owner.gamescrypt@gmail.com.</a>.
</p>
<ul>
    <li>
        Ask for a copy of data we are processing about you and have inaccuracies corrected
    </li>
    <li>
        Object to us processing data about you: You can ask us to restrict, stop processing, or to delete your personal data
    </li>
</ul>
<p>
    You have the right to request a copy of the personal information we hold about you and to have any
    inaccuracies corrected.
    We will use reasonable efforts to the extent required by law to supply, correct or delete personal information
    held about you on our files (and with any third parties to whom it has been disclosed to).
</p>`),
    };
};
