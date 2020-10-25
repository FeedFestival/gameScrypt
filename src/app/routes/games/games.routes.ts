import { Routes } from '@angular/router';
import { GameComponent } from 'src/app/features/games/components/game.component';
import { GamesComponent } from 'src/app/features/games/games.component';
import { BLOB_POP_ROUTE, GAMES_ROUTE } from './games.seo';

export const gamesRoutes: Routes = [
    { path: GAMES_ROUTE.base, component: GamesComponent },
    { path: GAMES_ROUTE.base + '/' + BLOB_POP_ROUTE.base, component: GameComponent, data: { codeBase: BLOB_POP_ROUTE.base }  }
];
