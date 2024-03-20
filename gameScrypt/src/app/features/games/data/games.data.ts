import { DomSanitizer } from "@angular/platform-browser";
import { BLOB_POP_ROUTE } from "src/app/routes/games/games.seo";
import { DEVELOPER, GameData } from "../models/game";
import { GAMES_BASIC_POLICY } from "./games.policy";

export const GAMES_DATA = (sanitized: DomSanitizer): GameData[] => [
    {
        base: BLOB_POP_ROUTE.base,
        en: {
            pic: "assets/images/game_blob.PNG",
            name: "Blob Pop Ranked",
            extraInfo: {
                developer: "Gamescrypt Developers, Daniel M. Simionescu",
                publisher: "None",
                platforms: "Google Play Store",
                /*
App Store,  Windows Phone Store, Pocket PC, Facebook
*/
                release: sanitized.bypassSecurityTrustHtml(`
<span class="fw-5">Open Beta Google Play: </span><span>June 25 2022, </span>
`),
                /*
<span class="fw-5">App Store: </span><span>December 01 2020, </span>
<span class="fw-5">Windows Phone Store: </span><span>December 01 2020, </span>
<span class="fw-5">Pocket PC: </span><span>December 01 2020, </span>
<span class="fw-5">Facebook: </span><span>December 01 2020</span>
*/
                genre: "Puzzle, Color-Matching, Arcade",
                mode: "Single Player",
                gameUrl:
                    "https://play.google.com/store/apps/details?id=com.gameScrypt.BlobPopRanked",
            },
            introduction: sanitized.bypassSecurityTrustHtml(`
<p>
    Match Colors! Destroy Blobs! ... and try to stay alive as long as possible.
</p>`),
            descriptionStyle: {
                "margin-top": "-300px",
                "padding-left": "15px",
                "padding-right": "15px",
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
                    name: "Open Beta",
                    date: "25/06/2022",
                    changes: [
                        "You can now exchange Toilet Paper for Blobs",
                        "Changed a lot of the game color variation",
                    ],
                },
                {
                    name: "alpha",
                    date: "21/11/2020",
                    changes: ["added the game"],
                },
            ],
            policy: {
                THIS_GAME_POLICY: sanitized.bypassSecurityTrustHtml(`<p>
    The Company built Blob Pop Ranked app as an Ad Supported app. This game is provided by at no cost and
    is intended for use as is. In short, If you do not agree to this Privacy Policy, please do not play Blob Pop Ranked.
</p>`),
                BASIC_POLICY: GAMES_BASIC_POLICY(sanitized, {
                    name: "Blob Pop Ranked",
                    namePlural: "Blob Pop Ranked Game",
                    friendsInformation: false,
                    imageInformation: false,
                    purchaseInformation: false,
                }),
            },
            developers: [
                {
                    function: "Game Designer",
                    devs: [DEVELOPER.DANIEL_S],
                },
                {
                    function: "Programmers",
                    devs: [DEVELOPER.DANIEL_S],
                },
                {
                    function: "Art and Style",
                    devs: [DEVELOPER.DANIEL_S],
                },
                {
                    function: "Music",
                    devs: [DEVELOPER.DANIEL_S],
                },
                {
                    function: "Advisors and Testers",
                    devs: [DEVELOPER.DANIEL_S, DEVELOPER.LAVINIA_M],
                },
            ],
            picUrls: [
                {
                    name: "start_pic_2",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171821080_e6b0d919be_k.jpg",
                    backgroundPosition: "34% 0%",
                },
                {
                    name: "start_pic",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171340371_9b9375afbf_k.jpg",
                    backgroundPosition: "center top",
                },
                {
                    name: "second pic",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171821350_8c0770879c_k.jpg",
                    backgroundPosition: "center 1%",
                },
                {
                    name: "big_explosion",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171821440_350bf2c9c8_k.jpg",
                    backgroundPosition: "center 1.5%",
                },
                {
                    name: "logo",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171372863_94a66dd772.jpg",
                    backgroundPosition: "center 20px"
                },
                {
                    name: "points_flow",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171340131_acd5b700eb_k.jpg",
                    backgroundPosition: "center 12%"
                },
                {
                    name: "girl_playing",
                    backgroundUrl: "https://live.staticflickr.com/65535/52170321062_dcdf10eb04_c.jpg",
                    backgroundPosition: "center 20%"
                },
                {
                    name: "google_play",
                    // backgroundUrl: "https://live.staticflickr.com/65535/52171588649_f9a1b19a19_b.jpg",
                    // backgroundUrl: "https://live.staticflickr.com/65535/52171360573_471acd62da_h.jpg",
                    backgroundUrl: "https://live.staticflickr.com/65535/52171587164_b1f7d2d928_c.jpg",
                    backgroundPosition: "left 100%"
                },
            ],
            _picStyle: {
                // transform: 'translate(18%, 0%) scale(1.4, 1.4)'
            },
        },
    },
];
