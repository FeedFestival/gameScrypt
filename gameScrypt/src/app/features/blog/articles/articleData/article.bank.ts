import { Article } from "../article.interfaces";
import { AllArticles } from "./articles";

export const ArticleBank: ArticleBank = {
    LatestArticles: [
        AllArticles.getArticle("site-is-up"),
        AllArticles.getArticle("gamescrypt-plans-launch"),
        AllArticles.getArticle("blender-procedural-rocky"),
        AllArticles.getArticle("banner-business-banner"),
    ],
    LearningArticles: [
        AllArticles.getArticle("site-is-up"),
        AllArticles.getArticle("gamescrypt-plans-launch"),
        AllArticles.getArticle("blender-procedural-rocky"),
        AllArticles.getArticle("banner-business-banner"),
    ],
};

export interface ArticleBank {
    LatestArticles: Article[];
    LearningArticles: Article[];
}
