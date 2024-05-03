import Button from "@/components/common/Button";
import styles from "@/styles/homePage/presentation.module.css";
import { useRouter } from "next/navigation";

const Presentation = () => {
	const router = useRouter(); // Use the useRouter hook

	const requestDemo = () => {
		router.push("/contact?interest=requestDemo"); // Use router.push to navigate
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.containerText}>
				<div className={styles.title1}> Automated</div>
				<div className={styles.title2}> Power Plants </div>
				<div className={styles.text}>
					Let our <b>Digitial Twins</b> work for you!
				</div>
				<Button
					label="Request a Demo"
					color="#0077b6"
					onClick={requestDemo}
				/>
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
