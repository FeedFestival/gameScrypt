import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamesComponent } from '../features/games/games.component';
import { UnityWorkflowComponent } from '../features/unity-workflow/unity-workflow.component';
import { blogRoutes } from './blog/blog.routes';
import { esportsRoutes } from './esports/esports.routes';
import { mainRoutes } from './main/main.routes';
import { termsAndPrivacyRoutes } from './termsAndPrivacy/termsAndPrivacy.routes';

const routes: Routes = [
    ...mainRoutes,
    //
    { path: 'games', component: GamesComponent },
    { path: 'unity-workflow', component: UnityWorkflowComponent },
    ...esportsRoutes,
    //
    ...blogRoutes,
    //
    ...termsAndPrivacyRoutes,
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
