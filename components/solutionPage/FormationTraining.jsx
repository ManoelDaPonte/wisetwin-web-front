import styles from "@/styles/solutionPage/formationTraining.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function FormationTraining() {
	return (
		<div className={styles.wrapper}>
			<div className={styles.title}>Formation & Training</div>
			<div className={styles.description}>
				Training and formation are essential for the success of any
				organization. We provide training and formation services to
				ensure that your team is well-equipped to handle any situation.
			</div>
			<div className={styles.text}>
				Designed for Industry Professionals:
			</div>
			<div className={styles.list}>
				<IconAndText icon={<Validate />} text={"Machine Operators"} />
				<IconAndText
					icon={<Validate />}
					text={"Maintenance Technicians"}
				/>
				<IconAndText icon={<Validate />} text={"Design Engineers"} />
				<IconAndText icon={<Validate />} text={"Plant Managers"} />
				<IconAndText icon={<Validate />} text={"Safety Managers"} />
				<IconAndText icon={<Validate />} text={"Training programs"} />
				<IconAndText
					icon={<Validate />}
					text={"Engineering and Technology Schools"}
				/>
			</div>
		</div>
	);
}
