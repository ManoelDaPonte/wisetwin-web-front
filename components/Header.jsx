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

	const solutionsSubTabs = [
		{ href: "/solutions/solution1", label: "Solution 1" },
		{ href: "/solutions/solution2", label: "Solution 2" },
	];

	return (
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
		</div>
	);
};

export default Header;
