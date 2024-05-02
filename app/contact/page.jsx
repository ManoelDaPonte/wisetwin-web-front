"use client";
import React from "react";
import Presentation from "@/components/homePage/Presentation";
import Saasplatform from "@/components/homePage/Saasplatform";
import Gamechanger from "@/components/homePage/Gamechanger";
import Addedvalue from "@/components/homePage/Addedvalue";
import Utils from "@/components/homePage/Utils";
import styles from "@/styles/page.module.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

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
