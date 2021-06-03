import { Component, OnDestroy, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MAIN_ROUTE } from 'src/app/routes/main/main.seo';
import { _orderBy } from 'src/app/shared/lodash-utils';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { ArticleBank } from '../blog/articles/articleData/article.bank';
import { News } from '../news/news';
import { SeoService } from './seo.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

    bp: string;
    showcaseCompetition: boolean;
    news: News[];

    private unsubscribe$ = new Subject<void>();

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(MAIN_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(MAIN_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('max');

        this.showcaseCompetition = false;
        this.news = [
            ...ArticleBank.LatestArticles.map(this.mapArticleToNews)
        ];

        this.news = _orderBy(this.news, (o) => {
            return o.dateNr;
        }, ['desc']);
    }

    private mapArticleToNews = (a): News => {
        return {
            pic: a.mainPic,
            name: a.shortTitle,
            shortDescription: a.shortDescription,
            date: a.date,
            redirect: a.base,
            category: a.category,
            dateNr: a.dateNr
        };
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
