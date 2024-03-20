import { Routes } from '@angular/router';
import { CharactersComponent } from 'src/app/features/world-library/components/characters/characters.component';
import { WorldLibraryComponent } from 'src/app/features/world-library/world-library.component';
import { WORLD_LIBRARY_CHARACTERS_ROUTE, WORLD_LIBRARY_ROUTE } from './world-library.seo';

export const worldLibraryRoutes: Routes = [
    { path: WORLD_LIBRARY_ROUTE.base, component: WorldLibraryComponent, },
    { path: WORLD_LIBRARY_ROUTE.base + '/' + WORLD_LIBRARY_CHARACTERS_ROUTE.base, component: CharactersComponent },
];
