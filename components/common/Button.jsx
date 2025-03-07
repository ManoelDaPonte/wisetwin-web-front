import React from "react";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";

const Button = ({ label, onClick, href }) => {
	return (
		<a
			href={href}
			onClick={onClick}
			className={cn(
				"bg-green-700 text-white shadow hover:bg-green-600 dark:bg-green-700 dark:text-white dark:hover:bg-green-600",
				"group relative inline-flex h-9 w-full items-center justify-center gap-2 overflow-hidden whitespace-pre rounded-md px-6 py-3 text-base font-semibold tracking-tighter focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 md:flex",
				"transform-gpu ring-offset-current transition-all duration-300 ease-out hover:ring-2 hover:ring-primary hover:ring-offset-2"
			)}
		>
			{label}
			<ChevronRight className="size-4 translate-x-0 transition-all duration-300 ease-out group-hover:translate-x-1" />
		</a>
	);
};

export default Button;
