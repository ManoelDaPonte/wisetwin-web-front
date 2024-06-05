"use client";
import styles from "@/styles/page.module.css";
import Hero from "@/components/homePage/Hero";
import GridWithCardsIllustrated from "@/components/common/GridWithCardsIllustrated";

const HomePage = () => {
	const cards = [
		{
			title: "Our Solutions",
			text: "From Scada system to digital twin, discover our solutions.",
			image: "image/png/turbine-exploded.png",
		},
		{
			title: "Uses Cases",
			text: "How our digital twin solution can help you.",
			image: "image/png/saas_exploded.png",
		},
		{
			title: "Industry",
			text: "Discover our solutions for the industry.",
			image: "image/png/ai-modeling.png",
		},
	];
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
			<GridWithCardsIllustrated cards={cards} />
		</div>
	);
};

export default HomePage;
