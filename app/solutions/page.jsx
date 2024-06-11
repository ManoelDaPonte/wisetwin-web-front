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
			<Title text="We build your Digital Twin" />
			<div>
				<SectionIllustrated
					title="Your own Virtual Industry"
					subTitle="Play with it!"
					image="image/svg/cube-normal.svg"
					sectionId="digital-twin"
					imagePosition="right"
					height={200}
					width={200}
				>
					<p>
						Start your digitalization process and deploy high quality 3D rendering 
						of your plant, building. whareohuse, or industry, and play with your 
						early-digital twin, so you will be able to:
						· Enhance internal and external communication
						· Be aware of your assets
						· Visualize and simulate changes in your industry
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="Add some live data"
					subTitle="Connect your devices from any kind of Data Source. Everything is safely stored in the cloud."
					image="/image/svg/cube-iot.svg"
					sectionId="iot-integration"
					imagePosition="left"
					height={200}
					width={200}
				>
					<p>
						Add interactive dashboards displaying real-time properties of your twin. 
						By integrating our AI-assistant, you will let our visual alerting system 
						make the job within your 3D virtual world.
						· Enhance your decision-making capabilities.
						· Enhance your operational awareness.
						· Generate visual and fast reporting.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="For innovation leaders"
					subTitle="Integrate your predictive maintenance modules !"
					image="/image/svg/cube-ai.svg"
					sectionId="ai-enhancement"
					imagePosition="right"
					height={200}
					width={200}
				>
					<p>
					Be a leader with your fully operational Digital Twin with your predictive maintenance modules.
					Implement algorithms and modeling tools to run numerical simulations of your physical assets.
					· Optimize every workflow 
					· Avoid shutdowns of production lines
					· Avoid shutdowns of machines
					</p>
				</SectionIllustrated>
			</div>
			<Title text="TwinTrainer" />
			<div>
				<SectionIllustrated
					title="TwinTrainer"
					subTitle="Our formation module"
					image="image/svg/cube-normal.svg"
					sectionId="digital-twin"
					imagePosition="right"
					height={200}
					width={200}
				>
					<p>
						Add tailor-made formation modules to your digital twin
						and virtualize the formation and training of your workforce.
						With that tool, you will:
						· Gain a skilled workforce
						· Decrease formation time and cost
						· Simulate critical issues before they even happen
						· Analyse and correct bad practices
					</p>
				</SectionIllustrated>
			</div>

			<Suspense fallback={<p>Loading video...</p>}>
				<VideoComponent
					getVideoSrc={getVideoSrc}
					width={600}
					height={300}
				/>
			</Suspense>
		</div>
	);
}
