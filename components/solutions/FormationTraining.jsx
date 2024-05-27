import styles from "@/styles/solutions/formationTraining.module.css";
import IconAndText from "@/components/common/text/IconAndText";
import Validate from "@/components/common/svg/Validate";

export default function FormationTraining() {
	return (
		<div className={styles.wrapper}>
			<div className="title">Formation & Training</div>
			<div className="normalText">
				Training and formation are essential for the success of any
				organization. We provide training and formation services to
				ensure that your team is well-equipped to handle any situation.
			</div>
			<div className="normalText">
				Designed for Industry Professionals
			</div>
			<div className={styles.list}>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Machine Operators"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Maintenance Technicians"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Design Engineers"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Plant Managers"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Safety Managers"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Training programs"}
					variant="dark"
				/>
				<IconAndText
					icon={<Validate color="dark" />}
					text={"Engineering and Technology Schools"}
					variant="dark"
				/>
			</div>
		</div>
	);
}
