"use client";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import styles from "@/styles/cookies.module.css";

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

	return (
		<>
			{consent === null && (
				<div className={styles.cookieConsent}>
					<p>
						Nous utilisons des cookies pour améliorer votre
						expérience. Acceptez-vous l'utilisation des cookies?
					</p>
					<div className={styles.cookie}>
						<button onClick={() => handleConsent(true)}>
							Accepter
						</button>
						<button onClick={() => handleConsent(false)}>
							Refuser
						</button>
					</div>
				</div>
			)}
			{consent && <GoogleAnalytics gaId={gaId} />}
		</>
	);
};

export default CookieConsentClient;
