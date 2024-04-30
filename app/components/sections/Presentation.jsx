import Button from "@/components/Button";
import styles from "@/styles/sections/presentation.module.css";

const Presentation = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerText}>
				<div className={styles.automated}> Automated</div>
				<div className={styles.powerplant}> Power Plants </div>
				<div className={styles.normaltext}>
					Let our <b>Digitial Twins</b> work for you!
				</div>
				<Button label="Request a Demo" color="blue" />
			</div>
			<div className={styles.containerVideo}>
				<video autoPlay loop width={600}>
					<source src="video/demo.mp4" type="video/mp4" />
				</video>
			</div>
		</div>
	);
};

export default Presentation;
