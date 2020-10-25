export interface TimelineMonth {
    month: string;
    articles: Article[];
    level?: number;
    expandable?: boolean;
    dateNr?: number;
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
    dateNr?: number;
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
        dateNr: node.dateNr
    };
};
