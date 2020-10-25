import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { y2020 } from './2020/year2020';
import { ARTICLES } from './articles';

export const ArticleBank = {
    LatestArticles: [
        ARTICLES.getArticle('site-is-up'),
        ARTICLES.getArticle('gamescrypt-plans-launch')
    ],
    LearningArticles: [
        ARTICLES.getArticle('site-is-up'),
        ARTICLES.getArticle('gamescrypt-plans-launch')
    ],
    TimeLine: [
        y2020
    ]
};
