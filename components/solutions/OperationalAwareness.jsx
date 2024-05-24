import styles from "@/styles/solutions/operationalAwareness.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function OperationalAwareness() {
	return (
		<div className={styles.wrapper}>
			<div className="titleLight">Operational Awareness</div>
			<div className="normalTextLight">
				Digital twin with real time data displayed into the interactive
				virtual world, and functional dashboards. Alerting systems and
				automatic reporting makes your daily OPEX easier.
			</div>
			<div className="normalTextLight">Designed for Performance</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Real-time Monitoring"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Interactive Virtual World"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Functional Dashboards"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Easy Reporting"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Safety Managers"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Instant Alerts Visualization"}
					variant="light"
				/>
			</div>
		</div>
	);
}
