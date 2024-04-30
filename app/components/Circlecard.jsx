import React from "react";
import styles from "@/styles/circlecard.module.css";

const CircleCard = ({ icon, text }) => {
	return (
		<div className={styles.circle}>
			<div>{icon}</div>
			<div>{text}</div>
		</div>
	);
};

export default CircleCard;
