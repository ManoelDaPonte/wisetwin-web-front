"use client";
import React, { use } from "react";
import Link from "next/link";
import LanguageSelector from "@/components/common/LanguageSelector";
import styles from "@/styles/footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			{/* <LanguageSelector height={20} width={20} /> */}
			<div className={styles.linksContainer}>
				<div className={styles.link}>
					<Link href="/ressources/legals/terms" legacyBehavior>
						<div>General Terms and Conditions</div>
					</Link>
				</div>
				<div className={styles.link}>
					<Link href="/ressources/legals/privacy" legacyBehavior>
						<div>Privacy Policy</div>
					</Link>
				</div>
				<div className={styles.link}>
					<Link href="/ressources/legals/cookies" legacyBehavior>
						<div>Cookies Policy</div>
					</Link>
				</div>
			</div>
			<div className={styles.nowrap}>© 2024 Wise Twin</div>
		</div>
	);
};

export default Footer;
