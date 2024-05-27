import React from "react";
import styles from "@/styles/solutions/wisetwin.module.css";

import VideoComponent from "@/components/common/VideoComponent";

const getVideoSrc = async () => {
	const videoId = "MLf2doy24OY"; // Replace with your actual video ID
	return `https://www.youtube.com/embed/${videoId}`;
};

const WiseTwin = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.textContainer}>
				<div className="title">Digital Twins</div>
				<p className="dark">
					The most innovative solution for planning, training,
					control, monitoring and maintenance
				</p>
			</div>
			<VideoComponent
				getVideoSrc={getVideoSrc}
				height={500}
				width={1000}
			/>
		</div>
	);
};

export default WiseTwin;
