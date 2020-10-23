import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
// import { PRIVACY_POLICY } from 'src/app/features/policy/privacy-policy.doc';
import { PrivacyPolicy } from 'src/app/features/policy/privacy-policy.doc';
import { OnResizeService } from '../on-resize/on-resize.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    // PRIVACY_POLICY: PrivacyPolicy = PRIVACY_POLICY;
    PRIVACY_POLICY = new PrivacyPolicy(this.sanitized)._();
    bp: string;

    constructor(
        private onResizeService: OnResizeService,
        private sanitized: DomSanitizer
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.onResizeService.emitScrollClassEvent('max');
    }

}
