"use client";

import Terms from "@/components/legals/Terms";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<Terms />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
