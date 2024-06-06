"use client";
import { useState, useEffect } from "react";
import styles from "@/styles/common/sectionIllustrated.module.css";
import Image from "next/image";

export default function SectionIllustrated({
	title,
	subTitle,
	image,
	sectionId,
	children,
	imagePosition = "left",
	width = 400,
	height = 400,
	license = null,
}) {
	const [isMobile, setIsMobile] = useState(false);
	const imageFirst = imagePosition === "left";

	useEffect(() => {
		// Function to check if window width is less than a specific value
		const checkMobile = () => {
			setIsMobile(window.innerWidth < 768); // You can adjust this value to your needs
		};

		// Add event listener
		window.addEventListener("resize", checkMobile);

		// Check on initial render
		checkMobile();

		// Remove event listener on cleanup
		return () => {
			window.removeEventListener("resize", checkMobile);
		};
	}, []);

	return (
		<section
			id={sectionId}
			className={`${styles.section} ${
				imageFirst ? styles.imageLeft : styles.imageRight
			}`}
		>
			{imageFirst && !isMobile ? (
				<>
					<div className={styles.imageContainer}>
						<Image
							src={image}
							alt={title}
							width={width}
							height={height}
						/>
						{license && (
							<a href={license.url} className={styles.licence}>
								{license.text}
							</a>
						)}
					</div>

					<div className={styles.textContainer}>
						<h2 className={styles.title}>{title}</h2>
						<h4 className={styles.subTitle}>{subTitle}</h4>
						<div>{children}</div>
					</div>
				</>
			) : (
				<>
					<div className={styles.textContainer}>
						<h2 className={styles.title}>{title}</h2>
						<h4 className={styles.subTitle}>{subTitle}</h4>
						<div>{children}</div>
					</div>

					<div className={styles.imageContainer}>
						<Image
							src={image}
							alt={title}
							width={width}
							height={height}
						/>
						{license && (
							<a href={license.url} className={styles.licence}>
								{license.text}
							</a>
						)}
					</div>
				</>
			)}
		</section>
	);
}
