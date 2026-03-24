"use client";

import { useState } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const socials = [
  {
    name: "Facebook",
    handle: "lindseylanglifecoaching",
    href: "https://www.facebook.com/lindseylanglifecoaching/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@lindseylanglifecoaching",
    href: "https://www.instagram.com/lindseylanglifecoaching/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    handle: "Lindsey Lang",
    href: "https://www.linkedin.com/in/lindsey-lang-76656b2/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Simulate async submission — replace with actual form handler (Formspree, etc.)
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#4a1a7a] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.35em] uppercase text-white/50 mb-5">
              Let&apos;s Connect
            </p>
            <h1 className="font-[family-name:var(--font-cormorant)] text-7xl md:text-8xl font-light leading-none tracking-wide mb-6">
              Contact
            </h1>
            <div className="w-16 h-px bg-white/30 mx-auto" />
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Content */}
      <section className="bg-[#faf8f5] py-28 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Info */}
          <AnimatedSection direction="right">
            <div className="space-y-12">
              <div>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.3em] uppercase text-[#6b3fa0] mb-5">
                  Reach Out
                </p>
                <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-light text-[#1a3410] leading-tight mb-6">
                  Start with a conversation
                </h2>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#3a3a3a] leading-relaxed">
                  Whether you are ready to book your free exploration call, have
                  a question about coaching, or just want to say hello — Lindsey
                  would love to hear from you. Send a message below or reach out
                  directly by email.
                </p>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2">
                    Email
                  </p>
                  <a
                    href="mailto:lindsey@langandlang.net"
                    className="font-[family-name:var(--font-cormorant)] text-2xl text-[#4a1a7a] hover:text-[#6b3fa0] transition-colors duration-200"
                  >
                    lindsey@langandlang.net
                  </a>
                </div>
                <div>
                  <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2">
                    Community
                  </p>
                  <a
                    href="https://beneaththesurfacewomen.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-[family-name:var(--font-cormorant)] text-2xl text-[#4a1a7a] hover:text-[#6b3fa0] transition-colors duration-200"
                  >
                    beneaththesurfacewomen.com
                  </a>
                </div>
              </div>

              <div>
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-4">
                  Social Media
                </p>
                <div className="flex flex-col gap-4">
                  {socials.map(({ name, handle, href, icon }) => (
                    <a
                      key={name}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex items-center gap-4 text-[#1a1a1a] hover:text-[#4a1a7a] transition-colors duration-200"
                    >
                      <span className="flex items-center justify-center w-10 h-10 border border-[#e8e0d5] group-hover:border-[#7b5ea7] transition-colors duration-200">
                        {icon}
                      </span>
                      <div>
                        <p className="font-[family-name:var(--font-inter)] text-sm font-medium">
                          {name}
                        </p>
                        <p className="font-[family-name:var(--font-inter)] text-xs text-[#5a5a5a]">
                          {handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Free Download Note */}
              <div className="bg-[#1a3410] text-white p-8">
                <p className="font-[family-name:var(--font-inter)] text-xs tracking-[0.25em] uppercase text-white/50 mb-3">
                  Free Gift
                </p>
                <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-light mb-3">
                  Affirmation Cards
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-white/75 leading-relaxed">
                  Mention &ldquo;Affirmation Cards&rdquo; in your message and
                  Lindsey will send you the free download directly.
                </p>
              </div>
            </div>
          </AnimatedSection>

          {/* Right: Form */}
          <AnimatedSection direction="left">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-20">
                <div className="w-14 h-14 border border-[#6b3fa0] flex items-center justify-center mb-6">
                  <svg
                    className="w-6 h-6 text-[#6b3fa0]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12.75l6 6 9-13.5"
                    />
                  </svg>
                </div>
                <h3 className="font-[family-name:var(--font-cormorant)] text-3xl font-light text-[#1a3410] mb-3">
                  Message received
                </h3>
                <p className="font-[family-name:var(--font-inter)] text-sm text-[#5a5a5a] max-w-xs">
                  Thank you for reaching out. Lindsey will be in touch with you
                  shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="w-full border border-[#d8d0c8] bg-white px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-[#1a1a1a] placeholder-[#aaa] focus:outline-none focus:border-[#6b3fa0] transition-colors duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="w-full border border-[#d8d0c8] bg-white px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-[#1a1a1a] placeholder-[#aaa] focus:outline-none focus:border-[#6b3fa0] transition-colors duration-200"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    className="w-full border border-[#d8d0c8] bg-white px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-[#1a1a1a] focus:outline-none focus:border-[#6b3fa0] transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="exploration-call">Book a Free Exploration Call</option>
                    <option value="one-on-one">One-on-One Coaching Inquiry</option>
                    <option value="workshop">Events & Workshops</option>
                    <option value="btsw">Beneath the Surface Women</option>
                    <option value="affirmations">Affirmation Cards Download</option>
                    <option value="other">General Question</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-[family-name:var(--font-inter)] text-xs tracking-[0.2em] uppercase text-[#5a5a5a] mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full border border-[#d8d0c8] bg-white px-4 py-3.5 font-[family-name:var(--font-inter)] text-sm text-[#1a1a1a] placeholder-[#aaa] focus:outline-none focus:border-[#6b3fa0] transition-colors duration-200 resize-none"
                    placeholder="Tell Lindsey a bit about where you are and what you are looking for..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-[#4a1a7a] text-white font-[family-name:var(--font-inter)] text-sm tracking-widest uppercase hover:bg-[#6b3fa0] disabled:opacity-60 transition-colors duration-300"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
                <p className="font-[family-name:var(--font-inter)] text-xs text-[#5a5a5a] text-center">
                  Lindsey personally reads and responds to every message.
                </p>
              </form>
            )}
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
