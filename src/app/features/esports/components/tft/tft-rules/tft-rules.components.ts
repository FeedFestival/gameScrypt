import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { ESPORTS_ROUTE, TFT_ROUTE } from 'src/app/routes/esports/esports.seo';
import { IColumn } from 'src/app/shared/models/column';
import { PageOptions } from 'src/app/shared/models/pageOptions';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { TFT_RULES } from './tft-rules';

@Component({
    selector: 'app-tft',
    templateUrl: './tft-rules.component.html',
    styleUrls: ['../../../esports.component.scss']
})
export class TftRulesComponent implements OnInit {

    backUrl = ESPORTS_ROUTE.base + '/' + TFT_ROUTE.base;
    bp: string;
    paging: PageOptions = new PageOptions(8);

    tftRules: any[];
    pointsData: any[];

    cols = this.getColumns();

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService,
        private onResizeService: OnResizeService
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(TFT_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TFT_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('med');

        this.tftRules = TFT_RULES.en;

        this.pointsData = [
            { place: 1, points: 10 },
            { place: 2, points: 8 },
            { place: 3, points: 6 },
            { place: 4, points: 4 },
            { place: 5, points: 3 },
            { place: 6, points: 3 },
            { place: 7, points: 2 },
            { place: 8, points: 1 },
        ];
        this.pointsData.forEach(pD => {
            pD.maxPoints = pD.points * 7;
        });
        this.paging.setupPagingByCount(this.pointsData);
    }

    getColumns(): IColumn[] {
        const columns = [
            {
                field: 'place', header: 'Place',
                style: { width: '60px' }
            },
            {
                field: 'points', header: 'Points',
                style: { width: '80px' }
            },
            {
                field: 'maxPoints', header: 'Max Points out of 7 Games',
                style: { width: '150px' }
            },
        ];
        return columns;
    }
}
