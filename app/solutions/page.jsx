"use client";
import styles from "@/styles/page.module.css";
import HeroSolution from "@/components/solutions/HeroSolution";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import VideoComponent from "@/components/common/VideoComponent";
import Title from "@/components/common/Title";
import { Suspense } from "react";

export default function Page() {
	const getVideoSrc = async () => {
		// Simule un appel API ou toute autre logique pour obtenir l'URL de la vidéo
		return "https://www.youtube.com/embed/MLf2doy24OY"; // Exemple d'URL de vidéo YouTube
	};
	return (
		<div className={styles.pageSections}>
			<HeroSolution />
			<section id="digital-twin">
				<Title
					title={"Digital Twin"}
					subTitle={
						"This is our main solution – get started with it !"
					}
				/>
				<SectionIllustrated
					title="Your own Virtual Industry"
					subTitle="Play with it !"
					image="/image/png/saas-energy.png"
					imagePosition="right"
				>
					<p>
						Start your digitalization process and deploy
						high-quality 3D rendering of your plant, building,
						warehouse, or industry, and play with your early digital
						twin, so you will be able to:
					</p>
					<br />
					<ul>
						<li>• Enhance internal and external communication </li>
						<li>• Be aware of your assets</li>
						<li>
							• Visualize and simulate changes in your industry
						</li>
					</ul>
				</SectionIllustrated>
				<div className={styles.split}></div>
				<SectionIllustrated
					title="Add some live data"
					subTitle="Connect your devices from any kind of Data Source. Everything is safely stored in the cloud."
					image="/image/png/awareness.png"
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
					subTitle="Integrate your predictive maintenance modules !"
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
					title={"TrainerTwin™"}
					subTitle={"Our new solution! check it out !"}
				/>
				<SectionIllustrated
					title="TwinTrainer™"
					subTitle="Our formation module"
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

			{/* <Suspense fallback={<p>Loading video...</p>}>
				<VideoComponent
					getVideoSrc={getVideoSrc}
					width={600}
					height={300}
				/>
			</Suspense> */}
		</div>
	);
}
