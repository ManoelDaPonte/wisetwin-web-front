import styles from "@/styles/header.module.css";
import Tab from "@/components/Tab";
import Image from "next/image";
import Button from "@/components/Button";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Image
						src="image/TS_logo.svg"
						alt="Logo"
						width={200}
						height={200}
					/>
				</div>
				<div className={styles.tabs}>
					<Tab href="/home" label="Home" />
					<Tab href="/about" label="About" />
					<Tab href="/contact" label="Contact" />
				</div>
			</div>
			<Button label="Request a Demo" color="green" />
		</div>
	);
};

export default Header;
