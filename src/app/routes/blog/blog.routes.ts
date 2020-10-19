import { Routes } from '@angular/router';
import { ARTICLE_SITE_IS_UP } from 'src/app/features/blog/articles/articleData/2020/oct/oct.2020';
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
    { path: BLOG_ROUTE.base + '/gamescrypt-plans-launch', component: ArticleComponent, data: { codeBase: 'gamescrypt-plans-launch' } },
];
