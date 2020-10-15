import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-blog',
    templateUrl: './blog.component.html',
    styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {

    bp: string;

    constructor(
        private router: Router,
        private onResizeService: OnResizeService
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {

    }
}
