import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import * as motion from "motion/react-client";

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
        <ul className="flex items-center justify-center gap-10 text-sm font-medium text-muted-foreground">
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
      <div className="space-x-4">
        <Button variant={"outline"}>Sign In</Button>
        <Button>Sign up</Button>
      </div>
    </motion.nav>
  );
};
export default Navbar;
