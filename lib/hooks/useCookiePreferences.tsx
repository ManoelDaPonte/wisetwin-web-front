import { useState, useEffect } from "react";
import type { CookiePreferences } from "../types";
import { emitCookiePreferencesUpdate } from "@/lib/utils/cookieEvents";

const DEFAULT_PREFERENCES: CookiePreferences = {
	necessary: true,
	analytics: false,
	marketing: false,
	preferences: false,
};

export const useCookiePreferences = () => {
	const [preferences, setPreferences] =
		useState<CookiePreferences>(DEFAULT_PREFERENCES);

	useEffect(() => {
		const savedPreferences = localStorage.getItem("cookie_preferences");
		if (savedPreferences) {
			setPreferences(JSON.parse(savedPreferences));
		}
	}, []);

	const savePreferences = (newPreferences: CookiePreferences) => {
		localStorage.setItem(
			"cookie_preferences",
			JSON.stringify(newPreferences)
		);
		setPreferences(newPreferences);
		emitCookiePreferencesUpdate();
	};

	return { preferences, savePreferences };
};
