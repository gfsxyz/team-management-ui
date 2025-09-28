import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center p-8 gap-8">
        <h1 className="text-4xl font-bold">Landing Page</h1>
        <div className="space-x-4">
          <Button variant={"outline"} size={"lg"}>
            Learn more
          </Button>
          <Button size={"lg"}>Get started</Button>
        </div>
      </main>
    </div>
  );
}
