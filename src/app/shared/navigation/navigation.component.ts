import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OnResizeService } from '../on-resize/on-resize.service';
import { AppEventManager } from './event-manager.service';
import { EventContent } from './event-with-content.model';
import { EVENT } from './events-manager.constants';
import { NavigationService } from './navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

    private subscription: Subscription;

    currentState: string;
    bp: string;

    constructor(
        private router: Router,
        private appEventManager: AppEventManager,
        private navigationService: NavigationService,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) { }
        });

        this.appEventManager.subscribe(EVENT.NAVIGATE, this.navigate);
    }

    navigate = (routeData: any) => {
        console.log('NavigationComponent -> navigateTo -> routeData', routeData);
        this.router.navigateByUrl('/' + routeData.content.goRoute);
    }

    ngOnDestroy() {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }
}
