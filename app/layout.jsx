import "@/styles/globals.css";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata = {
	title: "WiseTwin",
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
			<GoogleAnalytics gaId="G-7XCC5XZW36" />
		</html>
	);
}
