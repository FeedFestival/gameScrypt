import { BLOG_ROUTE } from 'src/app/routes/blog/blog.seo';
import { ESPORTS_ROUTE } from 'src/app/routes/esports/esports.seo';
import { ABOUT_ROUTE, CONTACT_ROUTE, MAIN_ROUTE } from 'src/app/routes/main/main.seo';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { ARTICLES } from '../blog/articles/articleData/articles';

export const SEO_BANK = {
    getTitle: (page: string) => {
        if (TERMS_PRIVACY.list().includes(page)) {
            return TERMS_PRIVACY.websiteTitle;
        } else {
            switch (page) {
                case MAIN_ROUTE.base:
                    return MAIN_ROUTE.websiteTitle;
                case ESPORTS_ROUTE.base:
                    return ESPORTS_ROUTE.websiteTitle;
                case BLOG_ROUTE.base:
                    return BLOG_ROUTE.websiteTitle;
                case ABOUT_ROUTE.base:
                    return ABOUT_ROUTE.websiteTitle;
                case CONTACT_ROUTE.base:
                    return CONTACT_ROUTE.websiteTitle;
                default:
                    break;
            }
        }

        const index = ARTICLES._.findIndex(a => a.base === page);
        if (index >= 0) {
            return ARTICLES._[index].websiteTitle;
        }

        return 'gameScrypt ↙ gamescrypt.com';
    },
    getKeywords: (page: string) => {
        if (TERMS_PRIVACY.list().includes(page)) {
            return TERMS_PRIVACY.keywords;
        } else {
            switch (page) {
                case MAIN_ROUTE.base:
                    return MAIN_ROUTE.keywords;
                case ESPORTS_ROUTE.base:
                    return ESPORTS_ROUTE.keywords;
                case BLOG_ROUTE.base:
                    return BLOG_ROUTE.keywords;
                case ABOUT_ROUTE.base:
                    return ABOUT_ROUTE.keywords;
                case CONTACT_ROUTE.base:
                    return CONTACT_ROUTE.keywords;
                default:
                    break;
            }
        }

        const index = ARTICLES._.findIndex(a => a.base === page);
        if (index >= 0) {
            return ARTICLES._[index].keywords;
        }

        return '';
    },
    getDescription: (page: string) => {
        if (TERMS_PRIVACY.list().includes(page)) {
            return TERMS_PRIVACY.shortDescription;
        } else {
            switch (page) {
                case MAIN_ROUTE.base:
                    return MAIN_ROUTE.shortDescription;
                case ESPORTS_ROUTE.base:
                    return ESPORTS_ROUTE.shortDescription;
                case BLOG_ROUTE.base:
                    return BLOG_ROUTE.shortDescription;
                case ABOUT_ROUTE.base:
                    return ABOUT_ROUTE.shortDescription;
                case CONTACT_ROUTE.base:
                    return CONTACT_ROUTE.shortDescription;
                default:
                    break;
            }
        }

        const index = ARTICLES._.findIndex(a => a.base === page);
        if (index >= 0) {
            return ARTICLES._[index].shortDescription;
        }
        return '';
    },
    getOgMetaTags: (page: string, url: string) => {
        if (TERMS_PRIVACY.list().includes(page)) {
            return {
                url: url + '/' + TERMS_PRIVACY.LEGAL,
                title: TERMS_PRIVACY.websiteTitle,
                description: TERMS_PRIVACY.shortDescription
            };
        } else {
            switch (page) {
                case MAIN_ROUTE.base:
                    return {
                        title: MAIN_ROUTE.socialTitle,
                        description: MAIN_ROUTE.shortDescription
                    };
                case ESPORTS_ROUTE.base:
                    return {
                        url: url + '/' + ESPORTS_ROUTE.base,
                        title: ESPORTS_ROUTE.websiteTitle,
                        description: ESPORTS_ROUTE.shortDescription
                    };
                case BLOG_ROUTE.base:
                    return {
                        url: url + '/' + BLOG_ROUTE.base,
                        title: BLOG_ROUTE.websiteTitle,
                        description: BLOG_ROUTE.shortDescription
                    };
                default:
                    break;
            }
        }

        const index = ARTICLES._.findIndex(a => a.base === page);
        if (index >= 0) {
            return {
                url: url + '/' + ARTICLES._[index].base,
                title: ARTICLES._[index].websiteTitle,
                description: ARTICLES._[index].shortDescription
            };
        }
        return null;
    },
    getTwitterMetaTags: (page: string, card: string) => {
        if (TERMS_PRIVACY.list().includes(page)) {
            return {
                card: card + '/' + TERMS_PRIVACY.LEGAL,
                title: TERMS_PRIVACY.websiteTitle,
                description: TERMS_PRIVACY.shortDescription
            };
        } else {
            switch (page) {
                case MAIN_ROUTE.base:
                    return {
                        title: MAIN_ROUTE.socialTitle,
                        description: MAIN_ROUTE.shortDescription
                    };
                case ESPORTS_ROUTE.base:
                    return {
                        card: card + '/' + ESPORTS_ROUTE.base,
                        title: ESPORTS_ROUTE.websiteTitle,
                        description: ESPORTS_ROUTE.shortDescription
                    };
                case BLOG_ROUTE.base:
                    return {
                        card: card + '/' + BLOG_ROUTE.base,
                        title: BLOG_ROUTE.websiteTitle,
                        description: BLOG_ROUTE.shortDescription
                    };
                default:
                    break;
            }
        }
        const index = ARTICLES._.findIndex(a => a.base === page);
        if (index >= 0) {
            return {
                card: card + '/' + ARTICLES._[index].base,
                title: ARTICLES._[index].websiteTitle,
                description: ARTICLES._[index].shortDescription
            };
        }
        return null;
    }
};
