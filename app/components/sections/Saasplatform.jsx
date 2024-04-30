import styles from "@/styles/sections/saasplatform.module.css";
import Circlecard from "@/components/Circlecard";
import Image from "next/image";

const Saasplatform = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<div className={styles.containerText}>
					<div className={styles.title1}>Intuitive</div>
					<div className={styles.title2}>SaaS Platform</div>
					<div className={styles.sentence}>
						Deploy your SaaS (Software as a Service) platform to
						increase operational visibility and awareness, for
						real-time decision making. Embedded AI algorithms
						supported by data visualization tools are making
						intuitive lifetime prediction models accessible and easy
						to understand. Our digital twins already demonstrated a
						30% reduction in daily OPEX and a 90% increase in
						decision-making.
					</div>
				</div>
				<div className={styles.containerImage}>
					<Image
						src="/image/saas_exploded.png"
						width={400}
						height={300}
					/>
				</div>
			</div>

			<div className={styles.containerCard}>
				<Circlecard text="30% Costs Savings" />
				<Circlecard text="10x Faster Decisions" />
				<Circlecard text="AI assistant" />
				<Circlecard text="Safety" />
			</div>
		</div>
	);
};

export default Saasplatform;
