"use client";
import Image from "next/image";
import Link from "next/link";
import Facebook from "@/components/common/svg/Facebook";
import Youtube from "@/components/common/svg/Youtube";
import Linkedin from "@/components/common/svg/Linkedin";

import styles from "@/styles/utils.module.css";

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
							<Facebook width={30} height={30} />
						</a>

						<a
							href="https://www.linkedin.com/company/wise-twin/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Linkedin width={30} height={30} />
						</a>

						<a
							href="https://www.youtube.com/channel/UCWVu7AYRUHsjOEUcpjSh-qg"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Youtube width={30} height={30} />
						</a>
					</div>
				</div>
				<div className={styles.linkContainer}>
					<div className={styles.columnTitle}>Start With</div>
					<div className={styles.links}>
						{/* <Link
							href="/ressources/about/digital-twin"
							legacyBehavior
						>
							<div>What is a Digital Twin ?</div>
						</Link> */}

						<Link href="/solutions" legacyBehavior>
							<div>Our Offers</div>
						</Link>
						<Link href="/contact" legacyBehavior>
							<div>Contact Us</div>
						</Link>
					</div>
				</div>
				<div className={styles.linkContainer}>
					<div className={styles.columnTitle}>About</div>
					<div className={styles.links}>
						{/* <Link href="/wisetwin" legacyBehavior>
							<div>Who are we ?</div>
						</Link> */}
						{/* <Link href="/ressources/testimony" legacyBehavior>
							<div>Testimony</div>
						</Link> */}
						<Link href="/ressources/faqs" legacyBehavior>
							<div>FAQs</div>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Utils;
