
export class EventData {
	event: Evt = Evt.NAVIGATE;
	data?: any;
};








export enum Evt {
	NAVIGATE,
	HTTP_ERROR,
	LOADING,
	NO_ACCESS,
	BLUR,
	STEP_FORWARD,
	SIDENAV_TOGGLE
};

