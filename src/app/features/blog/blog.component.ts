import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { BLOG_ROUTE } from 'src/app/routes/blog/blog.seo';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../home-page/seo.service';
import { TimelineNode } from './articles/article.interfaces';
import { ArticleBank } from './articles/articleData/article.bank';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    bp: string;

    latestArticles: any[];

    treeControl = new FlatTreeControl<TimelineNode>(
        node => node.level, node => node.expandable);

    treeFlattener: any;
    dataSource: any;

    // tslint:disable-next-line: variable-name
    private _transformer = (node: TimelineNode, levelNr: number) => {
        return {
            expandable: !!node.children && node.children.length > 0,
            name: node.name,
            level: levelNr,
            base: node.base
        };
    }

    constructor(
        private appEventManager: AppEventManager,
        private onResizeService: OnResizeService,
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(BLOG_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(BLOG_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('max');

        this.latestArticles = ArticleBank.LatestArticles;
        this.treeFlattener = new MatTreeFlattener(
            this._transformer,
            node => node.level,
            node => node.expandable,
            node => node.children
        );
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = this.mapDataSource();
    }

    goToArticle(articleCode: string) {
        this.appEventManager.broadcast(
            new EventContent(EVENT.NAVIGATE, { goRoute: BLOG_ROUTE.base + '/' + articleCode })
        );
    }

    private mapDataSource() {
        const dataSource = [];
        ArticleBank.TimeLine.forEach(a => {
            const data = {
                name: a.year,
                children: []
            };
            a.months.forEach(m => {
                const monthData = {
                    name: m.month,
                    children: []
                };
                m.articles.forEach(mA => {
                    monthData.children.push({
                        name: mA.titleTimeline,
                        base: mA.base
                    });
                });
                data.children.push(monthData);
            });
            dataSource.push(data);
        });
        return dataSource;
    }

    hasChild = (_: number, node: TimelineNode) => node.expandable;
}
