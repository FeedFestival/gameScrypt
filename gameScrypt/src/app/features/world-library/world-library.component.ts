import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { WORLD_LIBRARY_ROUTE } from 'src/app/routes/world-library/world-library.seo';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../home-page/seo.service';

@Component({
    selector: 'app-world-library',
    templateUrl: './world-library.component.html',
    styleUrls: [ './world-library.component.scss' ]
})
export class WorldLibraryComponent implements OnInit {

    bp: string;

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
        this.titleService.setTitle(this.seoService.getTitle(WORLD_LIBRARY_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(WORLD_LIBRARY_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('max');
    }

    goToCategory(route: string): void {
        this.appEventManager.broadcast(
            new EventContent(EVENT.NAVIGATE, { goRoute: WORLD_LIBRARY_ROUTE.base + '/' + route })
        );
    }
}
