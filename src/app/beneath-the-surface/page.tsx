import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Beneath the Surface Women | Lindsey Lang Life Coaching",
  description:
    "A community for women ready to go deeper. Beneath the Surface Women is Lindsey Lang's space for collective healing, growth, and transformation.",
};

export default function BeneathTheSurfacePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/beneath-surface.jpg"
          alt="Beneath the Surface Women"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a1a7a]/65 via-[#4a1a7a]/45 to-[#1a3410]/80" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto pt-24">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.35em] uppercase text-white/60 mb-5">
              Community
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl font-light leading-tight tracking-wide mb-4">
              Beneath the Surface
            </h1>
            <h2 className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl italic font-light text-white/80 mb-6">
              Women
            </h2>
            <div className="w-16 h-px bg-white/40 mx-auto mb-8" />
            <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              A space where women gather to go deeper — past the surface of
              performance and perfection, into the truth of who they are.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* What It Is */}
      <section className="bg-[#faf8f5] py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-5">
              What This Is
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] leading-tight mb-8">
              Where women stop{" "}
              <em className="italic">performing</em> and start{" "}
              <em className="italic">living</em>
            </h2>
            <div className="space-y-5 font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed">
              <p>
                Beneath the Surface Women is Lindsey Lang's community built for
                women who are done with the shallow end. This is for the woman
                who has done the Instagram scrolling and still feels empty —
                who senses there is something more, something deeper, waiting
                for her if she is brave enough to look.
              </p>
              <p>
                BTSW brings together women through workshops, events, and ongoing
                community spaces designed to foster real transformation. Not
                surface-level tips. Not toxic positivity. Real, honest,
                grounded work — in community.
              </p>
              <p>
                Lindsey created this space because she believes the most powerful
                thing a woman can experience is witnessing another woman fully
                own her truth. That witnessing is contagious. It is how
                transformation ripples outward.
              </p>
              <p>
                Whether you are navigating a major life transition, healing
                from painful relationship patterns, or simply tired of shrinking
                yourself — Beneath the Surface Women is where you belong.
              </p>
            </div>

            <a
              href="https://beneaththesurfacewomen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center mt-10 px-10 py-4 bg-[#4a1a7a] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#6b3fa0] transition-colors duration-300"
            >
              Visit beneaththesurfacewomen.com
            </a>
          </AnimatedSection>

          <AnimatedSection direction="left">
            <div className="relative h-[560px] overflow-hidden">
              <Image
                src="/community.jpg"
                alt="Beneath the Surface Women community"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pillars */}
      <section className="bg-[#4a1a7a] py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              What We Stand For
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light">
              The pillars of BTSW
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Radical Honesty",
                body: "We create space to tell the truth — about where you are, what you have been through, and what you actually want.",
              },
              {
                title: "Deep Community",
                body: "Real connection over performance. Women who show up as they are and are met with belonging, not judgment.",
              },
              {
                title: "Intentional Growth",
                body: "Workshops and gatherings designed not just to inspire but to actually move you — through tools, reflection, and action.",
              },
              {
                title: "Inner Child Healing",
                body: "Tracing the patterns back to their roots, healing them with compassion, and choosing something different.",
              },
              {
                title: "Boundaries & Freedom",
                body: "Learning that the most generous thing you can do is know your own limits — and honor them without apology.",
              },
              {
                title: "Embodied Confidence",
                body: "Building self-assurance that lives in your body, not just your head — so it holds under pressure.",
              },
            ].map((pillar, i) => (
              <AnimatedSection key={pillar.title} delay={i * 0.08}>
                <div className="border border-white/15 p-7 h-full">
                  <div className="w-6 h-px bg-white/40 mb-5" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-light text-white mb-3">
                    {pillar.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-xs text-white/65 leading-relaxed">
                    {pillar.body}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Quote from Holly */}
      <section className="bg-[#1a3410] py-24 px-6 text-white text-center">
        <AnimatedSection className="max-w-3xl mx-auto">
          <div className="font-[family-name:var(--font-cormorant)] text-7xl text-white/15 leading-none mb-4">
            &ldquo;
          </div>
          <p className="font-[family-name:var(--font-cormorant)] text-3xl md:text-4xl font-light italic leading-relaxed mb-8 text-white/90">
            She gives her participants the gift of freedom by sharing herself
            so one knows that they can as well. A wonderful, inspiring
            workshop leader.
          </p>
          <p className="font-[family-name:var(--font-inter)] text-sm text-white/50 tracking-wider">
            Holly — British Columbia
          </p>
        </AnimatedSection>
      </section>

      {/* CTA */}
      <section className="bg-[#faf8f5] py-24 px-6 text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] mb-6">
            Come as you are
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] max-w-md mx-auto mb-10 leading-relaxed">
            Ready to connect with a community of women going deeper? Visit the
            Beneath the Surface Women website to learn about upcoming events
            and how to join.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://beneaththesurfacewomen.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-10 py-4 bg-[#4a1a7a] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#6b3fa0] transition-colors duration-300"
            >
              Visit the Community
            </a>
            <Link
              href="/work-with-me"
              className="inline-flex items-center justify-center px-10 py-4 border border-[#1a3410] text-[#1a3410] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#1a3410] hover:text-white transition-colors duration-300"
            >
              Work With Lindsey
            </Link>
          </div>
        </AnimatedSection>
      </section>
    </>
  );
}
