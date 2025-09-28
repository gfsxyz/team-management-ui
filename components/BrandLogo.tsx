"use client";

import Image from "next/image";
import { motion } from "motion/react";

export default function BrandLogo() {
  const logos = [
    { src: "/discord.png", alt: "Discord" },
    { src: "/sq.png", alt: "Square Enix" },
    { src: "/benandjerry.png", alt: "Ben & Jerry's" },
    { src: "/anthropic.png", alt: "Anthropic" },
    { src: "/hudabeauty.png", alt: "Huda Beauty" },
    { src: "/steam.png", alt: "Steam" },
  ];

  return (
    <div className="relative w-full overflow-hidden py-4 max-w-[1232px] mx-auto">
      <motion.div
        className="flex gap-12 items-center [&_img]:grayscale [&_img]:opacity-50 [&_img]:brightness-0 w-fit"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          duration: 50,
          ease: "linear",
        }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div key={i} className="relative shrink-0 min-w-[120px] h-[50px]">
            <Image
              src={logo.src}
              alt={logo.alt}
              fill
              sizes="120px"
              style={{ objectFit: "contain" }}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
