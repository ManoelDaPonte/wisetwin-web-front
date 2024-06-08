"use client";
import styles from "@/styles/page.module.css";
import { useRouter } from "next/navigation";

export default function Page() {
	const router = useRouter();
	const requestDemo = () => {
		router.push("/contact?interest=requestDemo");
	};

	return (
		<div className={styles.pageSections}>
			<div className={styles.section}>
				<h1 className="title">Empowering Tomorrow's Workforce</h1>
				<p className="simpleText">
					At Wise Twin, we're passionate about helping industrial
					plants achieve peak efficiency. Our Industrial Twin Trainer
					platform is more than just training - it's a revolution in
					building a skilled, confident workforce.
				</p>
				<p className="simpleText">
					As a pioneering startup, Wise Twin specializes in digitizing
					enterprises in 3D, including complex facilities such as
					nuclear plants and power stations. We leverage cutting-edge
					AI tools, training, predictive analytics, modeling, and
					testing to deliver unparalleled digital twin solutions.
				</p>
				<p className="simpleText">
					Our commitment to excellence ensures that our digital twins
					are not only highly accurate but also incredibly effective
					in optimizing operations, enhancing training programs, and
					predicting future performance. With our advanced technology,
					we help industries achieve greater efficiency, safety, and
					reliability.
				</p>
				<h2 className="subtitle">Why Choose Wise Twin?</h2>
				<p className="simpleText">
					Choosing Wise Twin means partnering with a company that
					understands the complexities and challenges of industrial
					operations. We provide solutions that are tailored to the
					unique needs of each client, ensuring that our digital twins
					integrate seamlessly into your existing systems and
					workflows.
				</p>
				<p className="simpleText">
					<b>Innovative Training Programs:</b> Our platform offers
					state-of-the-art training modules designed to upskill your
					workforce rapidly. These programs are interactive and
					engaging, making learning both effective and enjoyable.
				</p>
				<p className="simpleText">
					<b>Predictive Maintenance:</b> With our AI-powered
					predictive analytics, you can foresee potential issues
					before they become major problems, minimizing downtime and
					maximizing productivity.
				</p>
				<p className="simpleText">
					<b>Comprehensive Modeling:</b> Our detailed 3D models
					provide an in-depth view of your operations, enabling better
					decision-making and strategic planning.
				</p>
				<p className="simpleText">
					<b>Real-time Testing:</b> Test various scenarios and
					outcomes in a controlled virtual environment before
					implementing changes in the real world, reducing risks and
					improving outcomes.
				</p>
				<p className="simpleText">
					Ready to transform your industrial training?{" "}
					<span className="link" onClick={requestDemo}>
						Try it for free !
					</span>
				</p>
			</div>
		</div>
	);
}
