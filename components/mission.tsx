import { Button } from "@/components/ui/button";
import Image from "next/image";
import foundersImg from "../public/images/founders.png";
import Link from "next/link";

export function Mission() {
  return (
    <section className="pt-20 pb-10 md:h-screen h-auto bg-off-white">
      <div className="container mx-0 md:mx-16">
        <header className="flex items-center justify-center mb-12">
          <div className="">
            <h6 className="text-sm md:text-[18px] mb-2 font-extrabold text-center">
              OUR MISSION
            </h6>
            <div className="text-primary text-3xl md:text-6xl font-semibold">
              What We Prmise.
            </div>
          </div>
        </header>

        <div className="md:flex md:justify-between align-items">
          <Image
            src={foundersImg}
            alt={""}
            className="w-[489px] h-[374px] object-cover rounded-lg"
          />
          <div className="md:w-1/2 w-auto md:mt-0 md:mr-12 mt-4 mb-12 text-lg text-[#ADADAD]">
            <p className="mb-2">
              <span className="text-primary font-medium">
                We're John and Bhavesh, the brains (and hearts) behind Prmise.
              </span>
            </p>
            <p className="mb-2">
              Like you, we've wrestled with staying consistent with our goals,
              whether it was hitting the gym, up-skilling, or just keeping
              ourselves accountable.
            </p>
            <p className="mb-2">
              We'd make promises, only to see them fizzle out faster than a New
              Year's resolution in February.
            </p>
            <p className="mb-2">Then came our aha! moment:</p>
            <blockquote className="text-black md:text-left font-medium my-4 md:my-2">
              "Commitment becomes unbreakable when you have something real on
              the line."
            </blockquote>
            <p className="mb-6">
              We're so excited to have you join us on this journey.
              <br /> Let's make those promises count!
            </p>
            <p className="mb-6">
              With gratitude,
              <br />
              John & Bhavesh
            </p>
          </div>
        </div>
        <div className="text-center flex items-center justify-center">
          <Link href="/create">
            <Button
              size="lg"
              className=" bg-primary text-off-white hover:bg-primary/90"
            >
              Make Your Promise
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
