import "@/styles/globals.css";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import Footer from "@/components/Footer";

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
		</html>
	);
}
