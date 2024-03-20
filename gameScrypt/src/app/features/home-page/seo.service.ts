import { Injectable } from '@angular/core';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { SEO_BANK } from './seo.bank';
import { og, OgMetaTag, TwitterMetaTag } from './seo.constants';

@Injectable({ providedIn: 'root' })
export class SeoService {

    constructor(
    ) {
    }

    getTitle(page): string {
        const theTitleUsed = SEO_BANK.getTitle(page);
        if (theTitleUsed.length > 70) {
            console.error('title meta tag too long: ' + theTitleUsed.length + ' title: ' + theTitleUsed);
        }
        return theTitleUsed;
    }

    getMetaTags(page): any[] {

        const robots = 'index, follow, noarchive, notranslate';
        const author = 'Daniel M. Simionescu';
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

        returnList = returnList.concat([
            ...this.getOgMetaTags(page),
            ...this.getTwitterMetaTags(page)
        ]);

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

        returnObj.content = SEO_BANK.getKeywords(page);

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

        returnObj.content = SEO_BANK.getDescription(page);

        if (returnObj.content.length > 150) {
            console.error('description meta tag too long: ' + returnObj.content.length);
        }

        if (returnObj.content.length === 0) {
            return null;
        }

        return returnObj;
    }

    private getOgMetaTags(page: string): any[] {

        const metaTag: OgMetaTag = {
            url: og.Url, siteName: og.SiteName, type: og.Type, image: '',
            ...SEO_BANK.getOgMetaTags(page, og.Url)
        };

        if (_isNilOrEmpty(metaTag.title) === false) {
            return [
                { property: 'og:url', content: metaTag.url },
                { property: 'og:site_name', content: metaTag.siteName },
                { property: 'og:type', content: metaTag.type },
                { property: 'og:title', content: metaTag.title },
                { property: 'og:description', content: metaTag.description },
                _isNilOrEmpty(metaTag.image) === false ? { property: 'og:image', content: metaTag.image } : null
            ];
        }
        return null;
    }

    private getTwitterMetaTags(page: string): any[] {

        const metaTag: TwitterMetaTag = {
            card: og.Url, image: '',
            ...SEO_BANK.getTwitterMetaTags(page, og.Url)
        };

        if (_isNilOrEmpty(metaTag.title) === false) {
            return [
                { property: 'twitter:card', content: metaTag.card },
                { property: 'twitter:description', content: metaTag.description },
                { property: 'twitter:title', content: metaTag.title },
                _isNilOrEmpty(metaTag.image) === false ? { property: 'twitter:image', content: metaTag.image } : null
            ];
        }
        return null;
    }
}
