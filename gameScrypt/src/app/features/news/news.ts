import { ArticleCategory } from '../blog/articles/article.interfaces';

export interface News {
    pic?: string;
    name?: string;
    shortDescription?: string;
    category?: ArticleCategory;
    date?: string;
    dateNr?: number;
    redirect?: string;
}
