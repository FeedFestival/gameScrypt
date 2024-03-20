import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PhoneFilterPipe } from './pipes/phone-filter.pipe';
import { SharedLibsModule } from './shared-libs.module';

export const sharedComponents = [
    PhoneFilterPipe
    // HeaderComponent,
    // FooterComponent,
    // NavigationComponent,
    // CoolText,
    // LanguageComponent
];

@NgModule({
    imports: [
        // AppRoutingModule,
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
