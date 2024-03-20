import { Component, OnInit } from '@angular/core';
import { DomSanitizer, Meta, Title } from '@angular/platform-browser';
import { GAMES_ROUTE } from 'src/app/routes/games/games.seo';
import { AppEventManager } from 'src/app/shared/navigation/event-manager.service';
import { EventContent } from 'src/app/shared/navigation/event-with-content.model';
import { EVENT } from 'src/app/shared/navigation/events-manager.constants';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../home-page/seo.service';
import { GAMES_DATA } from './data/games.data';
import { GameData } from './models/game';

@Component({
    selector: 'app-games',
    templateUrl: './games.component.html',
    styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

    bp: string;
    gamesData: GameData[];

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private onResizeService: OnResizeService,
        private appEventManager: AppEventManager,
        private sanitized?: DomSanitizer
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(GAMES_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(GAMES_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('max');

        this.gamesData = GAMES_DATA(this.sanitized);
    }

    goToGame(gameRedirect: string) {
        this.appEventManager.broadcast(new EventContent(EVENT.NAVIGATE, {
            goRoute: GAMES_ROUTE.base + '/' + gameRedirect
        }));
    }
}
