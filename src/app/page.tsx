import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";

const features = [
  {
    title: "Rediscover Your Power",
    description:
      "Break free from people-pleasing and codependency patterns that have kept you small. Reclaim the confident, powerful woman you were always meant to be.",
  },
  {
    title: "Build Unshakeable Confidence",
    description:
      "Through targeted coaching, develop the self-image and inner strength to navigate any situation with grace, clarity, and authentic presence.",
  },
  {
    title: "Create the Life You Deserve",
    description:
      "Design your ideal future with intentional goal-setting, boundary work, and the practical tools to transform vision into lived reality.",
  },
];

const testimonials = [
  {
    quote:
      "I am so full of gratitude to have Lindsey as my Life Coach, working with her on prosperity brought me to the next level. I am forever grateful for her wisdom and knowledge.",
    name: "Heidi",
    location: "Ontario, Canada",
  },
  {
    quote:
      "Lindsey changed my life. Three years ago I was walking out of my marriage with very poor self-esteem. With Lindsey's coaching, I've learned how to overpower those negative voices with the positive truths about myself.",
    name: "Kristine",
    location: "Indianapolis, IN",
  },
  {
    quote:
      "She gives her participants the gift of freedom by sharing herself so one knows that they can as well. A wonderful, inspiring workshop leader.",
    name: "Holly",
    location: "British Columbia",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/hero.jpg"
          alt="Lindsey Lang Life Coaching"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a3410]/60 via-[#1a3410]/40 to-[#1a3410]/70" />
        <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto">
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.35em] uppercase text-white/70 mb-6">
            Lang Health, LLC
          </p>
          <h1 className="font-[family-name:var(--font-cormorant)] text-6xl md:text-8xl lg:text-9xl font-light leading-none tracking-wide mb-6">
            Lindsey Lang
          </h1>
          <p className="font-[family-name:var(--font-cormorant)] text-2xl md:text-3xl italic font-light text-white/90 mb-4 tracking-wide">
            Inspire · Ignite · Impact
          </p>
          <p className="font-[family-name:var(--font-inter)] text-sm md:text-base text-white/75 max-w-2xl mx-auto leading-relaxed mb-10">
            Where women come home to themselves, learn to love who they have become,
            and create freedom to elegantly embrace their power and confidence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/work-with-me"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-[#1a3410] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#faf8f5] transition-colors duration-300"
            >
              Work With Me
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center px-10 py-4 border border-white text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-white/10 transition-colors duration-300"
            >
              My Story
            </Link>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
          <span className="font-[family-name:var(--font-inter)] text-xs tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
        </div>
      </section>

      {/* Feature Cards */}
      <section className="bg-[#faf8f5] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-4">
              The Work
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] leading-tight">
              Your transformation begins here
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, i) => (
              <AnimatedSection key={feature.title} delay={i * 0.12}>
                <div className="group bg-white border border-[#e8e0d5] p-10 hover:border-[#7b5ea7] hover:shadow-lg transition-all duration-400 h-full flex flex-col">
                  <div className="w-8 h-px bg-[#6b3fa0] mb-8 group-hover:w-16 transition-all duration-400" />
                  <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light text-[#1a3410] mb-4 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] leading-relaxed flex-1">
                    {feature.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="bg-[#2d5016] py-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="relative h-[500px] lg:h-[600px]">
              <Image
                src="/coach.jpg"
                alt="Lindsey Lang"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-[#1a3410]/20" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" className="text-white">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
              About Lindsey
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light leading-tight mb-6">
              Guiding women from{" "}
              <em className="italic">exhaustion to confidence</em>
            </h2>
            <p className="font-[family-name:var(--font-inter)] text-sm text-white/80 leading-relaxed mb-6">
              Lindsey Lang is a certified life coach with deep expertise in helping
              women identify and honor their boundaries, rebuild their confidence,
              and heal from codependency and people-pleasing patterns that have
              kept them from living fully.
            </p>
            <p className="font-[family-name:var(--font-inter)] text-sm text-white/80 leading-relaxed mb-10">
              With over a decade of credentials spanning Heal Your Life coaching,
              conflict resolution, ADHD management, inner child work, and Reiki
              Mastery, Lindsey brings a holistic, heart-led approach to every client.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-3 font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase text-white group"
            >
              <span>Meet Lindsey</span>
              <span className="block w-8 h-px bg-white group-hover:w-14 transition-all duration-300" />
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#faf8f5] py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-4">
              Client Stories
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410]">
              Voices of transformation
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="flex flex-col h-full bg-white border border-[#e8e0d5] p-8">
                  <div className="font-[family-name:var(--font-cormorant)] text-6xl text-[#6b3fa0]/20 leading-none mb-4 -mt-2">
                    &ldquo;
                  </div>
                  <p className="font-[family-name:var(--font-cormorant)] text-xl font-light text-[#1a1a1a] leading-relaxed italic flex-1 mb-6">
                    {t.quote}
                  </p>
                  <div className="border-t border-[#e8e0d5] pt-4">
                    <p className="font-[family-name:var(--font-inter)] text-sm font-medium text-[#1a3410]">
                      {t.name}
                    </p>
                    <p className="font-[family-name:var(--font-inter)] text-xs text-[#5a5a5a]">
                      {t.location}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-[#4a1a7a] py-24 px-6 text-center text-white">
        <AnimatedSection>
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-white/50 mb-6">
            Ready to begin?
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light mb-6 leading-tight">
            Your free exploration call is waiting
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-white/75 max-w-xl mx-auto mb-10 leading-relaxed">
            A 30–45 minute conversation to explore where you are, where you want
            to go, and whether coaching together is the right fit.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center justify-center px-12 py-4 bg-white text-[#4a1a7a] font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#faf8f5] transition-colors duration-300"
          >
            Book Your Free Call
          </Link>
        </AnimatedSection>
      </section>

      {/* Free Download */}
      <section className="bg-[#f0ece4] py-20 px-6 text-center">
        <AnimatedSection>
          <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-4">
            Free Gift
          </p>
          <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1a3410] mb-4">
            Download Your Affirmation Cards
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] max-w-lg mx-auto mb-8 leading-relaxed">
            A set of powerful affirmation cards to start your day rooted in truth,
            confidence, and possibility.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-10 py-3 bg-[#1a3410] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#2d5016] transition-colors duration-300"
          >
            Get Free Download
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
