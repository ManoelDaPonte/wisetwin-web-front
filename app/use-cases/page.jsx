import React from "react";
import SectionIllustrated from "@/components/common/SectionIllustrated";
import CallToAction from "@/components/ui/magicui/CallToAction";

import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div>
			<CallToAction
				title="Discover different use cases of our digital twin solutions."
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
						Digitalize your Formation & Training modules from all
						the processes and information you are able to provide
						us. By interacting with our simulations, we allow
						operators and technicians to train even before being
						on-site, in an immersive and intuitive way. This
						approach offers several advantages:
					</p>
					<br />
					<ul>
						<li>
							• It reduces the risks associated with real-world
							training
						</li>
						<li>
							• Decrease time formation with higher efficiency
						</li>
						<li>• Increase responsiveness in real situations</li>
						<li>
							• Allow a better understanding and retention of
							operational procedures
						</li>
					</ul>
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
						Give life to your digital twin by connecting your
						sensors for real-time alerting systems and monitoring,
						displayed through our software. This integration enables
						continuous and proactive surveillance of operations,
						ensuring immediate responsiveness in case of anomalies
						or malfunctions. This will allow for:
					</p>
					<br />
					<ul>
						<li>
							• An complete awareness with an innovtive control
							room
						</li>
						<li>
							• An easier management and analysis of critical
							information
						</li>
						<li>
							• Increasing the performance and safety of your
							industrial operations
						</li>
						<li>• A visual awareness of potential alerts</li>
					</ul>
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
						actions to take. With your digital twin, you will
						anticipate maintenance needs before they become
						critical. If you don't have these kind of algorithms,
						don't worry! Our data scientists will collaborate with
						you to develop custom predictive models that identify
						early signs of failures and recommend preventive
						actions. With this complete approach, you will:
					</p>
					<br />
					<ul>
						<li>• Extend the lifespan of your equipment</li>
						<li>• Reduces unplanned downtime</li>
						<li>• Optimizes maintenance costs</li>
						<li>
							• Ensure a continuous and reliable operational
							performance
						</li>
					</ul>
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
						Give your POCs or projects a visual aspects, including a
						dynamic and interactive way to visualize of your
						industrial solutions. Boost your presentations and
						concretize the benefits and features of your projects.
						With this tool, you will:
					</p>
					<br />
					<ul>
						<li>
							• Make your proposals more tangible and attractive
						</li>
						<li>• Convert your ideas into real projects</li>
						<li>
							• Transform your demonstrations into powerful and
							effective sales tools.
						</li>
					</ul>
				</SectionIllustrated>
			</div>
		</div>
	);
}
