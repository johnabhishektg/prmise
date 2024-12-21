import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export function HowItWorks() {
  return (
    <section className="py-20 bg-off-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <header className="flex justify-center items-center mb-8">
          <div>
            <h6 className="text-sm md:text-[16px] md:mb-1 text-primary font-bold text-center">
              HOW IT WORKS
            </h6>
            <div className="text-3xl md:text-6xl font-semibold">
              Stay on Track in 3 Steps
            </div>
          </div>
        </header>
        <div className="md:flex flex-row items-center justify-between gap-8 space-y-8">
          <Card className="w-[289px] bg-zinc/5 border-zinc/20 p-6">
            <img src="../app/innerCard.png" className="w-full h-full" />
            <h2 className="text-2xl font-semibold">Set Promise</h2>
            <p className="text-xs text-muted-foreground leading-3">
              Define a specific, achievable goal <br /> (e.g., "Go to the gym 3x
              a week").
            </p>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Verify Promise</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Choose your verification method and set your commitment amount.
              </p>
            </CardContent>
          </Card>
          <Card className="bg-primary/5 border-primary/20">
            <CardHeader>
              <CardTitle className="text-primary">Final Verdict</CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Achieve your goal, or pay it forward to a cause you care about.
              </p>
            </CardContent>
          </Card>
        </div>
        <div className="mt-12 text-center">
          <p className="text-lg mb-4">Stay on Track in 3 Steps</p>
          <p className="text-sm text-muted-foreground">
            Partnered with trusted charities
          </p>
        </div>
      </div>
    </section>
  );
}
