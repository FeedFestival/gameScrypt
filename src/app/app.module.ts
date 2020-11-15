import { HttpClientModule } from '@angular/common/http';
import { NgModule, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AuthService, AuthServiceConfig, FacebookLoginProvider } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppComponent } from './app.component';
import { APP_VERSION } from './app.constants';
import { AdminComponent } from './auth/admin.component';
import { AboutComponent } from './features/about/about.component';
import { ArticleComponent } from './features/blog/articles/article.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { PzComponent } from './features/esports/components/pz/pz.component';
import { TftRulesComponent } from './features/esports/components/tft/tft-rules/tft-rules.components';
import { TftComponent } from './features/esports/components/tft/tft.component';
import { EsportsComponent } from './features/esports/esports.component';
import { GameListComponent } from './features/games/components/game-list.component';
import { GameComponent } from './features/games/components/game.component';
import { GamesComponent } from './features/games/games.component';
import { HomePageComponent } from './features/home-page/home-page.component';
import { NewsComponent } from './features/news/news.component';
import { CookiesComponent } from './features/policy/cookies/cookies.component';
import { GdprComponent } from './features/policy/gdpr/gdpr.component';
import { LegalDocsComponent } from './features/policy/legal-documents.component';
import { PrivacyComponent } from './features/policy/privacy/privacy.component';
import { SnsComponent } from './features/policy/sns/sns.component';
import { TermsComponent } from './features/policy/terms/terms.component';
import { CodeBlockComponent } from './features/unity-workflow/code-block-component/code-block.component';
import { UnityWorkflowComponent } from './features/unity-workflow/unity-workflow.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { ConfirmDialogComponent } from './shared/components/confirm/confirm-dialog.component';
import { PageDialogComponent } from './shared/components/page-dialog/page-dialog.component';
import { AuthMockService } from './shared/header/auth.mock.service';
import { LoginMockService } from './shared/header/login.mock.service';
import { LoginService } from './shared/header/login.service';
import { LoginDialogComponent } from './shared/login/login-dialog.component';
import { OnResizeComponent } from './shared/on-resize/on-resize.component';
import { SharedModule } from './shared/shared.module';

const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(APP_VERSION.FACEBOOK_ID)
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
    AdminComponent
];
export const components = [
    NewsComponent,
    UnityWorkflowComponent,
    CodeBlockComponent,
    EsportsComponent,
    TftComponent,
    TftRulesComponent,
    PzComponent,
    BlogComponent,
    ArticleComponent,
    GamesComponent,
    GameListComponent,
    GameComponent
];
export const entryDialogComponents = [
    PageDialogComponent,
    ConfirmDialogComponent,
    LoginDialogComponent
];

export const mockData: Provider[] = [
    {
        provide: AuthService,
        useClass: AuthMockService
    },
    {
        provide: LoginService,
        useClass: LoginMockService
    }
];

@NgModule({
    declarations: [
        AppComponent,
        ...mainComponents,
        ...components,
        ...entryDialogComponents,
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
        AppRoutingModule,
        // SocialLoginModule
    ],
    entryComponents: [
        ...entryDialogComponents
    ],
    providers: [
        CookieService,
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        },
        // ...mockData
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
