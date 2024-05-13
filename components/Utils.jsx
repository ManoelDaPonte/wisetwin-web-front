import styles from "@/styles/utils.module.css";
import Image from "next/image";

const Utils = () => {
	return (
		<div className={styles.utils}>
			<div className={styles.columnsGrid}>
				<div className={styles.links}>
					<Image
						src="/image/png/wise_twin_logo.png"
						alt="wise_twin_logo"
						width={100}
						height={100}
					/>
					<div className={styles.logoContainer}>
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
					+34 6 13 02 27 72
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
