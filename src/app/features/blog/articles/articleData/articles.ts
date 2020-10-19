import { Article } from '../article.interfaces';
import { oct2020 } from './2020/oct/oct.2020';

export const ARTICLES: AllArticles = {
    _: [
        ...oct2020.articles
    ],
    getArticle: (base) => {
        return ARTICLES._.find(a => a.base === base);
    }
};

export interface AllArticles {
    _: Article[];
    getArticle?: any;
}
