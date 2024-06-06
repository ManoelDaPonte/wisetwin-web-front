import React, { useState, useEffect } from "react";
import styles from "@/styles/common/videoComponent.module.css"; // Assurez-vous que ce chemin est correct

const VideoComponent = ({ getVideoSrc, height, width }) => {
	const [src, setSrc] = useState("");

	useEffect(() => {
		const fetchVideoSrc = async () => {
			const videoSrc = await getVideoSrc();
			setSrc(videoSrc);
		};

		fetchVideoSrc();
	}, [getVideoSrc]); // Dependency array includes `getVideoSrc` to re-run if the function changes

	if (!src) {
		return <p>Loading video...</p>; // Provide a loading state or placeholder
	}

	return (
		<div className={styles.videoContainer}>
			<iframe
				src={src}
				allowFullScreen
				className={styles.responsiveIframe}
				width={width}
				height={height}
			/>
		</div>
	);
};

export default VideoComponent;
