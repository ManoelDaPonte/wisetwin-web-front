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
    <section id="hero">
      <div className="flex items-center justify-center w-full h-full overflow-hidden py-14">
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
                Get your first <br /> Digital Twin <br />
              </motion.h1>

              <motion.p
                className="text-balance text-lg tracking-tight text-gray-400 md:text-xl"
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.2,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                Still using 2D to monitor your industry ? <br />
                Get ahead of the game and try Wise Twin !
              </motion.p>

              <motion.div
                animate={fadeInInView ? "animate" : "initial"}
                variants={fadeUpVariants}
                className="flex flex-col gap-4 lg:flex-row"
                initial={false}
                transition={{
                  duration: 0.6,
                  delay: 0.3,
                  ease: [0.21, 0.47, 0.32, 0.98],
                  type: "spring",
                }}
              >
                <a
                  href="/solutions#digital-twin"
                  className={cn(
                    // colors
                    "bg-black  text-white shadow hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90",

                    // layout
                    "group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-4 py-2 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",

                    // animation
                    "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2",
                  )}
                >
                  Get Started
                  <ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            animate={fadeInInView ? "animate" : "initial"}
            variants={fadeUpVariants}
            initial={false}
            transition={{
              duration: 1.4,
              delay: 0.4,
              ease: [0.21, 0.47, 0.32, 0.98],
              type: "spring",
            }}
            className="relative mt-24 h-full w-full rounded-xl after:absolute after:inset-0 after:z-10 after:[background:linear-gradient(to_top,#fff_0%,transparent)] dark:after:[background:linear-gradient(to_top,#000000_30%,transparent)]"
          >
            <div
              className={cn(
                "absolute inset-0 bottom-1/2 h-full w-full transform-gpu [filter:blur(120px)]",

                // light styles
                "[background-image:linear-gradient(to_bottom,#bde0fe,transparent_30%)]",

                // dark styles
                "dark:[background-image:linear-gradient(to_bottom,#ffffff,transparent_30%)]",
              )}
            />
            <video
              autoPlay
              loop
              muted
              src="video/demo.mp4"
              className="h-auto w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
