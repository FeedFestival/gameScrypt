import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/app/app.constants';
import { AppService } from 'src/app/app.service';
import { ABOUT_ROUTE } from 'src/app/routes/main/main.seo';
import { PageDialogComponent } from 'src/app/shared/components/page-dialog/page-dialog.component';
import { _isNil, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { SeoService } from '../home-page/seo.service';
import { ABOUT_TERMS } from '../policy/privacy-policy-docs/about-docs';
import { PrivacyPolicy } from '../policy/privacy-policy.doc';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnChanges {

    @Input() inDialog = false;
    @Input() matDialogRef: MatDialogRef<PageDialogComponent>;
    @Input() languageLogic = true;
    @Input() lang: string;

    langDecided = false;
    ABOUT_POLICY: ABOUT_TERMS;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private sanitized: DomSanitizer,
        private appEventManager: AppEventManager,
        private activatedRoute: ActivatedRoute,
        private appService: AppService
    ) { }

    ngOnInit() {
        if (this.languageLogic === false) {
            return;
        }
        this.activatedRoute.data.subscribe(data => {
            this.lang = _isNilOrEmpty(data.lang) ? COUNTRIES.OTHER.lang : data.lang;
            this.changeLang(this.lang, false);
        });
        this.appService.getLangEvent().subscribe(this.onLangLoaded);

        this.titleService.setTitle(this.seoService.getTitle(ABOUT_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(ABOUT_ROUTE.base));
    }


    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (_isNil(changes.lang) === false && _isNil(changes.lang.currentValue) === false) {
                this.ABOUT_POLICY = new PrivacyPolicy(this.sanitized)._().ABOUT[this.lang];
            }
        }
    }

    onLanguageChosen(eventLang) {
        if (this.languageLogic === false) {
            return;
        }
        this.appService.setLang(eventLang);
        this.changeLang(eventLang);
    }

    private onLangLoaded = (codeLang) => {
        if (this.lang !== codeLang && this.langDecided === false) {
            this.langDecided = true;
            this.changeLang(codeLang);
        }
    }

    private changeLang(lang, navigate: boolean = true) {
        if (this.languageLogic === false) {
            return;
        }
        if (navigate && this.inDialog === false) {
            this.appEventManager.broadcast(new EventContent(EVENT.NAVIGATE, {
                goRoute: ABOUT_ROUTE.base + (lang === COUNTRIES.OTHER.lang ? '' : '/ro')
            }));
        } else {
            this.lang = lang;
            this.ABOUT_POLICY = new PrivacyPolicy(this.sanitized)._().ABOUT[lang];
        }
    }
}
