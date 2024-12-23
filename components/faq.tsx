import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <section className="py-4 h-auto md:h-[85vh] bg-[#FEFFF9]" id="faq">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-6xl font-semibold mb-12 text-center text-[#F04728]">
          FAQ
        </h2>
        <Accordion
          type="single"
          collapsible
          className="w-full max-w-5xl mx-auto md:text-[22px]"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What happens if I keep my promise?
            </AccordionTrigger>
            <AccordionContent>
              If you keep your promise, you'll build self-confidence and prove
              to yourself that you can follow through on your commitments. The
              money you committed will stay in your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Can I choose my preferred charity?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can choose from a list of trusted charities that we've
              partnered with. This ensures that if you don't meet your
              commitment, your contribution still goes to a good cause.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>How do you verify my progress?</AccordionTrigger>
            <AccordionContent>
              We have various methods to verify progress, depending on the type
              of promise. This may include self-reporting, integration with
              fitness apps, or other verification methods. We strive to make the
              process as seamless and accurate as possible.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-left">
              Can this process really help me stay accountable?
            </AccordionTrigger>
            <AccordionContent>
              Yes! By putting something tangible on the line, you create a
              stronger motivation to follow through on your commitments. Our
              users report significantly higher success rates in achieving their
              goals when using Prmise.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
