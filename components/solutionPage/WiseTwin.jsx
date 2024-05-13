import React from "react";
import styles from "@/styles/solutionPage/wisetwin.module.css";

import VideoComponent from "@/components/common/VideoComponent";

const getVideoSrc = async () => {
	const videoId = "MLf2doy24OY"; // Replace with your actual video ID
	return `https://www.youtube.com/embed/${videoId}`;
};

const WiseTwin = () => {
	return (
		<div className={styles.gridContainer}>
			<div className={styles.textContainer}>
				<div className="subtitle">Digital Twins</div>
				<div className="title">for Energy</div>
				<div className="normalText">
					The most innovative solution for planning, training,
					control, monitoring and maintenance
				</div>
			</div>
			<VideoComponent
				getVideoSrc={getVideoSrc}
				width={"600px"}
				height={"300px"}
			/>
		</div>
	);
};

export default WiseTwin;
