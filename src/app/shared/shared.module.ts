import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../routes/app-routing.module';
import { BackHyperlink } from './components/back-hyper/back-hyper.component';
import { CoolText } from './components/cool-text/cool-text';
import { LanguageComponent } from './components/language/language.component';
import { RatingComponent } from './components/rating/rating.component';
import { TableHeaderComponent } from './components/table-header/table-header.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SharedLibsModule } from './shared-libs.module';

export const sharedComponents = [
    HeaderComponent,
    FooterComponent,
    NavigationComponent,
    CoolText,
    LanguageComponent,
    TableHeaderComponent,
    BackHyperlink,
    RatingComponent
];

@NgModule({
    imports: [
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedLibsModule,
    ],
    declarations: [
        ...sharedComponents
    ],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        SharedLibsModule,
        ...sharedComponents
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule
        };
    }
}
