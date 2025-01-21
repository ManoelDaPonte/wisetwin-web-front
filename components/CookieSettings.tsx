// components/CookieSettings.tsx
export default function CookieSettings() {
	return (
		<button
			onClick={() => window.reopenCookieConsent?.()}
			className="text-sm text-gray-600 hover:underline"
		>
			Paramètres des cookies
		</button>
	);
}
