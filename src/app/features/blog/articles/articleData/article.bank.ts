import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { Article, TimelineYear } from '../article.interfaces';
import { y2020 } from './2020/year2020';
import { y2021 } from './2021/year2021';
import { ARTICLES } from './articles';

export const ArticleBank: ArticleBank = {
    LatestArticles: [
        ARTICLES.getArticle('site-is-up'),
        ARTICLES.getArticle('gamescrypt-plans-launch'),
        ARTICLES.getArticle('blender-procedural-rocky')
    ],
    LearningArticles: [
        ARTICLES.getArticle('site-is-up'),
        ARTICLES.getArticle('gamescrypt-plans-launch'),
        ARTICLES.getArticle('blender-procedural-rocky')
    ],
    TimeLine: [
        y2021,
        y2020
    ]
};

export interface ArticleBank {
    LatestArticles: Article[];
    LearningArticles: Article[];
    TimeLine?: TimelineYear[];
}
