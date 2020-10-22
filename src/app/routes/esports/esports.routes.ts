import { Routes } from '@angular/router';
import { PzComponent } from 'src/app/features/esports/components/pz/pz.component';
import { TftComponent } from 'src/app/features/esports/components/tft/tft.components';
import { EsportsComponent } from 'src/app/features/esports/esports.component';
import { ESPORTS_ROUTE, PZ_ROUTE, TFT_ROUTE } from './esports.seo';

export const esportsRoutes: Routes = [
    { path: ESPORTS_ROUTE.base, component: EsportsComponent, },
    { path: ESPORTS_ROUTE.base + '/' + TFT_ROUTE.base, component: TftComponent },
    { path: ESPORTS_ROUTE.base + '/' + PZ_ROUTE.base, component: PzComponent },
];
