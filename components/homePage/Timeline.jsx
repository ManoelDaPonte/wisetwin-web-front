import React from "react";
import styles from "@/styles/homePage/timeline.module.css";

const Timeline = () => {
	const steps = [
		{ title: "Création du jumeau numérique", description: "De la 3D" },
		{
			title: "Connexion de l'IoT sur la 3D",
			description: "Intégration des capteurs",
		},
		{
			title: "Nos outils de prédictions",
			description: "Analyse prédictive",
		},
	];

	return (
		<div className={styles.timeline}>
			{steps.map((step, index) => (
				<div key={index} className={styles.timelineStep}>
					<div className={styles.timelineContent}>
						<h3>{step.title}</h3>
						<p>{step.description}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Timeline;
