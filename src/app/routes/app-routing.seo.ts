import { ARTICLES } from '../features/blog/articles/articleData/articles';
import { BLOG_ROUTE } from './blog/blog.seo';
import { ESPORTS_ROUTE, PZ_ROUTE, TFT_ROUTE } from './esports/esports.seo';
import { BLOB_POP_ROUTE, GAMES_ROUTE } from './games/games.seo';
import { ABOUT_ROUTE, BACKGROUND_ROUTE, CONTACT_ROUTE } from './main/main.seo';
import { COLOR_THIEF_ROUTE, TOOLBOX_ROUTE } from './toolbox/toolbox.seo';
import { UNITY_ROUTE } from './unity-workflow/unity.seo';

export const SEO_ROUTES = [
    // MAIN_ROUTE is the DEFAULT
    GAMES_ROUTE,
    BLOB_POP_ROUTE,
    //
    UNITY_ROUTE,
    //
    ESPORTS_ROUTE,
    TFT_ROUTE,
    PZ_ROUTE,
    //
    TOOLBOX_ROUTE,
    COLOR_THIEF_ROUTE,
    //
    BLOG_ROUTE,
    ...ARTICLES._,
    //
    ABOUT_ROUTE,
    CONTACT_ROUTE,
    BACKGROUND_ROUTE
];
