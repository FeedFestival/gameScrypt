import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { News } from './news';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnChanges, OnDestroy {

    @Input() newsArticle: News;

    bp: string;

    private unsubscribe$ = new Subject<void>();

    constructor(
        private appEventManager: AppEventManager
    ) {
    }

    ngOnChanges(changes: SimpleChanges) {
        // if (changes) {
        //     if (_isNilOrEmpty(changes.newsArticle) === false
        //         && _isNilOrEmpty(changes.newsArticle.currentValue) === false) {
        //     }
        // }
    }

    goToNews() {
        this.appEventManager.broadcast(new EventContent(EVENT.NAVIGATE, {
            goRoute: this.newsArticle.category.route + '/' + this.newsArticle.redirect
        }));
    }

    goToCategory() {
        this.appEventManager.broadcast(new EventContent(EVENT.NAVIGATE, {
            goRoute: this.newsArticle.category.route
        }));
    }

    ngOnDestroy() {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }
}
