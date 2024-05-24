import styles from "@/styles/solutions/formationTraining.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function FormationTraining() {
	return (
		<div className={styles.wrapper}>
			<div className="titleLight">Formation & Training</div>
			<div className="normalTextLight">
				Training and formation are essential for the success of any
				organization. We provide training and formation services to
				ensure that your team is well-equipped to handle any situation.
			</div>
			<div className="normalTextLight">
				Designed for Industry Professionals
			</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Machine Operators"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Maintenance Technicians"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Design Engineers"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Plant Managers"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Safety Managers"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Training programs"}
					variant="light"
				/>
				<IconAndText
					icon={<Validate color="white" />}
					text={"Engineering and Technology Schools"}
					variant="light"
				/>
			</div>
		</div>
	);
}
