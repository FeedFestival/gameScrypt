import { NgModule } from '@angular/core';
// import { NgtUniversalModule } from '@ng-toolkit/universal';
// import { SocialLoginModule } from 'angularx-social-login';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { IconAboutUs } from './components/icons/icon-about-us';
import { IconAllergens } from './components/icons/icon-allergens';
import { IconContact } from './components/icons/icon-contact';
import { IconContactUs } from './components/icons/icon-contact-us';
import { IconCopyright } from './components/icons/icon-copyright';
import { IconFacebook } from './components/icons/icon-facebook';
import { IconFacebookSquare } from './components/icons/icon-facebook-square';
import { IconFrozen } from './components/icons/icon-frozen';
import { IconInfo } from './components/icons/icon-info';
import { IconInstagram } from './components/icons/icon-instagram';
import { IconMobile } from './components/icons/icon-mobile';
import { IconMore } from './components/icons/icon-more';
import { IconNavigate } from './components/icons/icon-navigate';
import { IconPaperPlane } from './components/icons/icon-paper-plane';
import { IconPercent } from './components/icons/icon-percent';
import { IconPolicy } from './components/icons/icon-policy';
import { IconQuestion } from './components/icons/icon-question';
import { IconSmallWarning } from './components/icons/icon-small-warning';
import { IconTwiter } from './components/icons/icon-twiter';
import { IconWarning } from './components/icons/icon-warning';
import { IconWhatsapp } from './components/icons/icon-whatsapp';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';

// export const primeNgModule = [
//     ButtonModule,
//     RadioButtonModule,
//     CheckboxModule,
//     MultiSelectModule,
//     PaginatorModule,
//     TableModule
// ];

export const matModules = [
	// MatMenuModule,
	MatButtonModule,
	// MatCardModule,
	// MatDividerModule,
	// MatInputModule,
	// MatCheckboxModule,
	// MatDialogModule,
	// MatSelectModule,
	// MatExpansionModule,
	// MatTooltipModule,
	// MatPaginatorModule,
	// MatTreeModule,
	MatIconModule,
	MatSidenavModule
];

export const externalAngularLibraries = [
	NgScrollbarModule,
	// SocialLoginModule,
	// NgtUniversalModule,
];

export const appIcons = [
	IconWarning,
	IconQuestion,
	IconSmallWarning,
	IconInfo,
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
	IconPercent,
	IconFrozen,
	IconAllergens,
];

@NgModule({
	imports: [
		matModules,
		// externalAngularLibraries
	],
	declarations: [appIcons],
	exports: [
		matModules,
		// externalAngularLibraries,
		appIcons,
	],
	providers: [
		// {
		//     provide: MAT_DIALOG_DEFAULT_OPTIONS,
		//     useValue: {
		//         autoFocus: true,
		//         disableClose: true,
		//         hasBackdrop: true,
		//         closeOnNavigation: true,
		//         direction: 'ltr',
		//         panelClass: 'dialog-class'
		//     }
		// }
	],
})
export class SharedLibsModule {
	static forRoot() {
		return {
			ngModule: SharedLibsModule,
		};
	}
}
