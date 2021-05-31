import { Component, Input } from '@angular/core';
import { Game } from '../models/game';

@Component({
    selector: 'app-game-list',
    templateUrl: './game-list.component.html',
    styleUrls: ['../games.component.scss']
})
export class GameListComponent {

    @Input() game: Game;
}