import { Component, OnInit } from "@angular/core";
import { DomSanitizer, Meta, Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { GAMES_ROUTE } from "src/app/routes/games/games.seo";
import { _isNilOrEmpty } from "src/app/shared/lodash-utils";
import { OnResizeService } from "src/app/shared/on-resize/on-resize.service";
import { SeoService } from "../../home-page/seo.service";
import { GAMES_DATA } from "../data/games.data";
import { Game } from "../models/game";

@Component({
    selector: "app-game",
    templateUrl: "./game.component.html",
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
        private activatedRoute: ActivatedRoute,
        private sanitized?: DomSanitizer
    ) {
        onResizeService.getResizeEvent().subscribe((bp) => {
            this.bp = bp;
        });
        this.activatedRoute.data.subscribe((data) => {
            const gameData = GAMES_DATA(this.sanitized).find(
                (g) => g.base === data.codeBase
            );
            this.game = gameData.en;
            this.game._base = gameData.base;
            this.init();
        });
    }

    ngOnInit() {
        this.onResizeService.emitScrollClassEvent("med");
    }

    init() {
        this.titleService.setTitle(this.seoService.getTitle(this.game._base));
        this.seoService.getAllTags().forEach((tag) => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(this.game._base));

        this.game._hasGameUrl =
            _isNilOrEmpty(this.game.extraInfo.gameUrl) === false;
    }

    goToGameUrl(url: string) {

        if (!this.game._hasGameUrl) return;

        window.open(this.game.extraInfo.gameUrl, "_blank");
    }
}
