import React from "react";

const CubeNormal = ({
	color = "currentColor",
	width = "24px",
	height = "24px",
}) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		id="Layer_1"
		data-name="Layer 1"
		viewBox="0 0 24 24"
		height={height}
		width={width}
	>
		<title>19-cube</title>
		<polygon
			points="12.002 11.037 21.756 5.575 12 0 2.275 5.557 12.002 11.037"
			fill={color}
		/>
		<polygon
			points="13 12.769 13 24 13.027 24 22.757 18.44 22.757 7.305 13 12.769"
			fill={color}
		/>
		<polygon
			points="11 12.768 1.243 7.271 1.243 18.44 10.973 24 11 24 11 12.768"
			fill={color}
		/>
	</svg>
);

export default CubeNormal;
