import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { NewUnityFile, NewUnityFile1, NewUnityFile2 } from './snippet-bank/new-unity-file';

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
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });

        this.onResizeService.emitScrollClassEvent('med');
    }

    ngOnInit() {
        this.snippetList.push(
            NewUnityFile,
            NewUnityFile1,
            NewUnityFile2,
            NewUnityFile,
            NewUnityFile1,
            NewUnityFile2,
            NewUnityFile,
            NewUnityFile1,
            NewUnityFile2
        );

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
