import styles from "@/styles/utils.module.css";
import Image from "next/image";

const Utils = () => {
	return (
		<div className={styles.utils}>
			<div className={styles.columnsGrid}>
				<div className={styles.wiseTwinContact}>
					<Image
						src="/image/png/TS_logo-d6e6f57d.png"
						alt="wise_twin_logo"
						width={50}
						height={50}
					/>
					<div className={styles.logoGrid}>
						<a
							href="https://www.facebook.com/profile.php?viewas=100000686899395&id=61558731954437"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/image/svg/facebook.svg"
								alt="facebook"
								width={30}
								height={30}
							/>
						</a>

						<a
							href="https://www.linkedin.com/company/wise-twin/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/image/svg/linkedin.svg"
								alt="linkedin"
								width={30}
								height={30}
							/>
						</a>

						<a
							href="https://www.youtube.com/channel/UCWVu7AYRUHsjOEUcpjSh-qg"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Image
								src="/image/svg/youtube1.svg"
								alt="youtube"
								width={30}
								height={30}
							/>
						</a>
					</div>
				</div>
				<div>
					<div className={styles.columnTitle}>Start With</div>
					<div className={styles.links}>
						<div>What is a Digital Twin ?</div>
						<div>What is a Power Plant ?</div>
						<div>What is a SaaS</div>
						<div>Our offers</div>
						<div>Contact us</div>
					</div>
				</div>
				<div>
					<div className={styles.columnTitle}>About</div>
					<div className={styles.links}>
						<div>Who are we ?</div>
						<div>Career</div>
						<div>Security</div>
						<div>Blog</div>
						<div>Legal informations</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Utils;
