import { ARTICLES } from '../features/blog/articles/articleData/articles';
import { BLOG_ROUTE } from './blog/blog.seo';
import { ESPORTS_ROUTE, PZ_ROUTE, TFT_ROUTE } from './esports/esports.seo';
import { GAMES_ROUTE } from './games/games.seo';
import { ABOUT_ROUTE, CONTACT_ROUTE } from './main/main.seo';
import { UNITY_ROUTE } from './unity-workflow/unity.seo';

export const SEO_ROUTES = [
    // MAIN_ROUTE is the DEFAULT
    GAMES_ROUTE,
    UNITY_ROUTE,
    ESPORTS_ROUTE,
    TFT_ROUTE,
    PZ_ROUTE,
    //
    BLOG_ROUTE,
    ...ARTICLES._,
    //
    ABOUT_ROUTE,
    CONTACT_ROUTE
];
