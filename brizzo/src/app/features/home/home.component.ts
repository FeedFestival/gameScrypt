import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { _hasOnlyDigits, _isNilOrEmpty } from 'src/app/shared/lodash-utils';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
	@ViewChild('phoneActionLinkRef') phoneActionLinkRef!: ElementRef<any>;

	phone = '0732645822';
	foreignPhone = '0040 732 645 822';

	foodpandaUrl = 'https://www.foodpanda.ro/restaurant/p8k9/brizzo';
	takeAwayUrl =
		'https://www.takeaway.com/ro-en/menu/brizzo?gclid=CjwKCAjwq9mLBhB2EiwAuYdMtXEECwJQkqZOldzkiDTsaPJwP-X9OlDvu-Dksam1OvzbVXFb8dbHfBoCsSAQAvD_BwE&gclsrc=aw.ds';
	glovoUrl = 'https://glovoapp.com/ro/en/constanta/brizzo-ct/';

	constructor() {}

	ngOnInit() {}

	callBrizzo() {
		this.phoneActionLinkRef.nativeElement.click();
	}

	goToFoodPanda() {
		window.open(this.foodpandaUrl);
	}

	goToTakeAway() {
		window.open(this.takeAwayUrl);
	}

	goToGlovo() {
		window.open(this.glovoUrl);
	}
}
