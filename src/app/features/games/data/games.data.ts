import { DomSanitizer } from '@angular/platform-browser';
import { BLOB_POP_ROUTE } from 'src/app/routes/games/games.seo';
import { DEVELOPER, GameData } from '../models/game';
import { GAMES_BASIC_POLICY } from './games.policy';

export const GAMES_DATA = (sanitized: DomSanitizer): GameData[] => [
    {
        base: BLOB_POP_ROUTE.base,
        en: {
            pic: 'assets/images/game_blob.PNG',
            name: 'Blob Pop Ranked',
            extraInfo: {
                developer: 'Gamescrypt Developers, Daniel Simionescu',
                publisher: 'None',
                platforms: 'App Store, Google Play, Windows Phone Store, Pocket PC, Facebook',
                release: sanitized.bypassSecurityTrustHtml(`
<span class="fw-5">App Store: </span><span>December 01 2020, </span>
<span class="fw-5">Google Play: </span><span>December 01 2020, </span>
<span class="fw-5">Windows Phone Store: </span><span>December 01 2020, </span>
<span class="fw-5">Pocket PC: </span><span>December 01 2020, </span>
<span class="fw-5">Facebook: </span><span>December 01 2020</span>
`),
                genre: 'Puzzle, Color-Matching, Arcade',
                mode: 'Single Player'
            },
            introduction: sanitized.bypassSecurityTrustHtml(`
<p>
    Match Colors! Destroy Blobs! ... and try to stay alive as long as possible.
</p>`),
            descriptionStyle: {
                'margin-top': '-300px',
                'padding-left': '15px',
                'padding-right': '15px'
            },
            description: sanitized.bypassSecurityTrustHtml(`
<p style="width: 40%;">
    The goal of the game is to clear the playing surface by grouping three or more like-colored blobs together.
    When the blobs reach the bottom line of the screen, the game is over.
    Score as many points as you can and challenge your friends in this Regional Competitive Game.
</p>
<p style="width: 40%;">
    Your progress is saved on your device after each game, and only the best score from each week can be submitted to our ranking system.
</p>
<h5>
    First Dificulty
</h5>
<ul>
    <li>
        Red Blobs (+1 Point)
    </li>
    <li>
        Blue Blobs (+2 Points)
    </li>
</ul>
<h5>
    Second Dificulty and Third Dificulty
</h5>
<ul>
    <li>
        Yellow Blobs (+3 Points)
    </li>
    <li>
        Green Blobs (+4 Points)
    </li>
</ul>
<h5>
    Forth Dificulty
</h5>
<ul>
    <li>
        Brown Blobs (No Points)
    </li>
    <li>
        Crystalized Blobs don't have points and they can't be destroyed.
    </li>
</ul>
`),
            versions: [
                {
                    name: 'alpha',
                    date: '21/11/2020',
                    changes: [
                        'added the game'
                    ]
                }
            ],
            policy: {
                THIS_GAME_POLICY: sanitized.bypassSecurityTrustHtml(`<p>
    The Company built Blob Pop Ranked app as an Ad Supported app. This game is provided by at no cost and
    is intended for use as is. In short, If you do not agree to this Privacy Policy, please do not play Blob Pop Ranked.
</p>`
                ),
                BASIC_POLICY: GAMES_BASIC_POLICY(sanitized,
                    {
                        name: 'Blob Pop Ranked',
                        namePlural: 'Blob Pop Ranked Game',
                        friendsInformation: false,
                        imageInformation: false,
                        purchaseInformation: false
                    })
            },
            developers: [
                {
                    function: 'Game Designer',
                    devs: [
                        DEVELOPER.DANIEL_S
                    ]
                },
                {
                    function: 'Programmers',
                    devs: [
                        DEVELOPER.DANIEL_S
                    ]
                },
                {
                    function: 'Art and Style',
                    devs: [
                        DEVELOPER.DANIEL_S
                    ]
                },
                {
                    function: 'Music',
                    devs: [
                        DEVELOPER.DANIEL_S
                    ]
                },
                {
                    function: 'Advisors and Testers',
                    devs: [
                        DEVELOPER.DANIEL_S,
                        DEVELOPER.LAVINIA_M
                    ]
                }
            ],
            _picStyle: {
                transform: 'translate(18%, 0%) scale(1.4, 1.4)'
            }
        }
    }
];
