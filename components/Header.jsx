import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button";
import LanguageSelector from "@/components/common/LanguageSelector";
import styles from "@/styles/header.module.css";

const Header = () => {
	return (
		<div className={styles.header}>
			<div className={styles.wrapper}>
				<div className={styles.logo}>
					<Link href="/">
						<Image
							src="image/svg/wisetwin.svg"
							alt="Logo"
							width={200}
							height={200}
						/>
					</Link>
				</div>
				<div className={styles.tabs}>
					<Tab href="/solutions" label="Solutions" />
					<Tab href="/segments" label="Segments" />
					<Tab href="/contact" label="Contact" />
				</div>
			</div>
			<div className={styles.wrapper}>
				<LanguageSelector
					displayedText={false}
					height={20}
					width={20}
				/>
				<Button label="Request a Demo" color="green" />
			</div>
		</div>
	);
};

export default Header;
