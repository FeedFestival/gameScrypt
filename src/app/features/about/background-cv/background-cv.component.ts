import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
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
export class BackgroundComponent implements OnInit, AfterViewInit {

    ABOUT_POLICY: ABOUT_TERMS;
    reveal = false;

    cv = [];

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
    }

    ngAfterViewInit() {
        setTimeout(_ => {
            this.initCv();
        });
    }

    initCv() {

        setTimeout(_ => {
            this.cv = [
                {
                    id: 0,
                },
                {
                    id: 1,
                },
                {
                    id: 2,
                },
            ];


            for (var i = 0; i < 3; i++) {
                this.cv[i].clEl = document.querySelector('#cl-' + this.cv[i].id);
                this.cv[i].ccEl = document.querySelector('#cc-' + this.cv[i].id);
                this.cv[i].crEl = document.querySelector('#cr-' + this.cv[i].id);
            }

            // first row
            let row = this.cv[0];

            let clH = row.clEl ? row.clEl.offsetHeight : 0;
            let crH = row.clEl ? row.crEl.offsetHeight : 0;
            let sizes = [clH, crH];

            row.style = {};
            row.style.height = Math.max.apply(Math, sizes) + 'px';



            setTimeout(_ => {
                this.reveal = true;
            }, 100);
        }, 100);
    }

}
