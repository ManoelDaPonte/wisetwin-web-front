import CubeAI from "@/components/common/svg/CubeAI";
import CubeNormal from "@/components/common/svg/CubeNormal";
import CubeIoT from "@/components/common/svg/CubeIoT";

import styles from "@/styles/homePage/cube3d.module.css";

const Cube3d = () => {
	return (
		<div className={styles.steps}>
			<div className={styles.step}>
				<CubeNormal color="black" height="100px" width="100px" />
				<div>3D</div>
			</div>
			<div className={styles.arrow}>→</div>
			<div className={styles.step}>
				<CubeIoT color="black" height="100px" width="100px" />
				<div>IoT Integration</div>
			</div>
			<div className={styles.arrow}>→</div>
			<div className={styles.step}>
				<CubeAI color="black" height="100px" width="100px" />
				<div>AI Prediction</div>
			</div>
		</div>
	);
};

export default Cube3d;
