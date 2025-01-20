import styles from "@/styles/common/articles.module.css";

export const metadata = {
	title: "Wise Twin | Digital Twin Cost Breakdown",
	description:
		"A comprehensive guide to understanding the costs of digital twin development versus Wise Twin's streamlined solution.",
	keywords: "digital twin, cost analysis, simulation, IoT, Wise Twin",
	url: "https://www.wisetwin.eu/ressources/blog/how-much-for-your-digital-twin",
	image: "https://www.wisetwin.eu/public/image/png/TS_logo-d6e6f57d.png",
};

export default function Page() {
	return (
		<div className={styles.pageContainer}>
			<div className={styles.sidebar}>
				<nav>
					<ul>
						<li>
							<a href="#cost-breakdown">
								Traditional Digital Twin Costs
							</a>
						</li>
						<li>
							<a href="#risks">Critical Risk Factors</a>
						</li>
						<li>
							<a href="#wise-twin-solution">
								Wise Twin Alternative
							</a>
						</li>
						<li>
							<a href="#comparison">Cost-Benefit Comparison</a>
						</li>
						<li>
							<a href="#why-choose-wise-twin">
								Why Choose Wise Twin?
							</a>
						</li>
						<li>
							<a href="#next-steps">Take Action Now</a>
						</li>
					</ul>
				</nav>
			</div>
			<div className={styles.mainContent}>
				<header className={styles.header}>
					<h1 className={styles.title}>
						Digital Twin Cost Breakdown
					</h1>
					<p className={styles.subtitle}>
						Understand the true costs of traditional digital twin
						development and discover how Wise Twin's approach
						revolutionizes affordability and efficiency.
					</p>
				</header>
				<article className={styles.article}>
					<h2 id="cost-breakdown" className={styles.sectionTitle}>
						Traditional Digital Twin Costs
					</h2>
					<p className={styles.paragraph}>
						Developing a digital twin traditionally requires
						significant time and financial investment. Here is a
						detailed breakdown:
					</p>
					<ul>
						<li>
							<strong>Initial Architecture & Planning:</strong> 2
							months (€8,000-12,000)
						</li>
						<li>
							<strong>Development Environment Setup:</strong> 1
							month (€4,000-6,000)
						</li>
						<li>
							<strong>Core Development Phase:</strong> 3 months
							(€15,000-20,000)
						</li>
						<li>
							<strong>Integration & Testing:</strong> 1.5 months
							(€6,000-8,000)
						</li>
						<li>
							<strong>Deployment & Optimization:</strong> 0.5
							months (€2,000-4,000)
						</li>
					</ul>
					<p className={styles.paragraph}>
						<strong>Total Time:</strong> 8 months |{" "}
						<strong>Total Cost:</strong> €35,000-50,000
					</p>
					<hr />
					<h2 id="risks" className={styles.sectionTitle}>
						Critical Risk Factors
					</h2>
					<ul>
						<li>
							<strong>Technical Complexity:</strong> Integration,
							performance, and scalability issues
						</li>
						<li>
							<strong>Resource Requirements:</strong> High costs
							in expertise, tools, and infrastructure
						</li>
						<li>
							<strong>Time-to-Market Impact:</strong> Delayed ROI
							and competitive disadvantages
						</li>
					</ul>
					<hr />
					<h2 id="wise-twin-solution" className={styles.sectionTitle}>
						Wise Twin's Streamlined Solution
					</h2>
					<p className={styles.paragraph}>
						Wise Twin offers a revolutionary alternative:
					</p>
					<ul>
						<li>
							<strong>Development Time:</strong> 7 days
						</li>
						<li>
							<strong>Cost:</strong> Fraction of traditional
							solutions (contact for pricing)
						</li>
						<li>
							<strong>Project Success Rate:</strong> 96%
						</li>
						<li>
							<strong>All-Inclusive Package:</strong> Full 3D
							interactive system, real-time simulation, cloud
							hosting, technical support
						</li>
					</ul>
					<hr />
					<h2 id="comparison" className={styles.sectionTitle}>
						Cost-Benefit Comparison
					</h2>
					<table border="1" cellPadding="8">
						<thead>
							<tr>
								<th>Aspect</th>
								<th>Traditional</th>
								<th>Wise Twin</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>Investment</td>
								<td>€35,000-50,000</td>
								<td>
									Contact for pricing (~1/10th of traditional
									cost)
								</td>
							</tr>
							<tr>
								<td>Development Time</td>
								<td>8 months</td>
								<td>7 days</td>
							</tr>
							<tr>
								<td>Hidden Costs</td>
								<td>€8,000-13,000/month</td>
								<td>None</td>
							</tr>
							<tr>
								<td>ROI Timeline</td>
								<td>12-18 months</td>
								<td>1-2 months</td>
							</tr>
						</tbody>
					</table>
					<hr />
					<h2
						id="why-choose-wise-twin"
						className={styles.sectionTitle}
					>
						Why Choose Wise Twin?
					</h2>
					<ul>
						<li>
							<strong>Risk Elimination:</strong> Proven
							technology, guaranteed delivery
						</li>
						<li>
							<strong>Cost Efficiency:</strong> No hidden costs,
							predictable pricing
						</li>
						<li>
							<strong>Time Savings:</strong> Immediate deployment,
							rapid development
						</li>
					</ul>
					<hr />
					<h2 id="next-steps" className={styles.sectionTitle}>
						Take Action Now
					</h2>
					<p className={styles.paragraph}>
						Contact Wise Twin today to transform your digital twin
						project into a guaranteed success story.
					</p>
				</article>
			</div>
		</div>
	);
}
