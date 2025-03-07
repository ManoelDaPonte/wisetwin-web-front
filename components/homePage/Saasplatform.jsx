import Image from "next/image";

import Circlecard from "@/components/common/Circlecard";
import Tree from "@/components/common/svg/Tree.jsx";
import Shield from "@/components/common/svg/Shield.jsx";
import Monney from "@/components/common/svg/Monney.jsx";
import Clock from "@/components/common/svg/Clock.jsx";

import styles from "@/styles/homePage/saasplatform.module.css";

const Saasplatform = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerText}>
				<div className="titleLight">Intuitive SaaS Platform</div>
				<p className="light">
					Deploy your SaaS (Software as a Service) platform to
					increase operational visibility and awareness, for real-time
					decision making. Embedded AI algorithms supported by data
					visualization tools are making intuitive lifetime prediction
					models accessible and easy to understand. Our digital twins
					already demonstrated a 30% reduction in daily OPEX and a 90%
					increase in decision-making.
				</p>
			</div>

			<div className={styles.containerCardGrid}>
				<Circlecard
					text="30% Costs Savings"
					icon={<Monney height={40} width={40} />}
				/>
				<Circlecard
					text="10x Faster Decisions"
					icon={<Clock height={40} width={40} />}
				/>
				<Circlecard
					text="AI assistant"
					icon={<Tree height={40} width={40} />}
				/>
				<Circlecard
					text="Safety"
					icon={<Shield height={40} width={40} />}
				/>
			</div>
		</div>
	);
};

export default Saasplatform;
