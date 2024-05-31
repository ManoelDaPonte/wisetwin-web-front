"use client";
import styles from "@/styles/page.module.css";

export default function Page() {
	return (
		<div className={styles.pageSections}>
			<div className={styles.section}>
				<h1 className="title">What is a Power Plant?</h1>
				<div className="dark">
					A Power Plant is an industrial facility designed to generate
					electricity. Power plants use various energy sources to
					produce electricity, such as fossil fuels (coal, natural
					gas, oil), renewable sources (wind, solar, hydro), and
					nuclear energy.
				</div>
			</div>
			<div className={styles.section}>
				<h2 className="titleLight">Types of Power Plants</h2>
				<div className="light">
					<ul>
						<li>
							<strong>Thermal Power Plants:</strong>
							<ul>
								<li>
									<strong>Coal:</strong> Use coal to produce
									steam that drives electricity-generating
									turbines.
								</li>
								<li>
									<strong>Natural Gas:</strong> Burn natural
									gas to generate steam and/or operate gas
									turbines.
								</li>
								<li>
									<strong>Oil:</strong> Less common, they
									operate similarly to coal and gas plants.
								</li>
							</ul>
						</li>
						<li>
							<strong>Nuclear Power Plants:</strong> Use nuclear
							fission to produce heat, which turns water into
							steam to drive turbines.
						</li>
						<li>
							<strong>Hydroelectric Power Plants:</strong> Use the
							energy of moving water (rivers, dams) to drive
							turbines.
						</li>
						<li>
							<strong>Wind Power Plants:</strong> Use the kinetic
							energy of the wind to turn wind turbines, generating
							electricity.
						</li>
						<li>
							<strong>Solar Power Plants:</strong>
							<ul>
								<li>
									<strong>Photovoltaic:</strong> Use solar
									panels to convert sunlight directly into
									electricity.
								</li>
								<li>
									<strong>Thermodynamic:</strong> Use mirrors
									to concentrate sunlight and produce heat,
									which is then converted into electricity.
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</div>
			<div className={styles.section}>
				<h2 className="title">How a Power Plant Works ?</h2>
				<div className="dark">
					The basic principle of all power plants is the conversion of
					a primary energy source into electrical energy. For example,
					in a thermal power plant, the combustion of fossil fuels
					produces heat, turning water into steam. The pressurized
					steam drives turbines connected to generators, which produce
					electricity. In a hydroelectric plant, moving water directly
					drives the turbines.
				</div>
			</div>
			<div className={styles.section}>
				<h2 className="titleLight">Importance of Power Plants</h2>
				<div className="light">
					<ul>
						<li>
							<strong>Electricity Supply:</strong> Power plants
							are essential for providing the energy needed for
							homes, businesses, and infrastructure.
						</li>
						<li>
							<strong>Economic Development:</strong> Access to
							reliable electricity is crucial for economic
							development and improving quality of life.
						</li>
						<li>
							<strong>Energy Transition:</strong> Plants using
							renewable energy sources play a key role in reducing
							greenhouse gas emissions and combating climate
							change.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
