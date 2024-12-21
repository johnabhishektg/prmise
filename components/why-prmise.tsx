'use client'

import { Check } from 'lucide-react'
import { ThumbsUp } from 'lucide-react'

export function WhyPrmise() {
  return (
    <section className="py-20 bg-primary relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M30 0c16.569 0 30 13.431 30 30S46.569 60 30 60 0 46.569 0 30 13.431 0 30 0zm8 15c-1.105 0-2 .895-2 2v26c0 1.105.895 2 2 2s2-.895 2-2V17c0-1.105-.895-2-2-2z\' fill=\'%23FFFFFF\' fill-opacity=\'0.1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E')] bg-repeat" />
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-12">
          <h2 className="text-xl text-off-white font-primary uppercase mb-4">WHY PROMISE?</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-off-white font-primary">Either way, you win</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto relative">
          {/* Left Card */}
          <div className="bg-off-white rounded-3xl p-8">
            <div className="inline-block rounded-full px-6 py-2 border-2 border-[#22C55E] text-[#22C55E] font-primary mb-6">
              Finish Task
            </div>

            <div className="bg-[#F0FDF4] rounded-2xl p-4 mb-8 flex items-center gap-3">
              <div className="bg-[#22C55E] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="font-primary">
                You stuck to your promise!{' '}
                <span className="text-primary font-semibold">₹100</span>{' '}
                will stay in your account.
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Build a better life for yourself</span>
              </li>
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Prove to yourself that you can follow through.</span>
              </li>
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Build a better life for <span className="text-primary">yourself</span></span>
              </li>
            </ul>
          </div>

          <div className="flex items-center justify-center text-off-white text-4xl font-primary absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 md:static md:transform-none">
            Or
          </div>

          {/* Right Card */}
          <div className="bg-off-white rounded-3xl p-8">
            <div className="inline-block rounded-full px-6 py-2 border-2 border-[#EF4444] text-[#EF4444] font-primary mb-6">
              Fail Task
            </div>

            <div className="bg-[#FEF2F2] rounded-2xl p-4 mb-8 flex items-center gap-3">
              <div className="bg-[#EF4444] rounded-full p-1">
                <Check className="h-4 w-4 text-white" />
              </div>
              <p className="font-primary">
                Let's try better next time!{' '}
                <span className="text-primary font-semibold">₹150</span>{' '}
                will go to Animal Welfare!
              </p>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Contribute to curing cancer</span>
              </li>
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Help fund girls' education</span>
              </li>
              <li className="flex items-center gap-3">
                <ThumbsUp className="h-5 w-5 text-primary" />
                <span className="font-primary">Build a <span className="text-primary">better life for someone else</span></span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

