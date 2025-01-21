"use client";

import React, { useEffect, useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { COOKIE_EVENTS } from "@/lib/utils/cookieEvents";
import type { CookiePreferences } from "../lib/types";

interface GoogleAnalyticsCookieProps {
	gaId: string;
}

export default function GoogleAnalyticsCookie({
	gaId,
}: GoogleAnalyticsCookieProps) {
	const [shouldLoadGA, setShouldLoadGA] = useState(false);

	useEffect(() => {
		const checkAnalyticsConsent = () => {
			const savedConsent = localStorage.getItem("cookie_preferences");
			if (savedConsent) {
				const preferences = JSON.parse(
					savedConsent
				) as CookiePreferences;
				setShouldLoadGA(preferences.analytics);
			}
		};

		// Vérification initiale
		checkAnalyticsConsent();

		// Écouter les changements de préférences
		window.addEventListener(
			COOKIE_EVENTS.PREFERENCES_UPDATED,
			checkAnalyticsConsent
		);

		return () => {
			window.removeEventListener(
				COOKIE_EVENTS.PREFERENCES_UPDATED,
				checkAnalyticsConsent
			);
		};
	}, []);

	if (!shouldLoadGA || !gaId) {
		return null;
	}

	return <GoogleAnalytics gaId={gaId} />;
}
