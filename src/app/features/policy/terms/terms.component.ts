import { Component, OnInit } from '@angular/core';
import { SeoService } from '../../home-page/seo.service';
import { Title, Meta } from '@angular/platform-browser';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { PrivacyPolicy } from '../privacy-policy.doc';
import { DomSanitizer } from '@angular/platform-browser';
// import { PRIVACY_POLICY } from '../privacy-policy.doc';

@Component({
    selector: 'app-terms',
    templateUrl: './terms.component.html'
})
export class TermsComponent implements OnInit {

    // PRIVACY_POLICY_TERMS = PRIVACY_POLICY.TERMS;
    PRIVACY_POLICY_TERMS = new PrivacyPolicy(this.sanitized)._().TERMS;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private sanitized: DomSanitizer
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.TERMS));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.TERMS));
    }

}
