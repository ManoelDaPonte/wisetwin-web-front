import "@/styles/globals.css";

export const metadata = {
	title: "Wise Twin",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
