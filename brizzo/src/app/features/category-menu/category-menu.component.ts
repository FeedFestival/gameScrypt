import {
	Component,
	ElementRef,
	HostListener,
	OnInit,
	ViewChild,
} from '@angular/core';
import { BaseMenuComponent } from '../menu/base-menu.component';
import { MenuComponent } from '../menu/menu.component';
import { MenuService } from '../menu/menu.service';
import { ICategory } from '../menu/models/iMenuItem';

@Component({
	selector: 'app-category-menu',
	templateUrl: './category-menu.component.html',
	styleUrls: ['../menu/menu.component.scss'],
})
export class CategoryMenuComponent extends BaseMenuComponent implements OnInit {
	@ViewChild('menuRef') menuRef!: MenuComponent;
	@ViewChild('menuContainerRef') menuContainerRef!: ElementRef;

	menuType: string = '_delivery';
	readonly backToCategoriesThresholdPx = 1700;
	showBackToCategories = false;
	categories!: ICategory[];
	_catWidth: number = 0;

	constructor(public menuService: MenuService) {
		super(menuService);
	}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event: any) {
		const newVal = this.backToCategoriesThresholdPx < window.scrollY;
		if (newVal != this.showBackToCategories) {
			this.showBackToCategories = newVal;
		}
	}

	@HostListener('window:resize', ['$event'])
	onResize(event: any) {
		this.resizeCategoryPictures();
	}

	ngOnInit() {
		this.getCategories();
	}

	ngAfterViewInit() {
		this.resizeCategoryPictures();
	}

	ngAfterViewChecked() {
		this.resizeCategoryPictures();
	}

	private resizeCategoryPictures() {
		setTimeout((_: any) => {
			this._catWidth =
				this.menuContainerRef.nativeElement.offsetWidth / 3 - 7.5;
		}, 100);
	}

	showMenu(category: ICategory) {
		const categoryEl = this.menuRef.getCategoryElement(category);

		setTimeout((_: any) => {
			const opts: ScrollOptions = {
				behavior: 'smooth',
			};
			categoryEl?.nativeElement.scrollIntoView(opts);
		}, 10);
	}

	backToCategories(el: HTMLElement) {
		setTimeout((_: any) => {
			const opts: ScrollOptions = {
				behavior: 'smooth',
			};
			el.scrollIntoView(opts);
		}, 10);
	}
}
