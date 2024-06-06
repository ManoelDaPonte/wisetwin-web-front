import Link from "next/link";
import styles from "@/styles/common/tab.module.css";
import { Badge } from "@/components/ui/badge";

const Tab = ({ href, label, subTabs = [] }) => {
	return (
		<div className={styles.tabContainer}>
			<Link href={href}>{label}</Link>
			{subTabs.length > 0 && (
				<div className={styles.subTabs}>
					<div className={styles.subTabsContainer}>
						{subTabs.map((subTab) => (
							<div
								key={subTab.id}
								className={styles.subTabsContent}
							>
								<Link
									href={subTab.href}
									className={styles.test}
								>
									{subTab.label}
									{subTab.ongoing && <Badge>ongoing</Badge>}
								</Link>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Tab;
