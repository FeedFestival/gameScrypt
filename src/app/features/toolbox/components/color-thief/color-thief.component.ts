import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { SeoService } from 'src/app/features/home-page/seo.service';
import { COLOR_THIEF_ROUTE, TOOLBOX_ROUTE } from 'src/app/routes/toolbox/toolbox.seo';
import { _clone, _isNilOrEmpty } from 'src/app/shared/lodash-utils';
import { OnResizeService } from 'src/app/shared/on-resize/on-resize.service';
// import * as Vibrant from 'Vibrant';
declare var Vibrant: any;

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
    @ViewChild('colorPickerRef', { static: false }) colorPickerRef: ElementRef;

    previousHexValue: string;
    hexValue: string;
    rgbaValue: string;
    hslValue: string;
    isEyedropMode = false;
    colorPickerValue: any;
    imageColors = [];

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

    ngAfterViewInit() {
        setTimeout(_ => {
            this.setPreviewColor('#f15a24');
        });
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

                    let vibrant = new Vibrant(this.imgRenderer.nativeElement);
                    var swatches = vibrant.swatches();
                    this.imageColors = [];
                    for (var swatch in swatches) {
                        if (swatches.hasOwnProperty(swatch) && swatches[swatch]) {
                            this.imageColors.push(swatches[swatch].getHex());
                        }
                    }

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

    colorPickerChange(hex) {
        this.setPreviewColor(hex);
    }

    setPreviewColor(hex) {
        this.hexValue = hex;
        this.colorPickerValue = hex;
        const rgb = this.hexToRgbA(this.hexValue);
        this.rgbaValue = rgb.string;
        this.hslValue = this.RGBToHSL(rgb.r, rgb.g, rgb.b);
        this.previewRef.nativeElement.style.background = this.hexValue;
    }

    hexToRgbA(hex) {
        var c;
        if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
            c = hex.substring(1).split('');
            if (c.length == 3) {
                c = [c[0], c[0], c[1], c[1], c[2], c[2]];
            }
            c = '0x' + c.join('');
            const returnVal = {
                r: (c >> 16) & 255,
                g: (c >> 8) & 255,
                b: c & 255,
                string: 'rgba(' + [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(',') + ',1)'
            };
            return returnVal;
        } else {
            throw new Error('Bad Hex');
        }
    }

    RGBToHSL(r, g, b) {
        // Make r, g, and b fractions of 1
        r /= 255;
        g /= 255;
        b /= 255;

        // Find greatest and smallest channel values
        let cmin = Math.min(r, g, b),
            cmax = Math.max(r, g, b),
            delta = cmax - cmin,
            h = 0,
            s = 0,
            l = 0;
        // Calculate hue
        // No difference
        if (delta == 0)
            h = 0;
        // Red is max
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        // Green is max
        else if (cmax == g)
            h = (b - r) / delta + 2;
        // Blue is max
        else
            h = (r - g) / delta + 4;

        h = Math.round(h * 60);

        // Make negative hues positive behind 360°
        if (h < 0)
            h += 360;
        // Calculate lightness
        l = (cmax + cmin) / 2;

        // Calculate saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

        // Multiply l and s by 100
        s = +(s * 100).toFixed(1);
        l = +(l * 100).toFixed(1);

        return "hsl(" + h + "," + s + "%," + l + "%)";
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
