import { Injectable } from "@angular/core";
import { GamePic } from "src/app/features/games/models/game";

@Injectable({ providedIn: "root" })
export class SeeImageService {
    picUrls: string[];

    constructor() {}

    getPicUrl(index: number): string {
        return this.picUrls[index];
    }

    getMaxIndex(): number {
        return this.picUrls.length - 1;
    }

    setPics(pics: GamePic[]) {
        this.picUrls = pics.map((p) => p.backgroundUrl);
    }
}
