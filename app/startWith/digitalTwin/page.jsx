"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Utils from "@/components/Utils";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.wrapper}>
			<Header />
			<div className={styles.pageSections}>
				<div>
					<h1>What is a Digital Twin?</h1>
					<div>
						A Digital Twin is a virtual replica of a physical
						object, system, or process. This concept is based on
						creating a digital model that accurately reflects its
						physical counterpart, allowing for real-time monitoring,
						simulation, and analysis. Digital Twins are used in
						various fields such as manufacturing, healthcare,
						aerospace, and urban infrastructure.
					</div>
				</div>
				<div className="light">
					<h2>How a Digital Twin Works</h2>
					<div>
						A Digital Twin is created by integrating data from
						sensors installed on the physical system. These sensors
						continuously collect information on performance,
						environmental conditions, and operational
						characteristics. The data is then transmitted to the
						digital replica, which uses advanced algorithms and
						machine learning technologies to analyze and predict
						future behaviors of the physical system.
					</div>
				</div>
				<div>
					<h2>Benefits of Digital Twins</h2>
					<div>
						<ul>
							<li>
								<strong>Performance Improvement:</strong> By
								monitoring system performance in real-time,
								Digital Twins enable the optimization of
								operations and identification of inefficiencies.
							</li>
							<li>
								<strong>Predictive Maintenance:</strong> With
								predictive analytics, it is possible to foresee
								failures and schedule maintenance before
								problems occur, reducing downtime.
							</li>
							<li>
								<strong>Innovation and Testing:</strong>{" "}
								Companies can test new ideas or modifications in
								the digital model before applying them in the
								real world, reducing risks and costs.
							</li>
							<li>
								<strong>Cost Reduction:</strong> By optimizing
								operations and reducing failures, Digital Twins
								contribute to substantial savings.
							</li>
						</ul>
					</div>
				</div>
				<div className="light">
					<h2>Applications of Digital Twins</h2>
					<div>
						<ul>
							<li>
								<strong>Manufacturing:</strong> To optimize
								production lines and improve product quality.
							</li>
							<li>
								<strong>Aerospace:</strong> To monitor and
								maintain aircraft, increasing safety and
								efficiency.
							</li>
							<li>
								<strong>Healthcare:</strong> To create
								personalized models of human organs and improve
								diagnostics and treatments.
							</li>
							<li>
								<strong>Urban Infrastructure:</strong> To
								efficiently manage buildings and transportation
								networks.
							</li>
						</ul>
					</div>
				</div>
			</div>

			<Utils />
			<Footer />
		</div>
	);
}
