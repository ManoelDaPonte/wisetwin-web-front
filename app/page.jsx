"use client";
import styles from "@/styles/page.module.css";
import Hero from "@/components/homePage/Hero";
import GridWithCardsIllustrated from "@/components/common/GridWithCardsIllustrated";

const HomePage = () => {
	const cards = [
		{
			title: "Our Solutions",
			text: "We brought sci-fi ideas to reality. Discover our digital twin solutions.",
			image: "image/png/turbine-exploded.png",
			href: "/solutions",
		},
		{
			title: "Uses Cases",
			text: "How our digital twin solution can help you.",
			image: "image/png/our-solutions.jpg",
			href: "/use-cases",
		},
		{
			title: "Industries",
			text: "Discover our solutions for the industry.",
			image: "image/png/ai-modeling.png",
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
