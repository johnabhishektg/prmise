"use client";

import Image from "next/image";
import wpbg from "../public/images/wpbg.png";
import failTask from "../public/images/failtask.png";
import doneTask from "../public/images/donetask.png";
import { Icons } from "./icons";

export function WhyPrmise() {
  return (
    <section className="relative md:h-screen pb-12 md:pb-0 flex items-center justify-center md:bg-off-white bg-primary">
      <Image
        src={wpbg}
        alt={""}
        className="hidden md:block md:w-[1171px] md:h-[854px] px-4 "
      />
      <div className="container mx-auto px-4 md:absolute md:left-12 md:bottom-1/4">
        <header className="flex justify-center items-center mb-8">
          <div className="pt-6 pb-3">
            <h6 className="text-sm md:text-[24px] md:mb-1 text-secondary-foreground font-bold text-center">
              WHY PRMISE?
            </h6>
            <div className="text-3xl md:text-6xl text-[#FEFFF9] font-semibold">
              Either way, you win.
            </div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 max-w-5xl mx-auto relative">
          {/* Left Card */}
          <div className="bg-off-white rounded-3xl p-8 text-center mx-8 md:m-0">
            <div className="inline-block rounded-full px-6 py-1 border-[1px] border-[#22C55E] text-[#22C55E] bg-[#F7FEF9] font-primary mb-6">
              Finish Task
            </div>

            <div className="flex items-center mb-4">
              <Image width={362} height={102} src={doneTask} alt={""} />
            </div>

            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-1">
                <Icons.logoPointGreen className="h-6 w-6 text-[#62B96C]" />
                <span className="font-primary">
                  Build a better life for yourself
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Icons.logoPointGreen className="h-8 w-8 text-[#62B96C]" />
                <span className="font-primary">
                  Prove to yourself that you can follow through.
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Icons.logoPointGreen className="h-6 w-6 stroke-[#62B96C]" />
                <span className="font-primary">
                  Build a better life for{" "}
                  <span className="text-primary">yourself</span>
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center text-off-white text-5xl font-semibold font-primary my-8 md:m-0">
            Or
          </div>

          {/* Right Card */}
          <div className="bg-off-white rounded-3xl p-8 text-center mx-8 md:m-0">
            <div className="inline-block rounded-full px-6 py-1 border-[1px] border-[#EF4444] text-[#EF4444] bg-[#FFF6F6] font-primary mb-6">
              Fail Task
            </div>

            <div className="flex items-center mb-4">
              <Image width={362} height={102} src={failTask} alt={""} />
            </div>

            <ul className="space-y-4 text-left">
              <li className="flex items-center gap-1">
                <Icons.logoPointRed className="h-6 w-6 stroke-[#62B96C]" />
                <span className="font-primary">
                  Contribute to curing cancer
                </span>
              </li>
              <li className="flex items-center gap-1">
                <Icons.logoPointRed className="h-6 w-6 stroke-[#62B96C]" />
                <span className="font-primary">Help fund girls' education</span>
              </li>
              <li className="flex items-center gap-1">
                <Icons.logoPointRed className="h-6 w-6 stroke-[#62B96C]" />
                <span className="font-primary">
                  Build a{" "}
                  <span className="text-primary">
                    better life for someone else
                  </span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
