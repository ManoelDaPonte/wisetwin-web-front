import styles from "@/styles/homePage/multilayerCubes.module.css";

const MultiLayerSection = () => {
	return (
		<div className={styles.container}>
			<div className={styles.cubes}>
				<div className={styles.cubeLayer}></div>
				<div className={styles.cubeLayer}></div>
				<div className={styles.cubeLayer}></div>
			</div>
			<h2 className={styles.text}>
				We build multi-layered Digital Twins
			</h2>
		</div>
	);
};

export default MultiLayerSection;
