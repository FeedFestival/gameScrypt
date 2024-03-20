import { __capitalize } from '../../utils';

export class ConfirmDialogText {

    constructor(
        public title?: string,
        public question?: string,
        public cancel?: string,
        public confirm?: string,
        public message?: string,
        public onlyConfirmButton?: boolean,
        public hasOptions?: boolean,
        public hasCommentSection?: boolean,
        public optionsData?: object[],
        public downloadBtn?: boolean,
        public excelPath?: string,
        public messageStyle?: any,
    ) {
        this.title = title ? title : 'Confirm';
        this.message = message ? message : 'Are you sure?';
        this.cancel = cancel ? cancel : 'Cancel';
        this.confirm = confirm ? confirm : 'Confirm';
        this.onlyConfirmButton = onlyConfirmButton ? onlyConfirmButton : false;
        this.hasOptions = hasOptions ? hasOptions : false;
        this.hasCommentSection = hasCommentSection ? hasCommentSection : false;
        this.downloadBtn = downloadBtn ? downloadBtn : false;
        this.excelPath = excelPath ? excelPath : '';
    }
}

// export const getAttentionDialogText = (length, keyword: string = 'Warehouse', isProposalTypeDisc: boolean = true): ConfirmDialogText => {
//     let text = `You have selected to Discontinue from ` +
//         ((length > 1) ? `ALL ` + length + ' ' + keyword + `s` : 'one ' + keyword) + `.<br/>
//     This could severely impact the flow of goods `;

//     if (isProposalTypeDisc === false) {
//         text += (keyword === 'Warehouse' ? `from/to warehouse to shops.` : 'to shops.') + `<br/>
//             Do you want to proceed?`;
//     } else {
//         text += `to shops, therefore selection is not allowed. <br/>
//         We advise to reach Warehouse Discontinuation module, where Distribution Discontinuations can be performed.`;
//     }

//     let textObj: ConfirmDialogText = {
//         title: 'Attention',
//         message: text,
//         messageStyle: isProposalTypeDisc ? { 'font-size': '13px' } : null,
//         onlyConfirmButton: isProposalTypeDisc
//     };

//     if (isProposalTypeDisc === false) {
//         textObj = {
//             title: 'Attention',
//             message: `Are you sure you want to list in ALL ` + length + ` Shops? <br/>
//             Do you want to proceed?`
//         };
//         return textObj;
//     }
//     return textObj;
// };

// export const getReasonDialogSelectionText = (keyword: string = 'Warehouse', isProposalDisc: boolean = true) => {
//     const proposalKeyword = isProposalDisc ? 'discontinuation' : 'listing';
//     return {
//         title: __capitalize(proposalKeyword) + ' Reason',
//         question: `Before starting a Proposal,
//             please select a reason for ` + proposalKeyword + ` to be applied to this batch
//             of articles:`,
//         message: `Based on the ` + proposalKeyword + ` reason, a specific
//             Article Status will be applied to each selected combinations of
//             Item x ` + keyword + ` location and reflected in SAP.`,
//     };
// };

// export const getRejectionReasonsDialogText = () => {
//     return {
//         title: 'Rejection Reason',
//         question: `Please select a reason: `,
//         message: ``,
//     };
// };
