import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../../home-page/seo.service';
import { Article } from './article.interfaces';
import { ARTICLES } from './articleData/articles';

@Component({
    selector: 'app-article',
    templateUrl: './article.component.html',
    styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

    bp: string;
    article: Article;

    constructor(
        private router: Router,
        private activatedRoute: ActivatedRoute,
        private onResizeService: OnResizeService,
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });

        this.activatedRoute.data.subscribe(data => {
            this.article = ARTICLES.getArticle(data.codeBase);
            this.init();
        });
    }

    ngOnInit() {
        this.onResizeService.emitScrollClassEvent('med');
    }

    init() {
        this.titleService.setTitle(this.seoService.getTitle(this.article.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(this.article.base));
    }
}
