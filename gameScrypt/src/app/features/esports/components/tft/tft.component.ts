import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { ESPORTS_ROUTE, TFT_ROUTE } from 'src/app/routes/esports/esports.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-tft',
    templateUrl: './tft.component.html',
    // styleUrls: ['./esports.component.scss']
})
export class TftComponent implements OnInit {

    bp: string;
    TFT_ROUTE = TFT_ROUTE;

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
    }
}
