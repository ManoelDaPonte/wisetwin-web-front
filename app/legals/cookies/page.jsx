"use client";
import CookiePolicy from "@/components/legals/CookiePolicy";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<CookiePolicy />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
