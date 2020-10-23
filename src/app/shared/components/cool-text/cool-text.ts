import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ɵangular_packages_platform_browser_platform_browser_j } from '@angular/platform-browser';
import { _isNilOrEmpty } from '../../lodash-utils';
/* tslint:disable */
@Component({
    selector: 'cool-text',
    templateUrl: './cool-text.html',
    styleUrls: ['./cool-text.scss']
})
export class CoolText implements OnChanges {

    @Input() pre: string;
    @Input() word: string;
    @Input() suffix: string;

    @Input() full: 'gameScrypt';

    @Input() size: 'normal' | 'h3' = 'normal';
    @Input() fontForce: 'default' | 'roboto' = 'default';

    hasFull = false;
    fullPre: string;
    fullWord: string;
    fullSuffix: string;

    hasPre = false;
    hasWord = false;
    hasSuffix = false;
    isGamescrypt = false;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (_isNilOrEmpty(changes.full) === false && _isNilOrEmpty(changes.full.currentValue) === false) {
                this.hasFull = true;
                switch (this.full) {
                    case 'gameScrypt':
                    default:
                        this.isGamescrypt = true;
                        this.fullPre = 'game';
                        this.fullWord = 'S';
                        this.fullSuffix = 'crypt';
                        break;
                }

                this.hasPre = false;
                this.hasWord = false;
                this.hasSuffix = false;
            }
            if (_isNilOrEmpty(changes.pre) === false && _isNilOrEmpty(changes.pre.currentValue) === false) {
                this.hasPre = true;
            }
            if (_isNilOrEmpty(changes.word) === false && _isNilOrEmpty(changes.word.currentValue) === false) {
                this.hasWord = true;
            }
            if (_isNilOrEmpty(changes.suffix) === false && _isNilOrEmpty(changes.suffix.currentValue) === false) {
                this.hasSuffix = true;
            }
        }
    }
}
