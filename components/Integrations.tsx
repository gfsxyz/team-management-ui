"use client";

import {
  Airplay,
  ArrowRight,
  Bitcoin,
  Chromium,
  Codepen,
  Codesandbox,
  Dribbble,
  Facebook,
  Figma,
  Framer,
  Github,
  Gitlab,
  Instagram,
  Linkedin,
  Pocket,
  Slack,
  Target,
  Trello,
  Twitch,
  Twitter,
  Waypoints,
  Youtube,
} from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";

const icons = [
  Airplay,
  Bitcoin,
  Chromium,
  Codepen,
  Codesandbox,
  Dribbble,
  Facebook,
  Figma,
  Framer,
  Github,
];

const icons2 = [
  Gitlab,
  Youtube,
  Instagram,
  Linkedin,
  Pocket,
  Slack,
  Target,
  Trello,
  Twitch,
  Twitter,
];

const Integrations = () => {
  return (
    <div className="w-full bg-white px-6">
      <section className="w-full max-w-7xl pt-24 pb-12 bg-accent-foreground text-white rounded-2xl relative mx-auto">
        <div
          className="absolute inset-0 z-0 w-5/6 mx-auto opacity-10"
          style={{
            backgroundImage: `
        linear-gradient(to right, #ffffff 1px, transparent 1px),
        linear-gradient(to bottom, #ffffff 1px, transparent 1px)
      `,
            backgroundSize: "62px 62px",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 70%)",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 50%, #000 30%, transparent 70%)",
          }}
        />

        <div className="space-y-10 text-center relative z-10 px-6">
          <div className="flex items-center gap-2 bg-white/20 border rounded-4xl max-w-fit px-3 py-1 shadow-sm font-medium text-xs mx-auto mb-6">
            <Waypoints className="size-6 pb-0.5" />
            <h2>INTEGRATIONS</h2>
          </div>
          <h3 className="font-semibold text-5xl">Work Smarter, Connect.</h3>
          <p className="w-full max-w-2xl mx-auto">
            Switching between tools slows teams down. That&apos;s why we make it
            easy to integrate the apps you already use — so everything flows
            seamlessly in one place.
          </p>
          <Button
            variant={"link"}
            className="underline underline-offset-8 text-white group hover:underline-offset-4"
            asChild
          >
            <Link href={"#"}>
              All Integrations
              <ArrowRight className="pt-0.5" />
            </Link>
          </Button>
        </div>
        <div className="mt-12">
          <div className="relative w-full overflow-hidden py-4">
            {/* left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-accent-foreground to-transparent z-10" />
            {/* right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-accent-foreground to-transparent z-10" />

            <motion.div
              className="flex gap-10 w-fit"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
            >
              {/* duplicate for seamless loop */}
              {[...icons, ...icons].map((Icon, i) => (
                <div
                  key={i}
                  className="rounded-2xl size-20 bg-white border shadow-sm flex items-center justify-center shrink-0"
                >
                  <Icon className="text-accent-foreground" size={32} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            {/* left fade */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-accent-foreground to-transparent z-10" />
            {/* right fade */}
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-accent-foreground to-transparent z-10" />

            <motion.div
              className="flex gap-10 w-fit"
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 50,
                ease: "linear",
              }}
            >
              {/* duplicate for seamless loop */}
              {[...icons2, ...icons2].map((Icon, i) => (
                <div
                  key={i}
                  className="rounded-2xl size-20 bg-white border shadow-sm flex items-center justify-center shrink-0"
                >
                  <Icon className="text-accent-foreground" size={32} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Integrations;
