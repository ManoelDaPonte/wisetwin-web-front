"use client";

import PrivacyPolicy from "@/components/legals/PrivacyPolicy";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<PrivacyPolicy />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
