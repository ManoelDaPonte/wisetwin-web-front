import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button";
import styles from "@/styles/header.module.css";
import { useRouter } from "next/navigation";

import { useState } from "react";

const Header = () => {
	const router = useRouter();
	const [isMenuOpen, setMenuOpen] = useState(false);

	const requestDemo = () => {
		router.push("/contact?interest=requestDemo");
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	return (
		<div className={styles.header}>
			<div className={styles.topBar}>
				<div className={styles.leftGroup}>
					<div className={styles.menuButton} onClick={toggleMenu}>
						{isMenuOpen ? (
							<Image
								src="/image/svg/traverser.svg"
								width={20}
								height={20}
								alt="Close Menu"
							/>
						) : (
							<Image
								src="/image/svg/menu-burger.svg"
								width={20}
								height={20}
								alt="Open Menu"
							/>
						)}
					</div>
					<div className={styles.logo}>
						<Link href="/">
							<Image
								src="/image/svg/wisetwin.svg"
								alt="Logo"
								width={200}
								height={50}
							/>
						</Link>
					</div>
					<div
						className={`${styles.tabs} ${
							isMenuOpen ? styles.show : ""
						}`}
					>
						<Tab href="/" label="Home" />
						<Tab href="/solutions" label="Solutions" />
						<Tab href="/contact" label="Contact" />
					</div>
				</div>

				<div className={styles.rightGroup}>
					<Button
						label="Request a Demo"
						color="green"
						onClick={requestDemo}
					/>
				</div>
			</div>
		</div>
	);
};

export default Header;
