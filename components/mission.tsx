import { Button } from "@/components/ui/button";
import Image from "next/image";
import foundersImg from "../public/images/founders.png";

export function Mission() {
  return (
    <section className="py-20 md:h-screen h-auto bg-off-white">
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

        <div className="flex md:flex-col max-w-fit justify-center align-top md:justify-between">
          <Image
            src={foundersImg}
            alt={""}
            className="w-[489px] h-[374px] object-cover rounded-lg"
          />
          <div className="md:w-1/2 md:mt-0 mt-4 mb-12 text-[18px]">
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
            <blockquote className="text-black text-2xl md:text-base text-center md:font-medium my-4 md:my-2">
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
          <Button
            size="lg"
            className=" bg-primary text-off-white hover:bg-primary/90"
          >
            Make Your Promise
          </Button>
        </div>
      </div>
    </section>
  );
}
