import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { SeoService } from '../../home-page/seo.service';

@Component({
    selector: 'app-cookies',
    templateUrl: './cookies.component.html'
})
export class CookiesComponent implements OnInit {

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.COOKIES));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.COOKIES));
    }

}
