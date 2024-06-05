// components/GridWithCards.js

import React from "react";
import styles from "@/styles/common/gridWithCards.module.css";

const GridWithCards = ({ title, cards }) => {
	return (
		<div className={styles.container}>
			<div className={styles.grid}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<h2>{card.title}</h2>
						<p className={styles.textCard}>{card.text}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default GridWithCards;
