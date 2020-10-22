import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { PZ_ROUTE } from 'src/app/routes/esports/esports.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-pz',
    templateUrl: './pz.component.html',
    // styleUrls: ['./esports.component.scss']
})
export class PzComponent implements OnInit {

    bp: string;

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
        this.titleService.setTitle(this.seoService.getTitle(PZ_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(PZ_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('med');
    }
}
