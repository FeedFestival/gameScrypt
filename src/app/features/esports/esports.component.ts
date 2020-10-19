import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ESPORTS_ROUTE } from 'src/app/routes/esports/esports.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../home-page/seo.service';

@Component({
    selector: 'app-esports',
    templateUrl: './esports.component.html',
    styleUrls: ['./esports.component.scss']
})
export class EsportsComponent implements OnInit {

    bp: string;

    constructor(
        private router: Router,
        private onResizeService: OnResizeService,
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });

        this.onResizeService.emitScrollClassEvent('max');
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(ESPORTS_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(ESPORTS_ROUTE.base));
    }

    goToLadder(route: string): void {
        this.router.navigateByUrl('/esports/' + route);
    }
}
