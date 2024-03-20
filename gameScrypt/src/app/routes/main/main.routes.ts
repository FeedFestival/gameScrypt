import { Routes } from '@angular/router';
import { AboutComponent } from 'src/app/features/about/about.component';
import { BackgroundComponent } from 'src/app/features/about/background-cv/background-cv.component';
import { ContactComponent } from 'src/app/features/contact/contact.component';
import { HomePageComponent } from 'src/app/features/home-page/home-page.component';
import { ABOUT_ROUTE, BACKGROUND_ROUTE, CONTACT_ROUTE, MAIN_ROUTE } from './main.seo';

export const mainRoutes: Routes = [
    { path: MAIN_ROUTE.base, component: HomePageComponent },
    { path: CONTACT_ROUTE.base, component: ContactComponent },
    { path: ABOUT_ROUTE.base + '/ro', component: AboutComponent, data: { lang: 'ro' } },
    { path: ABOUT_ROUTE.base, component: AboutComponent },
    { path: BACKGROUND_ROUTE.base, component: BackgroundComponent }
];
