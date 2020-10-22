import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { EditState, MainAvailableKeys, TextAvailableKeys } from 'src/app/app.constants';
import { OnResizeService } from '../on-resize/on-resize.service';
import { NavigationService } from './navigation.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {

    private accountUpdatedSub: Subscription;
    private subscription: Subscription;

    availableKeys: any[];

    currentState: string;
    bp: string;

    constructor(
        private router: Router,
        private navigationService: NavigationService,
        private onResizeService: OnResizeService
    ) {
        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
                this.init();
            });
    }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationEnd) {

            }
        });

        this.navigationService.getEditStateEmitter()
            .subscribe((editState) => {
                this.currentState = editState;
                this.init();
            });
    }

    init() {
        if (!this.currentState) {
            return;
        }

        switch (this.currentState) {
            case EditState.NEW:
                setTimeout(() => {
                    // const newAvailableKeys = JSON.parse(JSON.stringify(NewAvailableKeys));
                    // const allowedElements = this.elementsService.getAllowedElements();
                    // this.availableKeys = newAvailableKeys.filter((nAK) => {
                    //     if (allowedElements.includes(nAK.id)) {
                    //         return nAK;
                    //     }
                    // });
                });
                break;
            case EditState.TEXT:
                this.availableKeys = TextAvailableKeys;
                break;
            default:
                this.availableKeys = MainAvailableKeys;
                break;
        }
        this.availableKeys = this.availableKeys.filter(ak => {
            return this.bp === 'xs' && ak.code;
        });
    }

    ngOnDestroy() {
        if (this.accountUpdatedSub) {
            this.accountUpdatedSub.unsubscribe();
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    }

    doAction(code) {
        if (!code) {
            return;
        }

        this.navigationService.emitClickNavEvent(code);
    }
}
