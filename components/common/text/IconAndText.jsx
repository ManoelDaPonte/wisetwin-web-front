import React from "react";
import styles from "@/styles/common/iconAndText.module.css";

const IconAndText = ({ icon, text, variant = "dark" }) => {
	const textClassName =
		variant === "dark" ? "simpleTextDark" : "simpleTextLight";
	return (
		<div className={styles.wrapper}>
			<div>{icon}</div>
			<div className={textClassName}>{text}</div>
		</div>
	);
};

export default IconAndText;
