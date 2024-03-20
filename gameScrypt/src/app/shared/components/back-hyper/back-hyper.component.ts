import { Component, Input, OnChanges, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { IColumn } from '../../models/column';


@Component({
    // tslint:disable-next-line: component-selector
    selector: 'back-hyperlink',
    templateUrl: './back-hyper.component.html',
    styleUrls: [ './back-hyper.component.scss' ],
    encapsulation: ViewEncapsulation.None
})
// tslint:disable-next-line: component-class-suffix
export class BackHyperlink implements OnChanges {

    @Input() url = '';
    @Input() relativeUrl;
    usingRelative = false;

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (changes.url && changes.url.currentValue) {
                if (this.url[0] !== '/') {
                    this.url = '/' + this.url;
                }
            }

            if (changes.relativeUrl && changes.relativeUrl.currentValue) {
                this.usingRelative = true;
            }
        }
    }
}
