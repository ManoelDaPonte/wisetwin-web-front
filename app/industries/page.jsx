import styles from "@/styles/page.module.css";
import GridWithCards from "@/components/common/GridWithCards";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import Title from "@/components/common/Title";
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
			text: "HRS for utilities, or entreprise levels.",
		},
		{
			title: "Energy storage",
			text: "BESS: Heat, chemical, electricity storage",
		},
	];
	const cards_warehouse = [
		{
			title: "Process lines",
			text: "",
		},
		{
			title: "Assets management",
			text: "",
		},
		{
			title: "Flow simulation",
			text: "",
		},
		{
			title: "Work optimization",
			text: "",
		},
	];
	const cards_cities = [
		{
			title: "Transport systems",
			text: "",
		},
		{
			title: "Air quality",
			text: "",
		},
		{
			title: "Waste management",
			text: "",
		},
		{
			title: "Public Safety",
			text: "",
		},
	];
	const cards_building = [
		{
			title: "Energy efficiency",
			text: "",
		},
		{
			title: "Security systems",
			text: "",
		},
		{
			title: "Assets management",
			text: "",
		},
		{
			title: "Arquitectural design",
			text: "",
		},
	];
	const cards_industry = [
		{
			title: "Safety optimization",
			text: "",
		},
		{
			title: "Process lines management",
			text: "",
		},
		{
			title: "Flow efficiency",
			text: "",
		},
		{
			title: "Automation design",
			text: "",
		},
	];
	return (
		<div className={styles.pageSections}>
			<div>
				<Title text={"Digital Twin for the Energy sector"} id={"smart-energy"} />
				<SectionIllustrated
					title="Power Plant"
					image="/image/png/energy.png"
					imagePosition="right"
				>
					<p>
						Complex grids and growing renewable energy capacity will
						change the way we manage electricity. Using Digital Twins can help
						support the design, monitoring, and maintenance of power
						plants, new grid infrastructures, and optimize electricity production.
						Here is what Wise Twin solutions can do:
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards_energy} />
			</div>
			<div>
				<Title
					text={"Digital Twin for Warehouse Monitoring"}
					id={"warehouse-monitoring"}
				/>
				<SectionIllustrated
					title="Warehouse Monitoring"
					image="/image/png/warehouse-monitoring.png"
					imagePosition="right"
				>
					<p>
						Enter in next-gen factories and warehouses, fully digitalized,
						to optimize processes, operations and energy efficiency.
						Discover how Digital Twins will drive your workforce to the top,
						and take care of your assets management.
					</p>
					<p>
						Allocate your assets with efficiency. Manage your productions
						lines, batch sizes and predict avery outcome.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards_warehouse} />
			</div>
			<div>
				<Title text={"Digital Twin for Smart City"} id={"smart-city"} />
				<SectionIllustrated
					title="Sustainable Cities"
					image="/image/png/sustainable-cities.png"
					imagePosition="right"
				>
					<p>
						Cities are more connected everyday. Discover how our
						Digital Twin virtualizes cities, and link billions of data
						in an intuitive 3D platform. 
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards_cities} />
			</div>
			<div>
				<Title
					text={"Digital Twin for Smart Buildings"}
					id={"smart-buildings"}
				/>
				<SectionIllustrated
					title="Smart Building"
					image="/image/png/smart-building.png"
					imagePosition="right"
				>
					<p>
						Visualise and simulate any aspect of your office, flat or building,
						and increase your efficiency. Explore BIM modeling for design,
						simulation, or any other aspect of smart building.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards_building} />
			</div>
			<div>
				<Title
					text={"Digital Twin for 4.0 industry"}
					id={"industry-4.0"}
				/>
				<SectionIllustrated
					title="4.0 Industry"
					image="/image/png/40-industry.png"
					imagePosition="right"
				>
					<p>
						Dive into 4.0 Industry with our immersive 3D platform
						where your Digital Twin will gather any information of your
						plant in an immersive, interactive, and intuitive way.
					</p>
				</SectionIllustrated>
				<GridWithCards cards={cards_industry} />
			</div>
		</div>
	);
}
