"use client";

import Presentation from "@/components/homePage/Presentation";
import Saasplatform from "@/components/homePage/Saasplatform";
import Gamechanger from "@/components/homePage/Gamechanger";
import Addedvalue from "@/components/homePage/Addedvalue";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<Presentation />
				<Saasplatform />
				<Gamechanger />
				<Addedvalue />
				<Utils />
			</div>
			<Footer />
		</div>
	);
}
