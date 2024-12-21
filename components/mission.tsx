import { Button } from "@/components/ui/button"

export function Mission() {
  return (
    <section className="py-20 bg-off-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">Why we created Prmise</h2>
        <div className="max-w-3xl mx-auto">
          <p className="mb-4">
            We're John and Bhavesh, the brains (and hearts) behind Prmise. Like you, we've wrestled with staying consistent with our goals, 
            whether it was hitting the gym, up-skilling, or just keeping ourselves accountable.
          </p>
          <p className="mb-4">
            We'd make promises, only to see them fizzle out faster than a New Year's resolution in February.
          </p>
          <p className="mb-4">
            Then came our aha! moment:
          </p>
          <blockquote className="text-2xl font-semibold text-primary text-center my-8">
            "Commitment becomes unbreakable when you have something real on the line."
          </blockquote>
          <p className="mb-8">
            We're so excited to have you join us on this journey. Let's make those promises count!
          </p>
          <p className="font-semibold mb-8">
            With gratitude,<br />
            John & Bhavesh
          </p>
          <div className="text-center">
            <Button size="lg" className="bg-primary text-off-white hover:bg-primary/90">
              Make Your Promise
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

