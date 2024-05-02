import React from "react";
import styles from "@/styles/common/circlecard.module.css";

const CircleCard = ({ icon, text }) => {
	return (
		<div className={styles.circle}>
			<div className={styles.content}>
				<div>{icon}</div>
				<div>{text}</div>
			</div>
		</div>
	);
};

export default CircleCard;
