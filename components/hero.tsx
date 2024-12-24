import { Button, buttonVariants } from "@/components/ui/button";
import { Icons } from "./icons";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="pt-12 md:py-20 text-center h-full">
      <div className="mx-auto">
        <div className="hidden md:inline-block mb-1 rounded-full bg-primary md:px-4 md:py-1">
          <span className="md:text-xs text-[8px] font-light text-off-white uppercase tracking-wide font-primary">
            THE #1 ACCOUNTABILITY TOOL
          </span>
        </div>

        <h1 className="text-4xl md:mb-5 md:text-8xl font-bold text-primary max-w-full mx-auto leading-tight font-primary">
          Put your money
          <br />
          Where your mouth is
        </h1>

        <p className="md:text-lg text-xs md:mb-6 mb-4 md:text-md text-muted-foreground md:w-full w-5/6 mx-auto font-primary">
          Commit to your goals. Achieve them, or pay it forward to a cause you
          care about.
        </p>

        <div className="flex items-center  justify-center space-y-2 md:space-x-4">
          <Link
            className={cn(
              buttonVariants({
                size: "sm",
                className:
                  "inline-block h-auto px-4 py-2 md:hidden align-middle bg-[#1A4B84] text-off-white hover:bg-[#1B365D]/90 text-sm font-primary",
              })
            )}
            href="/create"
          >
            Make Your Promise
          </Link>
          <Link
            className={cn(
              buttonVariants({
                size: "xl",
                className:
                  "hidden h-auto py-4 w-[284px] md:inline-block rounded-xl align-middle bg-[#1A4B84] text-off-white hover:bg-[#1B365D]/90 text-xl font-semibold font-primary",
              })
            )}
            href="/create"
          >
            Make Your Promise
          </Link>
        </div>
        <div className="flex mt-2 gap-1 items-center justify-center">
          <div className="size-1.5 mt-1 rounded-full bg-[#6AB46A]" />
          <p className="text-xs mt-1 text-muted-foreground">
            Get started for free
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 items-center mt-32 bg-[#F5F5F5] space-y-3 py-6 w-full md:h-18">
        <div className="flex items-center justify-center space-x-1 ">
          <Icons.logoPoint className="w-6 h-6" />
          <span className="text-lg font-primary">100% Non-Profit</span>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <Icons.logoPoint className="w-6 h-6" />
          <span className="text-lg font-primary">Choose your Charity</span>
        </div>
        <div className="flex items-center justify-center space-x-2 md:space-x-2">
          <Icons.logoPoint className="w-6 h-6" />
          <span className="text-lg font-primary text-left leading-4 md:w-44">
            Only pay if you fail the commitment
          </span>
        </div>
      </div>
    </section>
  );
}
