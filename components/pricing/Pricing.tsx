"use client";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "@radix-ui/react-icons";
import { Loader } from "lucide-react";
import { useState } from "react";
import DigitalTwinArticle from "./DigitalTwinArticle";
import styles from "@/styles/pricing.module.css"; // Import du module CSS

type Interval = "Startup - SME" | "Industry - Enterprise";

const demoPrices = [
	{
		id: "price_1",
		name: "Small scale, Small cost",
		description:
			"Designed for Start-ups/SME from Proof of Concepts to Pilot plants",
		features: [
			"Collaborate with your team members",
			"Integrate your dashboards and analytics",
			"Include online Monitoring and alerts",
			"Include animations for each process",
			"Accessible anywhere through our cloud",
		],
		isMostPopular: false,
	},
	{
		id: "price_2",
		name: "Industrial/Enterprise scale",
		description:
			"Designed for large scale plants, integrable with your architecture",
		features: [
			"Collaborate with your workforce",
			"Full Virtualization",
			"Cross-platform integration",
			"Visual alerting system",
			"Simulations integration",
			"Cloud and on-premise options",
		],
		isMostPopular: false,
	},
];

export default function Pricing() {
	const [interval, setInterval] = useState<Interval>("Industry - Enterprise");
	const [isLoading, setIsLoading] = useState(false);
	const [id, setId] = useState<string | null>(null);

	const onSubscribeClick = async (priceId: string) => {
		setIsLoading(true);
		setId(priceId);
		await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate a delay
		setIsLoading(false);
	};

	const handleToggle = () => {
		setInterval((prevInterval) =>
			prevInterval === "Startup - SME"
				? "Industry - Enterprise"
				: "Startup - SME"
		);
	};

	return (
		<section
			id="pricing"
			className="mx-auto flex max-w-screen-xl flex-col gap-8 px-4 py-14 md:px-8"
		>
			<div className="mx-auto max-w-5xl text-center">
				<h2 className="text-5xl font-bold tracking-tight text-black dark:text-white sm:text-6xl">
					A Digital Twin for any scale
				</h2>
				<p className="mt-6 text-xl leading-8 text-black/80 dark:text-white">
					From lab to industrial scale, get yours in 7 days
				</p>

				{/* Custom Toggle */}
				<div className="mt-6 flex items-center justify-center">
					<div className="relative flex items-center bg-neutral-200 rounded-full w-64 p-3 cursor-pointer">
						<div
							className={`absolute top-1/2 transform -translate-y-1/2 h-12 w-1/2 bg-black rounded-full transition-all duration-300 ease-in-out ${
								interval === "Startup - SME"
									? "left-1"
									: "left-1/2"
							}`}
						/>
						<div
							onClick={() => setInterval("Startup - SME")}
							className={`relative z-10 w-1/2 text-center text-sm font-medium ${
								interval === "Startup - SME"
									? "text-white"
									: "text-black"
							}`}
						>
							Startup - SME
						</div>
						<div
							onClick={() => setInterval("Industry - Enterprise")}
							className={`relative z-10 w-1/2 text-center text-sm font-medium ${
								interval === "Industry - Enterprise"
									? "text-white"
									: "text-black"
							}`}
						>
							Enterprise
						</div>
					</div>
				</div>
			</div>

			<DigitalTwinArticle type={interval} />
			{/* Price Cards and Conditional Image */}
			<div className="mx-auto flex flex-col sm:flex-row justify-center gap-8">
				<div className="flex flex-wrap justify-center gap-8 w-full sm:w-auto">
					{demoPrices
						.filter((price) =>
							interval === "Startup - SME"
								? price.id === "price_1"
								: price.id === "price_2"
						)
						.map((price) => (
							<div
								key={price.id}
								className="flex items-center gap-6 w-full max-w-[500px]"
							>
								{" "}
								{/* Increase max width */}
								{/* Price Card */}
								<div
									className={`relative flex flex-col gap-4 overflow-hidden rounded-2xl border p-6 text-black dark:text-white ${
										price.isMostPopular
											? "border-2 border-neutral-700 shadow-lg"
											: ""
									}`}
									style={{ minHeight: "400px" }} // Set a minimum height for uniformity
								>
									<div className="flex items-center">
										<div className="ml-4">
											<h2 className="text-lg font-semibold leading-7">
												{price.name}
											</h2>
											<p className="h-16 text-sm leading-5 text-black/70 dark:text-white">
												{price.description}
											</p>
										</div>
									</div>

									<a href="/contact">
										<Button
											className={`group relative w-full gap-2 overflow-hidden text-lg font-semibold tracking-tighter ${
												isLoading ? "opacity-50" : ""
											}`}
											disabled={isLoading}
											onClick={() =>
												void onSubscribeClick(price.id)
											}
										>
											<span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 transform-gpu bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-96 dark:bg-black" />
											{(!isLoading ||
												(isLoading &&
													id !== price.id)) && (
												<p>Contact Us</p>
											)}
											{isLoading && id === price.id && (
												<Loader className="mr-2 h-4 w-4 animate-spin" />
											)}
										</Button>
									</a>

									<hr className="m-0 h-px w-full border-none bg-gradient-to-r from-neutral-200/0 via-neutral-500/30 to-neutral-200/0" />
									{price.features && (
										<ul className="flex flex-col gap-2 font-normal">
											{price.features.map(
												(feature, idx) => (
													<li
														key={idx}
														className="flex items-center gap-3 text-xs font-medium text-black dark:text-white"
													>
														<CheckIcon className="h-5 w-5 shrink-0 rounded-full bg-green-400 p-[2px] text-black dark:text-white" />
														{feature}
													</li>
												)
											)}
										</ul>
									)}
								</div>
							</div>
						))}
				</div>
			</div>
		</section>
	);
}
