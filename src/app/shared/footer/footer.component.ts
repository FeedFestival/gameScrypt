import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { APP_VERSION } from 'src/app/app.constants';
import { ArticleBank } from 'src/app/features/blog/articles/articleData/article.bank';
// import { PRIVACY_POLICY } from 'src/app/features/policy/privacy-policy.doc';
import { PrivacyPolicy } from 'src/app/features/policy/privacy-policy.doc';
import { ConfirmDialogText } from '../components/confirm/confirm-dialog-text';
import { ConfirmDialogComponent } from '../components/confirm/confirm-dialog.component';
import { OnResizeService } from '../on-resize/on-resize.service';
import { EventBusService } from '../services/event-bus.service';
import { EventData, Evt, HEADER_TYPE } from '../services/EventData';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    VERSION = APP_VERSION._;
    learningArticles: any[];
    ABOUT_POLICY = new PrivacyPolicy(this.sanitized)._().ABOUT.en;
    bp: string;

    constructor(
        private router: Router,
        private matDialog: MatDialog,
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
            titleTimeline: a.titleTimeline,
            redirect: '/' + a.category.route + '/' + a.base,
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

    goToBackground() {

        const confirmData: ConfirmDialogText = {
            title: 'Leaving GameScrypt',
            question: 'You are about to leave GameScrypt part of the Website',
            confirm: 'Go To Background CV',
            cancel: 'Stay here'
        };
        this.matDialog.open(ConfirmDialogComponent, { data: confirmData, panelClass: 'dialog-class', hasBackdrop: true })
            .afterClosed().subscribe(isConfirmed => {
                if (isConfirmed) {
                    this.router.navigate(['/Daniel_Simionescu']);
                }
            });
    }
}
