import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { COUNTRIES } from 'src/app/app.constants';
import { AppService } from 'src/app/app.service';
import { TERMS_PRIVACY } from 'src/app/routes/termsAndPrivacy/termsAndPrivacy.seo';
import { _isNil, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { SeoService } from '../../home-page/seo.service';
import { SNS_T } from '../privacy-policy-docs/sns-docs';
import { PrivacyPolicy } from '../privacy-policy.doc';

@Component({
    selector: 'app-sns',
    templateUrl: './sns.component.html'
})
export class SnsComponent implements OnInit, OnChanges {

    @Input() languageLogic = true;
    @Input() lang: string;

    langDecided = false;
    PRIVACY_POLICY_SNS: SNS_T;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private appEventManager: AppEventManager,
        private activatedRoute: ActivatedRoute,
        private appService: AppService,
        private sanitized: DomSanitizer
    ) {
    }

    ngOnInit() {
        if (this.languageLogic === false) {
            return;
        }
        this.activatedRoute.data.subscribe(data => {
            this.lang = _isNilOrEmpty(data.lang) ? COUNTRIES.OTHER.lang : data.lang;
            this.changeLang(this.lang, false);
        });
        this.appService.getLangEvent().subscribe(this.onLangLoaded);

        this.titleService.setTitle(this.seoService.getTitle(TERMS_PRIVACY.SNS));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(TERMS_PRIVACY.SNS));
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {
            if (_isNil(changes.lang) === false && _isNil(changes.lang.currentValue) === false) {
                this.PRIVACY_POLICY_SNS = new PrivacyPolicy(this.sanitized)._().SNS[this.lang];
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
                goRoute: TERMS_PRIVACY.SNS + (lang === COUNTRIES.OTHER.lang ? '' : '/ro')
            }));
        } else {
            this.lang = lang;
            this.PRIVACY_POLICY_SNS = new PrivacyPolicy(this.sanitized)._().SNS[lang];
        }
    }
}
