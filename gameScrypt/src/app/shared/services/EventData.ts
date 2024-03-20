
export class EventData {
    event: Evt;
    data?: any;
};

export enum Evt {
    NAVIGATE,
    HTTP_ERROR,
    LOADING,
    NO_ACCESS,
    HEADER_CHANGE
};

export const StoreVar = {
    COMMITTEE: 'committee',
    URL: 'url',
    THEME: 'theme',
    LANG: 'lang',
    MEETING_EDIT_WIP: 'meetingeditwip'
};

export enum HEADER_TYPE {
    GAMESCRYPT,
    BACKGROUND_CV
}
