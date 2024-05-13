"use client";

import BeContactedForm from "@/components/contactPage/BeContactedForm";
import ContactUs from "@/components/contactPage/ContactUs";
import FeedBack from "@/components/contactPage/FeedBack";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense>
			<div className={styles.wrapper}>
				<Header />
				<div className={styles.pageSections}>
					<div className={styles.containerGrid}>
						<BeContactedForm />
						<ContactUs />
						<FeedBack />
					</div>
				</div>
				<Utils />
				<Footer />
			</div>
		</Suspense>
	);
}
