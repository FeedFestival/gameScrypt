import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class SeoService {

    constructor(
    ) {

    }

    getTitle(page): string {

        let theTitleUsed: string;

        switch (page) {
            case 'home':
                theTitleUsed = 'gameScrypt • FREE ↙ Official Website | play @ gamescrypt.com';
                break;
            case 'about':
                theTitleUsed = 'About • gameScrypt ↙ Official Website | play @ gamescrypt.com';
                break;
            default:
                theTitleUsed = 'gameScrypt ↙ gamescrypt.com';
                break;
        }

        if (theTitleUsed.length > 70) {
            console.error('title meta tag too long: ' + theTitleUsed.length);
        }

        return theTitleUsed;
    }

    getMetaTags(page): any[] {

        const robots = 'index, follow, noarchive, notranslate';
        const author = 'Daniel Simionescu';
        const applicationName = 'gameScrypt';
        const language = 'English';
        const revisitAfter = '5 days';
        const copyright = 'Copyright © 2019 by ' + author;

        let returnList: any[] = [
            this.getKeywords(page),
            this.getDescription(page),
            { name: 'robots', content: robots },
            { name: 'author', content: author },
            { name: 'application-name', content: applicationName },
            { name: 'language', content: language },
            { name: 'revisit-after', content: revisitAfter },
            { name: 'copyright', content: copyright }
        ];

        if (page === 'home') {
            returnList = returnList.concat([
                ...this.getOgMetaTags(page),
                ...this.getTwitterMetaTags(page)
            ]);
        }

        // console.log("TCL: SeoService -> returnList", returnList)
        return returnList;
    }

    getAllTags(): string[] {
        return [
            'name="keywords"',
            'name="description"',
            'name="robots"',
            'name="author"',
            'name="application-name"',
            'name="language"',
            'name="revisit-after"',
            'name="copyright"',
            //
            'property="og:url"',
            'property="og:site_name"',
            'property="og:type"',
            'property="og:title"',
            'property="og:description"',
            'property="og:image"',
            //
            'property="twitter:card"',
            'property="twitter:description"',
            'property="twitter:title"',
            'property="twitter:image"'
        ];
    }

    private getKeywords(page): any {

        const returnObj: any = {
            name: 'keywords',
        };
        switch (page) {
            case 'home':
                returnObj.content = 'FREE Games, gameScrypt, Programming, Online';
                break;
            case 'about':
                returnObj.content = 'About, gameScrypt, FREE Games';
                break;
            case 'contact':
                returnObj.content = 'Daniel, Simionescu';
                break;
            case 'legal':
            case 'terms':
            case 'privacy':
            case 'cookies':
            case 'sns':
            case 'gdpr':
                returnObj.content = '';
                break;
            default:
                break;
        }

        if (returnObj.content.length > 150) {
            console.error('keywords meta tag too long: ' + returnObj.content.length);
        }

        if (returnObj.content.length === 0) {
            return null;
        }

        return returnObj;
    }

    private getDescription(page): any {

        const returnObj: any = {
            name: 'description',
        };
        switch (page) {
            case 'home':
                // tslint:disable-next-line: max-line-length
                returnObj.content = 'The website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.';
                break;
            case 'about':
                returnObj.content = 'Have you ever wanted to play games that improve your brain power?';
                break;
            case 'contact':
                returnObj.content = `I'm Daniel Simionescu and I own this place. Come see what the website has to offer.`;
                break;
            case 'legal':
            case 'terms':
            case 'privacy':
            case 'cookies':
            case 'sns':
            case 'gdpr':
                returnObj.content = '';
            // tslint:disable-next-line: no-switch-case-fall-through
            default:
                break;
        }

        if (returnObj.content.length > 150) {
            console.error('description meta tag too long: ' + returnObj.content.length);
        }

        if (returnObj.content.length === 0) {
            return null;
        }

        return returnObj;
    }

    private getOgMetaTags(page): any[] {

        if (page === 'home') {
            const url = 'http://www.gamescrypt.com';
            const siteName = 'http://www.gamescrypt.com';
            const type = 'website';
            const title = 'Maybe our games are for YOU | gameScrypt Website';
            // tslint:disable-next-line: max-line-length
            const description = 'The website is designed for showcasing Games, online competitions, Unity Utils Class and Oppinions featured in Blog.';
            const image = '';

            return [
                { property: 'og:url', content: url },
                { property: 'og:site_name', content: siteName },
                { property: 'og:type', content: type },
                { property: 'og:title', content: title },
                { property: 'og:description', content: description },
                image.length > 0 ? { property: 'og:image', content: image } : null
            ];
        }
        return null;
    }

    private getTwitterMetaTags(page): any[] {

        if (page === 'home') {
            const card = 'http://www.gamescrypt.com';
            const title = 'Play games that improve you | gameScrypt.com';
            // tslint:disable-next-line: max-line-length
            const description = 'The website is designed for gameScrypt games exhibitions.';
            const image = '';

            return [
                { property: 'twitter:card', content: card },
                { property: 'twitter:description', content: description },
                { property: 'twitter:title', content: title },
                image.length > 0 ? { property: 'twitter:image', content: image } : null
            ];
        }
        return null;
    }

}
