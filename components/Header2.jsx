// components/Header.js
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button";
import styles from "@/styles/header.module.css";
import mobileStyles from "@/styles/header2.module.css"; // Utilisation de modules CSS pour la version mobile

const Header = () => {
	const router = useRouter();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [subMenu, setSubMenu] = useState(null);

	const requestDemo = () => {
		router.push("/contact?interest=requestDemo");
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		setIsOpen(!isOpen);
		setSubMenu(null); // Réinitialiser le sous-menu quand le menu principal est fermé
	};

	const openSubMenu = (menu) => {
		setSubMenu(menu);
	};

	const goBack = () => {
		setSubMenu(null);
	};

	const solutionsSubTabs = [
		{ href: "/solutions/solution1", label: "Solution 1" },
		{ href: "/solutions/solution2", label: "Solution 2" },
	];

	return (
		<>
			{/* Header pour écrans de bureau */}
			<div className={styles.header}>
				<div className={styles.leftGroup}>
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
					<div className={styles.tabs}>
						<Tab href="/" label="Home" />
						<Tab
							href="/solutions"
							label="Solutions"
							subTabs={solutionsSubTabs}
						/>
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
				<div className={styles.menuButton} onClick={toggleMenu}>
					{isMenuOpen ? "✕" : "☰"}
				</div>
			</div>

			{/* Header pour écrans mobiles */}
			<nav
				className={`${mobileStyles.nav} ${
					isOpen ? mobileStyles.open : ""
				}`}
			>
				{!subMenu ? (
					<ul className={mobileStyles.navList}>
						<li
							className={mobileStyles.navItem}
							onClick={() => openSubMenu("products")}
						>
							<div className={mobileStyles.navLink}>Products</div>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/solutions" legacyBehavior>
								<a onClick={toggleMenu}>Solutions</a>
							</Link>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/products" legacyBehavior>
								<a onClick={toggleMenu}>Products</a>
							</Link>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/resources" legacyBehavior>
								<a onClick={toggleMenu}>Resources</a>
							</Link>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/community" legacyBehavior>
								<a onClick={toggleMenu}>Community</a>
							</Link>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/learn" legacyBehavior>
								<a onClick={toggleMenu}>Learn</a>
							</Link>
						</li>
						<li className={mobileStyles.navItem}>
							<Link href="/support" legacyBehavior>
								<a onClick={toggleMenu}>Support</a>
							</Link>
						</li>
					</ul>
				) : (
					<div className={mobileStyles.subMenuLayer}>
						<div
							className={mobileStyles.backButton}
							onClick={goBack}
						>
							← Back
						</div>
						{subMenu === "products" && (
							<ul className={mobileStyles.subMenu}>
								<li className={mobileStyles.subMenuItem}>
									<Link
										href="/products/engine"
										legacyBehavior
									>
										<a onClick={toggleMenu}>Unity Engine</a>
									</Link>
								</li>
								<li className={mobileStyles.subMenuItem}>
									<Link href="/products/cloud" legacyBehavior>
										<a onClick={toggleMenu}>Unity Cloud</a>
									</Link>
								</li>
								<li className={mobileStyles.subMenuItem}>
									<Link href="/products/grow" legacyBehavior>
										<a onClick={toggleMenu}>Unity Grow</a>
									</Link>
								</li>
							</ul>
						)}
					</div>
				)}
			</nav>
		</>
	);
};

export default Header;
