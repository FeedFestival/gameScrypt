import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule, MatExpansionModule, MatInputModule, MatMenuModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { TransferHttpCacheModule } from '@nguniversal/common';
import { AuthServiceConfig, FacebookLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { CookieService } from 'ngx-cookie-service';
import { NgcCookieConsentConfig, NgcCookieConsentModule } from 'ngx-cookieconsent';
import { NgxFileDropModule } from 'ngx-file-drop';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { PageDialogComponent } from './shared/components/page-dialog/page-dialog.component';
import { UploadDialogComponent } from './shared/components/upload-dialog/upload-dialog.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { OnResizeComponent } from './shared/on-resize/on-resize.component';

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
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
];
export const components = [
    UnityWorkflowComponent,
    LaddersComponent,
    BlogComponent
];

export const materialComponents = [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatTooltipModule
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
        OnResizeComponent,
        UploadDialogComponent
    ],
    imports: [
        NgcCookieConsentModule.forRoot(cookieConfig),
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        NgxWebstorageModule.forRoot(),
        SocialLoginModule,
        CKEditorModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ...materialComponents,
        FormsModule,
        FontAwesomeModule,
        NgScrollbarModule,
        CommonModule,
        TransferHttpCacheModule,
        HttpClientModule,
        NgtUniversalModule,
        NgxFileDropModule,
        ReactiveFormsModule,
    ],
    exports: [
        MatButtonModule,
        MatMenuModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatCheckboxModule,
        FormsModule
    ],
    entryComponents: [
        PageDialogComponent,
        UploadDialogComponent
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
