import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { HowItWorks } from '@/components/how-it-works'
import { WhyPrmise } from '@/components/why-prmise'
import { Mission } from '@/components/mission'
import { FAQ } from '@/components/faq'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-off-white text-foreground">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhyPrmise />
        <Mission />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}

