import React from "react";
import styles from "@/styles/common/button.module.css";

const Button = ({ label, onClick, color }) => {
	const buttonStyle = {
		backgroundColor: color,
	};
	return (
		<div className={styles.button} style={buttonStyle} onClick={onClick}>
			{label}
		</div>
	);
};

export default Button;
