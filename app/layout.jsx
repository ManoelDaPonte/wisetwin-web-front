import "@/styles/globals.css";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import Footer from "@/components/Footer";
import { Roboto } from "next/font/google";
import CookieConsentClient from "@/components/CookieConsent";
import GoogleAnalyticsCookie from "@/components/GoogleAnalyticsCookies";

const roboto = Roboto({
	weight: "300",
	subsets: ["latin"],
	display: "swap",
});

export const metadata = {
	title: "Wise Twin",
	description: "Next-generation digital twins for Industry.",
	content:
		"Developing next-generation digital twins for industry. An immersive, interactive, and intuitive SaaS platform. Get your digital twin in 7 days to enhance your industry's performance!",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className={roboto.className}>
			<body>
				<Header />
				{children}
				<Utils />
				<Footer />
				<CookieConsentClient />
				<GoogleAnalyticsCookie gaId="G-7XCC5XZW36" />
			</body>
		</html>
	);
}
