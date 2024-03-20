export const og = {
    Url: 'http://www.gamescrypt.com',
    SiteName: 'http://www.gamescrypt.com',
    Type: 'website'
};

export interface OgMetaTag {
    url?: string;
    siteName?: string;
    type?: string;
    title?: string;
    description?: string;
    image?: string;
}

export interface TwitterMetaTag {
    card?: string;
    title?: string;
    description?: string;
    image?: string;
}
