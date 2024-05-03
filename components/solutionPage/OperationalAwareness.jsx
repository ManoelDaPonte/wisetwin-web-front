import styles from "@/styles/solutionPage/operationalAwareness.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function OperationalAwareness() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Operational Awareness</div>
			<div className={styles.description}>
				Digital twin with real time data displayed into the interactive
				virtual world, and functional dashboards. Alerting systems and
				automatic reporting makes your daily OPEX easier.
			</div>
			<div className={styles.text}>Designed for Performance</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate />}
					text={"Real-time Monitoring"}
				/>
				<IconAndText
					icon={<Validate />}
					text={"Interactive Virtual World"}
				/>
				<IconAndText
					icon={<Validate />}
					text={"Functional Dashboards"}
				/>
				<IconAndText icon={<Validate />} text={"Easy Reporting"} />
				<IconAndText icon={<Validate />} text={"Safety Managers"} />
				<IconAndText
					icon={<Validate />}
					text={"Instant Alerts Visualization"}
				/>
			</div>
		</div>
	);
}
