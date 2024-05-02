import React from "react";
import styles from "@/styles/common/iconAndText.module.css";

const IconAndText = ({ icon, text }) => {
	return (
		<div className={styles.wrapper}>
			<div>{icon}</div>
			<div>{text}</div>
		</div>
	);
};

export default IconAndText;
