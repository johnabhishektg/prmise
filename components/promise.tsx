import { Button } from "@/components/ui/button"

export function Promise() {
  return (
    <section className="py-12 text-center">
      <h1 className="text-4xl font-bold mb-4">Make Your First Promise</h1>
      <p className="text-xl mb-8">Either way, you win</p>
      <div className="flex justify-center space-x-8 mb-8">
        <div className="bg-primary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Finish Task</h3>
          <p className="mb-4">You stuck to your promise!</p>
          <p className="text-2xl font-bold text-primary">₹100</p>
          <p>will stay in your account.</p>
        </div>
        <div className="bg-secondary/10 p-6 rounded-lg">
          <h3 className="text-2xl font-semibold mb-4">Fail Task</h3>
          <p className="mb-4">Let's try better next time!</p>
          <p className="text-2xl font-bold text-secondary">₹150</p>
          <p>will go to Animal Welfare!</p>
        </div>
      </div>
      <Button size="lg">Make Your Promise</Button>
      <p className="mt-4 text-sm text-muted-foreground">100% Non-Profit</p>
    </section>
  )
}

