import React, { useState, useEffect } from "react";

// This component assumes you have a function `getVideoSrc` that fetches the video source URL.
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
		<iframe
			src={src}
			allowFullScreen
			style={{ width: width, height: height }} // Example styling, adjust as needed
		/>
	);
};

export default VideoComponent;
