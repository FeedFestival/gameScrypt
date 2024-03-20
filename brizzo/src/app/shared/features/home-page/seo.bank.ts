import { SEO_ROUTES } from 'src/app/routes/app-routing.seo';
import { MAIN_ROUTE } from 'src/app/routes/main/main.seo';
import { TERMS_PRIVACY, TERMS_PRIVACY_LIST } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';

export const SEO_BANK = {
    getTitle: (page: string) => {
        if (TERMS_PRIVACY_LIST.includes(page)) {
            return TERMS_PRIVACY.websiteTitle;
        } else {
            const route = SEO_ROUTES.find(R => R.base === page);
            if (_isNilOrEmpty(route) === false) {
                return route.websiteTitle;
            }
        }
        return MAIN_ROUTE.websiteTitle;
    },
    getKeywords: (page: string) => {
        if (TERMS_PRIVACY_LIST.includes(page)) {
            return TERMS_PRIVACY.keywords;
        } else {
            const route = SEO_ROUTES.find(R => R.base === page);
            if (_isNilOrEmpty(route) === false) {
                return route.keywords;
            }
        }
        return MAIN_ROUTE.keywords;
    },
    getDescription: (page: string) => {
        if (TERMS_PRIVACY_LIST.includes(page)) {
            return TERMS_PRIVACY.shortDescription;
        } else {
            const route = SEO_ROUTES.find(R => R.base === page);
            if (_isNilOrEmpty(route) === false) {
                return route.shortDescription;
            }
        }
        return MAIN_ROUTE.shortDescription;
    },
    getOgMetaTags: (page: string, url: string) => {
        if (TERMS_PRIVACY_LIST.includes(page)) {
            return {
                url: url + '/' + TERMS_PRIVACY.LEGAL,
                title: TERMS_PRIVACY.websiteTitle,
                description: TERMS_PRIVACY.shortDescription
            };
        } else {
            const route = SEO_ROUTES.find(R => R.base === page);
            if (_isNilOrEmpty(route) === false) {
                return {
                    url: url + '/' + route.base,
                    title: route.websiteTitle,
                    description: route.shortDescription
                };
            }
        }
        return {
            title: MAIN_ROUTE.socialTitle,
            description: MAIN_ROUTE.shortDescription
        };
    },
    getTwitterMetaTags: (page: string, card: string) => {
        if (TERMS_PRIVACY_LIST.includes(page)) {
            return {
                card: card + '/' + TERMS_PRIVACY.LEGAL,
                title: TERMS_PRIVACY.websiteTitle,
                description: TERMS_PRIVACY.shortDescription
            };
        } else {
            const route = SEO_ROUTES.find(R => R.base === page);
            if (_isNilOrEmpty(route) === false) {
                return {
                    card: card + '/' + route.base,
                    title: route.websiteTitle,
                    description: route.shortDescription
                };
            }
        }
        return {
            title: MAIN_ROUTE.socialTitle,
            description: MAIN_ROUTE.shortDescription
        };
    }
};
