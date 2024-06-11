"use client";
import BeContactedForm from "@/components/contactPage/BeContactedForm";
import ContactUs from "@/components/contactPage/ContactUs";
import FeedBack from "@/components/contactPage/FeedBack";
import styles from "@/styles/page.module.css";
import { Suspense } from "react";

export default function Page() {
	return (
		<Suspense>
			<div className={styles.pageSections}>
				<div>
					<div className={styles.containerGrid}>
						<BeContactedForm />
						<ContactUs />
						<FeedBack />
					</div>
				</div>
			</div>
		</Suspense>
	);
}
