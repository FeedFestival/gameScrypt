import { Injectable, EventEmitter } from '@angular/core';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OnResizeService {

    resizeEvent: EventEmitter<string> = new EventEmitter<string>();
    scrollClassEvent: EventEmitter<string> = new EventEmitter<string>();
    savedResize: string;

    getResizeEvent() {
        if (this.savedResize) {
            return of(this.savedResize);
        }
        return this.resizeEvent;
    }

    emitResizeEvent(bp) {
        setTimeout(() => {
            this.savedResize = bp;
            this.resizeEvent.emit(this.savedResize);
        });
    }

    getScrollClassEvent() {
        return this.scrollClassEvent;
    }

    emitScrollClassEvent(scrollClass) {
        setTimeout(() => {
            this.scrollClassEvent.emit(scrollClass);
        });
    }
}
