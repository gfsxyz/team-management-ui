"use client";

import { Quote } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  motion,
  animate,
  useMotionValue,
  useTransform,
  useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

function Counter({ from = 0, to = 0, duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useMotionValue(from);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, {
        duration,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [inView, count, to, duration]);

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
    </span>
  );
}

const Testimonials = () => {
  return (
    <section className="w-full bg-white px-6 mx-auto text-center py-28 space-y-20">
      <div className="space-y-10">
        <Quote className="mx-auto" />
        <motion.p
          className="text-2xl font-semibold leading-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          "Everything lives in one place, from daily chats to performance
          <br /> insights and it&apos;s been a game changer for us. Not only
          <br /> has productivity gone up, but our team also feels more
          <br /> connected and accountable."
        </motion.p>

        <div>
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 justify-center mb-4">
            <Avatar>
              <AvatarImage src="/testi.webp" alt="daniel kim profile picture" />
              <AvatarFallback>DK</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage src="testilogo.jpg" alt="@leerob" />
              <AvatarFallback>BC</AvatarFallback>
            </Avatar>
          </div>
          <div className="font-semibold text-accent-foreground">
            Genta Suroso
          </div>
          <div className="text-sm">Operations Manager at Beatcaster</div>
        </div>
      </div>

      <div className="bg-background rounded-2xl w-full max-w-7xl mx-auto relative">
        <div
          className="absolute inset-0 z-0 pointer-events-none rounded-2xl opacity-50"
          style={{
            backgroundImage: `
        repeating-linear-gradient(0deg, transparent, transparent 19px, rgba(75, 85, 99, 0.04) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.04) 39px, rgba(75, 85, 99, 0.08) 40px),
        repeating-linear-gradient(90deg, transparent, transparent 19px, rgba(75, 85, 99, 0.04) 19px, rgba(75, 85, 99, 0.08) 20px, transparent 20px, transparent 39px, rgba(75, 85, 99, 0.04) 39px, rgba(75, 85, 99, 0.08) 40px),
        radial-gradient(circle at 20px 20px, rgba(55, 65, 81, 0.12) 2px, transparent 2px),
        radial-gradient(circle at 40px 40px, rgba(55, 65, 81, 0.12) 2px, transparent 2px)
      `,
            backgroundSize: "40px 40px, 40px 40px, 40px 40px, 40px 40px",
          }}
        />
        <div className="mx-auto w-full max-w-5xl flex items-center justify-between py-14 z-10 relative">
          <div>
            <div className="text-accent-foreground text-6xl font-semibold mb-2">
              2024
            </div>
            <div>Orbis Launched</div>
          </div>
          <div>
            <div className="text-accent-foreground text-6xl font-semibold mb-2">
              <Counter to={21} />
              K+
            </div>
            <div>Active Users</div>
          </div>
          <div>
            <div className="text-accent-foreground text-6xl font-semibold mb-2">
              <Counter to={673} />
            </div>
            <div>Team Parters</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Testimonials;
