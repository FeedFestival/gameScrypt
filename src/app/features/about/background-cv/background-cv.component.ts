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

    firstRow = {
        startLineH: 1,
        lineH: 1
    };

    f5LeftBarConnectedToTimelineHeight: number;

    smartDeviation = {
        connLine: 1,
        connCurveTop: 1,
        height: 10
    };

    smartMeet = {
        height: 10
    };

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
                {id: 0},
                {id: 1},
                {id: 2},
                {id: 3},
            ];


            for (var i = 0; i < 4; i++) {
                this.cv[i].clEl = document.querySelector('#cl-' + this.cv[i].id);
                this.cv[i].ccEl = document.querySelector('#cc-' + this.cv[i].id);
                this.cv[i].crEl = document.querySelector('#cr-' + this.cv[i].id);
            }

            // first row
            let row = this.cv[0];

            let clH = row.clEl ? row.clEl.offsetHeight : 0;
            let crH = row.crEl ? row.crEl.offsetHeight : 0;
            let sizes = [clH, crH];

            let ccH = Math.min.apply(Math, sizes);
            this.firstRow.startLineH = ccH;
            this.firstRow.lineH = clH - crH;

            // second row - F5 IT SOLUTIONS
            let diff = ccH - crH;
            this.f5LeftBarConnectedToTimelineHeight = diff + 15;

            setTimeout(_ => {

                this.setupSmartDeviation();

                this.setupSmartMeet();

                setTimeout(_ => {
                    this.reveal = true;
                }, 100);
            }, 10);
        }, 100);
    }

    private setupSmartDeviation() {
        const timeSpanPos = this.getYPos('timespan-1');
        const smartDeviationRow = this.cv[2];
        const crEl3Pos = this.getYPos(null, smartDeviationRow.crEl);
        const diff = crEl3Pos - timeSpanPos;
        let top = 40;
        this.smartDeviation.connLine = diff + 25;
        this.smartDeviation.connCurveTop = diff + top + 25;
        this.smartDeviation.height = smartDeviationRow.crEl.offsetHeight + 15;
    }

    private setupSmartMeet() {
        const smartMeetRow = this.cv[3];
        this.smartMeet.height = smartMeetRow.crEl.offsetHeight - 20 - 40  + 15;
    }

    private getYPos(id: string, el?: any) {
        if (!el) {
            el = document.querySelector('#' + id);
        }
        return window.scrollY + el.getBoundingClientRect().top // Y
    }
}
