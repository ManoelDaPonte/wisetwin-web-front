"use client";
import PrivacyPolicy from "@/components/legals/PrivacyPolicy";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<PrivacyPolicy />
		</div>
	);
}
