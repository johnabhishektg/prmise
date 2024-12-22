import { Card } from "@/components/ui/card";
import Image from "next/image";
import img from "../public/images/innerCard.png";

export function HowItWorks() {
  return (
    <section className="py-20 bg-off-white md:h-screen " id="how-it-works">
      <div className="container mx-auto px-4">
        <header className="flex justify-center items-center mb-8">
          <div>
            <h6 className="text-sm md:text-[18px] mb-1 text-primary font-bold text-center">
              HOW IT WORKS
            </h6>
            <div className="text-3xl md:text-6xl font-semibold">
              Stay on Track in 3 Steps
            </div>
          </div>
        </header>
        <div className="md:flex flex-row items-center justify-around px-24 space-y-8">
          <Card className="w-[289px] h-[335px] bg-zinc/5 border-zinc/20 mt-[32px]">
            <Image src={img} alt={""} className="mb-3 pl-4 pt-4" />
            <div className="pt-3 px-4 pb-6">
              <h2 className="text-2xl font-semibold">Set Promise</h2>
              <p className="text-xs text-muted-foreground leading-3">
                Define a specific, achievable goal (e.g., "Go to the gym 3x a
                week").
              </p>
            </div>
          </Card>
          <Card className="w-[289px] h-[335px] bg-zinc/5 border-zinc/20">
            <Image src={img} alt={""} className="mb-3 pl-4 pt-4" />
            <div className="pt-3 px-4 pb-6">
              <h2 className="text-2xl font-semibold">Verify Promise</h2>
              <p className="text-xs text-muted-foreground leading-3">
                Choose your verification method and set your commitment amount.
              </p>
            </div>
          </Card>
          <Card className="w-[289px] h-[335px] bg-zinc/5 border-zinc/20">
            <Image src={img} alt={""} className="mb-3 pl-4 pt-4" />
            <div className="pt-3 px-4 pb-6">
              <h2 className="text-2xl font-semibold">Final Verdict</h2>
              <p className="text-xs text-muted-foreground leading-3">
                Achieve your goal, or pay it forward to a cause you care about.
              </p>
            </div>
          </Card>
        </div>

        <div className="mt-12 flex items-center justify-between">
          <hr className="bg-[#9E9E9E]" />
          <p className="text-sm text-muted-foreground">
            Partnered with trusted charities
          </p>
          <hr className="bg-[#9E9E9E]" />
        </div>
      </div>
    </section>
  );
}
