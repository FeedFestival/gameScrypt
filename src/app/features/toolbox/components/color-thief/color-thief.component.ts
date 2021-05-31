import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { TFT_ROUTE } from 'src/app/routes/esports/esports.seo';
import { COLOR_THIEF_ROUTE, TOOLBOX_ROUTE } from 'src/app/routes/toolbox/toolbox.seo';
import { _clone, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';

@Component({
    selector: 'app-color-thief',
    templateUrl: './color-thief.component.html',
    styleUrls: ['./color-thief.component.scss']
})
export class ColorThiefComponent implements OnInit {

    backUrl = TOOLBOX_ROUTE.base;
    bp: string;
    canvasEnabled = false;

    pastedImage: any;
    @ViewChild('imgRenderer', { static: false }) imgRenderer: ElementRef;
    @ViewChild('canvasRef', { static: false }) canvasRef: ElementRef;
    @ViewChild('previewRef', { static: false }) previewRef: ElementRef;

    previousHexValue: string;
    hexValue: string;
    isEyedropMode = false;

    constructor(
        private titleService: Title,
        private metaService: Meta,
        private seoService: SeoService,
        private onResizeService: OnResizeService
    ) {
        onResizeService.getResizeEvent()
            .subscribe((bp) => {
                this.bp = bp;
            });
    }

    ngOnInit() {
        this.titleService.setTitle(this.seoService.getTitle(COLOR_THIEF_ROUTE.base));
        this.seoService.getAllTags().forEach(tag => {
            this.metaService.removeTag(tag);
        });
        this.metaService.addTags(this.seoService.getMetaTags(COLOR_THIEF_ROUTE.base));
        this.onResizeService.emitScrollClassEvent('med');
    }

    onMouseMove(e) {

        if (this.isEyedropMode === false) {
            return;
        }

        let x, y;

        if (e.offsetX) {
            x = e.offsetX;
            y = e.offsetY;
        }
        else if (e.layerX) {
            x = e.layerX;
            y = e.layerY;
        }

        this.useCanvas(this.canvasRef.nativeElement, this.imgRenderer.nativeElement, () => {

            var p = this.canvasRef.nativeElement.getContext('2d')
                .getImageData(x, y, 1, 1).data;
            this.setPreviewColor(this.rgbToHex(p[0], p[1], p[2]))
        });
    }

    onPaste(event: ClipboardEvent) {

        let clipboardData = event.clipboardData || (window as any).clipboardData;

        if (_isNilOrEmpty(clipboardData.files)) {
            return;
        }

        let blob = clipboardData.files[0]

        // load image if there is a pasted image
        if (blob !== null) {
            const reader = new FileReader();
            reader.onload = (evt: any) => {
                this.imgRenderer.nativeElement.src = evt.target.result;

                setTimeout(_ => {
                    this.canvasEnabled = true;
                }, 100);
            };
            reader.readAsDataURL(blob);
        }
    }

    toggleEyedrop(confirm = false) {
        if (this.canvasEnabled === false) {
            return;
        }

        if (confirm === false) {
            if (this.isEyedropMode === false) {
                this.previousHexValue = _clone(this.hexValue);
            } else {
                this.setPreviewColor(this.previousHexValue);
            }
        }

        this.isEyedropMode = !this.isEyedropMode;
    }

    stealColor() {
        this.toggleEyedrop(true);
    }

    setPreviewColor(hecColor) {
        this.hexValue = hecColor;
        this.previewRef.nativeElement.style.background = this.hexValue;
    }

    useCanvas(el, image, callback) {
        el.width = image.width;
        el.height = image.height;
        el.getContext('2d')
            .drawImage(image, 0, 0, image.width, image.height);
        return callback();
    }

    _(el) {
        return document.querySelector(el);
    };

    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    rgbToHex(r, g, b) {
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }

    findPos(obj) {
        var curleft = 0, curtop = 0;
        if (obj.offsetParent) {
            do {
                curleft += obj.offsetLeft;
                curtop += obj.offsetTop;
            } while (obj = obj.offsetParent);
            return { x: curleft, y: curtop };
        }
        return undefined;
    }
}
