import { Routes } from "@angular/router";
import { ARTICLE_TYPE } from "src/app/features/blog/articles/articleData/article.constants";
import { AllArticles } from "src/app/features/blog/articles/articleData/articles";
import { ArticleFaqComponent } from "src/app/features/blog/articles/components/article-faq.component";
import { ArticleComponent } from "../../features/blog/articles/article.component";
import { BlogComponent } from "../../features/blog/blog.component";
import { BLOG_ROUTE } from "./blog.seo";

export const articleRoutes: any = AllArticles.search().map((a) => ({
    path: BLOG_ROUTE.base + "/" + a.base,
    component:
        a.articleType === ARTICLE_TYPE.BASE
            ? ArticleComponent
            : ArticleFaqComponent,
    data: { codeBase: a.base },
}));

export let blogRoutes: Routes = [];
blogRoutes.push({ path: BLOG_ROUTE.base, component: BlogComponent });
blogRoutes = blogRoutes.concat(articleRoutes);
