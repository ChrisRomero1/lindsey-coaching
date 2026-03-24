import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Lindsey | Lindsey Lang Life Coaching",
  description:
    "Certified life coach Lindsey Lang guides women from exhaustion to confidence. Learn her story, credentials, and coaching philosophy.",
};

const credentials = [
  "Heal Your Life Workshop Leader and Life Coach Certification",
  "Mastery Graduate, Center for Leadership and Design",
  "Fowler-Wainwright Certified Life Coach",
  "Certified People Pleaser / Self-Care Coach",
  "Certified Transformation Life Coach",
  "Certified Practitioner, Heal the Inner Child",
  "Certified ADHD Management Coach",
  "Certified Conflict Resolution Coach",
  "ACTION Fitness Personal Training Certification",
  "Certified Reiki Master",
];

const specialties = [
  "Boundary Identification",
  "Confidence Building",
  "Healthy Self-Image",
  "Career & Corporate Coaching",
  "Time Management",
  "Healing Codependency",
  "Overcoming People Pleasing",
  "Conflict Resolution",
  "Communication Skills",
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#1a3410] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/dragonfly-hero.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.35em] uppercase text-white/50 mb-5">
              Meet Your Coach
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-8xl font-light leading-none tracking-wide mb-6">
              About Lindsey
            </h1>
            <div className="w-16 h-px bg-[#7b5ea7] mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Main Story */}
      <section className="bg-[#faf8f5] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <AnimatedSection direction="right" className="sticky top-28">
            <div className="relative h-[600px] lg:h-[720px] overflow-hidden">
              <Image
                src="/coach.jpg"
                alt="Lindsey Lang, Life Coach"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#faf8f5] to-transparent" />
            </div>
          </AnimatedSection>

          <AnimatedSection direction="left" className="pt-4 lg:pt-8">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-5">
              Her Story
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1a3410] leading-tight mb-8">
              From exhaustion to{" "}
              <em className="italic">unapologetic confidence</em>
            </h2>
            <div className="space-y-5 font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed">
              <p>
                Lindsey Lang knows what it feels like to run on empty — to pour
                everything into everyone else while quietly losing yourself. She
                has lived the weight of people-pleasing, the quiet grief of
                boundaries never set, and the exhaustion of a life lived
                for others.
              </p>
              <p>
                That personal journey became her calling. Today, Lindsey is a
                multiply-certified life coach who specializes in guiding women
                out of the patterns that keep them stuck — codependency, chronic
                self-doubt, fear of conflict — and into the version of themselves
                they have always sensed was possible.
              </p>
              <p>
                Her approach is holistic and deeply human. Drawing on modalities
                from inner child healing and Reiki to corporate career coaching
                and ADHD management, Lindsey meets every woman exactly where she
                is — and walks with her toward where she deserves to be.
              </p>
              <p>
                When she is not in a coaching session, you will likely find
                Lindsey with a cup of coffee, her sketchbook, a good novel, or
                in the gym — feeding the same curiosity and discipline she brings
                to every client relationship.
              </p>
              <p>
                Lindsey also leads{" "}
                <a
                  href="https://beneaththesurfacewomen.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4a1a7a] underline underline-offset-2 hover:text-[#6b3fa0]"
                >
                  Beneath the Surface Women
                </a>
                , a community space for women to go deeper together.
              </p>
            </div>

            <div className="mt-12 pt-10 border-t border-[#e8e0d5]">
              <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.25em] uppercase text-[#5a5a5a] mb-5">
                Areas of Specialization
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                {specialties.map((s) => (
                  <li
                    key={s}
                    className="font-[family-name:var(--font-inter)] text-sm text-[#1a3410] flex items-center gap-2"
                  >
                    <span className="block w-1.5 h-1.5 rounded-full bg-[#6b3fa0] shrink-0" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Credentials */}
      <section className="bg-[#4a1a7a] py-24 px-6 text-white">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection className="text-center mb-14">
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
              Education & Training
            </p>
            <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light">
              Credentials
            </h2>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {credentials.map((cred, i) => (
              <AnimatedSection key={cred} delay={i * 0.06}>
                <div className="flex items-start gap-4 py-4 border-b border-white/10">
                  <span className="font-[family-name:var(--font-cormorant)] text-2xl text-white/20 leading-none w-8 shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="font-[family-name:var(--font-inter)] text-sm text-white/85 leading-snug">
                    {cred}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#faf8f5] py-24 px-6 text-center">
        <AnimatedSection>
          <h2 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl font-light text-[#1a3410] mb-6">
            Ready to work together?
          </h2>
          <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] max-w-md mx-auto mb-10 leading-relaxed">
            Start with a free 30–45 minute exploration call. No pressure — just
            a real conversation about where you are and where you want to go.
          </p>
          <Link
            href="/work-with-me"
            className="inline-flex items-center justify-center px-12 py-4 bg-[#1a3410] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#2d5016] transition-colors duration-300"
          >
            Work With Lindsey
          </Link>
        </AnimatedSection>
      </section>
    </>
  );
}
