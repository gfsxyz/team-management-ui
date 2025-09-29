import { Rainbow } from "lucide-react";
import { Button } from "./ui/button";
import BrandLogo from "./BrandLogo";

const Hero = () => {
  return (
    <header className="pt-24 pb-12 space-y-40 relative">
      {/* Diagonal Fade Center Grid Background */}
      <div
        className="absolute inset-0 z-0 w-5/6 mx-auto opacity-10"
        style={{
          backgroundImage: `
        linear-gradient(to right, #0456b8 1px, transparent 1px),
        linear-gradient(to bottom, #0456b8 1px, transparent 1px)
      `,
          backgroundSize: "62px 62px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 70%)",
          maskImage:
            "radial-gradient(ellipse 60% 80% at 50% 50%, #000 30%, transparent 70%)",
        }}
      />
      <div className="space-y-10 z-10 relative">
        <h1 className="sr-only">Orbis, Team Management Tool</h1>
        <div className="text-primary font-medium text-xs flex justify-center">
          <div className="flex items-center gap-2 bg-white rounded-4xl max-w-fit px-3 py-1 shadow-sm">
            <Rainbow className="size-6 pb-0.5" />
            EASE YOUR TEAM
          </div>
        </div>
        <h2 className="font-bold text-7xl text-center">
          One tool to&nbsp;
          <span className="underline underline-offset-8 decoration-6 decoration-secondary">
            handle
          </span>
          <br /> projects and your team
        </h2>
        <p className="text-center">
          Simplify your workflow and enhance collaboration. Everything your team
          needs from
          <br /> planning to execution is organized and accessible in a single
          place.
        </p>

        <div className="space-x-6 flex justify-center">
          <Button size={"lg"}>Get started</Button>
          <Button variant={"outline"} size={"lg"}>
            Learn more
          </Button>
        </div>
      </div>

      <BrandLogo />
    </header>
  );
};
export default Hero;
