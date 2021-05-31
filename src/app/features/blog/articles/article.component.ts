import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { BLOG_ROUTE } from 'src/app/routes/blog/blog.seo';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
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

    backUrl = BLOG_ROUTE.base;
    bp: string;
    article: Article;

    constructor(
        private activatedRoute: ActivatedRoute,
        private onResizeService: OnResizeService,
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService,
        private sanitized: DomSanitizer,
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

        if (_isNilOrEmpty(this.article.description)) {
            this.article.description = this.article.shortDescription;
        }
        this.article.description = this.sanitized.bypassSecurityTrustHtml(this.article.description as string);

        if (_isNilOrEmpty(this.article.parts) === false) {
            this.article.parts
                .forEach(p => {
                    p.text = this.sanitized.bypassSecurityTrustHtml(p.text);
                });
        }

    }
}
