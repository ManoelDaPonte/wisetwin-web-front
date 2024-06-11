import React from "react";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import CallToAction from "@/components/ui/magicui/CallToAction";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div>
			<CallToAction
				title="Operator"
				description="Contact us to learn more about our solutions and how they can help your business."
				buttonText="Contact us"
				buttonLink="/contact"
			/>
			<div className={styles.pageSections}>
				<SectionIllustrated
					title="Formation"
					image="/image/storyset/formation.svg"
					sectionId="formation"
					imagePosition="right"
					license={{
						url: "https://storyset.com/business",
						text: "Illustrations by Storyset",
					}}
				>
					<p>
						We create a digital twin incorporating all the processes
						and information you provide us. Using this technology,
						we develop an interactive simulation in the form of a
						game, allowing operators to train before being on-site.
						This approach offers several advantages: it reduces the
						risks associated with real-world training, allows
						operators to familiarize themselves with the work
						environment without pressure, and enhances efficiency
						and responsiveness in real situations. Additionally,
						this immersive and engaging training method promotes
						better understanding and retention of operational
						procedures.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="Real-Time Monitoring"
					image="/image/storyset/monitoring.svg"
					sectionId="monitoring"
					imagePosition="left"
					license={{
						url: "https://storyset.com/business",
						text: "Illustrations by Storyset",
					}}
				>
					<p>
						Connect your sensors to your digital twin to benefit
						from real-time alerts and monitoring, directly visible
						through our software. This integration enables
						continuous and proactive surveillance of operations,
						ensuring immediate responsiveness in case of anomalies
						or malfunctions. Moreover, you can connect your
						dashboards and other tools directly to our software,
						linking them to the relevant IoT devices. This
						centralization of data and tools simplifies the
						management and analysis of critical information, thereby
						optimizing the performance and safety of your industrial
						operations.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="Predictive Maintenance"
					image="/image/storyset/predictive-maintenance.svg"
					sectionId="predictive-maintenance"
					imagePosition="right"
					license={{
						url: "https://storyset.com/business",
						text: "Illustrations by Storyset",
					}}
				>
					<p>
						Monitoring your industry is a great start, but you can
						go even further by predicting behaviors and prescribing
						actions to take. With our digital twins, you can
						anticipate maintenance needs before they become
						critical. Our data scientists collaborate with you to
						develop custom predictive models that identify early
						signs of failures and recommend preventive actions. This
						approach extends the lifespan of your equipment, reduces
						unplanned downtime, and optimizes maintenance costs,
						ensuring continuous and reliable operational
						performance.
					</p>
				</SectionIllustrated>
				<SectionIllustrated
					title="Marketing"
					image="/image/storyset/marketing.svg"
					sectionId="marketing"
					imagePosition="left"
					license={{
						url: "https://storyset.com/business",
						text: "Illustrations by Storyset",
					}}
				>
					<p>
						Make your projects easier to sell with digital twins.
						Instead of presenting traditional SCADA systems, a
						digital twin offers a dynamic and interactive
						visualization of your industrial solutions. This
						innovative presentation helps your clients better
						understand the benefits and features of your projects.
						By making your proposals more tangible and attractive,
						you significantly improve your chances of convincing and
						engaging your prospects, transforming your
						demonstrations into powerful and effective sales tools.
					</p>
				</SectionIllustrated>
			</div>
		</div>
	);
}
