import React from "react";
import styles from "@/styles/common/title.module.css";

const Title = ({ text, id }) => {
	return (
		<h1 id={id} className={styles.title}>
			{text}
		</h1>
	);
};

export default Title;
