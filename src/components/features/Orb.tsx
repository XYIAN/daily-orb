"use client";

import { useState } from "react";

interface OrbProps {
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export function Orb({ onClick, size = "md", className = "" }: OrbProps) {
  const [isHovered, setIsHovered] = useState(false);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-32 h-32",
    lg: "w-48 h-48",
  };

  return (
    <div
      className={`
				${sizeClasses[size]}
				rounded-full bg-gradient-to-br from-green-400 to-green-600 
				shadow-2xl cursor-pointer transition-all duration-300
				animate-float hover:scale-110 hover:shadow-green-500/50
				${isHovered ? "animate-pulse" : ""}
				${className}
			`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick?.();
        }
      }}
      aria-label="Click to reveal today's magic"
    >
      <div className="w-full h-full rounded-full bg-gradient-to-br from-green-300/30 to-transparent animate-glow" />
    </div>
  );
}
