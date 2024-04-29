import Button from "@/components/Button";
import styles from "@/styles/presentation.module.css";

const Presentation = () => {
	return (
		<div className={styles.wrapper}>
			<div>
				<div className={styles.automated}> Automated</div>
				<div className={styles.powerplant}> Power Plants </div>
				<div className={styles.normaltext}>
					Let our <b>Digitial Twins</b> work for you!
				</div>
				<Button label="Request a Demo" />
			</div>
			<video autoPlay loop width={300}>
				<source src="video/demo.mp4" type="video/mp4" />
			</video>
		</div>
	);
};

export default Presentation;
