import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { SeeImageService } from "./see-image.service";

@Component({
    selector: "see-image",
    templateUrl: "see-image.component.html",
    styleUrls: ["./see-image.component.scss"],
})
export class SeeImageComponent {
    currentImage: any;
    index: number;

    private maxIndex!: number;

    constructor(
        private seeImageService: SeeImageService,
        public dialogRef: MatDialogRef<SeeImageComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any
    ) {
        console.log("data", data);
        this.index = data.index;
    }

    ngOnInit() {
        this.maxIndex = this.seeImageService.getMaxIndex();
        this.changeImage();
    }

    moveLeft() {
        const newIndex = this.index - 1;
        if (newIndex < 0) {
            this.index = this.maxIndex;
        } else {
            this.index = newIndex;
        }

        this.changeImage();
    }

    moveRight() {
        const newIndex = this.index + 1;
        if (newIndex > this.maxIndex) {
            this.index = 0;
        } else {
            this.index = newIndex;
        }

        this.changeImage();
    }

    private changeImage() {
        this.currentImage = this.seeImageService.getPicUrl(this.index);
    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}
