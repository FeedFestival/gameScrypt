import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from '../auth/admin.component';
import { AuthGuardService } from '../auth/auth-guard.service';
import { Guardian } from '../auth/guardian';
import { articleRoutes, blogRoutes } from './blog/blog.routes';
import { esportsRoutes } from './esports/esports.routes';
import { gamesRoutes } from './games/games.routes';
import { mainRoutes } from './main/main.routes';
import { termsAndPrivacyRoutes } from './termsAndPrivacy/termsAndPrivacy.routes';
import { toolboxRoutes } from './toolbox/toolbox.routes';
import { unityRoutes } from './unity-workflow/unity.routes';
import { worldLibraryRoutes } from './world-library/world-library.routes';

const routes: Routes = [
    ...mainRoutes,
    //
    ...gamesRoutes,
    ...unityRoutes,
    ...esportsRoutes,
    ...worldLibraryRoutes,
    //
    ...blogRoutes,
    // ...articleRoutes,
    //
    ...termsAndPrivacyRoutes,
    {
        path: 'dramatis-pignorate', component: AdminComponent,
        canActivate: [AuthGuardService, Guardian]
    },
    // - not shown as descoverable
    ...toolboxRoutes,
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
