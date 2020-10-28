import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { GAMES_ROUTE } from 'src/app/routes/games/games.seo';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
import { SeoService } from '../../home-page/seo.service';
import { GAMES_DATA } from '../data/games.data';
import { Game } from '../models/game';

@Component({
    selector: 'app-game',
    templateUrl: './game.component.html'
})
export class GameComponent implements OnInit {

    backUrl = GAMES_ROUTE.base;
    bp: string;
    game: Game;

    constructor(
        private seoService: SeoService,
        private titleService: Title,
        private metaService: Meta,
        private onResizeService: OnResizeService,
        private activatedRoute: ActivatedRoute
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
        this.activatedRoute.data.subscribe(data => {
            this.game = GAMES_DATA.find(g => g.base === data.codeBase);
            this.init();
        });
    }

    ngOnInit() {
        this.onResizeService.emitScrollClassEvent('med');
    }

    init() {
        this.titleService.setTitle(this.seoService.getTitle(this.game.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(this.game.base));
    }
}
