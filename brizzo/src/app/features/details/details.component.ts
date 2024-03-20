import { Component } from '@angular/core';
import { FOOD_DETAILS } from './food-details';

interface FoodDetails {
	name: string;
	ingredients: {
		name: string;
		quantity: string;
	}[];
	nutrition: {
		name: string;
		quantity: string;
	}[];
}

@Component({
	selector: 'app-details',
	templateUrl: './details.component.html',
	styleUrls: ['./details.component.scss'],
})
export class DetailsComponent {
	data: FoodDetails[] = FOOD_DETAILS;
}
