"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Tab from "@/components/common/Tab";
import Button from "@/components/common/Button";
import styles from "@/styles/header.module.css";

const Header = () => {
	const router = useRouter();
	const [isMenuOpen, setMenuOpen] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const [openSubMenus, setOpenSubMenus] = useState({});

	const requestDemo = () => {
		window.open(
			"https://demo.wisetwin.eu/login",
			"_blank",
			"noopener,noreferrer"
		);
		toggleMenu(); // Fermer le menu après l'ouverture du lien
	};

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
		setIsOpen(!isOpen);
		setOpenSubMenus({}); // Réinitialiser les sous-menus
	};

	const toggleSubMenu = (menu) => {
		setOpenSubMenus((prev) => ({
			...prev,
			[menu]: !prev[menu],
		}));
	};

	const tabs = [
		{
			href: "/solutions/",
			label: "Solutions",
			subTabs: [
				{
					id: 0,
					href: "/solutions#digital-twin",
					label: "Digital Twin",
				},
				{
					id: 1,
					href: "/solutions#trainer-twin",
					label: "WiseTrainer™",
				},
			],
		},
		{
			href: "/use-cases",
			label: "Use Cases",
			subTabs: [
				{ id: 0, href: "/use-cases#formation", label: "Formation" },
				{
					id: 1,
					href: "/use-cases#monitoring",
					label: "Monitoring",
				},
				{
					id: 2,
					href: "/use-cases#predictive-maintenance",
					label: "Predictive Maintenance",
				},
				{ id: 3, href: "/use-cases#marketing", label: "Marketing" },
			],
		},
		{
			href: "/industries",
			label: "Industries",
			subTabs: [
				{
					id: 0,
					href: "/industries#energy",
					label: "Energy",
				},
				{
					id: 1,
					href: "/industries#warehouse-monitoring",
					label: "Warehouse Monitoring",
				},
				{
					id: 2,
					href: "/industries#smart-city",
					label: "Smart City",
				},
				{
					id: 3,
					href: "/industries#smart-buildings",
					label: "Smart Buildings",
				},
				{
					id: 4,
					href: "/industries#industry-4.0",
					label: "Industry 4.0",
				},
			],
		},
		{
			href: "/ressources/faqs",
			label: "Resources",
			subTabs: [
				{
					id: 0,
					href: "/ressources/about/digital-twin",
					label: "What is a Digital Twin ?",
				},
				{
					id: 1,
					href: "/ressources/faqs",
					label: "FAQs",
				},
				//{
				//	id: 2,
				//	href: "/ressources/testimony",
				//	label: "Testimony",
				//}
			],
		},
		{ href: "/pricing", label: "Pricing" },
		{ href: "/contact", label: "Contact" },
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
								alt="Wise Twin Logo"
								description="Wise Twin Logo"
								width={100} // Fix width and height using properties
								height={100}
								style={{ maxWidth: "100%", height: "auto" }}
							/>
						</Link>
					</div>
					<div className={styles.tabs}>
						{tabs.map((tab) => (
							<Tab
								key={tab.label}
								href={tab.href}
								label={tab.label}
								subTabs={tab.subTabs}
							/>
						))}
					</div>
				</div>
				<div className={styles.rightGroup}>
					<Button
						label="Try our FREE Demo"
						color="green"
						onClick={requestDemo}
						className={styles.demoButton}
					/>
				</div>
				<div className={styles.menuButton} onClick={toggleMenu}>
					{isMenuOpen ? "✕" : "☰"}
				</div>
			</div>

			{/* Header pour écrans mobiles */}
			<nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
				<ul className={styles.navList}>
					{tabs.map((tab) => (
						<li key={tab.label} className={styles.navItem}>
							{tab.subTabs ? (
								<div onClick={() => toggleSubMenu(tab.label)}>
									<div className={styles.navLink}>
										<div>{tab.label}</div>
										<div>
											{openSubMenus[tab.label]
												? "▲"
												: "▼"}
										</div>
									</div>
									{openSubMenus[tab.label] && (
										<ul className={styles.subMenu}>
											<li className={styles.subMenuItem}>
												<Link
													href={tab.href}
													legacyBehavior
												>
													<a onClick={toggleMenu}>
														{tab.label}
													</a>
												</Link>
											</li>
											{tab.subTabs.map((subTab) => (
												<li
													key={subTab.label}
													className={
														styles.subMenuItem
													}
												>
													<Link
														href={subTab.href}
														legacyBehavior
													>
														<a onClick={toggleMenu}>
															{subTab.label}
														</a>
													</Link>
												</li>
											))}
										</ul>
									)}
								</div>
							) : (
								<Link href={tab.href} legacyBehavior>
									<a onClick={toggleMenu}>{tab.label}</a>
								</Link>
							)}
						</li>
					))}
					<Button label="Try our FREE Demo" onClick={requestDemo} />
				</ul>
			</nav>
		</>
	);
};

export default Header;
