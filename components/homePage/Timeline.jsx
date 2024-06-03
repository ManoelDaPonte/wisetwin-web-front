import React from "react";
import {
	Timeline,
	TimelineItem,
	TimelineSeparator,
	TimelineConnector,
	TimelineContent,
	TimelineDot,
	TimelineOppositeContent,
} from "@mui/lab";
import { Paper, Typography, Button, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import styles from "@/styles/homePage/timeline.module.css";

const CustomTimeline = () => {
	const theme = useTheme();
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	const steps = [
		{
			title: "Virtual Twin",
			description:
				"Get your 3D virtual plant, industry or building as an early digital twin. Discover how you can enhance your communication, formation and training operations.",
			link: "#",
			buttonText: "See more",
		},
		{
			title: "Monitoring Solutions",
			description:
				"Add your IIoT devices to your virtual twin, and build your own digital twin. Customize your alerting systems.",
			link: "#",
			buttonText: "See more",
		},
		{
			title: "AI Assistant",
			description:
				"Deploy AI tools and see how to get your full operational digital twin for any process or automation.",
			link: "#",
			buttonText: "See more",
		},
	];

	return (
		<div className={styles.container}>
			<Timeline position={isMobile ? "right" : "alternate"}>
				{steps.map((step, index) => (
					<TimelineItem key={index}>
						{isMobile && (
							<TimelineOppositeContent
								style={{
									flex: 0.1,
								}}
							/>
						)}
						<TimelineSeparator>
							<TimelineDot color="primary" />
							{index < steps.length - 1 && <TimelineConnector />}
						</TimelineSeparator>
						<TimelineContent>
							<Paper
								elevation={3}
								style={{
									padding: "6px 16px",
									backgroundColor: "#f5f5f5", // Couleur gris clair pour les cartes
									marginLeft: isMobile ? "auto" : "inherit", // Déplacer la carte à droite
									maxWidth: isMobile
										? "calc(100% - 30px)"
										: "inherit", // Limiter la largeur sur mobile
								}}
							>
								<Typography variant="h6" component="h1">
									{step.title}
								</Typography>
								<Typography>{step.description}</Typography>
								<Button
									variant="contained"
									color="primary"
									href={step.link}
									style={{ marginTop: "10px" }}
								>
									{step.buttonText}
								</Button>
							</Paper>
						</TimelineContent>
					</TimelineItem>
				))}
			</Timeline>
		</div>
	);
};

export default CustomTimeline;
