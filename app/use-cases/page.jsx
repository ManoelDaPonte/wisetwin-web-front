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
					title="Real-Time Monitoring"
					image="/image/storyset/monitoring.svg"
					sectionId="monitoring"
					imagePosition="right"
					license={{
						url: "https://storyset.com/business",
						text: "Illustrations by Storyset",
					}}
				>
					<p>
						Get a visual and immersive tool for real-time alerting systems and monitoring,
						and make communications and operational instructions easy through our platform. 
						Make it live with cross-platform integration and get continuous and proactive 
						surveillance of operations
					</p>
					<br />
					<ul>
						<li>
							• Visual awareness with an immersive tool
						</li>
						<li>
							• Intuitive analysis of critical information
						</li>
						<li>
							• Increased safety of your	industrial operations
						</li>
					</ul>
				</SectionIllustrated>
				<SectionIllustrated
					title="Predictive Maintenance"
					image="/image/storyset/predictive-maintenance.svg"
					sectionId="predictive-maintenance"
					imagePosition="left"
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
						<li>• Simulate materials and processes</li>
						<li>• Reduces unplanned downtime</li>
						<li>• Optimizes maintenance costs</li>
						<li>• Ensure continuous and reliable operations</li>
					</ul>
				</SectionIllustrated>
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
							• Reduces the risks associated with real-world
							training
						</li>
						<li>
							• Decrease time formation by 90% with higher efficiency
						</li>
						<li>• Increase responsiveness in real situations</li>
						<li>
							• Allow a better understanding and retention of
							operational procedures
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
