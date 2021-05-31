import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { BACKGROUND_ROUTE } from 'src/app/routes/main/main.seo';
import { EventBusService } from 'src/app/shared/services/event-bus.service';
import { Evt, HEADER_TYPE } from 'src/app/shared/services/EventData';
import { SeoService } from '../../home-page/seo.service';
import { ABOUT_TERMS } from '../../policy/privacy-policy-docs/about-docs';

@Component({
    selector: 'app-background-cv',
    templateUrl: './background-cv.component.html',
    styleUrls: ['./background-cv.component.scss']
})
export class BackgroundComponent implements OnInit, OnChanges {

    ABOUT_POLICY: ABOUT_TERMS;
    reveal= false;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private eventBus: EventBusService
    ) {

        this.eventBus.emit({ event: Evt.HEADER_CHANGE, data: HEADER_TYPE.BACKGROUND_CV })
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(BACKGROUND_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(BACKGROUND_ROUTE.base));

        setTimeout(_ => {
            this.reveal = true;
        }, 100);
    }


    ngOnChanges(changes: SimpleChanges) {


    }


}
