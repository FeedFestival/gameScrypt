import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule, MatCheckboxModule,
    MatDialogModule,
    MatDividerModule, MatExpansionModule,
    MatIconModule,
    MatInputModule, MatMenuModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatTreeModule,
    MAT_DIALOG_DEFAULT_OPTIONS
} from '@angular/material';
import { NgtUniversalModule } from '@ng-toolkit/universal';
import { SocialLoginModule } from 'angularx-social-login';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TableModule } from 'primeng/table';
import { IconGameScript, IconGameScrypt } from './components/icons/gameScrypt';
import { IconAboutUs } from './components/icons/icon-about-us';
import { IconCircle } from './components/icons/icon-circle';
import { IconTerminal } from './components/icons/icon-console';
import { IconContact } from './components/icons/icon-contact';
import { IconContactUs } from './components/icons/icon-contact-us';
import { IconCopyright } from './components/icons/icon-copyright';
import { IconFacebook } from './components/icons/icon-facebook';
import { IconFacebookSquare } from './components/icons/icon-facebook-square';
import { IconFree } from './components/icons/icon-free';
import { IconGooglePlay } from './components/icons/icon-google-play';
import { IconInfo } from './components/icons/icon-info';
import { IconInstagram } from './components/icons/icon-instagram';
import { IconMobile } from './components/icons/icon-mobile';
import { IconMore } from './components/icons/icon-more';
import { IconNavigate } from './components/icons/icon-navigate';
import { IconPaperPlane } from './components/icons/icon-paper-plane';
import { IconPolicy } from './components/icons/icon-policy';
import { IconQuestion } from './components/icons/icon-question';
import { IconSmallWarning } from './components/icons/icon-small-warning';
import { IconTwiter } from './components/icons/icon-twiter';
import { IconWarning } from './components/icons/icon-warning';
import { IconWhatsapp } from './components/icons/icon-whatsapp';

export const primeNgModule = [
    ButtonModule,
    RadioButtonModule,
    CheckboxModule,
    MultiSelectModule,
    PaginatorModule,
    TableModule
];

export const matModules = [
    MatMenuModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatInputModule,
    MatCheckboxModule,
    MatDialogModule,
    MatSelectModule,
    MatExpansionModule,
    MatTooltipModule,
    MatPaginatorModule,
    MatTreeModule,
    MatIconModule,
    MatRadioModule,
    MatProgressBarModule
];

export const externalAngularLibraries = [
    NgScrollbarModule,
    SocialLoginModule,
    NgtUniversalModule,
];

export const appIcons = [
    IconWarning,
    IconQuestion,
    IconSmallWarning,
    IconInfo,
    IconCircle,
    IconContact,
    IconPaperPlane,
    IconWhatsapp,
    IconMobile,
    IconCopyright,
    IconTwiter,
    IconFacebookSquare,
    IconInstagram,
    IconFacebook,
    IconContactUs,
    IconPolicy,
    IconAboutUs,
    IconNavigate,
    IconMore,
    IconGameScript,
    IconGameScrypt,
    IconGooglePlay,
    IconFree,
    IconTerminal
];

@NgModule({
    imports: [
        matModules,
        primeNgModule,
        externalAngularLibraries
    ],
    declarations: [
        appIcons
    ],
    exports: [
        matModules,
        primeNgModule,
        externalAngularLibraries,
        appIcons
    ],
    providers: [
        {
            provide: MAT_DIALOG_DEFAULT_OPTIONS,
            useValue: {
                autoFocus: true,
                disableClose: true,
                hasBackdrop: true,
                closeOnNavigation: true,
                direction: 'ltr',
                panelClass: 'dialog-class'
            }
        }
    ]
})
export class SharedLibsModule {
    static forRoot() {
        return {
            ngModule: SharedLibsModule
        };
    }
}
