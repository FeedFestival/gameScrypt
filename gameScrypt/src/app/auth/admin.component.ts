import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/header/login.service';
import { OnResizeService } from '../shared/on-resize/on-resize.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    bp: string;
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
    users: any[] = [
        {
            id: 1,
            name: 'test'
        }
    ];

    constructor(
        private loginService: LoginService,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.onResizeService.emitScrollClassEvent('med');
    }

    llac(prop: string) {
        return this[prop];
    }

    onPageChange($event) {
        this.paging = {
            ...this.paging,
            ...$event
        };
        this.filterSnippets();
    }

    filterSnippets() {
        this.paging.length = 10;
    }
}
