"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import OperationalAwareness from "@/components/solutions/OperationalAwareness";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<OperationalAwareness />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
