"use client";

import RoundedImage from "@/components/common/RoundedImage";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<div className={styles.splitColumn}>
					<RoundedImage
						src="/image/png/photo/Annie.png"
						alt="jaime"
						size="150px"
					/>
					<div>
						<h2>Power Plant Story</h2>

						<p>
							"We were initially skeptical," admits Annie, a
							senior supervisor at the power plant. "But seeing
							our trainees master complex scenarios in hours with
							your Industrial Twin platform was truly impressive.
							The data-driven insights on individual skills have
							already helped us optimize task assignments."
						</p>
					</div>
				</div>

				<div className={styles.splitColumn}>
					<RoundedImage
						src="/image/png/photo/Frank.png"
						alt="Frank"
						size="150px"
					/>
					<div className="light">
						<h2>Manufacturing Facility Story</h2>
						<p>
							"Implementing the Digital Twin technology has
							revolutionized our production process," says Frank,
							the plant manager at a large manufacturing facility.
							"We've seen a 20% increase in efficiency and a
							significant reduction in downtime. The predictive
							maintenance feature alone has saved us countless
							hours and resources."
						</p>
					</div>
				</div>

				<div className={styles.splitColumn}>
					<RoundedImage
						src="/image/png/photo/Edward.png"
						alt="Edward"
						size="150px"
					/>
					<div>
						<h2>Healthcare Institution Story</h2>
						<p>
							"The precision and reliability of the Digital Twin
							model have enhanced our diagnostic capabilities,"
							reports Dr. Edward, head of radiology at a leading
							healthcare institution. "We can now simulate
							patient-specific scenarios, leading to more accurate
							treatment plans and improved patient outcomes. This
							technology is a game-changer in personalized
							medicine."
						</p>
					</div>
				</div>
			</div>

			<Utils />
			<Footer />
		</div>
	);
}
