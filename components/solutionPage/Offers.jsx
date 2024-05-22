import OfferCard from "@/components/common/OfferCard";
import styles from "@/styles/solutionPage/offers.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function Offers() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.textContainer}>
				<h2>
					We provide a wide range of solutions to help you optimize
					your operations. Get started with one of our packs !
				</h2>
			</div>
			<div className={styles.gridContainer}>
				<OfferCard
					title="Formation Pack"
					image={"/image/png/training.png"}
					description="Bring your Workforce to the next-level with our Formation Pack"
					link="/solutions/formation"
					items={[
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Operator Training Simulations"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Realistic Problem-Solving"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Interactive Learning"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Tailored Learning Modules"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Internal Communication"}
						/>,
					]}
				/>
				<OfferCard
					title="Predictive Pack"
					image={"/image/png/predictive_maintenance.png"}
					description="Lead the innovation and predict every outcome with our Predictive Pack"
					link="/solutions/predictive"
					items={[
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"AI-Powered for Predictive Maintenance"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Assets critical assessment"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Decision Making Optimization"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Advanced Trend Analysis"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Power Production Optimization"}
						/>,
					]}
				/>
				<OfferCard
					title="Awareness Pack"
					image={"/image/png/awareness.png"}
					description="Optimize your daily OPEX and Monitoring with our Awareness Pack"
					link="/solutions/awareness"
					items={[
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Real-time 3D interaction"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"IoT Database"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Dashboard Analytics"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Alerting system"}
						/>,
						<IconAndText
							icon={<Validate color="#0077b6" />}
							text={"Automatic Reporting"}
						/>,
					]}
				/>
			</div>
		</div>
	);
}
