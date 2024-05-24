"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";
import PredictiveMaintenance from "@/components/solutions/PredictiveMaintenance";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<PredictiveMaintenance />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
