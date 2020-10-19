import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-tft',
    templateUrl: './tft.component.html',
    // styleUrls: ['./esports.component.scss']
})
export class TftComponent implements OnInit {

    bp: string;

    constructor(
        private router: Router,
        private onResizeService: OnResizeService
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });

        this.onResizeService.emitScrollClassEvent('max');
    }

    ngOnInit() {

    }
}
