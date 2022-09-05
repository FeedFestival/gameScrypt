import { Routes } from "@angular/router";
import { AllArticles } from "src/app/features/blog/articles/articleData/articles";
import { ArticleComponent } from "../../features/blog/articles/article.component";
import { BlogComponent } from "../../features/blog/blog.component";
import { BLOG_ROUTE } from "./blog.seo";

export const blogRoutes = (): Routes => {
    let allOther: Routes = AllArticles.search().map((a) => {
        return {
            path: BLOG_ROUTE.base + "/" + a.base,
            component: ArticleComponent,
            data: { codeBase: a.base },
        };
    });
    return [{ path: BLOG_ROUTE.base, component: BlogComponent }, ...allOther];
};

