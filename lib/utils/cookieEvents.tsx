export const COOKIE_EVENTS = {
	PREFERENCES_UPDATED: "cookiePreferencesUpdated",
} as const;

export const emitCookiePreferencesUpdate = () => {
	window.dispatchEvent(new Event(COOKIE_EVENTS.PREFERENCES_UPDATED));
};
