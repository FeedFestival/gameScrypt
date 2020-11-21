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
    Come prove your might and "Rage, rage against the dying of the light".
    Pop as many Blobs as you can before Darkness takes over and surpass your neighbors.
</p>`),
            descriptionStyle: {
                'margin-top': '-300px',
                'padding-left': '15px',
                'padding-right': '15px'
            },
            description: sanitized.bypassSecurityTrustHtml(`
<p style="width: 40%;">
    Score as many points as you can in this Regional Competitive Game and Challenge your friends.
    Download and play right away, match 3 colors and earn it's rewards, the game increases it's dificulty as you play.
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
        Brown Blobs don't have points but they have a chance to drop
        <span class="toilet-paper"></span>
        (Toilet Paper) which is very valuable these days.
    </li>
</ul>
<h5>
    Fifth Dificulty
</h5>
<ul>
    <li>
        Pink Blobs (+5 Points)
    </li>
</ul>
<h5>
    Sixth Dificulty
</h5>
<ul>
    <li>
        White Blobs (+6 Points)
    </li>
    <li>
        White Blobs shares it's light with other Blobs near, can be popped when hit popping all
enlightened Blobs and doubling their points.
    </li>
</ul>
<h5>
    Seventh Dificulty
</h5>
<ul>
    <li>
        Dark Blobs (+7 Points)
    </li>
    <li>
        Dark Blobs can't be destroyed by Popping them and infect other colored Blobs arround,
the only way to get rid of them is to debranch them from other blobs.
Total Darkness is the ultimate fate of the universe and also... our game.
    </li>
</ul>
<p>
    The goal of the game is to clear the playing field by forming groups of three or more like-colored blobs.
    The game ends when the blobs reach the bottom line of the screen.
    After each game your progress is stored on your device, only the best score each week is submited to our
    ranking system.
<p/>`),
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
