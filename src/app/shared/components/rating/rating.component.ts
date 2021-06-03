import { Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { _isNilOrEmpty } from "../../lodash-utils";

@Component({
    selector: 'app-rating',
    templateUrl: './rating.component.html',
    styleUrls: ['./rating.component.scss']
})
export class RatingComponent implements OnInit, OnChanges {

    @Input() rating;
    @Input() maxRating = 5;
    stars: any[] = [];

    constructor() { }

    ngOnInit() {

        this.init();
    }

    private init() {
        if (_isNilOrEmpty(this.stars) === false) {
            return;
        }

        for (let i = 0; i < this.maxRating; i++) {
            this.stars.push({
                id: i + 1,
                class: ''
            });
        }
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes) {

            if (changes.rating && changes.rating.currentValue) {

                this.init();
                if (this.rating > this.maxRating) {
                    this.rating = this.maxRating;
                }
                let starCount = 0;

                this.stars.some(s => {

                    if (starCount >= this.rating) {
                        return true;
                    }

                    s.class = 'checked';
                    starCount++;
                    return false;
                });
            }
        }
    }
}
