import styles from "@/styles/homePage/presentation.module.css";

const Presentation = () => {
	return (
		<div className={styles.containerVideo}>
			<video autoPlay loop muted>
				<source src="/video/demo.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default Presentation;
