import { DOCUMENT } from '@angular/common';
import { Component, Inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventBusService } from './shared/services/event-bus.service';
import { Evt } from './shared/services/event-data';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	@ViewChild('drawerRef') drawerRef!: any;
	private noScroll: boolean = false;

	constructor(
		private router: Router,
		private eventBus: EventBusService,
		@Inject(DOCUMENT) private document: Document
	) {
		this.eventBus.on(Evt.SIDENAV_TOGGLE, () => {
			this.noScroll = true;
			this.document.body.classList.add('no-scroll');
			this.drawerRef.toggle();
		});
	}

	onDrawerClosed() {
		this.noScroll = false;
		this.document.body.classList.remove('no-scroll');
	}

	goTo(routeUrl: string) {
		this.router.navigate([routeUrl]);
		this.drawerRef.toggle();
	}
}
