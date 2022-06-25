import { SafeHtml } from '@angular/platform-browser';

export interface GameData {
    base: string;
    en: Game;
    ro?: Game;
}

export interface Game {
    pic: string;
    name: string;
    extraInfo: {
        developer: string;
        publisher: string;
        platforms: string;
        release: SafeHtml;
        genre: string;
        mode: string;
        gameUrl?: string;
    };
    _base?: string;
    introduction: SafeHtml;
    descriptionStyle?: any;
    description: SafeHtml;
    versions: GameVersion[];
    policy: GamePolicy;
    developers: GameDeveloper[];
    picUrls?: GamePic[];
    _picStyle: any;
    _hasGameUrl?: boolean;
}

export interface GamePolicy {
    THIS_GAME_POLICY: SafeHtml;
    BASIC_POLICY: GAMES_POLICY;
}

export interface GameVersion {
    name: string;
    date: string;
    changes: string[];
}

export interface GameDeveloper {
    devs: Developer[];
    function: string;
}

export interface Developer {
    name: string;
    pre?: string;
    word?: string;
    suffix?: string;
    url?: string;
}

export interface GAMES_POLICY {
    GAMESCRYPT_GAMES_TITLE: SafeHtml;
    GAMESCRYPT_GAMES: SafeHtml;
    GAMESCRYPT_GAMES_POLICY: SafeHtml;
    INFORMATION_VOLUNTARILY_PROVIDED_TITLE: SafeHtml;
    INFORMATION_VOLUNTARILY_PROVIDED: SafeHtml;
    OUR_USE_OF_PERSONAL_INFO_TITLE: SafeHtml;
    OUR_USE_OF_PERSONAL_INFO: SafeHtml;
    VIEWING_PERSONAL_INFO_TITLE: SafeHtml;
    VIEWING_PERSONAL_INFO: SafeHtml;
    LINKS_THIRD_PARTY_TITLE: SafeHtml;
    LINKS_THIRD_PARTY: SafeHtml;
    WHERE_WE_STORE_INFO_TITLE: SafeHtml;
    WHERE_WE_STORE_INFO: SafeHtml;
    YOUR_RIGHTS_TITLE: SafeHtml;
    YOUR_RIGHTS: SafeHtml;
}

export interface GamesPolicyOpt {
    name?: string;
    namePlural?: string;
    friendsInformation?: boolean;
    purchaseInformation?: boolean;
    imageInformation?: boolean;
}

export interface DeveloperData {
    DANIEL_S: Developer;
    LAVINIA_M: Developer;
}

export const DEVELOPER: DeveloperData = {
    DANIEL_S: {
        name: 'Daniel M. Simionescu',
        pre: 'D',
        word: 'aniel',
        suffix: ' Simionescu',
        url: ''
    },
    LAVINIA_M : {
        name: 'Lavinia Mazilu',
        pre: 'L',
        word: 'avinia',
        suffix: ' Mazilu',
        url: ''
    }
};

export interface GamePic {
    name?: string;
    backgroundUrl: string;
    backgroundPosition?: string;
    backgroundSize?: string;
}
