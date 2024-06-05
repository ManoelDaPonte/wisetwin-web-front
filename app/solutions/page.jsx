"use client";
import styles from "@/styles/page.module.css";
import HeroSolution from "@/components/solutions/HeroSolution";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<HeroSolution />
			<section id="digital-twin">
				<div>digial twin</div>
			</section>

			<section id="iot-integration">
				<div>iot integration</div>
			</section>

			<section id="ai-enhancement">
				<div>ai enhancement</div>
			</section>
		</div>
	);
}
