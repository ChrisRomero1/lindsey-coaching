import Link from "next/link";
import Image from "next/image";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me | Lindsey Lang Life Coaching",
  description:
    "One-on-one coaching packages, events, and workshops. Start with a free 30-minute exploration call.",
};

const steps = [
  {
    number: "01",
    title: "Free Exploration Call",
    description:
      "A 30–45 minute conversation to get to know each other, explore where you are, and determine if coaching together is the right fit. No sales pressure — just an honest dialogue.",
  },
  {
    number: "02",
    title: "Review & Schedule",
    description:
      "Together we review program options, choose the approach that aligns with your goals, and schedule your first session at a time that works for your life.",
  },
  {
    number: "03",
    title: "Begin Your Journey",
    description:
      "Complete your payment and coaching intake questionnaire, then show up ready. Your transformation starts with the very first session.",
  },
];

export default function WorkWithMePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#2d5016] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="/hero.jpg"
            alt=""
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.35em] uppercase text-white/50 mb-5">
              Coaching Services
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-8xl font-light leading-none tracking-wide mb-6">
              Work With Me
            </h1>
            <div className="w-16 h-px bg-[#7b5ea7] mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* One-on-One Coaching */}
      <section className="bg-[#faf8f5] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            <AnimatedSection direction="right">
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-5">
                Primary Offering
              </p>
              <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] leading-tight mb-6">
                One-on-One Coaching
              </h2>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed mb-6">
                This is deep, personalized work. One-on-one coaching with Lindsey
                is a commitment to yourself — to finally doing the inner work
                that creates lasting outer change.
              </p>
              <p className="font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed mb-8">
                Each session is 75 minutes of focused, intentional coaching
                tailored entirely to your unique situation, goals, and pace.
              </p>
              <div className="space-y-3 mb-10">
                {[
                  "Minimum 12 sessions for meaningful transformation",
                  "75 minutes per session, fully personalized",
                  "Comprehensive intake questionnaire before your first session",
                  "Custom goal-setting and action planning",
                  "Practical tools and techniques you can use immediately",
                  "VIP access available for intensive support",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 font-[family-name:var(--font-inter)] text-sm text-[#1a1a1a]"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#6b3fa0] shrink-0 mt-1.5" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-10 py-4 bg-[#1a3410] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#2d5016] transition-colors duration-300"
              >
                Book Your Free Call
              </Link>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div className="bg-[#4a1a7a] text-white p-12 lg:p-14">
                <p className="font-[family-name:var(--font-cormorant)] text-3xl font-light italic mb-8 leading-snug text-white/90">
                  &ldquo;The most important relationship you will ever have is the
                  one with yourself.&rdquo;
                </p>
                <div className="w-8 h-px bg-white/30 mb-8" />
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.25em] uppercase text-white/50 mb-5">
                  This coaching is right for you if you are:
                </p>
                <ul className="space-y-3">
                  {[
                    "Feeling stuck, exhausted, or unfulfilled",
                    "Ready to break free from people-pleasing",
                    "Craving more confidence and self-trust",
                    "Navigating a career transition or life change",
                    "Healing from codependency or difficult relationships",
                    "Wanting to build boundaries that actually hold",
                  ].map((item) => (
                    <li
                      key={item}
                      className="font-[family-name:var(--font-inter)] text-sm text-white/80 flex items-start gap-3"
                    >
                      <span className="block w-1.5 h-1.5 rounded-full bg-white/40 shrink-0 mt-1.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          </div>

          {/* Events & Workshops */}
          <AnimatedSection>
            <div className="border border-[#e8e0d5] bg-white p-12 lg:p-16">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-4">
                    Community Offering
                  </p>
                  <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1a3410] leading-tight mb-5">
                    Events & Workshops
                  </h2>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed mb-6">
                    Lindsey hosts transformational workshops and group events
                    designed to create breakthroughs in community. Whether it is a
                    half-day intensive or a multi-week series, these experiences
                    combine Lindsey's expertise with the undeniable power of
                    women doing the work together.
                  </p>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed mb-8">
                    Events are announced via email and social media. Join the
                    community at{" "}
                    <a
                      href="https://beneaththesurfacewomen.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#4a1a7a] underline underline-offset-2 hover:text-[#6b3fa0]"
                    >
                      Beneath the Surface Women
                    </a>{" "}
                    to stay in the loop.
                  </p>
                  <Link
                    href="/beneath-the-surface"
                    className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-[#4a1a7a] group"
                  >
                    <span>Learn About BTSW</span>
                    <span className="block w-8 h-px bg-[#4a1a7a] group-hover:w-14 transition-all duration-300" />
                  </Link>
                </div>
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <Image
                    src="/community.jpg"
                    alt="Beneath the Surface Women community"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-[#1a3410] py-28 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              The Process
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light">
              How it works
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <AnimatedSection key={step.number} delay={i * 0.12}>
                <div className="relative pt-2">
                  <div className="font-[family-name:var(--font-cormorant)] text-7xl font-light text-white/10 leading-none mb-4 -ml-1">
                    {step.number}
                  </div>
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-white mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-white/70 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#faf8f5] py-28 px-6 text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] mb-6">
            Your first step is free
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] max-w-md mx-auto mb-10 leading-relaxed">
            Schedule your free exploration call. Come as you are — no preparation
            needed. Just bring your honest self.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-12 py-4 bg-[#4a1a7a] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#6b3fa0] transition-colors duration-300"
            >
              Book Exploration Call
            </Link>
            <a
              href="mailto:lindsey@langandlang.net"
              className="inline-flex items-center justify-center px-12 py-4 border border-[#1a3410] text-[#1a3410] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#1a3410] hover:text-white transition-colors duration-300"
            >
              Email Lindsey
            </a>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
