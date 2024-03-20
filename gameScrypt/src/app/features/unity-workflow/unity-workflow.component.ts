import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { UNITY_ROUTE } from 'src/app/routes/unity-workflow/unity.seo';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../home-page/seo.service';
import { NewUnityFile, percent_utils } from './snippet-bank/new-unity-file';
import { UnitHeadStart } from './snippet-bank/unity-head-start';
import { CREATE_FROM_PREFAB, GET_DIRECTION, GET_MID_POINT_OFFSET, GET_PONIT_HIT_AT_MOUSE_POSITION, SMOOTH_LOOK } from './snippet-bank/unity-world-functions';

@Component({
    selector: 'app-unity-workflow',
    templateUrl: './unity-workflow.component.html',
    styleUrls: ['./unity-workflow.component.scss']
})
export class UnityWorkflowComponent implements OnInit {

    bp: string;

    searchText: string;

    // MatPaginator Output
    paging: {
        length?: number,
        pageIndex?: number,
        pageSize?: number,
        pageSizeOptions?: number[],
        showFirstLastButtons?: boolean
    } = {
            length: 1,
            pageIndex: 0,
            pageSize: 10,
            pageSizeOptions: [5, 10, 25, 100],
            showFirstLastButtons: true
        };

    currentSnippets: any[] = [];
    searchedList: any[] = [];
    snippetList: any[] = [];

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {

        this.onResizeService.emitScrollClassEvent('med');

        this.titleService.setTitle(this.seoService.getTitle(UNITY_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(UNITY_ROUTE.base));

        this.snippetList.push(
            NewUnityFile,
            UnitHeadStart,
            GET_PONIT_HIT_AT_MOUSE_POSITION,
            GET_MID_POINT_OFFSET,
            SMOOTH_LOOK,
            GET_DIRECTION,
            CREATE_FROM_PREFAB,
            percent_utils
        );
        this.snippetList.forEach(s => {
            s.hasCode = _isNilOrEmpty(s.code) === false;
        });

        this.filterSnippets();
    }

    onPageChange($event) {
        this.paging = {
            ...this.paging,
            ...$event
        };
        this.filterSnippets();
    }

    filterSnippets() {

        if (this.searchText && this.searchText.length > 0) {
            this.searchedList = this.snippetList.filter(s => {
                return s.name.indexOf(this.searchText) >= 0;
            });
        } else {
            this.searchedList = JSON.parse(JSON.stringify(this.snippetList));
        }

        this.paging.length = this.searchedList.length;
        this.pageSnippets();
    }

    pageSnippets() {
        this.currentSnippets = this.searchedList.slice(this.paging.pageIndex * this.paging.pageSize,
            this.paging.pageIndex * this.paging.pageSize + this.paging.pageSize);
    }
}
