import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ConfirmDialogText } from './confirm-dialog-text';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

    // Pay attention to add the panelClass, when needed, for design consistency. Example panelClass: 'confirm-dialog'.

    dialogText = new ConfirmDialogText();
    optionChecked: any = 1;
    rejectedReasonComment = '';
    constructor(
        private dialogRef: MatDialogRef<ConfirmDialogComponent>,
        private dialog: MatDialog,
        @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogText
    ) { }

    ngOnInit() {
        this.dialogText = { ...this.dialogText, ...this.data };
    }
    cancel() {
        this.dialogRef.close(false);
    }

    confirm() {

        this.dialog.closeAll();
        if (this.data.hasOptions) {
            const confirm = {
                status: true,
                optionChecked: this.optionChecked,
                rejectedReasonComment: this.rejectedReasonComment
            };
            this.dialogRef.close(confirm);
        } else {
            this.dialogRef.close(true);
        }
    }
}
