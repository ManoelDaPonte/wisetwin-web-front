import styles from "@/styles/homePage/presentation.module.css";

const Presentation = () => {
	return (
		// <div className={styles.gridContainer}>
		// 	<div className={styles.containerText}>
		// 		<div className="subtitle"> Automated</div>
		// 		<div className="title"> Power Plants </div>
		// 		<div className="normalText">
		// 			Let our <b>Digitial Twins</b> work for you!
		// 		</div>
		// 	</div>
		// 	<div className={styles.containerVideo}>
		// 		<video autoPlay loop muted width={400}>
		// 			<source src="video/demo.mp4" type="video/mp4" />
		// 		</video>
		// 	</div>
		// </div>
		<div className={styles.containerVideo}>
			<video autoPlay loop muted>
				<source src="video/demo.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default Presentation;
