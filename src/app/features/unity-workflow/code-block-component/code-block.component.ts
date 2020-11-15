import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';

@Component({
    selector: 'app-code-block',
    templateUrl: './code-block.component.html',
    styleUrls: ['./code-block.component.scss']
})
export class CodeBlockComponent implements OnChanges {

    @Input() code: string;
    @Input() showLineNr = true;
    codeLines: any;

    constructor(
    ) {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes) {
            if (_isNilOrEmpty(changes.code) === false
                && _isNilOrEmpty(changes.code.currentValue) === false) {
                this.setupCodeLines();
            }
        }
    }

    private setupCodeLines() {
        const re = /\r\n|\n\r|\n|\t|\r/g;
        const tab = RegExp('\\t', 'g');

        const lineStrings = this.code.replace(re, '\n').split('\n');
        let lineNr = 1;
        this.codeLines = lineStrings.map(codeLine => {
            const lineObj = {
                nr: lineNr,
                code: codeLine.replace(/ /g, '\u00a0')
            };
            lineNr++;
            return lineObj;
        });
        console.log('CodeBlockComponent -> setupCodeLines -> this.codeLines', this.codeLines);
    }
}
