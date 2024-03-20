import { Component, Input, ViewEncapsulation } from '@angular/core';
import { IColumn } from '../../models/column';


@Component({
    // tslint:disable-next-line: component-selector
    selector: '[app-table-header]',
    templateUrl: './table-header.component.html',
    encapsulation: ViewEncapsulation.None
})
export class TableHeaderComponent {

    @Input() columns: IColumn[];

    constructor() { }
}
