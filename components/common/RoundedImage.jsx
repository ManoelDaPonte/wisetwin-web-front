import React from "react";
import Image from "next/image";
import styles from "@/styles/common/roundedImage.module.css";

const RoundedImage = ({ src, alt, size }) => {
	return (
		<div
			className={styles.roundedImage}
			style={{ width: size, height: size }}
		>
			<Image
				src={src}
				alt={alt}
				layout="fill"
				objectFit="cover"
				className={styles.image}
			/>
		</div>
	);
};

export default RoundedImage;
