"use client";
import Presentation from "@/components/homePage/Presentation";
import Saasplatform from "@/components/homePage/Saasplatform";
import Gamechanger from "@/components/homePage/Gamechanger";
import Addedvalue from "@/components/homePage/Addedvalue";
import Timeline from "@/components/homePage/Timeline";
import styles from "@/styles/page.module.css";

const HomePage = () => {
	return (
		<div className={styles.pageSections}>
			<Presentation />
			<Timeline />
			<Saasplatform />
			<Gamechanger />
			<Addedvalue />
		</div>
	);
};

export default HomePage;
