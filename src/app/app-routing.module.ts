import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './features/about/about.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { LaddersComponent } from './features/ladders/ladders.component';
import { CookiesComponent } from './features/policy/cookies/cookies.component';
import { GdprComponent } from './features/policy/gdpr/gdpr.component';
import { LegalDocsComponent } from './features/policy/legal-documents.component';
import { PrivacyComponent } from './features/policy/privacy/privacy.component';
import { SnsComponent } from './features/policy/sns/sns.component';
import { TermsComponent } from './features/policy/terms/terms.component';
import { UnityWorkflowComponent } from './features/unity-workflow/unity-workflow.component';


const routes: Routes = [
    { path: '', component: HomePageComponent },
    //
    { path: 'unity-workflow', component: UnityWorkflowComponent },
    { path: 'ladders', component: LaddersComponent },
    { path: 'blog', component: BlogComponent },
    //
    { path: 'legal', component: LegalDocsComponent },
    { path: 'terms', component: TermsComponent },
    { path: 'privacy', component: PrivacyComponent },
    { path: 'cookies', component: CookiesComponent },
    { path: 'sns', component: SnsComponent },
    { path: 'gdpr', component: GdprComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
