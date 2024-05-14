import styles from "@/styles/homePage/presentation.module.css";

const Presentation = () => {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.containerText}>
				<div className="subtitle"> Automated</div>
				<div className="title"> Power Plants </div>
				<div className="normalText">
					Let our <b>Digitial Twins</b> work for you!
				</div>
			</div>
			<div className={styles.containerVideo}>
				<video autoPlay loop width={500}>
					<source src="video/demo.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Presentation;
