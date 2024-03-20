import { Component, Input } from "@angular/core";
import { MatDialog } from "@angular/material";
import { GamePic } from "src/app/features/games/models/game";
import { SeeImageComponent } from "../see-image/see-image.component";
import { SeeImageService } from "../see-image/see-image.service";

@Component({
    selector: "app-game-pictures",
    templateUrl: "./games-pictures.component.html",
    styleUrls: ["./games-pictures.component.scss"],
})
export class GamesPicturesComponent {
    @Input() pictureCssUrls: GamePic[];

    constructor(
        private seeImageService: SeeImageService,
        private dialog: MatDialog
    ) {}

    ngOnInit() {
        this.seeImageService.setPics(this.pictureCssUrls);
    }

    openPic(index) {
        this.dialog.open(SeeImageComponent, {
            panelClass: ["dialog-class", "picture-dialog"],
            width: "100vw",
            maxWidth: "100vw",
            height: "100vh",
            data: { index: index },
        });
    }
}
