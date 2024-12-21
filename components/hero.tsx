import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Icons } from "./icons";

export function Hero() {
  return (
    <section className="py-20 text-center h-full">
      <div className="mx-auto">
        <div className="inline-block mb-4 rounded-full bg-primary px-4 py-1">
          <span className="text-xs font-light text-off-white uppercase tracking-wide font-primary">
            THE #1 ACCOUNTABILITY TOOL
          </span>
        </div>

        <h1 className="text-3xl mb-3 md:text-6xl font-bold text-primary max-w-3xl mx-auto leading-tight font-primary">
          Put your money
          <br />
          Where your mouth is
        </h1>

        <p className="md:text-sm text-xs md:mb-6 mb-2 md:text-md text-muted-foreground md:w-full w-64 mx-auto font-primary ">
          Commit to your goals. Achieve them, or pay it forward to a cause you
          care about.
        </p>

        <div className="space-y-4">
          <Button
            size="lg"
            className="bg-[#1A4B84] text-off-white hover:bg-[#1B365D]/90 px-8 py-6 text-sm md:text-lg font-primary"
          >
            Make Your Promise
          </Button>
          <div className="text-sm text-muted-foreground">
            Get started for free
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-16 bg-[#F5F5F5] w-full h-32 md:h-24">
          <div className="flex items-center justify-center space-x-1">
            <Icons.logoPoint className="w-6 h-6" />
            <span className="text-md font-primary">100% Non-Profit</span>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <Icons.logoPoint className="w-6 h-6" />
            <span className="text-md font-primary">Choose your Charity</span>
          </div>
          <div className="flex items-center justify-center space-x-2 md:space-x-2">
            <Icons.logoPoint className="w-6 h-6" />
            <span className="text-md font-primary text-left leading-4 md:w-36">
              Only pay if you fail the commitment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
