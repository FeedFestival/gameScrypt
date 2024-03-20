import { Component, Input, OnInit } from '@angular/core';
import { SeoService } from '../home-page/seo.service';
import { Title, Meta } from '@angular/platform-browser';
import { CONTACT_ROUTE } from 'src/app/routes/main/main.seo';
import { MatDialogRef } from '@angular/material';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

    @Input() inDialog: boolean;
    @Input() matDialogRef: MatDialogRef<PageDialogComponent>;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
    ) { }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(CONTACT_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(CONTACT_ROUTE.base));
    }

}
