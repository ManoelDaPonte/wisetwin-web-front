// Tab.js
import Link from "next/link";
import styles from "@/styles/common/tab.module.css";

const Tab = ({ href, label, subTabs = [] }) => {
	return (
		<div className={styles.tab}>
			<Link href={href}>{label}</Link>
			{subTabs.length > 0 && (
				<div className={styles.subTabs}>
					<div className={styles.subTabsContainer}>
						<div className={styles.subTabsContent}>
							{subTabs.map((subTab, index) => (
								<Link key={index} href={subTab.href}>
									{subTab.label}
								</Link>
							))}
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default Tab;
