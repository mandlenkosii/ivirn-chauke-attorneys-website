'use client'

import { useState } from 'react'
import {
  ArrowUpRight,
  ChevronDown,
  Clock3,
  Gavel,
  Mail,
  MapPin,
  Menu,
  Phone,
  Scale,
  ShieldCheck,
  X,
} from 'lucide-react'
import { Button } from '@/components/ui/button'

const practices = [
  { number: '01', title: 'Commercial contracts & opinions', description: 'Clear, commercially-minded advice for agreements that move your business forward.' },
  { number: '02', title: 'Corporate law', description: 'Practical counsel for companies, directors and shareholders at every stage.' },
  { number: '03', title: 'Labour & employment law', description: 'Measured guidance through workplace challenges, disputes and transformation.' },
  { number: '04', title: 'Family & divorce law', description: 'Steady, considered representation when the stakes are personal.' },
  { number: '05', title: 'Property law', description: 'Confident support on transactions, development and property disputes.' },
  { number: '06', title: 'Wills & estate planning', description: 'Thoughtful planning that protects what you have built for those who matter.' },
  { number: '07', title: 'Personal injury claims', description: 'Determined advocacy for clients seeking a fair and just outcome.' },
  { number: '08', title: 'Insurance law', description: 'Strategic advice on coverage, claims and complex liability questions.' },
  { number: '09', title: 'General & commercial litigation', description: 'Focused representation before disputes become distractions.' },
]

export default function Page() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
  }

  return (
    <main className="min-h-screen bg-[#f5f3ef] text-[#1b2723]">
      <div className="border-b border-[#d8d9d3] bg-[#1b2723] px-5 py-2 text-[11px] tracking-[0.18em] text-[#d6dbc9] sm:px-8">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span>JOHANNESBURG · GAUTENG · SOUTH AFRICA</span>
          <a className="hidden transition-colors hover:text-white sm:block" href="mailto:irvin@icattorneys.co.za">IRVIN@ICATTORNEYS.CO.ZA</a>
        </div>
      </div>

      <header className="absolute inset-x-0 top-[33px] z-10 border-b border-white/15 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:py-7">
          <a href="#top" className="group flex items-center gap-3" aria-label="Ivirn Chauke Attorneys home">
            <span className="flex size-10 items-center justify-center border border-[#d6dbc9]/70 text-sm font-semibold tracking-[-0.08em] text-[#d6dbc9]">IC</span>
            <span className="flex flex-col text-[11px] leading-[1.05] tracking-[0.2em]">
              <span>IVIRN CHAUKE</span><span className="text-[#d6dbc9]">ATTORNEYS</span>
            </span>
          </a>
          <nav className="hidden items-center gap-8 text-xs tracking-[0.16em] lg:flex" aria-label="Primary navigation">
            <a href="#about" className="transition-colors hover:text-[#d6dbc9]">ABOUT</a>
            <a href="#practice" className="transition-colors hover:text-[#d6dbc9]">PRACTICE AREAS</a>
            <a href="#contact" className="transition-colors hover:text-[#d6dbc9]">CONTACT</a>
          </nav>
          <a href="#contact" className="hidden items-center gap-2 border border-[#d6dbc9]/70 px-4 py-3 text-[10px] tracking-[0.16em] transition-colors hover:bg-[#d6dbc9] hover:text-[#1b2723] sm:flex">
            BOOK A CONSULTATION <ArrowUpRight className="size-3" />
          </a>
          <button className="lg:hidden" aria-label="Open navigation"><Menu /></button>
        </div>
      </header>

      <section id="top" className="relative flex min-h-[680px] items-end overflow-hidden bg-[#1b2723] pt-40 lg:min-h-[760px]">
        <img src="/images/johannesburg-courthouse.png" alt="Johannesburg civic architecture at golden hour" className="absolute inset-0 size-full object-cover object-center opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#14201d]/95 via-[#1b2723]/65 to-[#1b2723]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1b2723] via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
          <div className="max-w-3xl">
            <p className="mb-7 flex items-center gap-3 text-xs tracking-[0.24em] text-[#d6dbc9]"><span className="h-px w-10 bg-[#d6dbc9]" /> EST. 2018 · JOHANNESBURG</p>
            <h1 className="max-w-2xl font-serif text-[clamp(3.25rem,8vw,7.5rem)] leading-[0.88] tracking-[-0.055em] text-[#f5f3ef]">Counsel with<br /><em className="font-normal text-[#c4cbb8]">conviction.</em></h1>
            <p className="mt-8 max-w-md text-base leading-7 text-[#e5e6de]/80">A Johannesburg law practice built around clear thinking, careful advocacy and the courage to do what is right.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#contact" className="inline-flex items-center gap-3 bg-[#d6dbc9] px-5 py-4 text-xs font-semibold tracking-[0.13em] text-[#1b2723] transition-colors hover:bg-white">SPEAK TO OUR FIRM <ArrowUpRight className="size-4" /></a>
              <a href="#practice" className="inline-flex items-center gap-3 border border-white/40 px-5 py-4 text-xs font-semibold tracking-[0.13em] text-white transition-colors hover:bg-white/10">OUR PRACTICE AREAS <ChevronDown className="size-4" /></a>
            </div>
          </div>
          <div className="mt-16 flex items-center gap-3 text-[10px] tracking-[0.18em] text-[#d6dbc9]/80 lg:absolute lg:bottom-28 lg:right-8 lg:mt-0 lg:rotate-90 lg:origin-right">SCROLL TO EXPLORE <span className="h-px w-12 bg-[#d6dbc9]/70" /></div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_1.2fr] md:py-28 lg:gap-28">
        <div>
          <p className="eyebrow">THE FIRM</p>
          <div className="mt-8 flex items-start gap-4"><Scale className="mt-1 size-7 text-[#9b6c43]" strokeWidth={1.2} /><p className="font-serif text-3xl leading-tight md:text-4xl">The law is personal.<br /><span className="text-[#9b6c43]">So is our practice.</span></p></div>
        </div>
        <div>
          <p className="max-w-2xl font-serif text-2xl leading-[1.3] text-[#26352f] md:text-3xl">Ivirn Chauke Attorneys is a boutique practice offering disciplined, down-to-earth legal advice to people and businesses navigating important moments.</p>
          <p className="mt-7 max-w-xl text-sm leading-7 text-[#67716a]">We bring together rigorous legal thinking and a genuine understanding of the people behind every matter. From commercial agreements to family law, we help our clients move forward with confidence.</p>
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-8 border-t border-[#d8d9d3] pt-6 sm:grid-cols-3">
            <div><p className="font-serif text-4xl text-[#9b6c43]">2018</p><p className="mt-2 text-[10px] tracking-[0.15em] text-[#67716a]">ADMITTED AS ATTORNEY</p></div>
            <div><p className="font-serif text-4xl text-[#9b6c43]">Wits</p><p className="mt-2 text-[10px] tracking-[0.15em] text-[#67716a]">LLB · UNIVERSITY OF THE WITWATERSRAND</p></div>
            <div><p className="font-serif text-4xl text-[#9b6c43]">01</p><p className="mt-2 text-[10px] tracking-[0.15em] text-[#67716a]">DIRECT, SENIOR COUNSEL</p></div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#d8d9d3] bg-[#e6e8df]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-3 md:py-20">
          <div className="flex gap-4"><ShieldCheck className="size-7 shrink-0 text-[#9b6c43]" strokeWidth={1.2} /><div><h2 className="font-serif text-xl">Trusted judgement</h2><p className="mt-2 text-sm leading-6 text-[#67716a]">Advice grounded in experience and delivered without unnecessary complexity.</p></div></div>
          <div className="flex gap-4"><Gavel className="size-7 shrink-0 text-[#9b6c43]" strokeWidth={1.2} /><div><h2 className="font-serif text-xl">Purposeful advocacy</h2><p className="mt-2 text-sm leading-6 text-[#67716a]">A considered approach to negotiation, dispute resolution and litigation.</p></div></div>
          <div className="flex gap-4"><Clock3 className="size-7 shrink-0 text-[#9b6c43]" strokeWidth={1.2} /><div><h2 className="font-serif text-xl">Responsive service</h2><p className="mt-2 text-sm leading-6 text-[#67716a]">Your matter deserves attention, clarity and a prompt, personal response.</p></div></div>
        </div>
      </section>

      <section id="practice" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <div className="flex flex-col justify-between gap-6 border-b border-[#1b2723] pb-8 md:flex-row md:items-end"><div><p className="eyebrow">WHAT WE DO</p><h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.04em] md:text-7xl">Practice areas</h2></div><p className="max-w-xs text-sm leading-6 text-[#67716a]">Focused legal support across the matters that shape your business, your family and your future.</p></div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => <a key={practice.number} href="#contact" className="group border-b border-[#d8d9d3] py-7 md:pr-8 lg:nth-[3n+2]:border-l lg:nth-[3n+2]:pl-8 lg:nth-[3n+3]:border-l lg:nth-[3n+3]:pl-8"><div className="flex items-start justify-between gap-5"><span className="font-mono text-[11px] text-[#9b6c43]">{practice.number}</span><ArrowUpRight className="size-4 text-[#9b6c43] opacity-0 transition-all group-hover:opacity-100" /></div><h3 className="mt-5 max-w-xs font-serif text-2xl leading-tight group-hover:text-[#9b6c43]">{practice.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[#67716a]">{practice.description}</p></a>)}
        </div>
      </section>

      <section className="bg-[#1b2723] text-[#f5f3ef]"><div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 md:grid-cols-[1.2fr_0.8fr] md:items-end md:py-28"><div><p className="eyebrow text-[#c4cbb8]">MEET YOUR ATTORNEY</p><h2 className="mt-6 max-w-2xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">Experience with<br /><em className="font-normal text-[#c4cbb8]">a human face.</em></h2></div><div><p className="font-serif text-2xl leading-tight text-[#e5e6de]">Irvin Chauke</p><p className="mt-2 text-xs tracking-[0.12em] text-[#c4cbb8]">MANAGING DIRECTOR · LLB (WITS)</p><p className="mt-6 text-sm leading-7 text-[#b8c0b5]">Admitted as an attorney in 2018, Irvin leads the practice with a commitment to thoughtful advice, strategic action and lasting client relationships.</p><a href="#contact" className="mt-7 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.14em] text-[#d6dbc9] hover:text-white">MORE ABOUT IRVIN <ArrowUpRight className="size-4" /></a></div></div></section>

      <section id="contact" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28"><div className="grid gap-12 md:grid-cols-[1fr_0.9fr]"><div><p className="eyebrow">START A CONVERSATION</p><h2 className="mt-6 max-w-xl font-serif text-5xl leading-[0.95] tracking-[-0.04em] md:text-7xl">Let's discuss<br /><em className="font-normal text-[#9b6c43]">what matters.</em></h2><p className="mt-7 max-w-md text-sm leading-7 text-[#67716a]">Tell us a little about your matter and a member of our team will be in touch. All initial enquiries are treated with discretion.</p></div><div className="border-t border-[#1b2723] pt-7"><div className="flex flex-col gap-7"><a className="group flex items-start gap-4" href="mailto:irvin@icattorneys.co.za"><Mail className="mt-1 size-5 text-[#9b6c43]" strokeWidth={1.5} /><span><span className="block text-[10px] tracking-[0.17em] text-[#67716a]">EMAIL</span><span className="mt-1 block font-serif text-xl group-hover:text-[#9b6c43]">irvin@icattorneys.co.za</span></span></a><a className="group flex items-start gap-4" href="tel:+27110000000"><Phone className="mt-1 size-5 text-[#9b6c43]" strokeWidth={1.5} /><span><span className="block text-[10px] tracking-[0.17em] text-[#67716a]">TELEPHONE</span><span className="mt-1 block font-serif text-xl group-hover:text-[#9b6c43]">+27 (0) 11 000 0000</span></span></a><div className="flex items-start gap-4"><MapPin className="mt-1 size-5 text-[#9b6c43]" strokeWidth={1.5} /><span><span className="block text-[10px] tracking-[0.17em] text-[#67716a]">LOCATION</span><span className="mt-1 block font-serif text-xl">Johannesburg, Gauteng</span></span></div></div><form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-4" aria-label="Contact enquiry form">
              <label className="flex flex-col gap-2 text-[10px] tracking-[0.15em] text-[#67716a]" htmlFor="name">NAME<input id="name" name="name" required className="h-12 border border-[#c9ccc3] bg-transparent px-4 text-sm tracking-normal text-[#1b2723] outline-none transition-colors focus:border-[#9b6c43]" /></label>
              <label className="flex flex-col gap-2 text-[10px] tracking-[0.15em] text-[#67716a]" htmlFor="email">EMAIL<input id="email" name="email" type="email" required className="h-12 border border-[#c9ccc3] bg-transparent px-4 text-sm tracking-normal text-[#1b2723] outline-none transition-colors focus:border-[#9b6c43]" /></label>
              <label className="flex flex-col gap-2 text-[10px] tracking-[0.15em] text-[#67716a]" htmlFor="matter">MATTER TYPE<select id="matter" name="matter" className="h-12 border border-[#c9ccc3] bg-[#f5f3ef] px-4 text-sm tracking-normal text-[#1b2723] outline-none transition-colors focus:border-[#9b6c43]"><option>Commercial law</option><option>Family law</option><option>Property law</option><option>Litigation</option><option>Other</option></select></label>
              <label className="flex flex-col gap-2 text-[10px] tracking-[0.15em] text-[#67716a]" htmlFor="message">HOW CAN WE HELP?<textarea id="message" name="message" required rows={4} className="resize-none border border-[#c9ccc3] bg-transparent px-4 py-3 text-sm tracking-normal text-[#1b2723] outline-none transition-colors focus:border-[#9b6c43]" /></label>
              <Button type="submit" className="h-14 w-full justify-between rounded-none bg-[#1b2723] px-5 text-xs tracking-[0.15em] text-white hover:bg-[#31463e]">SEND ENQUIRY <ArrowUpRight /></Button>
              {submitted && <p role="status" className="border border-[#b9c7b2] bg-[#e6e8df] px-4 py-3 text-sm leading-6 text-[#31463e]">Thank you. Your enquiry has been received and we will be in touch shortly.</p>}
            </form></div></div></section>

      <footer className="border-t border-[#d8d9d3] bg-[#e6e8df]"><div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between"><div><div className="flex items-center gap-3"><span className="flex size-9 items-center justify-center border border-[#1b2723] text-xs font-semibold tracking-[-0.08em]">IC</span><span className="text-[10px] tracking-[0.18em]">IVIRN CHAUKE ATTORNEYS</span></div><p className="mt-5 text-xs text-[#67716a]">Legal counsel for consequential moments.</p></div><div className="flex items-center gap-5 text-[#67716a]"><a href="https://x.com/IrvinICAttorneys" aria-label="Ivirn Chauke Attorneys on X" className="hover:text-[#1b2723]"><X className="size-4" /></a><span className="text-[10px] tracking-[0.12em]">© 2026 IC ATTORNEYS</span></div></div></footer>
    </main>
  )
}

export const dynamic = 'force-static'
