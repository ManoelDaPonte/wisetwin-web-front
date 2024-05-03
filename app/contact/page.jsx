"use client";

import BeContactedForm from "@/components/contactPage/BeContactedForm";
import ContactUs from "@/components/contactPage/ContactUs";
import FeedBack from "@/components/contactPage/FeedBack";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/common/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<div className={styles.mainContent}>
					<div className={styles.beContactedForm}>
						<BeContactedForm />
					</div>
					<div className={styles.contactAndFeedback}>
						<ContactUs />
						<FeedBack />
					</div>
				</div>
			</div>
			<Utils />
			<Footer />
		</div>
	);
}
