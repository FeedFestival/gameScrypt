import { _isNilOrEmpty } from './lodash-utils';

/* tslint:disable */
export const __capitalize = (lowercase: any) => {
    return lowercase.replace(/^\w/, (c: any) => c.toUpperCase());
};

export const MONTH = {
    JANUARY: 'January',
    FEBRUARY: 'February',
    MARCH: 'March',
    APRIL: 'April',
    MAY: 'May',
    JUNE: 'June',
    JULY: 'July',
    AUGUST: 'August',
    SEPTEMBER: 'September',
    OCTOBER: 'October',
    NOVEMBER: 'November',
    DECEMBER: 'December'
}
export const MONTH_LIST = [
    MONTH.JANUARY, MONTH.FEBRUARY,
    MONTH.MARCH, MONTH.APRIL, MONTH.MAY,
    MONTH.JUNE, MONTH.JULY, MONTH.AUGUST,
    MONTH.SEPTEMBER, MONTH.OCTOBER, MONTH.NOVEMBER,
    MONTH.DECEMBER
];

export const __getMonthName = (monthId: any) => {
    return MONTH_LIST[monthId];
}

export const __sanitizeComponent = (key: any, options: SanitizeOptions) => {
    switch (key) {
        case 'cool-text':
            if (options.full === 'gameScrypt')
                return `
<span>
    <span class="word mrn-5px">
        game
    </span>
    <span class="pre mrn-5px">
        S
    </span>
    <span class="word">
        crypt` + ((_isNilOrEmpty(options.afterFull) === false) ? options.afterFull : '') + `
    </span>
</span>`;
        //             if (options.full === 'gameScrypt.com')
        //                 return `
        // <span>
        //     <span class="word mrn-5px">
        //         game
        //     </span>
        //     <span class="pre mrn-5px">
        //         S
        //     </span>
        //     <span class="word">
        //         crypt.com
        //     </span>
        // </span>`;
		return '';
		default: return '';
    }
};

export interface SanitizeOptions {
    full?: string;
    afterFull?: string;
}
