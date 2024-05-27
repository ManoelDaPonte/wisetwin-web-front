import styles from "@/styles/solutions/operationalAwareness.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function OperationalAwareness() {
	return (
		<div className={styles.wrapper}>
			<div className="title">Operational Awareness</div>
			<div className="normalText">
				Digital twin with real time data displayed into the interactive
				virtual world, and functional dashboards. Alerting systems and
				automatic reporting makes your daily OPEX easier.
			</div>
			<div className="normalText">Designed for Performance</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Real-time Monitoring"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Interactive Virtual World"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Functional Dashboards"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Easy Reporting"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Safety Managers"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Instant Alerts Visualization"}
					variant="dark"
				/>
			</div>
		</div>
	);
}
