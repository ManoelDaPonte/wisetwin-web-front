import styles from "@/styles/page.module.css";
import GridWithCards from "@/components/common/GridWithCards";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import CallToAction from "@/components/ui/magicui/CallToAction";
export default function Page() {
	const cards_energy = [
		{
			title: "Power plants",
			text: "Renewables (Hydrogen, Solar PV, Concentrated solar power, Biomass, Wind, Hydro, etc...)",
		},
		{
			title: "Smart grids",
			text: "Next-gen smart grids, integrating DER in the mix. ",
		},
		{
			title: "Refueling stations",
			text: "HRS for utilities, or enterprise levels.",
		},
		{
			title: "Energy storage",
			text: "BESS: Heat, chemical, electricity storage",
		},
	];
	const cards_warehouse = [
		{
			title: "Process lines",
			text: "Optimize and automate production lines for increased efficiency and reduced downtime.",
		},
		{
			title: "Assets management",
			text: "Track, monitor, and maintain assets in real-time for optimal performance and longevity.",
		},
		{
			title: "Flow simulation",
			text: "Simulate and analyze material and product flows to improve logistics and workflow.",
		},
	];
	const cards_cities = [
		{
			title: "Transport systems",
			text: "Integrate smart transportation solutions for efficient and sustainable urban mobility.",
		},
		{
			title: "Air quality",
			text: "Monitor and manage air quality to ensure a healthy environment for city inhabitants.",
		},
		{
			title: "Waste management",
			text: "Implement smart waste management systems to reduce pollution and improve recycling rates.",
		},
		{
			title: "Public Safety",
			text: "Enhance public safety through intelligent surveillance and emergency response systems.",
		},
		{
			title: "Green Spaces",
			text: "Develop and maintain urban green spaces for recreation and environmental benefits.",
		},
	];
	const cards_building = [
		{
			title: "Energy efficiency",
			text: "Adopt energy-efficient technologies and practices to reduce consumption and costs.",
		},
		{
			title: "Security systems",
			text: "Install advanced security systems for comprehensive protection and monitoring.",
		},
		{
			title: "Assets management",
			text: "Manage building assets efficiently to prolong their life and ensure optimal use.",
		},
		{
			title: "Architectural design",
			text: "Utilize cutting-edge design tools for innovative and sustainable architectural solutions.",
		},
		{
			title: "Space Utilization",
			text: "Optimize space utilization for better functionality and productivity.",
		},
	];
	const cards_industry = [
		{
			title: "Safety optimization",
			text: "Enhance industrial safety with advanced monitoring and risk management solutions.",
		},
		{
			title: "Process lines management",
			text: "Streamline and automate process lines for improved efficiency and reduced errors.",
		},
		{
			title: "Flow efficiency",
			text: "Improve material and workflow efficiency to boost overall productivity.",
		},
		{
			title: "Automation design",
			text: "Design and implement automation solutions for seamless industrial operations.",
		},
		{
			title: "Predictive Maintenance",
			text: "Use predictive analytics to schedule maintenance and prevent downtime.",
		},
		{
			title: "Quality Control",
			text: "Implement robust quality control measures to ensure product consistency.",
		},
		{
			title: "Resource Management",
			text: "Efficiently manage resources to reduce waste and increase profitability.",
		},
	];
	return (
		<div>
			<CallToAction
				title="Discover our solution for your industry."
				description="Contact us if you want to know more about our solutions for different industries and how we can help you achieve your goals."
				buttonText="Contact us"
				buttonLink="/contact"
			/>
			<div className={styles.pageSections}>
				<section id="energy">
					<SectionIllustrated
						title="Energy"
						image="/image/png/energy.png"
						imagePosition="right"
						button={{
							label: "Contact for information",
							href: "/contact",
						}}
					>
						<p>
							Complex grids and growing renewable energy capacity
							will change the way we manage electricity. Using
							Digital Twins can help support the design,
							monitoring, and maintenance of power plants, new
							grid infrastructures, and optimize electricity
							production. Here is what Wise Twin solutions can do:
						</p>
					</SectionIllustrated>
					<GridWithCards cards={cards_energy} />
				</section>
				<section id="warehouse-monitoring">
					<SectionIllustrated
						title="Warehouse Monitoring"
						image="/image/png/warehouse-monitoring.png"
						imagePosition="left"
						button={{
							label: "Contact for information",
							href: "/contact",
						}}
					>
						<p>
							Enter in next-gen factories and warehouses, fully
							digitalized, to optimize processes, operations and
							energy efficiency. Discover how Digital Twins will
							drive your workforce to the top, and take care of
							your assets management.
						</p>
						<p>
							Allocate your assets with efficiency. Manage your
							production lines, batch sizes and predict every
							outcome.
						</p>
					</SectionIllustrated>
					<GridWithCards cards={cards_warehouse} />
				</section>
				<section id="smart-city">
					<SectionIllustrated
						title="Sustainable Cities"
						image="/image/png/sustainable-cities.png"
						imagePosition="right"
						button={{
							label: "Contact for information",
							href: "/contact",
						}}
					>
						<p>
							As cities continue to evolve and grow, the need for 
							innovative solutions to manage and optimize urban 
							infrastructure has become increasingly pressing. 
							Discover how our Digital Twin virtualizes cities, and link
							billions of data in an intuitive 3D platform
						</p>
					</SectionIllustrated>
					<GridWithCards cards={cards_cities} />
				</section>
				<section id="smart-buildings">
					<SectionIllustrated
						title="Smart Building"
						image="/image/png/smart-building.png"
						imagePosition="left"
						button={{
							label: "Contact for information",
							href: "/contact",
						}}
					>
						<p>
							Visualize and simulate any aspect of your office,
							flat, or building, and increase your efficiency.
							Explore BIM modeling for design, simulation, or any
							other aspect of smart building.
						</p>
					</SectionIllustrated>
					<GridWithCards cards={cards_building} />
				</section>
				<section id="industry-4.0">
					<SectionIllustrated
						title="4.0 Industry"
						image="/image/png/40-industry.png"
						imagePosition="right"
						button={{
							label: "Contact for information",
							href: "/contact",
						}}
					>
						<p>
							Dive into 4.0 Industry with our immersive 3D
							platform where your Digital Twin will gather any
							information of your plant in an immersive,
							interactive, and intuitive way.
						</p>
					</SectionIllustrated>
					<GridWithCards cards={cards_industry} />
				</section>
			</div>
		</div>
	);
}
