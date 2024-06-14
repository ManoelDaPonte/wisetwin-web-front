"use client";
import { useState, useEffect } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import styles from "@/styles/cookies.module.css";

const CookieConsentClient = ({ gaId }) => {
	const [consent, setConsent] = useState(null);

	useEffect(() => {
		if (typeof window !== "undefined") {
			const savedConsent = localStorage.getItem("cookie_consent");
			if (savedConsent) {
				if (savedConsent === "true") {
					setConsent(true);
				}
				if (savedConsent === "false") {
					setConsent(null);
				}
			} else {
				setConsent(null);
			}
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
						We use cookies to improve user experience and analyze.
						Do you accept our use of cookies?
					</p>
					<div className={styles.cookie}>
						<button onClick={() => handleConsent(true)}>
							Accept
						</button>
						<button onClick={() => handleConsent(false)}>
							Decline
						</button>
					</div>
				</div>
			)}
			{consent && <GoogleAnalytics gaId={gaId} />}
		</>
	);
};

export default CookieConsentClient;
