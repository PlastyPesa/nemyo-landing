import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans antialiased">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col">
        {/* Gradient orb background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-600/20 via-pink-500/10 to-amber-400/20 rounded-full blur-[120px]" />
        </div>
        
        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-[#C7FF4D] to-[#8BC34A] rounded-lg" />
            <span className="text-xl font-semibold tracking-tight">Nemyo</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#why" className="hover:text-white transition">Why Nemyo</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
          <a 
            href="https://app.nemyo.uk/signup"
            className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition"
          >
            Get Started
          </a>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-white/70 mb-8">
            <span className="w-2 h-2 bg-[#C7FF4D] rounded-full animate-pulse" />
            Not another spy app
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            Protection that{" "}
            <span className="bg-gradient-to-r from-[#C7FF4D] via-[#A979F2] to-[#FFC72C] bg-clip-text text-transparent">
              feels invisible
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Nemyo softly redirects harmful content to calm alternatives. 
            No blocked screens. No "you&apos;re being watched" messages. 
            Just a gentler internet for your kids.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="https://app.nemyo.uk/signup"
              className="px-8 py-4 bg-[#C7FF4D] text-black font-semibold rounded-full hover:brightness-110 transition shadow-[0_0_60px_rgba(199,255,77,0.3)]"
            >
              Start Free Trial
            </a>
            <a 
              href="#how"
              className="px-8 py-4 bg-white/5 border border-white/10 font-medium rounded-full hover:bg-white/10 transition"
            >
              See how it works
            </a>
          </div>
          
          <p className="mt-6 text-sm text-white/40">
            7-day free trial. No credit card required.
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0F] to-[#12141C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFC72C] mb-4 block">The Problem</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Kids hate parental controls.<br/>
              <span className="text-white/40">And they&apos;re right.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🚫",
                title: "Scary block screens",
                desc: "Nothing says 'I don't trust you' like a giant red 'BLOCKED' message. It creates shame and resentment."
              },
              {
                icon: "👁️",
                title: "Surveillance feels creepy",
                desc: "Apps that log every message and show 'monitoring active' alerts make kids feel like suspects, not children."
              },
              {
                icon: "🏃",
                title: "Kids bypass them anyway",
                desc: "89% of parental control features are restrictive. Kids are motivated to find workarounds—and they do."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 bg-[#12141C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A979F2] mb-4 block">How it works</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Redirect, don&apos;t block
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Instead of showing a scary "BLOCKED" page, Nemyo quietly guides your child to calmer content. They never know what they missed.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Visual representation */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-8">
                    <div className="px-4 py-2 bg-red-500/20 border border-red-500/40 rounded-lg text-red-400 text-sm line-through opacity-50">
                      Violent video
                    </div>
                    <svg className="w-8 h-8 text-[#C7FF4D]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    <div className="px-4 py-2 bg-[#C7FF4D]/20 border border-[#C7FF4D]/40 rounded-lg text-[#C7FF4D] text-sm">
                      Calm playlist
                    </div>
                  </div>
                  <p className="text-white/40 text-sm">Your child sees only the calm version</p>
                </div>
              </div>
            </div>

            {/* Steps */}
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Harmful content detected",
                  desc: "Nemyo recognizes concerning videos, games, or websites across TikTok, YouTube, Roblox, and more."
                },
                {
                  num: "02", 
                  title: "Invisible redirect",
                  desc: "Instead of blocking, we quietly swap to a safe alternative. Same app, calmer content."
                },
                {
                  num: "03",
                  title: "No disruption",
                  desc: "Your child continues scrolling naturally. No 'blocked' messages. No arguments. No bypass attempts."
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6">
                  <span className="text-[#A979F2] font-mono text-sm mt-1">{step.num}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-white/60 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Protection by Device */}
      <section className="py-24 px-6 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C7FF4D] mb-4 block">Protection by Device</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Works where your kids actually are
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Different devices need different approaches. Nemyo adapts protection to each platform.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Desktop */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">💻</span>
                <h3 className="text-xl font-semibold">Desktop &amp; Laptop</h3>
              </div>
              <p className="text-white/60 leading-relaxed mb-4">
                Our Chrome extension runs invisibly in the background. When your child browses TikTok, YouTube, or searches for intense content, Nemyo quietly redirects to calmer alternatives — no blocking pages, no warnings they can see.
              </p>
              <p className="text-sm text-white/40 italic">
                Requires Chrome browser with Nemyo extension installed.
              </p>
            </div>

            {/* Mobile */}
            <div className="p-8 bg-gradient-to-br from-[#C7FF4D]/10 to-transparent border border-[#C7FF4D]/30 rounded-3xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📱</span>
                <h3 className="text-xl font-semibold text-[#C7FF4D]">Phones &amp; Tablets</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-4">
                Nemyo Shield uses safe DNS filtering at the system level, keeping all apps and browsers protected. Plus, the built-in Explore feature guides kids to curated, safe destinations for learning, creativity, and play.
              </p>
              <p className="text-sm text-white/50 italic">
                Uses family-safe DNS. No traffic logging, no surveillance.
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-2xl text-center">
            <p className="text-white/60">
              <span className="text-[#C7FF4D] font-medium">Explore</span> is a calm discovery space — not a browser. It launches kids into curated activities across Learn, Watch, Create, and Play categories. Guidance without surveillance.
            </p>
          </div>
        </div>
      </section>

      {/* Why Nemyo */}
      <section id="why" className="py-24 px-6 bg-gradient-to-b from-[#12141C] to-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C7FF4D] mb-4 block">Why Nemyo</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What makes us different
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Comparison card - Others */}
            <div className="p-8 bg-white/5 border border-white/10 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">😰</span>
                <h3 className="text-xl font-semibold text-white/40">Other apps</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Show 'BLOCKED' screens that shame kids",
                  "Log every message and keystroke",
                  "Display 'monitoring active' badges",
                  "Create power struggles and arguments",
                  "Kids learn to bypass restrictions",
                  "Damage parent-child trust"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/40">
                    <span className="mt-1 text-red-400">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Comparison card - Nemyo */}
            <div className="p-8 bg-gradient-to-br from-[#C7FF4D]/10 to-transparent border border-[#C7FF4D]/30 rounded-3xl">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">😌</span>
                <h3 className="text-xl font-semibold text-[#C7FF4D]">Nemyo</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Invisibly redirects to calm content",
                  "Never logs messages or keystrokes",
                  "No 'you're being watched' alerts",
                  "Works with child psychology, not against it",
                  "Nothing to bypass—they don't know it's there",
                  "Builds trust through gentle guidance"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/90">
                    <span className="mt-1 text-[#C7FF4D]">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-24 px-6 bg-[#0A0A0F]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Platforms</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-12">
            Protection where they need it
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "TikTok", icon: "📱" },
              { name: "YouTube", icon: "▶️" },
              { name: "Roblox", icon: "🎮" },
              { name: "Browser", icon: "🌐" }
            ].map((platform, i) => (
              <div key={i} className="flex flex-col items-center gap-3 p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-4xl">{platform.icon}</span>
                <span className="font-medium">{platform.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 px-6 bg-gradient-to-b from-[#0A0A0F] to-[#12141C]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#FFC72C] mb-4 block">Pricing</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Simple, fair pricing
          </h2>
          <p className="text-lg text-white/60 mb-12">
            Protect up to 5 devices. Cancel anytime.
          </p>

          <div className="max-w-md mx-auto p-8 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-3xl">
            <div className="flex items-baseline justify-center gap-1 mb-2">
              <span className="text-5xl font-bold">€4.99</span>
              <span className="text-white/60">/month</span>
            </div>
            <p className="text-white/40 text-sm mb-8">Billed monthly. No hidden fees.</p>
            
            <ul className="space-y-3 text-left mb-8">
              {[
                "Up to 5 devices",
                "TikTok, YouTube, Roblox protection",
                "Browser extension included",
                "Invisible redirect technology",
                "Parent dashboard",
                "7-day free trial"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="text-[#C7FF4D]">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            
            <a 
              href="https://app.nemyo.uk/signup"
              className="block w-full py-4 bg-[#C7FF4D] text-black font-semibold rounded-full hover:brightness-110 transition"
            >
              Start Free Trial
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-[#12141C]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready for a calmer internet?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Join parents who chose gentle guidance over surveillance. 
            Your kids will never know the difference—but you will.
          </p>
          
          <a 
            href="https://app.nemyo.uk/signup"
            className="inline-block px-10 py-5 bg-[#C7FF4D] text-black text-lg font-semibold rounded-full hover:brightness-110 transition shadow-[0_0_80px_rgba(199,255,77,0.4)]"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[#C7FF4D] to-[#8BC34A] rounded-md" />
              <span className="font-semibold">Nemyo</span>
              <span className="text-white/40 text-sm ml-2">by NeoXten</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/40">
              <a href="https://app.nemyo.uk/privacy" className="hover:text-white transition">Privacy</a>
              <a href="https://app.nemyo.uk/terms" className="hover:text-white transition">Terms</a>
              <a href="mailto:support@nemyo.uk" className="hover:text-white transition">Support</a>
            </div>
            
            <p className="text-sm text-white/40">
              © 2026 NeoXten. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
