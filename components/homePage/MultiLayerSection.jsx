import styles from "@/styles/homePage/multilayerCubes.module.css";

const MultiLayerSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cubes}>
				<div className={styles.cubeLayer}></div>
				<div className={styles.cubeLayer}></div>
				<div className={styles.cubeLayer}></div>
			</div>
			<h1 className={styles.cubeText}>An Evolutive Software</h1>
		</div>
	);
};

export default MultiLayerSection;
