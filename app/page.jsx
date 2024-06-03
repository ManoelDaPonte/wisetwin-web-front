"use client";
import Presentation from "@/components/homePage/Presentation";
import MultiLayerSection from "@/components/homePage/MultiLayerSection";
import Timeline from "@/components/homePage/Timeline";
import Cube3d from "@/components/homePage/Cube3d";
import styles from "@/styles/page.module.css";
import Hero from "@/components/homePage/Hero";

const HomePage = () => {
	return (
		// <div className={styles.pageSections}>
		// 	<Presentation />
		// 	<div>
		// 		<MultiLayerSection />
		// 		<Cube3d />
		// 		<Timeline />
		// 	</div>
		// </div>

		<div className={styles.pageSections}>
			<Hero />
			<div>
				<MultiLayerSection />
				<Cube3d />
				<Timeline />
			</div>
		</div>
	);
};

export default HomePage;
