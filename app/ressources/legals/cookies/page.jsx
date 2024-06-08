"use client";
import CookiePolicy from "@/components/legals/CookiePolicy";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<CookiePolicy />
		</div>
	);
}
