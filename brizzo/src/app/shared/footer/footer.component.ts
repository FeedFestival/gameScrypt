import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { PrivacyPolicy } from '../features/policy/privacy-policy.doc';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    learningArticles: any[] = [];
    ABOUT_POLICY = new PrivacyPolicy(this.sanitized)._().ABOUT.en;
    bp: string = '';

    constructor(
        // private onResizeService: OnResizeService,
        private sanitized: DomSanitizer
    ) {
        // onResizeService.getResizeEvent()
        //     .subscribe((bp) => {
        //         this.bp = bp;
        //     });
    }

    ngOnInit() {
        // this.onResizeService.emitScrollClassEvent('max');
    }

}
