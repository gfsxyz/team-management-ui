"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { motion } from "motion/react";
import {
  DrawerContent,
  DrawerTrigger,
  Drawer,
  DrawerHeader,
  DrawerTitle,
  DrawerClose,
} from "./ui/drawer";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  return (
    <motion.nav
      className="w-full max-w-7xl mx-auto py-4 px-6 flex items-center justify-between"
      initial={{ opacity: 0, y: -32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex items-center gap-10">
        <Link
          href={"/"}
          className="text-primary font-semibold text-xl flex items-center gap-2"
        >
          <Image
            src={"/logo.png"}
            alt="Orbis Logo"
            width={24}
            height={24}
            style={{ width: "auto", height: "auto" }}
          />
          <div>Orbis</div>
        </Link>
        <ul className="hidden md:flex items-center justify-center gap-10 text-sm font-medium text-muted-foreground">
          <li>
            <Link href={"#"}>Features</Link>
          </li>
          <li>
            <Link href={"#"}>About</Link>
          </li>
          <li>
            <Link href={"#"}>Pricing</Link>
          </li>
        </ul>
      </div>
      <div className="space-x-4 hidden md:inline-block">
        <Button variant={"outline"}>Sign In</Button>
        <Button>Sign up</Button>
      </div>

      {/* mobile menu */}
      <div className="md:hidden">
        <Drawer direction="right">
          <DrawerTrigger asChild>
            <Button variant={"ghost"} size={"icon"}>
              <Menu />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="bg-background">
            <DrawerHeader className="px-6 items-end">
              <DrawerTitle className="sr-only">Menu List</DrawerTitle>
              <DrawerClose asChild>
                <Button variant={"ghost"} size={"icon"}>
                  <X />
                </Button>
              </DrawerClose>
            </DrawerHeader>
            <ul
              className="text-sm font-medium text-muted-foreground px-6 space-y-8 
            [&_a]:hover:underline underline-offset-8"
            >
              <li>
                <Link href={"#"}>Features</Link>
              </li>
              <li>
                <Link href={"#"}>About</Link>
              </li>
              <li>
                <Link href={"#"}>Pricing</Link>
              </li>
              <li>
                <Link href={"#"}>Sign In</Link>
              </li>
              <li>
                <Link href={"#"} className="text-primary font-semibold">
                  Sign Up
                </Link>
              </li>
            </ul>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.nav>
  );
};
export default Navbar;
