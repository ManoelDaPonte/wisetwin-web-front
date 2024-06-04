import styles from "@/styles/segments/segments.module.css";

export default function Page() {
	return (
		<div className={styles.page}>
			<section id="energy">
				<h2>Digital Twins for the Energy Sector</h2>
				<p>
					Producing clean electricity with the lowest environmental
					impact means re-designing renewable energy systems, power
					plants, and grid infrastructure. From a technical and
					engineering point of view, power plants optimizations need
					to be investigated considering the lifespan of critical
					materials and the increase of energy storage and transport
					capacities. We need to optimize the building and
					construction process of these structures, integrating life
					cycle assessment and recycling methods in their initial
					design.
				</p>
				<p>
					From an economic perspective, direct electricity generation
					into the grid and supply capacities in function of the
					demand needs to be accurately controlled. Nevertheless, the
					development of high-technological sensors and controllers
					permitting to evaluate real-time properties and activities
					of a physical system relies strongly on the interpretation
					of each operator processing the data.
				</p>
				<p>
					<strong>How Digital Twins can help that?</strong>
				</p>
				<p>
					Digital twin softwares are emerging as a valuable tool for
					power plants optimizations and are strongly investigated for
					the development of industry 4.0, with remotely controllable
					IoT (Internet of Things) devices but are scarce in real
					applications as their “real-time” property is hard to
					achieve. Indeed, having block diagram models of a power
					plant is widely used in companies to monitor the energy
					production but these programs cannot be named as Digital
					Twins as they do not represent and consider the actual
					physical state of the different parts (tubes, tanks,
					turbines, etc…). Furthermore, artificial intelligence used
					as a strong calculus tool to estimate a predictive
					maintenance relies only on past data provided by other
					“same” parts, instead of coupling with real online
					monitoring systems performing physical integrity
					verifications.
				</p>
				<p>
					Digital Twins can provide representations of reality since
					numerical simulations and modelling have reach atomic-scale,
					allowing to model the properties of a system (material,
					flux, electrical potential, etc…) from nano- to macro-scale
					(Density-functional theory, molecular dynamics, phase
					diagram calculations, diffusion theory, flow dynamics,
					finite element methods), and monitor their evolution with
					respect to their environment.
				</p>
				<p>
					Transmission data have been well studied and used for many
					IoT devices (such as TCP/IP protocols, MQTT, AMQP, OPC UA,
					etc…), and these technologies must be controlled for
					security concerns. Indeed, Digital Twins cyber-security must
					be the key to the network architecture, since sensible data
					can be obtained when used in medical, defense or energy
					sectors, with the use of strong identifications, disclosure,
					and diffusion of data.
				</p>
				<p>
					Furthermore, real-time data handling deals with the right
					segmentation of data storage, with the same security
					concerns, to further implement machine learning and deep
					learning sub-models for decision making.
				</p>
				<p>
					Adding all these tools into one platform gathering critical
					information and taking action automatically is one goal we
					have at Wise Twin, and one solution we offer.
				</p>
			</section>

			<section id="grid">
				<h2>Digital Twin for Grid Management</h2>
				<p>
					Grid operations can be optimized and grid infrastructure
					expenses can be reduced. That may be hard to believe, but
					that is possible.
				</p>
				<p>
					<strong>How?</strong>
				</p>
				<p>
					By providing real-time insights into distribution networks,
					the decision-making and how to manage increasing renewable
					energy penetration can be handled. AI-powered energy
					monitoring systems can tackle industrial decarbonization. It
					analyzes energy consumption data, and identifies energy
					losses, leading to significant cost savings and reduced CO2
					emissions.
				</p>
				<p>
					But that can be scaled to district services, and grid
					flexibility. Digital Twins can make housing more affordable,
					integrating renewables, storage, and smart meters to
					optimize energy use and resident comfort. Thus, residents
					can actively participate in the grid and benefit from lower
					energy bills.
				</p>
				<p>
					Additionally, managing grid congestion can be done through a
					demand response. Industrials and commercials can adjust
					their energy use based on real-time needs, compensating for
					their contribution, with a focus on fault prediction and
					loss reduction.
				</p>
			</section>

			<section id="cities">
				<h2>Digital Twins for Sustainable Cities</h2>
				<p>
					Digital Twins are able to manage complex infrastructures,
					high data load and make AI-powered decision for energy
					optimization. And this ability we are aiming to develop at
					Wise Twin can be used for the development of next-gen
					sustainable cities. Data analytics for urban energy systems
					optimization are driving efficiency, resilience, and
					sustainability. By turning numerical information from
					massive datasets into action, we can reduce power losses,
					integrate renewables, and improve reaction times for a more
					robust system.
				</p>
				<p>
					<strong>What can be done?</strong>
				</p>
				<ul>
					<li>
						Identify areas with high energy consumption and
						prioritize upgrades for buildings and infrastructure.
					</li>
					<li>
						Model entire districts to forecast energy use and CO2
						emissions, allowing for smarter planning of renewables
						and energy infrastructure.
					</li>
				</ul>
				<p>
					In brief, digital twins are virtual replicas of real-world
					systems. And in smart cities, this powerful tool can be used
					to:
				</p>
				<ul>
					<li>
						Identify heat islands by pointing areas prone to
						overheating, allowing for targeted mitigation
						strategies.
					</li>
					<li>
						Simulate Scenarios, by testing different interventions
						and infrastructure investments to optimize
						decision-making.
					</li>
					<li>
						Boost collaboration, sharing a common data platform
						across government agencies for better planning and
						resource allocation.
					</li>
				</ul>
				<p>
					<strong>So what are we waiting for? Join Wise Twin!</strong>
				</p>
				{/* Add a button or link here */}
			</section>

			<section id="construction">
				<h2>Digital Twins for Construction</h2>
				<p>
					Digital Twins can revolutionize the construction industry by
					improving project planning, monitoring, and management. With
					real-time data and simulations, we can optimize the
					construction process, predict potential issues, and enhance
					the safety and efficiency of construction projects.
				</p>
				<p>
					From design to completion, Digital Twins provide a dynamic
					digital representation of the building. This allows
					stakeholders to collaborate effectively, monitor progress,
					and make data-driven decisions. Predictive maintenance and
					lifecycle management are enhanced, ensuring long-term
					sustainability and cost-efficiency.
				</p>
				<p>
					Integrating Digital Twins into construction processes can
					lead to:
				</p>
				<ul>
					<li>
						Reduced project timelines by identifying and mitigating
						potential delays early.
					</li>
					<li>
						Enhanced safety protocols by simulating and preventing
						hazardous scenarios.
					</li>
					<li>
						Improved resource management and waste reduction through
						precise material tracking.
					</li>
				</ul>
			</section>

			<section id="healthcare">
				<h2>Digital Twins for Health Care</h2>
				<p>
					In the healthcare sector, Digital Twins can model patient
					health conditions, predict disease progression, and
					personalize treatment plans. By integrating real-time health
					data, we can enhance patient care, reduce costs, and improve
					health outcomes.
				</p>
				<p>
					Digital Twins enable continuous monitoring of patient health
					through wearable devices and smart sensors. This data is
					used to create a comprehensive health profile, allowing for
					early detection of potential health issues and timely
					interventions.
				</p>
				<p>Applications of Digital Twins in healthcare include:</p>
				<ul>
					<li>
						Personalized medicine, where treatments are tailored to
						individual patient needs.
					</li>
					<li>
						Predictive analytics for disease prevention and
						management.
					</li>
					<li>
						Optimization of hospital operations and patient flow
						management.
					</li>
				</ul>
			</section>
		</div>
	);
}
