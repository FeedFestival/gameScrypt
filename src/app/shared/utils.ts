import { _isNilOrEmpty } from './lodash-utils';

/* tslint:disable */
export const __capitalize = (lowercase) => {
    return lowercase.replace(/^\w/, c => c.toUpperCase());
};

export const __sanitizeComponent = (key, options: SanitizeOptions) => {
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
    }
};

export interface SanitizeOptions {
    full?: string;
    afterFull?: string;
}
