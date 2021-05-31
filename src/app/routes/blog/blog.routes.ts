import { Routes } from '@angular/router';
import { ARTICLE_SITE_IS_UP, GAMESCRIPT_PLANS_ON_LAUNCHING } from 'src/app/features/blog/articles/articleData/2020/oct/oct.2020';
import { ARTICLE_BLENDER_ROCKS_GEOMETRY_NODES } from 'src/app/features/blog/articles/articleData/2021/mar/mar.2021';
import { ArticleComponent } from '../../features/blog/articles/article.component';
import { BlogComponent } from '../../features/blog/blog.component';
import { BLOG_ROUTE } from './blog.seo';

export const blogRoutes: Routes = [
    { path: BLOG_ROUTE.base, component: BlogComponent },
    // oct
    {
        path: BLOG_ROUTE.base + '/' + ARTICLE_SITE_IS_UP.base, component: ArticleComponent,
        data: { codeBase: ARTICLE_SITE_IS_UP.base }
    },
    {
        path: BLOG_ROUTE.base + '/' + GAMESCRIPT_PLANS_ON_LAUNCHING.base, component: ArticleComponent,
        data: { codeBase: GAMESCRIPT_PLANS_ON_LAUNCHING.base }
    },
    // mar
    {
        path: BLOG_ROUTE.base + '/' + ARTICLE_BLENDER_ROCKS_GEOMETRY_NODES.base, component: ArticleComponent,
        data: { codeBase: ARTICLE_BLENDER_ROCKS_GEOMETRY_NODES.base }
    },
];
