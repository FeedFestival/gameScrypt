export interface TimelineMonth {
    month: string;
    articles: Article[];
    level?: number;
    expandable?: boolean;
}

export interface Article {
    title?: string;
    titleTimeline?: string;
    shortDescription: string;
    websiteTitle: string;
    keywords: string;
    mainPic?: string;
    base: string;
    date?: string;
}

export interface TimelineYear {
    year: string;
    months: TimelineMonth[];
}

export interface TimelineNode {
    name: string;
    children: any[];
    level?: number;
    expandable?: boolean;
    base?: string;
}

