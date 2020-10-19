import { TimelineMonth } from '../../../article.interfaces';

export const ARTICLE_SITE_IS_UP = {
    base: 'site-is-up',
    titleTimeline: `
<span class="pre f-11">
S
</span>
<span class="word">
ite is Up
</span>
        `,
    title: `
<span class="pre">
S
</span>
<span class="word">
ite is Up
</span>
        `,
    mainPic: 'assets/images/blog/2020/oct/pic1.jpg',
    shortDescription: 'The gameScrypt website is online and it\'s ready to kick some a**!',
    websiteTitle: 'Site is Up | Blog ↙ gamescrypt.com',
    keywords:  'Blog, gameScrypt, Site, Up',
    date: '10/17/2020'
};

export const oct2020: TimelineMonth = {
    month: 'October',
    articles: [
        ARTICLE_SITE_IS_UP,
        {
            titleTimeline: `
<span>
    <span class="word mrn-3p">
        game
    </span>
    <span class="pre f-11 mrn-3p">
        S
    </span>
    <span class="word">
        crypt plans on launching next week
    </span>
</span>
            `,
            title: `
<span>
    <span class="word mrn-5px">
        game
    </span>
    <span class="pre mrn-5px">
        S
    </span>
    <span class="word">
        crypt plans on launching next week
    </span>
</span>
            `,
            shortDescription: 'Launch plans are confirmed, stay tuned for more information.',
            websiteTitle: 'Launch Plans for gameScrypt | Blog ↙ gamescrypt.com',
            keywords:  'Blog, gameScrypt, Launch Plans',
            base: 'gamescrypt-plans-launch',
            date: '10/15/2020'
        }
    ]
};
