import { Component, OnInit } from '@angular/core';
import { SeoService } from '../home-page/seo.service';
import { Title, Meta } from '@angular/platform-browser';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { PrivacyPolicy } from './privacy-policy.doc';
import { DomSanitizer } from '@angular/platform-browser';
// import { PRIVACY_POLICY } from './privacy-policy.doc';

@Component({
    selector: 'app-legal-documents',
    templateUrl: './legal-documents.component.html'
})
export class LegalDocsComponent implements OnInit {

    // LEGAL_DOCUMENTS_ADVERTISING = PRIVACY_POLICY.LEGAL_DOCUMENTS_ADVERTISING;
    LEGAL_DOCUMENTS_ADVERTISING = new PrivacyPolicy(this.sanitized)._().LEGAL_DOCUMENTS_ADVERTISING;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private sanitized: DomSanitizer
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.LEGAL));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.LEGAL));
    }
}
