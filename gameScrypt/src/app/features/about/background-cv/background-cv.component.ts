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
    f5It = {
        timespanHeight: 1
    };
    smartDeviation = {
        connLine: 1,
        connCurveTop: 1,
        height: 10
    };
    smartMeet = {
        height: 10
    };
    sekal = {
        timespanLineHeight: 60
    }
    leanWay = {
        timespanHeight: 1
    };
    smartfood = {
        timespanHeight: 1
    };
    smartFarm = {
        timespanHeight: 1
    }
    tracOnline = {
        topTimespanHeight: 1,
        connLine: 1,
        connCurveTop: 1
    };
    quipFinder = {
        topTimespanHeight: 1
    };
    smartManagement = {
        timespanHeight: 1,
        lowTimespanHeight: 20
    };
    mindit = {
        margin: 1
    };
    dufry = {
        timespanHeight: 1,
        connLine: 20,
        connCurveTop: 20
    }
    dufryQuantity = {
        margin: 1
    };
    solutionX = {
        timespanHeight: 1
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
            this.cv = [];
            const length = 14;
            for (var i = 0; i <= length; i++) {
                this.cv.push({ id: i });
            }
            for (var i = 0; i <= length; i++) {
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

            setTimeout(_ => {

                this.setupF5It();

                setTimeout(_ => {

                    this.setupSmartDeviation();

                    setTimeout(_ => {

                        this.setupSmartMeet();

                        setTimeout(_ => {

                            this.setupSekal();

                            setTimeout(_ => {

                                this.setupLeanWay();

                                setTimeout(_ => {

                                    this.setupSmartFood();

                                    setTimeout(_ => {

                                        this.setupSmartFarm();

                                        setTimeout(_ => {

                                            this.setupTracOnline();

                                            setTimeout(_ => {

                                                this.setupQuipFinder();

                                                setTimeout(_ => {

                                                    this.setupSmartManagement();

                                                    setTimeout(_ => {

                                                        this.setupMindit();

                                                        setTimeout(_ => {

                                                            this.setupDufryPmp();

                                                            setTimeout(_ => {

                                                                this.setupDufryQuantity();

                                                                setTimeout(_ => {

                                                                    this.setupSolutionX();

                                                                    setTimeout(_ => {
                                                                        this.reveal = true;
                                                                    }, 10);
                                                                }, 10);
                                                            }, 10);
                                                        }, 10);
                                                    }, 10);
                                                }, 10);
                                            }, 10);
                                        }, 10);
                                    }, 10);
                                }, 10);
                            }, 10);
                        }, 10);
                    }, 10);
                }, 10);
            }, 10);
        }, 100);
    }

    private setupF5It() {

        const f5itRow = this.cv[1];

        const rightHeight = f5itRow.crEl.offsetHeight;

        this.f5It.timespanHeight = rightHeight - 20 - 40 + 15;
    }

    private setupSmartDeviation() {
        const timeSpanPos = this.getYPos('timespan-1');
        const smartDeviationRow = this.cv[2];
        const crEl3Pos = this.getYPos(null, smartDeviationRow.crEl);
        const diff = Math.abs(crEl3Pos - timeSpanPos);
        let top = 40;
        this.smartDeviation.connLine = diff + 25;
        this.smartDeviation.connCurveTop = diff + top + 25;
        this.smartDeviation.height = smartDeviationRow.crEl.offsetHeight + 15;
    }

    private setupSmartMeet() {
        const smartMeetRow = this.cv[3];
        this.smartMeet.height = smartMeetRow.crEl.offsetHeight - 20 - 40 + 15;
    }

    private setupSekal() {
        const sekalRow = this.cv[4];
        const timeSpanPos = this.getYPos('timespan-6');
        const clEl5Pos = this.getYPos(null, sekalRow.clEl);
        this.sekal.timespanLineHeight = Math.abs(clEl5Pos - timeSpanPos);
    }

    private setupLeanWay() {
        const leanWayRow = this.cv[5];
        const centerPos = this.getYPos(null, leanWayRow.ccEl);
        const rightPos = this.getYPos(null, leanWayRow.crEl);
        this.leanWay.timespanHeight = Math.abs(rightPos - centerPos) - 20 - 40;
    }

    private setupSmartFood() {
        const smartfoodRow = this.cv[5];
        const centerRow = this.cv[6];
        const centerPos = this.getYPos(null, centerRow.ccEl);
        const leftPos = this.getYPos(null, smartfoodRow.clEl);
        this.smartfood.timespanHeight = Math.abs(leftPos - centerPos) - 20 - 40;
    }

    private setupSmartFarm() {
        const smartFarmRow = this.cv[6];
        const centerRow = this.cv[7];
        const centerPos = this.getYPos(null, centerRow.ccEl);
        const rightPos = this.getYPos(null, smartFarmRow.crEl);
        this.smartFarm.timespanHeight = Math.abs(rightPos - centerPos) - 20 - 40;
    }

    private setupTracOnline() {
        const tracRow = this.cv[6];
        const centerRow = this.cv[9];

        const centerPos = this.getYPos(null, centerRow.ccEl);
        const leftPos = this.getYPos(null, tracRow.clEl);

        this.tracOnline.topTimespanHeight = Math.abs(leftPos - centerPos) - 20 - 40;

        this.tracOnline.connLine = 20 + 40;
        this.tracOnline.connCurveTop = this.tracOnline.connLine + 40;
    }

    private setupQuipFinder() {
        const quipRow = this.cv[7];
        const tracRow = this.cv[6];

        const leftPos = this.getYPos(null, tracRow.clEl);
        const rightPos = this.getYPos(null, quipRow.crEl);

        this.quipFinder.topTimespanHeight = Math.abs(rightPos - leftPos) + 20;
    }

    private setupSmartManagement() {
        const smartManagementRow = this.cv[7];
        const centerRow = this.cv[10];

        const leftPos = this.getYPos(null, smartManagementRow.clEl);
        const centerPos = this.getYPos(null, centerRow.ccEl);

        this.smartManagement.timespanHeight = Math.abs(centerPos - leftPos) - 40 - this.quipFinder.topTimespanHeight;

        const leftHeight = smartManagementRow.clEl.offsetHeight;
        const firstCenterRow = this.cv[11];
        const firstCenterHeight = firstCenterRow.ccEl.offsetHeight;
        const secondCenterRow = this.cv[12];
        const secondCenterHeight = secondCenterRow.ccEl.offsetHeight;

        this.smartManagement.lowTimespanHeight = leftHeight - firstCenterHeight - secondCenterHeight + 20;
    }

    private setupMindit() {
        const minditRow = this.cv[8];
        const centerRow = this.cv[12];

        const rightPos = this.getYPos(null, minditRow.crEl);
        const centerPos = this.getYPos(null, centerRow.ccEl);

        this.mindit.margin = Math.abs(centerPos - rightPos);
    }

    private setupDufryPmp() {

        const dufryPmpRow = this.cv[9];
        const centerRow = this.cv[12];

        const rightPos = this.getYPos(null, dufryPmpRow.crEl);
        const centerPos = this.getYPos(null, centerRow.ccEl);
        const rightHeight = dufryPmpRow.crEl.offsetHeight / 2;

        this.dufry.timespanHeight = Math.abs(centerPos - rightPos) - 40 - 20 + rightHeight - 20;

        const minditRow = this.cv[8];
        const marginBetween = 15;
        const rightConnectingLine = 25;
        const minditHeight = minditRow.crEl.offsetHeight;
        this.dufry.connLine = minditHeight - 20 - 40 + marginBetween + rightConnectingLine;
        this.dufry.connCurveTop = this.dufry.connLine + 40;

    }

    private setupDufryQuantity() {

        const dufryQuantityRow = this.cv[8];
        const centerRow = this.cv[13];

        const letfPos = this.getYPos(null, dufryQuantityRow.clEl);
        const centerPos = this.getYPos(null, centerRow.ccEl);

        this.dufryQuantity.margin = Math.abs(centerPos - letfPos);
    }

    private setupSolutionX() {

        const solutionRow = this.cv[9];
        const centerRow = this.cv[13];

        const rightPos = this.getYPos(null, solutionRow.crEl);
        const centerPos = this.getYPos(null, centerRow.ccEl);

        this.solutionX.timespanHeight = Math.abs(centerPos - rightPos) - 2;
    }

    private getYPos(id: string, el?: any) {
        if (!el) {
            el = document.querySelector('#' + id);
        }
        return window.scrollY + el.getBoundingClientRect().top // Y
    }
}
