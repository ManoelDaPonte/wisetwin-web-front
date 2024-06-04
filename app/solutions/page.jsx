"use client";
import WiseTwin from "@/components/solutions/WiseTwin";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<section id="">
				<WiseTwin />
			</section>
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
