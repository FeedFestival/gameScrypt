import { Component, ElementRef, Input, QueryList, ViewChildren } from '@angular/core';
import { ICategory } from './models/iMenuItem';

@Component({
	selector: 'app-menu',
	templateUrl: './menu.component.html',
	styleUrls: ['./menu.component.scss'],
})
export class MenuComponent {
	@Input() categories!: ICategory[];
	@ViewChildren('categoryRef') categoryRef!: QueryList<ElementRef>;

	constructor() {}

	public setCategoryMenu(index: number, category: ICategory) {
		this.categories[index] = category;
	}

	public getCategoryElement(category: ICategory) {
		const index = this.categories.findIndex(
			(c: ICategory) => c.sheetId === category.sheetId
		);
		const categoryEl = this.categoryRef.get(index);
		return categoryEl;
	}
}
