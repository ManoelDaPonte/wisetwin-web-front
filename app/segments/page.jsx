"use client";
import Presentation from "@/components/homePage/Presentation";
import Saasplatform from "@/components/homePage/Saasplatform";
import Gamechanger from "@/components/homePage/Gamechanger";
import Addedvalue from "@/components/homePage/Addedvalue";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<Presentation />
			<Saasplatform />
			<Gamechanger />
			<Addedvalue />
			<Utils />
		</div>
	);
}
