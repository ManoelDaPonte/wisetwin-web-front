// components/GridWithCards.js

import React from "react";
import Button from "@/components/common/Button";
import styles from "@/styles/common/gridWithCardsIllustrated.module.css";

const GridWithCardsIllustrated = ({ title, cards }) => {
	return (
		<div className={styles.container}>
			{title && <h1 className={styles.title}>{title}</h1>}
			<div className={styles.grid}>
				{cards.map((card, index) => (
					<div key={index} className={styles.card}>
						<div className={styles.imageContainer}>
							<img
								src={card.image}
								alt={card.title}
								className={styles.image}
							/>
						</div>
						<div className={styles.content}>
							<h2>{card.title}</h2>
							<p className={styles.textCard}>{card.text}</p>
							<Button
								label="Show details"
								color="green"
								className={styles.demoButton}
								href={card.href}
							/>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default GridWithCardsIllustrated;
