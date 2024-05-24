"use client";

import Presentation from "@/components/homePage/Presentation";
import Saasplatform from "@/components/homePage/Saasplatform";
import Gamechanger from "@/components/homePage/Gamechanger";
import Addedvalue from "@/components/homePage/Addedvalue";

import Utils from "@/components/Utils";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Header2 from "@/components/Header2";

import styles from "@/styles/page.module.css";

const HomePage = () => {
	return (
		<div className={styles.wrapper}>
			<Header2 />
			<div className={styles.pageSections}>
				<Presentation />
				<Saasplatform />
				<Gamechanger />
				<Addedvalue />
			</div>
			<Utils />
			<Footer />
		</div>
	);
};

export default HomePage;
