import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-unity-workflow',
    templateUrl: './unity-workflow.component.html',
    styleUrls: ['./unity-workflow.component.scss']
})
export class UnityWorkflowComponent implements OnInit {

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
