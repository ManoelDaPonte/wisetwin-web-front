"use client";

import WiseTwin from "@/components/solutionPage/WiseTwin";
import Offers from "@/components/solutionPage/Offers";
import OperationalAwareness from "@/components/solutionPage/OperationalAwareness";
import PredictiveMaintenance from "@/components/solutionPage/PredictiveMaintenance";
import FormationTraining from "@/components/solutionPage/FormationTraining";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/common/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<WiseTwin />
				<Offers />
				<OperationalAwareness />
				<PredictiveMaintenance />
				<FormationTraining />
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
