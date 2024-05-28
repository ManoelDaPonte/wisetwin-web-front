"use client";
import WiseTwin from "@/components/solutions/WiseTwin";
import Offers from "@/components/solutions/Offers";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<div className={styles.splitRow}>
				<WiseTwin />
				<Offers />
			</div>
		</div>
	);
}
