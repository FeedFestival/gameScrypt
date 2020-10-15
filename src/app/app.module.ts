import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './features/about/about.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { GamesComponent } from './features/games/games.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { LaddersComponent } from './features/ladders/ladders.component';
import { CookiesComponent } from './features/policy/cookies/cookies.component';
import { GdprComponent } from './features/policy/gdpr/gdpr.component';
import { LegalDocsComponent } from './features/policy/legal-documents.component';
import { PrivacyComponent } from './features/policy/privacy/privacy.component';
import { SnsComponent } from './features/policy/sns/sns.component';
import { TermsComponent } from './features/policy/terms/terms.component';
import { UnityWorkflowComponent } from './features/unity-workflow/unity-workflow.component';
import { PageDialogComponent } from './shared/components/page-dialog/page-dialog.component';
import { OnResizeComponent } from './shared/on-resize/on-resize.component';
import { SharedModule } from './shared/shared.module';

const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider('485626875687512')
    }
]);

const cookieConfig: NgcCookieConsentConfig = {

    cookie: {
        domain: 'tinesoft.github.io'
    },
    position: 'bottom',
    theme: 'classic',
    palette: {
        popup: {
            background: '#000000',
            text: '#ffffff',
            link: '#ffffff'
        },
        button: {
            background: '#f1d600',
            text: '#000000',
            border: 'transparent'
        }
    },
    type: 'info',
    content: {
        message: 'This website uses cookies to ensure you get the best experience on our website.'
    },


    layout: 'my-custom-layout',
    layouts: {
        'my-custom-layout': '{{messagelink}}{{compliance}}'
    },
    elements: {
        messagelink: `
        <span id="cookieconsent:desc" class="cc-message">{{message}}
          <a aria-label="learn more about cookies" tabindex="0" class="cc-link" href="/gdpr">Learn more about GDPR</a>
        </span>
        `,
    }
};

export function provideConfig() {
    return config;
}

export const mainComponents = [
    HomePageComponent,
];
export const components = [
    UnityWorkflowComponent,
    LaddersComponent,
    BlogComponent,
    GamesComponent
];

@NgModule({
    declarations: [
        AppComponent,
        ...mainComponents,
        ...components,
        PageDialogComponent,
        LegalDocsComponent,
        ContactComponent,
        AboutComponent,
        TermsComponent,
        PrivacyComponent,
        CookiesComponent,
        SnsComponent,
        GdprComponent,
        OnResizeComponent
    ],
    imports: [
        NgcCookieConsentModule.forRoot(cookieConfig),
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        CKEditorModule,
        BrowserAnimationsModule,
        TransferHttpCacheModule,
        HttpClientModule,
        NgtUniversalModule,
        NgxWebstorageModule.forRoot(),
        SharedModule.forRoot(),
        AppRoutingModule
    ],
    entryComponents: [
        PageDialogComponent
    ],
    providers: [
        CookieService,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
