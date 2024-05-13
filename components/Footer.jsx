import React from "react";
import LanguageSelector from "@/components/common/LanguageSelector";
import styles from "@/styles/footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<LanguageSelector height={20} width={20} />
			<div className={styles.linksContainer}>
				<div className={styles.link}>General terms and conditions</div>
				<div className={styles.link}>Privacy policy</div>
				<div className={styles.link}>Cookies policy</div>
			</div>
			<div className={styles.nowrap}>© 2024 Wise Twin</div>
		</div>
	);
};

export default Footer;
