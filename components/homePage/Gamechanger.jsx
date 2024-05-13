import styles from "@/styles/homePage/gamechanger.module.css";
import Image from "next/image";

const Gamechanger = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerText}>
				<div className="subtitle"> Real</div>
				<div className="title"> Game Changers</div>
				<div className="normalText">
					Digital twins are no more science-fiction. Wise Twin thrives
					to deploy high quality 3D rendering, with real-time
					interactive data visualization, for complex IIOT network.
					Dive into 4.0 industry and maximize the profits of your
					power plant by reducing operational costs, improving
					performance, and decrease risks. Cyber-secured data is a
					keypoint of our products and ensure multilevel accessibility
					of sensible information.
				</div>
			</div>
			<div className={styles.containerImage}>
				<Image
					src="/image/svg/recompressor.svg"
					alt="recompressor"
					width={400}
					height={300}
				/>
			</div>
		</div>
	);
};

export default Gamechanger;
