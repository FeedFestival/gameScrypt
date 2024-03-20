import { Component, HostListener } from '@angular/core';
import { EventBusService } from '../services/event-bus.service';
import { EventData, Evt } from '../services/event-data';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
	showHamburgerButton: boolean = true;
	readonly hideHamburgerButtonThresholdPx: number = 333;
	readonly phoneNumber: string = '0732645822';

	constructor(private eventBus: EventBusService) {}

	@HostListener('window:scroll', ['$event'])
	onWindowScroll(event: any) {
		this.showHamburgerButton =
			this.hideHamburgerButtonThresholdPx > window.scrollY;
	}

	openSideNav() {
		const evData: EventData = {
			event: Evt.SIDENAV_TOGGLE,
		};
		this.eventBus.emit(evData);
	}
}
