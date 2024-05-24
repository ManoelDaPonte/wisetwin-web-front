// components/Header.js
import { useState } from "react";
import Link from "next/link";
import styles from "@/styles/header2.module.css";

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [subMenu, setSubMenu] = useState(null);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
		setSubMenu(null); // Réinitialiser le sous-menu quand le menu principal est fermé
	};

	const openSubMenu = (menu) => {
		setSubMenu(menu);
	};

	const goBack = () => {
		setSubMenu(null);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<div className={styles.logo}>
					<Link href="/" legacyBehavior>
						<a>Unity</a>
					</Link>
				</div>
				<div className={styles.menuButton} onClick={toggleMenu}>
					{isOpen ? "✕" : "☰"}
				</div>
			</div>
			<nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
				{!subMenu ? (
					<ul className={styles.navList}>
						<li
							className={styles.navItem}
							onClick={() => openSubMenu("products")}
						>
							<div className={styles.navLink}>Products</div>
						</li>
						<li className={styles.navItem}>
							<Link href="/solutions" legacyBehavior>
								<a onClick={toggleMenu}>Solutions</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/resources" legacyBehavior>
								<a onClick={toggleMenu}>Resources</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/community" legacyBehavior>
								<a onClick={toggleMenu}>Community</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/learn" legacyBehavior>
								<a onClick={toggleMenu}>Learn</a>
							</Link>
						</li>
						<li className={styles.navItem}>
							<Link href="/support" legacyBehavior>
								<a onClick={toggleMenu}>Support</a>
							</Link>
						</li>
					</ul>
				) : (
					<div className={styles.subMenuLayer}>
						<div className={styles.backButton} onClick={goBack}>
							← Back
						</div>
						{subMenu === "products" && (
							<ul className={styles.subMenu}>
								<li className={styles.subMenuItem}>
									<Link
										href="/products/engine"
										legacyBehavior
									>
										<a onClick={toggleMenu}>Unity Engine</a>
									</Link>
								</li>
								<li className={styles.subMenuItem}>
									<Link href="/products/cloud" legacyBehavior>
										<a onClick={toggleMenu}>Unity Cloud</a>
									</Link>
								</li>
								<li className={styles.subMenuItem}>
									<Link href="/products/grow" legacyBehavior>
										<a onClick={toggleMenu}>Unity Grow</a>
									</Link>
								</li>
							</ul>
						)}
					</div>
				)}
			</nav>
		</header>
	);
};

export default Header;
