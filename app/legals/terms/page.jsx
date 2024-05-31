"use client";
import Terms from "@/components/legals/Terms";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<Terms />
		</div>
	);
}
