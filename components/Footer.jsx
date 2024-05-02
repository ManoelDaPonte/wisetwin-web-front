import React from "react";
import LanguageSelector from "@/components/common/LanguageSelector";
import styles from "@/styles/footer.module.css";

const Footer = () => {
	return (
		<div className={styles.footer}>
			<LanguageSelector height={20} width={20} />
			<div>
				General terms and conditions | Privacy policy | Cookies policy
			</div>
			<div>© 2024 Wise Twin</div>
		</div>
	);
};

export default Footer;
