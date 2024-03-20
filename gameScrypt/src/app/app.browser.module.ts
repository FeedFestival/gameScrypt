import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line: max-line-length
import { MatButtonModule, MatCardModule, MatCheckboxModule, MatDialogModule, MatDividerModule, MatInputModule, MatMenuModule } from '@angular/material';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { AuthServiceConfig, FacebookLoginProvider, SocialLoginModule } from 'angularx-social-login';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { PageDialogComponent } from './shared/components/page-dialog/page-dialog.component';
import { APP_VERSION } from './app.constants';

const config = new AuthServiceConfig([
    {
        id: FacebookLoginProvider.PROVIDER_ID,
        provider: new FacebookLoginProvider(APP_VERSION.FACEBOOK_ID)
    }
]);

export function provideConfig() {
    return config;
}

@NgModule({
    imports: [

        SocialLoginModule,
        CKEditorModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatCardModule,
        MatDividerModule,
        MatInputModule,
        MatCheckboxModule,
        MatDialogModule,
        FormsModule,
        NgScrollbarModule,
        AppModule,
        BrowserTransferStateModule
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
        PageDialogComponent
    ],
    providers: [
        {
            provide: AuthServiceConfig,
            useFactory: provideConfig
        }
    ],
    bootstrap: [AppComponent]
})
export class AppBrowserModule { }
