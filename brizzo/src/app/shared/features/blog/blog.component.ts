import { FlatTreeControl } from '@angular/cdk/tree';
import { Component, OnInit } from '@angular/core';
import { MatTreeFlatDataSource, MatTreeFlattener } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { BLOG_ROUTE } from 'src/app/routes/blog/blog.seo';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { __getMonthName } from 'src/app/shared/utils';
import { SeoService } from '../home-page/seo.service';
import { TimelineNode, treeTransformer } from './articles/article.interfaces';
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
            treeTransformer,
            node => node.level,
            node => node.expandable,
            node => node.children
        );
        this.dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);
        this.dataSource.data = this.mapDataSource();
        this.expandCurrentArticles();
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
                children: [],
                dateNr: a.dateNr
            };
            a.months.forEach(m => {
                const monthData = {
                    name: m.month,
                    children: [],
                    dateNr: m.dateNr
                };
                m.articles.forEach(mA => {
                    monthData.children.push({
                        name: mA.titleTimeline,
                        base: mA.base,
                        dateNr: mA.dateNr
                    });
                });
                data.children.push(monthData);
            });
            dataSource.push(data);
        });
        return dataSource;
    }

    hasChild = (_: number, node: TimelineNode) => node.expandable;

    private expandCurrentArticles() {
        const date = new Date();
        const month = __getMonthName(date.getMonth());
        const yearIndex = this.treeControl.dataNodes.findIndex(dN => dN.name === date.getFullYear().toString());
        const monthIndex = this.treeControl.dataNodes.findIndex(dN => dN.name === month);
        this.tryExpandYear(yearIndex, monthIndex);
    }

    private tryExpandYear(yearIndex: number, monthIndex: number) {
        if (yearIndex >= 0) {
            this.treeControl.expand(this.treeControl.dataNodes[yearIndex]);
            this.tryExpandMonth(monthIndex);
        } else {
            const year = Math.max(...this.treeControl.dataNodes.filter(dN => dN.level === 0).map(dN => dN.dateNr));
            yearIndex = this.treeControl.dataNodes.findIndex(dN => dN.dateNr === year);
            this.treeControl.expand(this.treeControl.dataNodes[yearIndex]);
            this.tryExpandMonth();
        }
    }

    private tryExpandMonth(monthIndex: number = -1) {
        if (monthIndex >= 0) {
            this.treeControl.expand(this.treeControl.dataNodes[monthIndex]);
        } else {
            const monthNr = Math.max(...this.treeControl.dataNodes.filter(dN => dN.level === 1).map(dN => dN.dateNr));
            monthIndex = this.treeControl.dataNodes.findIndex(dN => dN.dateNr === monthNr);
            if (monthIndex >= 0) {
                this.treeControl.expand(this.treeControl.dataNodes[monthIndex]);
            }
        }
    }
}
