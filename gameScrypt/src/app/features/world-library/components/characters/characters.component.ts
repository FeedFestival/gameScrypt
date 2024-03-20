import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { WORLD_LIBRARY_CHARACTERS_ROUTE, WORLD_LIBRARY_ROUTE } from 'src/app/routes/world-library/world-library.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
// import * as Vibrant from 'Vibrant';
declare var Vibrant: any;

@Component({
    selector: 'app-characters',
    templateUrl: './characters.component.html',
    styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {

    backUrl = WORLD_LIBRARY_ROUTE.base;
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
        this.titleService.setTitle(this.seoService.getTitle(WORLD_LIBRARY_CHARACTERS_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(WORLD_LIBRARY_CHARACTERS_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('med');
    }
}
