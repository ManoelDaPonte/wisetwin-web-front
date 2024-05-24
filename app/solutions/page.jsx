"use client";

import WiseTwin from "@/components/solutions/WiseTwin";
import Offers from "@/components/solutions/Offers";
import OperationalAwareness from "@/components/solutions/OperationalAwareness";
import PredictiveMaintenance from "@/components/solutions/PredictiveMaintenance";
import FormationTraining from "@/components/solutions/FormationTraining";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<div className={styles.splitRow}>
					<WiseTwin />
					<Offers />
				</div>
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
