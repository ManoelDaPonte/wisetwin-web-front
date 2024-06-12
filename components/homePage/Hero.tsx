"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useRef } from "react";

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
  <section id="hero" className="relative w-full h-[calc(100vh-60px)]">
    <video
      className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-100"
      src="/video/presentation.mp4"
      autoPlay
      loop
      muted
      playsInline
      preload="auto"
    />
  <div className="absolute top-0 left-0 w-full h-full z-10 pointer-events-none"></div>
      <div className="flex items-center justify-center w-full h-full overflow-hidden py-14 relative z-10">
        <div className="container z-10 flex flex-col mt-5">
          <div className="grid grid-cols-1">
            <div className="flex flex-col items-center gap-6 pb-8 text-center">
              <motion.h1
                ref={fadeInRef}
                className="text-balance bg-gradient-to-br from-white from-30% to-black/2 bg-clip-text py-4 text-5xl font-medium leading-none tracking-tighter text-transparent dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl mb-0"
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
                Get your first <br /> Digital Twin <br />
              </motion.h1>
              <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 lg:flex-row mt-4 justify-center items-center"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <a
                  href="/solutions#"
                  className={cn(
                    "bg-green-700 text-white shadow hover:bg-green-600 dark:bg-green-700 dark:text-white dark:hover:bg-green-600",
                    "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-6 py-3 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                  )}
                >
                  Get Started
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </motion.div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 mt-6">
                <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-2 sm:p-4 md:p-6 rounded-lg text-sm sm:text-base">
                  <h2 className="text-base font-semibold text-white">7 Days</h2>
                  <p className="text-white text-sm">Get your first digital twin within 7 days and take one step further towards innovation.</p>
                </div>

                <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-2 sm:p-4 md:p-6 rounded-lg text-sm sm:text-base">
                  <h2 className="text-base font-semibold text-white">Unlimited Design</h2>
                  <p className="text-white text-sm">Customize your twin through our asset library, on demand, without restrictions.</p>
                </div>

                <div className="relative bg-white bg-opacity-10 backdrop-blur-lg p-2 sm:p-4 md:p-6 rounded-lg text-sm sm:text-base">
                  <h2 className="text-base font-semibold text-white">100%</h2>
                  <p className="text-white text-sm">Achieve 100% fidelity for your platform's twin by integrating all your IoT data securely and seamlessly.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
