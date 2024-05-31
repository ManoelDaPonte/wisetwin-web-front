"use client";

import { use, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button";
import styles from "@/styles/header.module.css";

const Header = () => {
	const router = useRouter();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [subMenu, setSubMenu] = useState(null);
	const [openSubMenus, setOpenSubMenus] = useState({});

	const requestDemo = () => {
		router.push("/contact?interest=requestDemo");
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		setIsOpen(!isOpen);
		setSubMenu(null); // Réinitialiser le sous-menu quand le menu principal est fermé
		setOpenSubMenus({}); // Réinitialiser les sous-menus
	};

	const toggleSubMenu = (menu) => {
		setOpenSubMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	const goBack = () => {
		setSubMenu(null);
	};

	const solutionsSubTabs = [
		{ href: "/solutions/formation", label: "Formation" },
		{ href: "/solutions/predictive", label: "Predictive Maintenance" },
		{ href: "/solutions/awareness", label: "Awareness" },
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
			<nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
				<ul className={styles.navList}>
					<li className={styles.navItem}>
						<Link href="/" legacyBehavior>
							<a onClick={toggleMenu}>Home</a>
						</Link>
					</li>
					<li
						className={styles.navItem}
						onClick={() => toggleSubMenu("solutions")}
					>
						<div className={styles.navLink}>
							<div>Solutions</div>
							<div>{openSubMenus.solutions ? "▲" : "▼"}</div>
						</div>
						{openSubMenus.solutions && (
							<ul className={styles.subMenu}>
								<li className={styles.subMenuItem}>
									<Link href="/solutions" legacyBehavior>
										<a onClick={toggleMenu}>
											All solutions
										</a>
									</Link>
								</li>
								<li className={styles.subMenuItem}>
									<Link
										href="/solutions/formation"
										legacyBehavior
									>
										<a onClick={toggleMenu}>Formation</a>
									</Link>
								</li>
								<li className={styles.subMenuItem}>
									<Link
										href="/solutions/predictive"
										legacyBehavior
									>
										<a onClick={toggleMenu}>
											Predictive Maintenance
										</a>
									</Link>
								</li>
								<li className={styles.subMenuItem}>
									<Link
										href="/solutions/awareness"
										legacyBehavior
									>
										<a onClick={toggleMenu}>Awareness</a>
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li className={styles.navItem}>
						<Link href="/contact" legacyBehavior>
							<a onClick={toggleMenu}>Contact</a>
						</Link>
					</li>
					<li className={styles.navItem}>
						<Button
							label="Request a Demo"
							color="green"
							onClick={requestDemo}
							className={styles.demoButtonMobile}
						/>
					</li>
				</ul>
			</nav>
		</>
	);
};

export default Header;
