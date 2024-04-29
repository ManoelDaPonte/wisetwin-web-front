import React from "react";
import styles from "@/styles/button.module.css";

const Button = ({ label, onClick, color }) => {
	return (
		<div className={styles.button} onClick={onClick}>
			{label}
		</div>
	);
};

export default Button;
