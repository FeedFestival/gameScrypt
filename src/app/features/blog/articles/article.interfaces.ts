import { SafeHtml } from "@angular/platform-browser";
import { BLOG_ROUTE } from "src/app/routes/blog/blog.seo";
import { UNITY_ROUTE } from "src/app/routes/unity-workflow/unity.seo";
import { ARTICLE_TYPE } from ".";

export interface TimelineMonth {
    month: string;
    articles: Article[];
    level?: number;
    expandable?: boolean;
    dateNr?: number;
}

export interface Article {
    base: string;
    articleType: ARTICLE_TYPE;
    shortTitle: string;
    title: string;
    titleTimeline: string;
    shortDescription: string;
    description?: string;
    websiteTitle: string;
    keywords: string;
    smallPic?: string;
    mainPic?: string;
    category: ArticleCategory;
    date: string;
    dateNr: number;
    parts?: any[];
    links?: ArticleLink[];
}

export interface ArticleFaq extends Article {
    questions: any;
}

export interface TimelineYear {
    year: string;
    months: TimelineMonth[];
    dateNr: number;
}

export interface TimelineNode {
    name: string;
    children: any[];
    level?: number;
    expandable?: boolean;
    base?: string;
    dateNr?: number;
}

export const treeTransformer = (node: TimelineNode, levelNr: number) => {
    return {
        expandable: !!node.children && node.children.length > 0,
        name: node.name,
        level: levelNr,
        base: node.base,
        dateNr: node.dateNr,
    };
};

export const ARTICLE_CATEGORY = {
    BLOG: {
        _: "BLOG",
        route: BLOG_ROUTE.base,
    },
    UNITY: {
        _: "UNITY DEVELOPMENT",
        route: UNITY_ROUTE.base,
    },
};

export interface ArticleCategory {
    _: string;
    route: string;
}

export interface ArticleLink {
    icon: string;
    label: string;
    url: string;
}
