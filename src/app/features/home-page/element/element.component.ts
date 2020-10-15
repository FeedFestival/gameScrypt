import { Component, ElementRef, EventEmitter, Inject, Input, OnChanges, Output, PLATFORM_ID, SimpleChanges, ViewChild } from '@angular/core';
import { FileSystemFileEntry } from 'ngx-file-drop';
import { LocalStorageService } from 'ngx-webstorage';
import { ElementType } from 'src/app/app.constants';
import { CursorComponent } from '../cursor/cursor.component';
import { ElementsService } from './elements.service';
import { CdkTextareaAutosize } from '@angular/cdk/text-field';

@Component({
    selector: 'app-element',
    templateUrl: './element.component.html',
    styleUrls: ['./element.component.scss']
})
export class ElementComponent implements OnChanges {

    @Input() element: any;
    @Input() i: any;
    @Input() underCarret: boolean;

    @Output() onEdit: EventEmitter<void> = new EventEmitter<void>();
    @Output() onBlur: EventEmitter<void> = new EventEmitter<void>();
    @Output() onBookmark: EventEmitter<void> = new EventEmitter<void>();
    @Output() editCharacter: EventEmitter<void> = new EventEmitter<void>();

    @ViewChild('autosize', { static: false }) txtAreaAutosize: CdkTextareaAutosize;
    @ViewChild('inputRef', { static: false }) inputRef: ElementRef;
    @ViewChild('cursorRef', { static: false }) cursorRef: CursorComponent;
    @ViewChild('ckEditorRef', { static: false }) ckEditorRef: ElementRef;

    isBrowser = false;

    ElementTypeRef = ElementType;
    loaded = false;

    asyncObject: any = {
    };
    editorModel = {
        config: {
            toolbar: ['bold', 'italic', '|', 'link', '|', 'bulletedList', 'numberedList']
        }
    };

    myReader: FileReader;
    image;  // can delete this?

    constructor(
        @Inject(PLATFORM_ID) private platformId,
        private elementsService: ElementsService
    ) {
        this.isBrowser = (platformId === 'browser');
    }

    ngOnChanges(changes: SimpleChanges) {

        if (changes) {
            if (changes.element && changes.element.currentValue) {
                this.loaded = true;

                if (changes.element.currentValue.type === ElementType.PICTURE) {
                    this.myReader = new FileReader();
                    this.myReader.onloadend = this.onImageLoaded;
                }

                if (this.isBrowser) {
                    if (this.element.type === ElementType.ACTION) {
                        const clasicEditor = import('@ckeditor/ckeditor5-build-classic');
                        clasicEditor.then(classicEditor => {
                            this.asyncObject.Editor = classicEditor.default;
                        });
                    }
                }

                if (!changes.element.firstChange) {
                    return;
                }

                if (this.element.type === ElementType.ACTION) {
                    if (!this.element.hasRichText) {
                        this.forceResizeContent();
                    }
                }
                if (this.element.type === ElementType.COMMENT ||
                    this.element.type === ElementType.DIALOG) {
                    this.forceResizeContent();
                }
            }
            if (changes.underCarret) {

                // console.log(this.element.id + ' - ' + this.underCarret);
                if (!this.cursorRef) {
                    // console.warn(`Can't get cursor.`);
                    return;
                }

                changes.underCarret.currentValue === true ? this.cursorRef.open() : this.cursorRef.close();
            }
        }
    }

    edit() {
        this.onEdit.emit(this.i);
    }

    blur() {
        this.onBlur.emit(this.i);
    }

    isOutOfView() {
        let bounding;
        if (this.inputRef) {
            bounding = this.inputRef.nativeElement.getBoundingClientRect();
        } else {
            const ckEditor = (this.ckEditorRef as any);
            if (ckEditor) {
                bounding = ckEditor.elementRef.nativeElement.getBoundingClientRect();
            }
        }

        if (bounding) {
            return (bounding.y < 200 || bounding.y > (document.documentElement.clientHeight - 200));
        }
        return false;
    }

    onActionRichText(e?) {
        if (this.element.hasRichText) {
            if (!this.element.editorData || this.element.editorData.length === 0) {
                this.element.editorData = this.elementsService.convertToHtml(this.element.text);
            }

            setTimeout(() => {
                (this.ckEditorRef as any).focus
                    .subscribe(() => {
                        this.edit();
                    });
                (this.ckEditorRef as any).blur
                    .subscribe(() => {
                        this.blur();
                    });
                const el = (this.ckEditorRef as any).elementRef.nativeElement;
                el.lastElementChild.lastElementChild.lastElementChild.click();
                el.lastElementChild.lastElementChild.lastElementChild.focus();
            });
        } else {
            if (!this.element.text || this.element.text.length === 0) {
                this.element.text = this.elementsService.stripHtml(this.element.editorData);
            }
            setTimeout(() => {
                this.inputRef.nativeElement.click();
                this.inputRef.nativeElement.focus();
            });
        }
    }

    dropped(files) {
        for (const droppedFile of files) {
            if (droppedFile.fileEntry.isFile) {
                const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
                fileEntry.file((file: File) => {
                    this.myReader.readAsDataURL(file);
                });
            }
        }
    }

    onImageLoaded = () => {
        this.element.image = this.myReader.result;
        this.elementsService.saveImage(this.element)
            .subscribe(_ => {
                this.blur();
            });
    }

    bookmark(isBookmarked) {
        this.element.isBookmarked = isBookmarked;
        this.onBookmark.emit();
    }

    // we do this so that cdkAutosize refreshes based on the content : some unknown bug occured.
    forceResizeContent = () => {
        // if (this.element.text.indexOf('A man, young, probably in his 20s') < 0) {
        //     return;
        // }
        setTimeout(() => {
            this.txtAreaAutosize.resizeToFitContent(true);
            setTimeout(() => {
                this.txtAreaAutosize.resizeToFitContent(true);
            }, 500);
        }, 500);
    }

    externalBlur() {
        if (this.element.hasRichText) {
            this.blur();
            const el = (this.ckEditorRef as any).elementRef.nativeElement;
            el.lastElementChild.lastElementChild.lastElementChild.blur();
        } else {
            this.inputRef.nativeElement.blur();
        }
    }

    externalEdit() {
        if (this.element.hasRichText) {
            this.edit();
            this.onActionRichText();
            setTimeout(() => {
                const el = (this.ckEditorRef as any).elementRef.nativeElement;
                el.lastElementChild.lastElementChild.lastElementChild.click();
                el.lastElementChild.lastElementChild.lastElementChild.focus();
            }, 500);
        } else {
            this.inputRef.nativeElement.click();
        }
    }

    onEditCharacter() {
        this.editCharacter.emit(this.element);
    }
}
