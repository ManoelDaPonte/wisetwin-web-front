import React, { useState, useEffect, useRef } from "react";
import styles from "@/styles/common/languageSelector.module.css";
import Globe from "@/components/common/svg/Globe";

const LanguageSelector = ({
	color = "currentColor",
	displayedText = true,
	width,
	height,
}) => {
	const languages = ["English", "Spanish", "French"];
	const [isOpen, setIsOpen] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("");
	const [dropdownDirection, setDropdownDirection] = useState("downward");
	const dropdownTriggerRef = useRef(null);

	const handleLanguageChange = (language) => {
		setSelectedLanguage(language);
		setIsOpen(false);
		console.log(`Selected language: ${language}`);
	};

	const toggleDropdown = () => {
		setIsOpen(!isOpen);
	};

	useEffect(() => {
		if (dropdownTriggerRef.current) {
			const rect = dropdownTriggerRef.current.getBoundingClientRect();
			// Check if there's enough space to open the dropdown upwards
			const spaceAbove = rect.top;
			const spaceNeeded = 150; // Adjust based on your dropdown height
			setDropdownDirection(
				spaceAbove > spaceNeeded ? "upward" : "downward"
			);
		}
	}, [isOpen]); // Recalculate whenever dropdown is toggled

	return (
		<div className={styles.container}>
			<div
				ref={dropdownTriggerRef}
				onClick={toggleDropdown}
				className={styles.dropdownTrigger}
				aria-haspopup="listbox"
				aria-expanded={isOpen}
			>
				<Globe color={color} width={width} height={height} />
				{displayedText && (
					<div className={styles.displayedText}>
						{selectedLanguage || "Language"}
					</div>
				)}
			</div>
			{isOpen && (
				<ul
					className={`${styles.dropdownMenu} ${styles[dropdownDirection]}`}
					role="listbox"
				>
					{languages.map((language) => (
						<li
							key={language}
							onClick={() => handleLanguageChange(language)}
							className={styles.menuItem}
							role="option"
						>
							{language}
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default LanguageSelector;
