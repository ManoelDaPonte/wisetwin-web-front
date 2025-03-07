import styles from "@/styles/solutions/predictiveMaintenance.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function PredictiveMaintenance() {
	return (
		<div className={styles.wrapper}>
			<div className="title">Predictive Maintenance</div>
			<div className="normalText">
				Full operational Digital Twin with numerical simulations and
				modeling of the physical assets, for predictive maintenance.
				Designed for assisting decisions with AI implementation
			</div>
			<div className="normalText">Designed for Innovation Leaders</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate />}
					text={"Power Plant Managers"}
				/>
				<IconAndText icon={<Validate />} text={"R&D Teams"} />
				<IconAndText
					icon={<Validate />}
					text={"Power Grid Operators"}
				/>
				<IconAndText icon={<Validate />} text={"Innovation Teams"} />
				<IconAndText
					icon={<Validate />}
					text={"Health and Security Teams"}
				/>
				<IconAndText
					icon={<Validate />}
					text={"Power Plant Operators"}
				/>
			</div>
		</div>
	);
}
