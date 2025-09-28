import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
      <div className="flex items-center gap-14">
        <div className="text-primary font-bold text-xl flex items-center gap-2">
          <Image src={"/logo.png"} alt="Orbis Logo" width={28} height={28} />
          <div>Orbis</div>
        </div>
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
        <Button>Get Started</Button>
      </div>
    </nav>
  );
};
export default Navbar;
