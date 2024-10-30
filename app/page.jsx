import styles from "@/styles/page.module.css";
import Hero from "@/components/homePage/Hero";
import HeroSolution from "@/components/solutions/HeroSolutionv1";
import GridWithCardsIllustrated from "@/components/common/GridWithCardsIllustrated";

const HomePage = () => {
	const cards = [
		{
			title: "Our Solutions",
			text: "We have brought sci-fi to reality. Discover our digital twin solutions and our innovative approach to enhance your daily tasks.",
			image: "image/png/digital-twin-recompressor-wise-twin.png",
			href: "/solutions",
		},
		{
			title: "Uses Cases",
			text: "Discover how our digital twins can help you with use cases that drive real-world impact.",
			image: "image/png/bulb-solutions.png",
			href: "/use-cases",
		},
		{
			title: "Industries",
			text: "Boost your industrial performance by increasing efficiency and productivity. Let our AI assistant provide you with data-driven insights and help reduce costs.",
			image: "image/png/turbine-exploded.png",
			href: "/industries",
		},
	];
	return (
		<div className={styles.pageSections}>
			<Hero />
			<HeroSolution />
			<GridWithCardsIllustrated cards={cards} />
		</div>
	);
};

export default HomePage;
