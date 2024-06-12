import React from "react";
import styles from "@/styles/common/title.module.css";
import Button from "@/components/ui/magicui/Button";

const Title = ({ title, subTitle, id }) => {
	return (
		<section id={id} className={styles.titleContainer}>
			<h1 className={styles.title}>{title}</h1>
			{subTitle && <span className={styles.subTitle}>{subTitle}</span>}
			<Button buttonText="Contact Us" buttonLink="/contact" />
		</section>
	);
};

export default Title;
