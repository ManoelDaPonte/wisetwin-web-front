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
		router.push("/contact?interest=requestDemo");
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
					href: "/solutions#iot-integration",
					label: "Integration IoT",
				},
				{
					id: 2,
					href: "/solutions#ai-enhancement",
					label: "AI Enhancement",
					ongoing: true,
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
			href: "/segments",
			label: "Segments",
			subTabs: [
				{
					id: 0,
					href: "/segments#smart-energy",
					label: "Smart Energy",
				},
				{
					id: 1,
					href: "/segments#warehouse-monitoring",
					label: "Warehouse Monitoring",
				},
				{
					id: 2,
					href: "/segments#smart-city",
					label: "Smart City",
				},
				{
					id: 3,
					href: "/segments#smart-buildings",
					label: "Smart Buildings",
				},
				{
					id: 4,
					href: "/segments#industry-4.0",
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
					href: "/ressources/faqs",
					label: "FAQs",
				},
				{
					id: 1,
					href: "/ressources/digital-twin",
					label: "What's a Digital Twin ?",
				},
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
								alt="Logo"
								width={100}
								height={1}
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
