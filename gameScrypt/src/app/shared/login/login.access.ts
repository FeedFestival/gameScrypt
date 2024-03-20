export interface LoginUiAccess {
    loggedIn: boolean;
    title: string;
    phase: string;
    loggingOut: boolean;
    buttonDanishMow: boolean;
    butName?: string;
    butRoute?: string;
}

export interface LoginPhase {
    LOGIN_PHASE: string;
    LOADING_PHASE: string;
    LOGGED_IN_PHASE: string;
}

export const LOGIN_PHASE: LoginPhase = {
    LOGIN_PHASE: 'LOGIN_PHASE',
    LOADING_PHASE: 'LOADING_PHASE',
    LOGGED_IN_PHASE: 'LOGGED_IN_PHASE'
};

// tslint:disable-next-line: variable-name
export const __isInAir = (values: string[]) => {
    return !values ? false : values.includes('AIR');
};
// tslint:disable-next-line: variable-name
export const __isDan = (values: string[]) => {
    return !values ? false : values.includes('DAN');
};
// tslint:disable-next-line: variable-name
export const __isIt = (values: string[]) => {
    return !values ? false : values.includes('IT');
};
// tslint:disable-next-line: variable-name
export const __isDuringStorm = (values: string[]) => {
    return !values ? false : values.includes('STORM');
};
