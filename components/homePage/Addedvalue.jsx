import styles from "@/styles/homePage/addedvalue.module.css";
import Image from "next/image";

const Addedvalue = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.containerText}>
				<div className="titleLight">Our Added value</div>
				<p className="light">
					Bringing together former researchers and engineers
					experienced in renewable energies and industrial
					digitalization, we've pioneered the core of Wise Twin
					technology. From the formation and training of your
					workforce to the prediction of the plant's output, we cover
					the entire operational lifecycle of your industry. We
					develop real-time SaaS platforms designed to seamlessly
					handle data transmitted by your IIoT devices. Elevate your
					industry to the forefront of innovation by integrating
					artificial intelligence models for enhanced decision-making
					capabilities. Our technology doesn't just offer a glimpse
					into operations—it delivers actionable insights for improved
					efficiency, cost-effectiveness, and operational excellence.
					Join us in revolutionizing industries by leveraging our
					platform and expertise to drive innovation forward.
				</p>
			</div>
		</div>
	);
};

export default Addedvalue;
