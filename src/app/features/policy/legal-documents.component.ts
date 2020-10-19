import { Component, OnInit } from '@angular/core';
import { SeoService } from '../home-page/seo.service';
import { Title, Meta } from '@angular/platform-browser';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';

@Component({
    selector: 'app-legal-documents',
    templateUrl: './legal-documents.component.html'
})
export class LegalDocsComponent implements OnInit {

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.LEGAL));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.LEGAL));
    }
}
