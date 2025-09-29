import { ToolCase } from "lucide-react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";

const Features = () => {
  return (
    <div className="w-full bg-white py-28">
      <section id="features" className="w-full max-w-7xl px-6 mx-auto">
        <div className="flex items-center gap-2 bg-white rounded-4xl max-w-fit px-3 py-1 shadow-sm text-primary font-medium text-xs mx-auto mb-8">
          <ToolCase className="size-6 pb-0.5" />
          <h2>FEATURES</h2>
        </div>

        <div className="text-center space-y-10 mb-16">
          <h3 className="font-semibold text-5xl leading-14">
            Stay ahead with smart tools to
            <br /> keep your team on track
          </h3>
          <p>
            Boost collaboration, productivity, and security with our intuitive
            and
            <br />
            affordable team management platform.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-12">
          <Card className="px-6 pb-10 pt-16 relative overflow-clip col-span-2">
            <div
              className="absolute inset-0 z-0 opacity-50"
              style={{
                backgroundImage: `
        linear-gradient(to right, #d1d5db 1px, transparent 1px),
        linear-gradient(to bottom, #d1d5db 1px, transparent 1px)
      `,
                backgroundSize: "32px 32px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 60% 60% at 0% 100%, #000 30%, transparent 90%)",
                maskImage:
                  "radial-gradient(ellipse 60% 60% at 0% 100%, #000 30%, transparent 90%)",
              }}
            />
            <CardHeader className="max-w-lg relative z-50">
              <CardTitle className="text-3xl mb-2">
                Smart team dashboard
              </CardTitle>
              <CardDescription className="text-base">
                Get a clear view of your team&apos;s progress and performance.
                Our dashboard makes it easy to track goals, share updates, and
                gain data-driven insights to keep everyone focused and moving
                forward.
              </CardDescription>
            </CardHeader>

            <CardAction className="px-6 mt-24 relative z-50">
              <Button>Explore all</Button>
            </CardAction>
            <div className="h-64 w-72 sm:w-96 lg:w-[32rem] xl:w-[40rem] lg:h-[27rem] absolute right-0 -bottom-16 z-0">
              <Image
                src="/dashboard.jpg"
                alt="dashboard image"
                fill
                sizes="300"
                className="object-cover object-top-left"
              />
            </div>
          </Card>

          <Card className="pb-0 relative">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 50% 33% at 50% 0%, #000 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 50% 33% at 50% 0%, #000 60%, transparent 100%)",
              }}
            />
            <CardHeader className="text-center py-6 px-14 h-40 relative z-10">
              <CardTitle className="text-3xl mb-2">Quick Chat </CardTitle>
              <CardDescription className="px-12">
                Keep conversations flowing without the clutter. Our built-in
                chat makes it simple to share updates, coordinate tasks, and
                stay connected.
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full h-80 bg-white">
              <div className="w-11/12 h-full relative mx-auto">
                <Image
                  src={"/chat.jpg"}
                  alt="chat features"
                  fill
                  sizes="300"
                  className="object-cover object-top mix-blend-multiply pt-6"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[30%] 
                bg-gradient-to-t from-background/100 to-transparent"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="pb-0 relative">
            <div
              className="absolute inset-0 opacity-70"
              style={{
                backgroundImage: `
        linear-gradient(45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%),
        linear-gradient(-45deg, transparent 49%, #e5e7eb 49%, #e5e7eb 51%, transparent 51%)
      `,
                backgroundSize: "40px 40px",
                WebkitMaskImage:
                  "radial-gradient(ellipse 50% 33% at 50% 0%, #000 60%, transparent 100%)",
                maskImage:
                  "radial-gradient(ellipse 50% 33% at 50% 0%, #000 60%, transparent 100%)",
              }}
            />
            <CardHeader className="text-center py-6 px-14 h-40 z-10 relative">
              <CardTitle className="text-3xl mb-2">Member Hub </CardTitle>
              <CardDescription className="px-12">
                Easily add, organize, and manage your team. Assign roles, set
                permissions, and ensure everyone stay aligned.
              </CardDescription>
            </CardHeader>
            <CardContent className="w-full h-80 bg-white">
              <div className="w-11/12 h-full relative mx-auto">
                <Image
                  src={"/team.jpg"}
                  alt="team features"
                  fill
                  sizes="300"
                  className="object-cover object-top mix-blend-multiply pt-6"
                />
                <div
                  className="absolute bottom-0 left-0 right-0 h-[30%] 
                bg-gradient-to-t from-background/100 to-transparent"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};
export default Features;
