"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const requestDemo = () => {
		router.push("/contact?interest=requestDemo");
	};

	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<div className={styles.container}>
					<h1 className={styles.title}>
						Empowering Tomorrow's Workforce
					</h1>
					<p className={styles.text}>
						At Wise Twin, we're passionate about helping industrial
						plant achieve peak efficiency. Our Industrial Twin
						Trainer platform is more than just training - it's a
						revolution in building a skilled, confident workforce.
					</p>
					<p className={styles.callToAction}>
						Ready to transform your industrial training?{" "}
						<span className="link" onClick={requestDemo}>
							Try it for free
						</span>
					</p>
				</div>
			</div>

			<Utils />
			<Footer />
		</div>
	);
}
