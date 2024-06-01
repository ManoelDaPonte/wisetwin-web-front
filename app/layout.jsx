import "@/styles/globals.css";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import Footer from "@/components/Footer";
// import { GoogleAnalytics } from "next-google-analytics";

export const metadata = {
	title: "WiseTwin",
	script: [
		{
			src: "https://www.googletagmanager.com/gtag/js?id=G-7XCC5XZW36",
			async: true,
		},
	],
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>
				<Header />
				{children}
				<Utils />
				<Footer />
			</body>
		</html>
	);
}
