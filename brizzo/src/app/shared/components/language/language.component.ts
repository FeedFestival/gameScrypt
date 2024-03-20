import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { _isNil, _isNilOrEmpty } from '../../lodash-utils';

@Component({
    selector: 'app-language',
    templateUrl: './language-component.html',
    styleUrls: ['./language-component.scss']
})
export class LanguageComponent implements OnChanges {

    @Input() lang: 'en' | 'ro' = 'en';
    @Output() languageChanged: EventEmitter<string> = new EventEmitter<string>();

    isEnglishSelected = true;

    constructor() { }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (_isNil(changes.lang) === false && _isNil(changes.lang.currentValue) === false) {
                this.isEnglishSelected = this.lang === 'en';
            }
        }
    }

    onLanguageChosen(lang: 'en' | 'ro') {
        this.lang = lang;
        this.isEnglishSelected = this.lang === 'en';
        this.languageChanged.emit(this.lang);
    }
}
