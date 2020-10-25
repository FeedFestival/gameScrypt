import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ArticleBank } from 'src/app/features/blog/articles/articleData/article.bank';
// import { PRIVACY_POLICY } from 'src/app/features/policy/privacy-policy.doc';
import { PrivacyPolicy } from 'src/app/features/policy/privacy-policy.doc';
import { OnResizeService } from '../on-resize/on-resize.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    learningArticles = ArticleBank.LearningArticles;
    ABOUT_POLICY = new PrivacyPolicy(this.sanitized)._().ABOUT.en;
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

        this.learningArticles = ArticleBank.LearningArticles.map(a => ({
            ...a,
            isPlaceholder: false
        }));
        const countTillFull = 5 - this.learningArticles.length;
        for (let i = 0; i < countTillFull; i++) {
            this.learningArticles.push({
                titleTimeline: 'PLACEHOLDER',
                isPlaceholder: true
            });
        }

        this.onResizeService.emitScrollClassEvent('max');
    }

}
