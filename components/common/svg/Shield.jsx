import React from "react";

const Shield = ({
	color = "currentColor",
	width = "24px",
	height = "24px",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		id="Filled"
		viewBox="0 0 24 24"
		width={width}
		height={height}
	>
		<path
			d="M18.581,2.14,12.316.051a1,1,0,0,0-.632,0L5.419,2.14A4.993,4.993,0,0,0,2,6.883V12c0,7.563,9.2,11.74,9.594,11.914a1,1,0,0,0,.812,0C12.8,23.74,22,19.563,22,12V6.883A4.993,4.993,0,0,0,18.581,2.14ZM16.718,9.717l-4.272,4.272a1.873,1.873,0,0,1-1.335.553h-.033a1.872,1.872,0,0,1-1.345-.6l-2.306-2.4A1,1,0,1,1,8.868,10.16L11.112,12.5,15.3,8.3a1,1,0,0,1,1.414,1.414Z"
			fill={color}
		/>
	</svg>
);

export default Shield;
