"use client";
import styles from "@/styles/page.module.css";
import Hero from "@/components/homePage/Hero";
import GridWithCardsIllustrated from "@/components/common/GridWithCardsIllustrated";

const HomePage = () => {
	const cards = [
		{
			title: "Our Solutions",
			text: "We brought sci-fi to reality. Discover our digital twin solutions, and our innovative approach to enhance your daily tasks.",
			image: "image/png/digital-twin-recompressor-wise-twin.png",
			href: "/solutions",
		},
		{
			title: "Uses Cases",
			text: "Discover how our digital twins can help you, with use cases that drive real-world impact",
			image: "image/png/our-solutions.jpg",
			href: "/use-cases",
		},
		{
			title: "Industries",
			text: "Boost your industrial performance by increasing efficiency and productivity. Let our AI-assistant provide you data-driven insights and help reduce costs.",
			image: "image/png/turbine-exploded.png",
			href: "/industries",
		},
	];
	return (
		<div className={styles.pageSections}>
			<Hero />
			<GridWithCardsIllustrated cards={cards} />
		</div>
	);
};

export default HomePage;
