import styles from "@/styles/page.module.css";
import HeroSolution from "@/components/solutions/HeroSolutionv2";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import Title from "@/components/common/Title";

export default function Page() {
	const cards_wisetwin = [
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
	return (
		<div className={styles.pageSections}>
			<HeroSolution />
			<section id="digital-twin">
				<SectionIllustrated
					title="We do the work for you"
					subTitle="The fastest on the market"
					image="/image/png/WiseTwin-pipeline-development.png"
					imagePosition="right"
				>
					<p>
						Get the most innovative front-end of your plant.
						Deploy high-quality 3D rendering of your assets, and play with your early digital
						twin, so you will be able to:
					</p>
					<br />
					<ul>
						<li>• Enhance internal and external communication </li>
						<li>• Get a global awareness of your assets</li>
						<li>• Visualize and simulate changes in your industry</li>
					</ul>
				</SectionIllustrated>
				<div className={styles.split}></div>
				<SectionIllustrated
					title="Cross-platform integration"
					subTitle="Make it operational"
					image="/image/png/online-monitoring.png"
					imagePosition="left"
				>
					<p>
						Add interactive dashboards displaying real-time
						properties of your twin. By integrating our
						AI-assistant, you will let our visual alerting system
						make the job within your 3D virtual world.
					</p>
					<br />
					<ul>
						<li>• Enhance your decision-making capabilities</li>
						<li>• Enhance your operational awareness</li>
						<li>• Generate visual and fast reporting</li>
					</ul>
				</SectionIllustrated>
				<div className={styles.split}></div>

				<SectionIllustrated
					title="For innovation leaders"
					subTitle="Integrate your maintenance modules !"
					image="/image/png/saas-exploded.png"
					imagePosition="right"
				>
					<p>
						Be a leader with your fully operational Digital Twin
						with your predictive maintenance modules. Implement
						algorithms and modeling tools to run numerical
						simulations of your physical assets.
					</p>
					<br />
					<ul>
						<li>• Optimize every workflow </li>
						<li>• Avoid shutdowns of production lines</li>
						<li>• Avoid shutdowns of machines</li>
					</ul>
				</SectionIllustrated>
			</section>
			<section id="trainer-twin">
				<Title
					title={"WiseTrainer™"}
					subTitle={"Our new solution! check it out !"}
				/>
				<SectionIllustrated
					title="WiseTrainer™"
					subTitle="Your Virtual Formation"
					image="/image/png/virtual-formation.png"
					imagePosition="right"
				>
					<p>
						Add tailor-made formation modules to your digital twin
						and virtualize the formation and training of your
						workforce.
					</p>
					<br />
					<ul>
						<li>• Gain a skilled workforce</li>
						<li>• Decrease formation time and cost</li>
						<li>
							• Simulate critical issues before they even happen
						</li>
						<li>• Analyse and correct bad practices</li>
					</ul>
				</SectionIllustrated>
			</section>
		</div>
	);
}
