import { Routes } from '@angular/router';
import { GamesComponent } from 'src/app/features/games/games.component';

export const gamesRoutes: Routes = [
    { path: 'games', component: GamesComponent },
    // { path: ESPORTS_ROUTE.base + '/tft', component: TftComponent },
    // { path: ESPORTS_ROUTE.base + '/project-zomboid', component: PzComponent },
];
