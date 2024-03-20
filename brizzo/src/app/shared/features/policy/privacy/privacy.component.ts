import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { SeoService } from '../../home-page/seo.service';
import { Title, Meta, DomSanitizer } from '@angular/platform-browser';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { PrivacyPolicy } from '../privacy-policy.doc';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { COUNTRIES } from 'src/app/app.constants';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { _isNil, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { ActivatedRoute } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { PRIVACY_TERMS } from '../privacy-policy-docs/privacy-docs';

@Component({
    selector: 'app-privacy',
    templateUrl: './privacy.component.html'
})
export class PrivacyComponent implements OnInit, OnChanges {

    @Input() languageLogic = true;
    @Input() lang: string;

    langDecided = false;
    PRIVACY_POLICY: PRIVACY_TERMS;

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

        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.PRIVACY));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.PRIVACY));
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (_isNil(changes.lang) === false && _isNil(changes.lang.currentValue) === false) {
                this.PRIVACY_POLICY = new PrivacyPolicy(this.sanitized)._().PRIVACY[this.lang];
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
        if (navigate) {
            this.appEventManager.broadcast(new EventContent(EVENT.NAVIGATE, {
                goRoute: TERMS_PRIVACY.PRIVACY + (lang === COUNTRIES.OTHER.lang ? '' : '/ro')
            }));
        } else {
            this.lang = lang;
            this.PRIVACY_POLICY = new PrivacyPolicy(this.sanitized)._().PRIVACY[lang];
        }
    }
}
