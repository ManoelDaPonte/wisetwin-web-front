import Link from "next/link";
import styles from "@/styles/tab.module.css";

const Tab = ({ label, href }) => {
	return (
		<div onclick={href} className={styles.tab}>
			{label}
		</div>
	);
};

export default Tab;
