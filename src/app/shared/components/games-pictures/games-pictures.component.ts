import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-game-pictures',
    templateUrl: './games-pictures.component.html',
    styleUrls: ['./games-pictures.component.scss']
})
export class GamesPicturesComponent {

    @Input() pictureCssUrls: string[];

    constructor() { }
}
