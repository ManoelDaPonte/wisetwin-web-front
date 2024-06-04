"use client";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";

const CookieConsentClient = ({ gaId }) => {
	const [consent, setConsent] = useState(null);

	useEffect(() => {
		const savedConsent = localStorage.getItem("cookie_consent");
		if (savedConsent) {
			setConsent(savedConsent === "true");
		}
	}, []);

	const handleConsent = (isConsent) => {
		setConsent(isConsent);
		localStorage.setItem("cookie_consent", isConsent);
	};

	if (consent === null) {
		return (
			<div className="cookie-consent">
				<p>
					Nous utilisons des cookies pour améliorer votre expérience.
					Acceptez-vous l'utilisation des cookies?
				</p>
				<button onClick={() => handleConsent(true)}>Accepter</button>
				<button onClick={() => handleConsent(false)}>Refuser</button>
			</div>
		);
	}

	return consent ? <GoogleAnalytics gaId={gaId} /> : null;
};

export default CookieConsentClient;
