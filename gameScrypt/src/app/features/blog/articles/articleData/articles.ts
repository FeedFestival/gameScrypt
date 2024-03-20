import { Article, TimelineYear } from "../article.interfaces";
import { y2020 } from "./2020/year2020";
import { y2021 } from "./2021/year2021";
import { y2022 } from "./2022/year2022";

export class AllArticles {
    static articles: Article[];
    static years: TimelineYear[];

    static getTimeline = () => {
        if (!AllArticles.years) {
            AllArticles.years = [y2022, y2021, y2020];
        }
        return AllArticles.years;
    };

    static search = () => {
        if (!AllArticles.articles) {
            AllArticles.articles = [];
            AllArticles.getTimeline().forEach((y) => {
                let monthArticles = [];
                y.months.forEach((m) => {
                    monthArticles = [...monthArticles, ...m.articles];
                });
                AllArticles.articles = [
                    ...AllArticles.articles,
                    ...monthArticles,
                ];
            });
        }
        return AllArticles.articles;
    };

    static getArticle = (base) => {
        const articles = AllArticles.search();
        return articles.find((a) => a.base === base);
    };
}
