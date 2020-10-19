import { Component, OnDestroy, OnInit, QueryList, ViewChildren } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ElementType } from 'src/app/app.constants';
import { MAIN_ROUTE } from 'src/app/routes/main/main.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from './seo.service';

@Component({
    selector: 'app-home-page',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, OnDestroy {

    ElementTypeRef = ElementType;

    story: any;
    elements: any[];
    currentElement: any;

    editState: string;

    bp: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .pipe(takeUntil(this.unsubscribe$))
            .subscribe((bp) => {
                this.bp = bp;
            });
        this.onResizeService.emitScrollClassEvent('max');
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(MAIN_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(MAIN_ROUTE.base));
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
