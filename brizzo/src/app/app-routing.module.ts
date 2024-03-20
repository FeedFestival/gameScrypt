import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { MenuPageComponent } from './features/menu/menu-page.component';
import { DetailsComponent } from './features/details/details.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
	},
	{
		path: 'menu',
		component: MenuPageComponent,
	},
	{
		path: 'detalii',
		component: DetailsComponent,
	},
];

@NgModule({
	imports: [
		RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
	],
	exports: [RouterModule],
})
export class AppRoutingModule {}
