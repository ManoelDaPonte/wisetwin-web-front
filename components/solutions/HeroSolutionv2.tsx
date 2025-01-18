"use client";

import { cn } from "@/lib/utils";
// import { BorderBeam } from "@/components/ui/magicui/border-beam";
// import RetroGrid from "@/components/ui/magicui/retro-grid";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";
import HeroVideoDialog from "@/components/ui/hero-video-dialog"; // Assurez-vous que le chemin est correct

export default function Hero() {
	const fadeInRef = useRef(null);
	const fadeInInView = useInView(fadeInRef, {
		once: true,
	});

	const fadeUpVariants = {
		initial: {
			opacity: 0,
			y: 24,
		},
		animate: {
			opacity: 1,
			y: 0,
		},
	};

	return (
		<section id="hero">
			<div className="relative h-full overflow-hidden py-14">
				{/* Suppression du composant RetroGrid */}
				{/* <RetroGrid className="z-0" /> */}
				<div className="container z-10 flex flex-col">
					<div className="mt-20 grid grid-cols-1">
						<div className="flex flex-col items-center gap-6 pb-8 text-center">
							<motion.h1
								ref={fadeInRef}
								className="text-balance bg-gradient-to-br from-black from-30% to-black/60 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
								animate={fadeInInView ? "animate" : "initial"}
								variants={fadeUpVariants}
								initial={false}
								transition={{
									duration: 0.6,
									delay: 0.1,
									ease: [0.21, 0.47, 0.32, 0.98],
									type: "spring",
								}}
							>
								Discover our Software
							</motion.h1>
						</div>
					</div>

					{/* Intégration du composant HeroVideoDialog */}
					<motion.div
						animate={fadeInInView ? "animate" : "initial"}
						variants={fadeUpVariants}
						initial={false}
						transition={{
							duration: 0.6,
							delay: 0.4,
							ease: [0.21, 0.47, 0.32, 0.98],
							type: "spring",
						}}
						className="relative mx-auto mt-24 w-full max-w-[768px]"
					>
						<HeroVideoDialog
							animationStyle="from-center"
							videoSrc="/video/WiseTwin-v2-1_Prod.mp4"
							thumbnailSrc="/image/png/demo_thumbnail.png" // Remplacez par le chemin de votre image miniature
							thumbnailAlt="Aperçu de la vidéo"
							className=""
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
