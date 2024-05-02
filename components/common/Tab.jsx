import Link from "next/link";
import styles from "@/styles/common/tab.module.css";

const Tab = ({ label, href }) => {
	return (
		<Link href={href} passHref legacyBehavior>
			<div className={styles.tab}>{label}</div>
		</Link>
	);
};

export default Tab;
