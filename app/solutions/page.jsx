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
			<Title text="From 3D to smart 3D" />
			<div>
				<SectionIllustrated
					title="Digital Twin"
					subTitle="Get yours in 7 days !"
					image="/image/svg/cube-normal.svg"
					sectionId="digital-twin"
					imagePosition="right"
					license={{
						url: "https://storyset.com/business",
					}}
					height={200}
					width={200}
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="IoT Integration"
					subTitle="Connect your devices from any kind of Data Source. Everything is safely stored in the cloud."
					image="/image/svg/cube-iot.svg"
					sectionId="iot-integration"
					imagePosition="left"
					height={200}
					width={200}
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="Monitoring"
					subTitle="Let's get from descriptive analysis to predictive / prescriptive one !"
					image="/image/svg/cube-ai.svg"
					sectionId="ai-enhancement"
					imagePosition="right"
					height={200}
					width={200}
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
					</p>
				</SectionIllustrated>
			</div>
			<div>
				<Title text="Customize your Digital Twin" />
				<SectionIllustrated
					title="Formation"
					image="/image/svg/cube-normal.svg"
					sectionId="digital-twin"
					imagePosition="right"
					license={{
						url: "https://storyset.com/business",
					}}
					height={200}
					width={200}
				>
					<p>
						When you open a website, you are looking at a page. A
						page is a single document that can contain text, images,
						videos, and other elements. Pages can be static or
						dynamic. Static pages are predefined and do not change
						unless the developer updates them. Dynamic pages, on the
						other hand, can change based on user interactions or
						other factors.
					</p>
					<p>
						Pages are typically written in HTML, which stands for
						HyperText Markup Language. HTML is the standard language
						for creating web pages and web applications. It provides
						the structure and organization of content on a page,
						including headings, paragraphs, images, links, and more.
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
