import { Component, ViewChild } from '@angular/core';
import { _hasOnlyDigits, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { ICategory, IMenuItem } from './models/iMenuItem';

@Component({
	selector: 'app-base-menu-page',
	template: '',
})
export abstract class BaseMenuComponent {
	@ViewChild('menuRef') menuRef!: MenuComponent;
	menuType: string = '';
	categories!: ICategory[];

	constructor(public menuService: MenuService) {}

	getCategories() {
		this.menuService
			.getLocalSheets(this.menuType)
			.subscribe((sheets: any) => {
				if (_isNilOrEmpty(sheets)) {
					return;
				}
				let index = 0;
				this.categories = sheets.map((s: any) => {
					index++;
					const formatedTitle = s.replaceAll('__', '_/_');
					return {
						id: index,
						name: formatedTitle.replaceAll('_', ' '),
						sheetName: s,
						sheetId: s + '_' + index,
					};
				});
				this.categories[0]._isFirst = true;
				this.getMenus();
			});
	}

	private getMenus() {
		let time = 10;
		const increment = 10;

		this.categories.forEach((c: ICategory) => {
			setTimeout((_: any) => {
				this.getMenuItemsCategory(c);
			}, time);
			time += increment;
		});
	}

	private getMenuItemsCategory(cat: ICategory) {
		const menuItems: IMenuItem[] = this.menuService.getLocalMenus(
			cat.sheetName
		);
		this.onMenuItemsLoaded(cat, menuItems);
	}

	private onMenuItemsLoaded = (cat: ICategory, menuItems: IMenuItem[]) => {
		const activeMenuItems = menuItems.reduce(
			(acc, mI) => (mI.active ? acc + 1 : acc),
			0
		);
		if (activeMenuItems == 0) {
			return;
		}

		const hasPhoto = _isNilOrEmpty(menuItems[0].photo_name) === false;
		menuItems[0]._isFirstItem = true;
		menuItems.forEach((mI: IMenuItem) => {
			if (mI.alcohol !== undefined && mI.alcohol !== null) {
				mI._showAlcohol = true;
				if (_hasOnlyDigits(mI.alcohol.toString())) {
					mI._showAlcoholIcon = true;
				} else {
					mI._showAlcoholIcon = false;
				}
			} else {
				mI._showAlcohol = false;
			}

			if (_isNilOrEmpty(mI.extra_en) === false) {
				mI._showEnglish = true;
			} else {
				mI._showEnglish = false;
			}

			mI.isFrozen = (mI.isFrozen as any) === 1;

			if (mI._alergens) {
				mI._hasAllergens = true;
			} else {
				mI._hasAllergens = false;
			}
		});

		cat.menuItems = menuItems.filter((mI) => mI.active === 1);
		const index = this.categories.findIndex(
			(c: ICategory) => c.sheetId === cat.sheetId
		);
		this.menuRef.setCategoryMenu(index, cat);

		if (hasPhoto) {
			this.categories[index].photoName = menuItems[0].photo_name;
		}
	};
}
