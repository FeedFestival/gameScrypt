import { AfterViewInit, Component, NgZone, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { faArrowCircleUp, faBars } from '@fortawesome/free-solid-svg-icons';
import { NgcCookieConsentService, NgcInitializeEvent, NgcNoCookieLawEvent, NgcStatusChangeEvent } from 'ngx-cookieconsent';
import { NgScrollbar } from 'ngx-scrollbar';
import { LocalStorageService } from 'ngx-webstorage';
import { Subscription } from 'rxjs';
import { filter, tap } from 'rxjs/operators';
import { COUNTRIES, ScrollBreakpoints, STORAGE_KEY } from './app.constants';
import { AppService } from './app.service';
import { _isNilOrEmpty } from './shared/lodash-utils';
import { OnResizeService } from './shared/on-resize/on-resize.service';
import { EventBusService } from './shared/services/event-bus.service';
import { EventData, Evt, HEADER_TYPE } from './shared/services/EventData';

// tslint:disable-next-line: ban-types
declare let gtag: Function;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {

    faArrowCircleUp = faArrowCircleUp;
    faBars = faBars;

    HEADER_TYPE = HEADER_TYPE;
    headerType = HEADER_TYPE.GAMESCRYPT;

    scrollClass = 'max';
    showWall = false;
    bp: string;
    scrollBreakpoint: any = ScrollBreakpoints.sm;
    private backgroundInterval: any;
    private isCookieAccepted = false;

    // keep refs to subscriptions to be able to unsubscribe later
    private popupOpenSubscription: Subscription;
    private popupCloseSubscription: Subscription;
    private initializeSubscription: Subscription;
    private statusChangeSubscription: Subscription;
    private revokeChoiceSubscription: Subscription;
    private noCookieLawSubscription: Subscription;

    // Unsubscriber for elementScrolled stream.
    private scrollSubscription = Subscription.EMPTY;

    // Get NgScrollbar reference
    @ViewChild('NgScrollbar', { static: false }) scrollRef: NgScrollbar;

    constructor(
        private ngZone: NgZone,
        private ccService: NgcCookieConsentService,
        private onResizeService: OnResizeService,
        private localStorage: LocalStorageService,
        private appService: AppService,
        private eventBus: EventBusService,
        private router: Router
    ) {
        this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            filter(_ => !!this.scrollRef),
            tap((event: NavigationEnd) => {
                this.scrollToTop();
                gtag('config', 'UA-154145362-1',
                    {
                        page_path: event.urlAfterRedirects
                    }
                );
            })
        ).subscribe(_ => { });

        this.onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
                if (this.bp === 'xs') {
                    this.scrollBreakpoint = ScrollBreakpoints.xs;
                } else {
                    this.scrollBreakpoint = ScrollBreakpoints.sm;
                }
            });

        onResizeService.getScrollClassEvent()
            .subscribe((scrollClass) => {
                this.setScrollClass(scrollClass);
            });

        this.eventBus.on(Evt.HEADER_CHANGE, (eventData: EventData) => {
            this.headerType = eventData.data;
        });

        this.initGDPR();
    }

    ngOnInit() {

        this.setScrollClass(this.scrollClass);

        this.figureOutLanguage();
    }

    ngAfterViewInit() {

        if (this.isCookieAccepted && this.isCookieAccepted === true) {
            setTimeout(() => {
                this.ccService.close(false);
            }, 100);
        }

        this.animateBackground(4000);

        // this.scrollSubscription = this.scrollRef.verticalScrolled.pipe(
        //     map((e: any) => {
        //         if (e.target.scrollTop < this.scrollBreakpoint.max) {
        //             return 'max';
        //         } else if (e.target.scrollTop > this.scrollBreakpoint.max && e.target.scrollTop < this.scrollBreakpoint.min) {
        //             return 'med';
        //         } else if (e.target.scrollTop > this.scrollBreakpoint.min) {
        //             return 'min';
        //         }
        //     }),
        //     tap((scrollClass: string) => this.ngZone.run(
        //         () => {
        //              this.setScrollClass(scrollClass);
        //         })
        //     )
        // ).subscribe();
    }

    private figureOutLanguage() {
        const country = this.appService.getLang();
        if (_isNilOrEmpty(country) === false) {
            if (COUNTRIES.ROMANIA.keys
                .map(k => k.toLowerCase())
                .includes(country.toLowerCase())) {
                console.log('LANG: ', COUNTRIES.ROMANIA.lang);
                this.appService.emitLangEvent();
            }
        } else {
            this.appService.getIPAddress()
                .subscribe((res: any) => {
                    console.log('ID: ', res.ip);
                    this.appService.getLocation(res.ip)
                        .subscribe((loc: any) => {
                            console.log('LOC: ', loc);
                            this.appService.setLang(loc.geoplugin_countryCode);
                            this.figureOutLanguage();
                        });
                });
        }
    }

    scrollToTop() {
        this.scrollRef.scrollTo({
            top: 0
        });
    }

    setScrollClass(scrollClass: string) {
        this.scrollClass = scrollClass;
    }

    animateBackground(totalTime: number, every: number = 100) {
        const totalTimes = totalTime / every;
        let times = 0;
        const maxRgba = 99;
        const rgbaDecrease = maxRgba / totalTimes;
        const rgbaIncrease = 100 / totalTimes;
        let rgbaPercent = maxRgba;
        let gradientPercent = 0;
        this.backgroundInterval = setInterval(_ => {

            const rgba = 'rgba(45, 58, 60, 0.' + this.pad(rgbaPercent, 2) + ')';
            const el = (document.querySelector('body') as HTMLElement);
            const valueOfBackground = 'linear-gradient(transparent, ' + rgba + ' ' + gradientPercent + '%)';
            el.style.background = valueOfBackground;

            gradientPercent = gradientPercent + rgbaIncrease;
            rgbaPercent = Math.ceil(rgbaPercent - Math.ceil(rgbaDecrease));
            times++;
            if (times > totalTimes) {
                el.style.background = 'unset';
                clearInterval(this.backgroundInterval);
            }
        }, every);
    }

    private pad(n, width, z?) {
        z = z || '0';
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    private initGDPR() {

        this.isCookieAccepted = this.localStorage.retrieve(STORAGE_KEY.COOKIE_ACCEPTED);

        // this.popupOpenSubscription =
        // this.ccService.popupOpen$.subscribe(
        //     () => {
        //         console.log('on open');
        //     });
        this.popupCloseSubscription = this.ccService.popupClose$.subscribe(
            () => {
                console.log('you can use this.ccService.getConfig() to do stuff...');
                this.localStorage.store(STORAGE_KEY.COOKIE_ACCEPTED, true);
            });
        // this.initializeSubscription = this.ccService.initialize$.subscribe(
        //     (event: NgcInitializeEvent) => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...', event);
        //     });
        // (this.ccService as any).initializeSource.subscribe(
        //     (event: NgcInitializeEvent) => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...', event);
        //     });
        // (this.ccService as any).popupOpenSource.subscribe(
        //     (event: NgcInitializeEvent) => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...', event);
        //     });
        // this.statusChangeSubscription = this.ccService.statusChange$.subscribe(
        //     (event: NgcStatusChangeEvent) => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...', event);
        //     });
        // this.revokeChoiceSubscription = this.ccService.revokeChoice$.subscribe(
        //     () => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...');
        //     });
        // this.noCookieLawSubscription = this.ccService.noCookieLaw$.subscribe(
        //     (event: NgcNoCookieLawEvent) => {
        //         console.log('you can use this.ccService.getConfig() to do stuff...', event);
        //     });
    }

    ngOnDestroy() {
        this.scrollSubscription.unsubscribe();
        // unsubscribe to cookieconsent observables to prevent memory leaks
        this.popupOpenSubscription.unsubscribe();
        this.popupCloseSubscription.unsubscribe();
        this.initializeSubscription.unsubscribe();
        this.statusChangeSubscription.unsubscribe();
        this.revokeChoiceSubscription.unsubscribe();
        this.noCookieLawSubscription.unsubscribe();
    }
}
