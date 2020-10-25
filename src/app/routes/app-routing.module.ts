import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from '../features/news/news.component';
import { UnityWorkflowComponent } from '../features/unity-workflow/unity-workflow.component';
import { blogRoutes } from './blog/blog.routes';
import { esportsRoutes } from './esports/esports.routes';
import { gamesRoutes } from './games/games.routes';
import { mainRoutes } from './main/main.routes';
import { termsAndPrivacyRoutes } from './termsAndPrivacy/termsAndPrivacy.routes';
import { unityRoutes } from './unity-workflow/unity.routes';

const routes: Routes = [
    ...mainRoutes,
    //
    ...gamesRoutes,
    ...unityRoutes,
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
