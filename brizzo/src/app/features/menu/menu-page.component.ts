import { Component, OnInit, ViewChild } from '@angular/core';
import { _hasOnlyDigits, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { BaseMenuComponent } from './base-menu.component';
import { MenuComponent } from './menu.component';
import { MenuService } from './menu.service';
import { ICategory, IMenuItem } from './models/iMenuItem';

@Component({
	selector: 'app-menu-page',
	templateUrl: './menu-page.component.html',
})
export class MenuPageComponent extends BaseMenuComponent implements OnInit {
	@ViewChild('menuRef') menuRef!: MenuComponent;
	// categories!: ICategory[];

	constructor(public menuService: MenuService) {
		super(menuService);
	}

	ngOnInit() {
		this.getCategories();
	}
}
