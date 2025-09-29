import { Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="w-full bg-accent-foreground">
      <div className="w-full max-w-7xl px-6 mx-auto">
        <div className="flex items-center justify-between py-20">
          <div className="text-white">
            <h3 className="font-medium text-5xl">
              Discover the full
              <br />
              of&nbsp;
              <span className="underline underline-offset-8 decoration-6 decoration-secondary">
                Orbis
              </span>
              &nbsp; potential
            </h3>
            <p className="sr-only">
              Unlock smarter collaboration, seamless communication, and powerful
              tools to help your team do their best work together.
            </p>
          </div>
          <div className="flex items-center justify-end gap-6">
            <Button variant={"outline"} size={"lg"}>
              Book a Demo
            </Button>
            <Button variant={"secondary"} size={"lg"}>
              Get Started Free
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#101422] text-white pt-24 pb-6">
        <div className="w-full max-w-7xl px-6 mx-auto">
          <div className="grid grid-cols-5">
            <div className="col-span-2 space-y-8">
              <div className="font-semibold text-xl flex items-center gap-2">
                <Image
                  src={"/logo.png"}
                  alt="Orbis Logo"
                  width={24}
                  height={24}
                  style={{
                    width: "auto",
                    height: "auto",
                    filter: "brightness(0) invert(1)",
                  }}
                />
                <div>Orbis</div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4 items-center">
                  <Mail size={20} />
                  hello@orbis.com
                </div>

                <div className="flex gap-4 items-center">
                  <Phone size={20} />
                  +62 812 3333 7777
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="font-medium h-[34px] flex items-center">
                Product
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Why Orbis
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="font-medium h-[34px] flex items-center">
                Teams
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Startup
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Agencies
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Remote Teams
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Enterprise
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-8">
              <div className="font-medium h-[34px] flex items-center">
                Resources
              </div>
              <ul className="space-y-4">
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Changelog
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href={"#"}
                    className="hover:underline underline-offset-8"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-sm opacity-70 mt-12">
            &copy; 2025 Orbis. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
