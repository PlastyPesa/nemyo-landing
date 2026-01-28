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
            The parental control kids can&apos;t bypass
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] mb-6">
            A safe phone.{" "}
            <span className="bg-gradient-to-r from-[#C7FF4D] via-[#A979F2] to-[#FFC72C] bg-clip-text text-transparent">
              Full of wonder.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Nemyo doesn&apos;t just filter the internet—it creates a walled garden where kids
            discover curated content through <strong className="text-white">Explore</strong>. 
            No browsers. No TikTok. No workarounds.
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
            7-day free trial • Protect up to 5 devices • Cancel anytime
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
              Every parental control fails.<br/>
              <span className="text-white/40">Until now.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔓",
                title: "Kids find workarounds",
                desc: "DNS filters? They use VPNs. App blocks? They download alternatives. Browser controls? They use a friend's phone."
              },
              {
                icon: "📱",
                title: "Google is a gateway",
                desc: "One search away from anything. Even with SafeSearch, kids find inappropriate content through image searches and links."
              },
              {
                icon: "🎯",
                title: "Apps exist outside control",
                desc: "TikTok, Instagram, YouTube—each has millions of unmoderated videos. Filtering can't keep up with what's uploaded every minute."
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

      {/* The Nemyo Difference */}
      <section className="py-24 px-6 bg-[#12141C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#C7FF4D] mb-4 block">The Nemyo Approach</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Don&apos;t filter the internet.<br/>
              <span className="text-[#C7FF4D]">Replace it.</span>
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Instead of trying to block bad content (which never works), Nemyo blocks the apps themselves
              and provides a curated alternative.
            </p>
          </div>

          {/* Visual comparison */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Traditional approach */}
            <div className="p-8 bg-red-500/5 border border-red-500/20 rounded-3xl">
              <h3 className="text-xl font-semibold mb-6 text-red-400">❌ Traditional Parental Controls</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">🔍</span>
                  <div className="flex-1">
                    <span className="text-white/60">Google</span>
                    <span className="text-red-400 text-sm block">Tries to filter results → Kids use VPN</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">📱</span>
                  <div className="flex-1">
                    <span className="text-white/60">TikTok</span>
                    <span className="text-red-400 text-sm block">Restricted Mode → Easily bypassed</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">🌐</span>
                  <div className="flex-1">
                    <span className="text-white/60">Chrome</span>
                    <span className="text-red-400 text-sm block">Site blocks → They use another browser</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Nemyo approach */}
            <div className="p-8 bg-[#C7FF4D]/10 border border-[#C7FF4D]/30 rounded-3xl">
              <h3 className="text-xl font-semibold mb-6 text-[#C7FF4D]">✓ Nemyo Walled Garden</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">🚫</span>
                  <div className="flex-1">
                    <span className="text-white/60">Google, Chrome, TikTok</span>
                    <span className="text-[#C7FF4D] text-sm block">Completely blocked from network</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">🧭</span>
                  <div className="flex-1">
                    <span className="text-white/60">Nemyo Explore</span>
                    <span className="text-[#C7FF4D] text-sm block">Curated YouTube Kids, PBS, Khan Academy</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                  <span className="text-2xl">✅</span>
                  <div className="flex-1">
                    <span className="text-white/60">Parent-Approved Apps</span>
                    <span className="text-[#C7FF4D] text-sm block">Only what you allow can connect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-24 px-6 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#A979F2] mb-4 block">How it works</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Three steps to a safer phone
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                num: "01",
                icon: "📲",
                title: "Install Nemyo Shield",
                desc: "Install our app on your child's phone. It takes 2 minutes. The app quietly blocks dangerous apps from connecting to the internet."
              },
              {
                num: "02",
                icon: "🧒",
                title: "Set their age",
                desc: "Choose your child's age (3-5, 6-8, 9-12, or 13+). Explore automatically shows age-appropriate content in Learn, Watch, Create, and Play categories."
              },
              {
                num: "03",
                icon: "🛡️",
                title: "They explore safely",
                desc: "Your child uses Explore to discover content. YouTube Kids, Khan Academy, PBS—all curated. No random browsing. No surprises."
              }
            ].map((step, i) => (
              <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center">
                <span className="text-[#A979F2] font-mono text-sm mb-4 block">{step.num}</span>
                <span className="text-4xl mb-4 block">{step.icon}</span>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Explore Feature */}
      <section className="py-24 px-6 bg-gradient-to-b from-[#0A0A0F] to-[#12141C]">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-[#C7FF4D] mb-4 block">Explore</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Their gateway to<br/>the good stuff
              </h2>
              <p className="text-lg text-white/60 mb-8 leading-relaxed">
                Explore isn&apos;t a browser—it&apos;s a curated discovery space. Kids tap into categories
                like Learn, Watch, Create, and Play. Each destination is hand-picked for safety and quality.
              </p>
              
              <div className="space-y-4">
                {[
                  { cat: "📚 Learn", items: "Khan Academy, National Geographic Kids, Britannica" },
                  { cat: "🎬 Watch", items: "YouTube Kids, PBS Kids, TED-Ed" },
                  { cat: "🎨 Create", items: "Scratch, Code.org, Tinkercad" },
                  { cat: "🎮 Play", items: "PBS Games, Chess Kids, Cool Math" }
                ].map((row, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-white/5 rounded-xl">
                    <span className="text-lg font-medium w-24">{row.cat}</span>
                    <span className="text-white/60">{row.items}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Phone mockup */}
            <div className="relative">
              <div className="aspect-[9/16] max-w-[300px] mx-auto bg-gradient-to-br from-[#1a1f2e] to-[#0d1117] rounded-[3rem] border-4 border-white/10 p-4 shadow-2xl">
                <div className="h-full bg-[#0A0A0F] rounded-[2.5rem] overflow-hidden">
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-lg font-semibold">Nemyo Shield</h4>
                        <span className="text-xs text-white/40">Calm screen time</span>
                      </div>
                      <div className="px-3 py-1 bg-[#C7FF4D]/20 rounded-full">
                        <span className="text-xs text-[#C7FF4D]">● Active</span>
                      </div>
                    </div>
                    
                    <div className="p-6 bg-gradient-to-br from-[#C7FF4D]/10 to-transparent rounded-2xl border border-[#C7FF4D]/20 mb-6">
                      <div className="w-12 h-12 bg-[#C7FF4D]/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-[#C7FF4D] text-xl">✓</span>
                      </div>
                      <p className="text-center text-sm text-white/80">All good</p>
                      <p className="text-center text-xs text-white/40">Screen time is calm and safe</p>
                    </div>
                    
                    <div className="p-4 bg-white/5 rounded-xl">
                      <div className="flex items-center gap-3">
                        <span className="text-lg">🧭</span>
                        <div>
                          <p className="font-medium text-sm">Explore</p>
                          <p className="text-xs text-white/40">Discover learning & fun</p>
                        </div>
                        <span className="ml-auto text-white/40">→</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Blocked */}
      <section className="py-24 px-6 bg-[#12141C]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-[#FFC72C] mb-4 block">Protection</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Nemyo blocks
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              These apps can&apos;t connect to the internet while Nemyo Shield is active.
              No workarounds. No exceptions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Chrome", icon: "🌐", reason: "Browser access" },
              { name: "TikTok", icon: "📱", reason: "Unmoderated content" },
              { name: "Instagram", icon: "📷", reason: "Social media" },
              { name: "YouTube", icon: "▶️", reason: "Use YouTube Kids" },
              { name: "Play Store", icon: "🛒", reason: "Unapproved apps" },
              { name: "Google", icon: "🔍", reason: "Unfiltered search" },
              { name: "Snapchat", icon: "👻", reason: "Disappearing content" },
              { name: "Twitter/X", icon: "🐦", reason: "Adult content" }
            ].map((app, i) => (
              <div key={i} className="p-4 bg-white/5 border border-red-500/20 rounded-xl text-center">
                <span className="text-3xl mb-2 block">{app.icon}</span>
                <span className="font-medium block">{app.name}</span>
                <span className="text-xs text-red-400">{app.reason}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#C7FF4D]/10 border border-[#C7FF4D]/30 rounded-2xl text-center">
            <p className="text-lg">
              <span className="text-[#C7FF4D] font-semibold">Parent Override:</span>{" "}
              <span className="text-white/80">You can approve specific apps if needed. WhatsApp, family communication apps, and essential services always work.</span>
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
              The first parental control<br/>that actually works
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
                  "Try to filter content → Kids bypass it",
                  "Block websites → Kids use apps instead",
                  "Restrict apps → Kids download alternatives",
                  "Monitor everything → Kids hide activity",
                  "Show scary block screens → Creates resentment",
                  "Eventually give up → Back to square one"
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
                <span className="text-2xl">🛡️</span>
                <h3 className="text-xl font-semibold text-[#C7FF4D]">Nemyo</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Blocks apps entirely → Nothing to bypass",
                  "No browsers at all → No web workarounds",
                  "Blocks app stores → Can't download alternatives",
                  "Provides Explore → Positive alternative",
                  "No block screens → They don't know what they're missing",
                  "Sustainable long-term → Peace of mind"
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

      {/* Privacy Section */}
      <section className="py-24 px-6 bg-[#0A0A0F]">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-xs uppercase tracking-[0.3em] text-[#A979F2] mb-4 block">Privacy</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Protection without surveillance
          </h2>
          <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto">
            Nemyo is protection, not spyware. We don&apos;t track browsing history, read messages, or monitor activity.
            We simply block dangerous apps and provide safe alternatives.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "🔒",
                title: "No message logging",
                desc: "We never read, store, or transmit any messages or personal content."
              },
              {
                icon: "🚫",
                title: "No location tracking",
                desc: "We don't know where your child is. That's not our job."
              },
              {
                icon: "📊",
                title: "No activity reports",
                desc: "We don't create 'screen time reports' or 'most visited' lists. Trust, not surveillance."
              }
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white/5 border border-white/10 rounded-2xl">
                <span className="text-3xl mb-4 block">{item.icon}</span>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
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
                "Up to 5 devices protected",
                "Block browsers, TikTok, Instagram & more",
                "Curated Explore content",
                "Age-appropriate filtering (3-5, 6-12, 13+)",
                "Parent-approved app overrides",
                "Chrome extension for desktop",
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
            Ready to stop worrying?
          </h2>
          <p className="text-lg text-white/60 mb-10 max-w-xl mx-auto">
            Join parents who finally have peace of mind. No more checking their phone.
            No more arguments about screen time. Just a safe, calm digital space.
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
              <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
              <a href="/terms" className="hover:text-white transition">Terms of Service</a>
              <a href="/refund" className="hover:text-white transition">Refund Policy</a>
              <a href="mailto:support@nemyo.uk" className="hover:text-white transition">Support</a>
            </div>
            
            <p className="text-sm text-white/40">
              © 2026 NeoXten Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
