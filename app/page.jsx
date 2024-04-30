import React from "react";
import Presentation from "@/components/sections/Presentation";
import Saasplatform from "@/components/sections/Saasplatform";
import Gamechanger from "@/components/sections/Gamechanger";
import Whatsnew from "@/components/sections/Whatsnew";
import styles from "@/styles/page.module.css";

const HomePage = () => {
	return (
		<div className={styles.wrapper}>
			<Presentation />
			<Saasplatform />
			<Gamechanger />
		</div>
	);
};

export default HomePage;
