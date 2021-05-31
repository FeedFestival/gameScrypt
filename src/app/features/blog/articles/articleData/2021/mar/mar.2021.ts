import { Article, ARTICLE_CATEGORY, TimelineMonth } from '../../../article.interfaces';

export const ARTICLE_BLENDER_ROCKS_GEOMETRY_NODES: Article = {
    base: 'blender-procedural-rocky',
    shortTitle: 'Blender - Procedural Rocky Desert',
    titleTimeline: `
<span class="pre f-11">
B
</span>
<span class="word">
lender - Procedural Rocky Desert
</span>
        `,
    title: `
<span class="pre">
B
</span>
<span class="word">
lender - Procedural Rocky Desert
</span>
        `,
    mainPic: 'assets/images/blog/2021/mar/pic1.jpg',
    shortDescription: 'Timelapse of procedural generation of a rocky desert in Blender 2.92. Have fun watching it.',
    description: `
<div class="col-12 mt-4">
    <p class="word-justify f-1rem">
        <span class="p-tab">
            The
        </span> brand new Geometry Nodes are out now with Blender 2.92.
        They are no longer experimental, they are ready to be functionally tested by all of us.
        I played around a bit with it and I must say I want to play with it some more.
    </p>
</div>
<div class="col-12 mt-3">
    <h4 class="pl-3">
        Point Distribute is Magic
    </h4>
</div>
<div class="col-12">
    <p class="word-justify f-1rem">
        <span class="p-tab">
            I
        </span> created a random land by using Displace on a Clouds Texture.
        I Fast modeled a rock then used the Point Distribute node to place that rock in random places(rotations) on the ground.
        Made a sun, colored the sky blue and there you go my kinder garden scenery is complete 😂)).
    </p>
    <p class="word-justify f-1rem">
        <span class="p-tab">
            Have
        </span> fun in watching the Timelapse of this rocky desert ⬇.
    </p>
</div>
    `,
    websiteTitle: 'Blender - Procedural Rocky Desert | Blog ↙ gamescrypt.com',
    keywords: 'Blog, gameScrypt, Site, Up',
    category: ARTICLE_CATEGORY.BLOG,
    date: '03/04/2021',
    dateNr: 20210304,
    parts: [
        {
            text: `
<div class="col-12">

    <div class="col-12 mt-3">
        <h4 class="pl-3">
            Blender - Procedural Rocky Desert | 2.92 [TIMELAPSE]
        </h4>
    </div>
    <div class="justify-content-center text-center">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/Mi-vttbw_Jw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
</div>
            `
        }  
    ]
};

export const mar2021: TimelineMonth = {
    month: 'March',
    articles: [
        ARTICLE_BLENDER_ROCKS_GEOMETRY_NODES,
    ],
    dateNr: 202103
};
