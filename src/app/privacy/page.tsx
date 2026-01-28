import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#0A0A0F] text-white font-sans antialiased">
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-6 max-w-7xl mx-auto w-full border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-[#C7FF4D] to-[#8BC34A] rounded-lg" />
          <span className="text-xl font-semibold tracking-tight">Nemyo</span>
        </Link>
        <a 
          href="https://app.nemyo.uk/signup"
          className="px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-white/90 transition"
        >
          Get Started
        </a>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Privacy Policy</h1>
        <p className="text-white/60 mb-12">Last updated: January 28, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-[#C7FF4D] mb-4">Our Privacy Promise</h2>
            <p className="text-white/80 leading-relaxed">
              Nemyo is protection, not surveillance. We built Nemyo because we believe children deserve safety 
              AND privacy. We don't read messages, track locations, or create activity reports. We simply 
              block dangerous apps and provide safe alternatives.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
            
            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Account Information</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Email address (for account creation and communication)</li>
              <li>Password (encrypted, we cannot read it)</li>
              <li>Payment information (processed securely by Stripe—we never see your full card number)</li>
            </ul>

            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Device Information</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Device name and type (e.g., "Pixel 8 Pro")</li>
              <li>Operating system version</li>
              <li>App version installed</li>
              <li>Device identifier (to link devices to your account)</li>
            </ul>

            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">What We DON'T Collect</h3>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>❌ Browsing history</li>
              <li>❌ Messages or chat content</li>
              <li>❌ Photos or media</li>
              <li>❌ Location data</li>
              <li>❌ Call logs</li>
              <li>❌ Contacts</li>
              <li>❌ App usage statistics</li>
              <li>❌ Screenshots or screen recordings</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How Nemyo Works (Technical)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Nemyo Shield uses Android's VPN API to control which apps can access the internet. 
              Here's exactly what happens:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li><strong className="text-white">Blocked apps</strong> (Chrome, TikTok, etc.) have their network traffic stopped locally on the device</li>
              <li><strong className="text-white">Allowed apps</strong> (WhatsApp, YouTube Kids, etc.) work normally</li>
              <li><strong className="text-white">DNS filtering</strong> uses Cloudflare Family (1.1.1.3) to block adult websites</li>
              <li><strong className="text-white">No data leaves the device</strong>—blocking happens entirely on-device</li>
            </ul>
            <p className="text-white/60 mt-4 text-sm">
              We never intercept, read, or transmit the content of your child's internet traffic.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>To provide and maintain the Nemyo service</li>
              <li>To process your subscription payments</li>
              <li>To send important service updates (never marketing spam)</li>
              <li>To respond to your support requests</li>
              <li>To improve our service based on aggregated, anonymized data</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Storage & Security</h2>
            <p className="text-white/80 leading-relaxed">
              Your data is stored securely using Google Firebase, which provides enterprise-grade security. 
              All data is encrypted in transit (TLS) and at rest. We implement strict access controls 
              and follow security best practices.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy (COPPA Compliance)</h2>
            <p className="text-white/80 leading-relaxed">
              Nemyo is designed for parents to protect their children. We do not collect personal 
              information directly from children under 13. The parent account holder controls all 
              settings and is responsible for any child profiles created.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Your Rights (GDPR)</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              If you're in the European Union, you have the following rights:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-white">Rectification:</strong> Correct inaccurate data</li>
              <li><strong className="text-white">Erasure:</strong> Request deletion of your data</li>
              <li><strong className="text-white">Portability:</strong> Receive your data in a portable format</li>
              <li><strong className="text-white">Objection:</strong> Object to certain processing</li>
            </ul>
            <p className="text-white/60 mt-4">
              To exercise these rights, email us at privacy@nemyo.uk
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Data Retention</h2>
            <p className="text-white/80 leading-relaxed">
              We retain your data for as long as your account is active. If you cancel your subscription, 
              we keep your data for 30 days in case you reactivate. After that, we delete your account 
              and all associated data. You can request immediate deletion at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Services</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li><strong className="text-white">Stripe:</strong> Payment processing (<a href="https://stripe.com/privacy" className="text-[#C7FF4D] hover:underline">their privacy policy</a>)</li>
              <li><strong className="text-white">Google Firebase:</strong> Backend infrastructure (<a href="https://firebase.google.com/support/privacy" className="text-[#C7FF4D] hover:underline">their privacy policy</a>)</li>
              <li><strong className="text-white">Cloudflare:</strong> DNS filtering (<a href="https://www.cloudflare.com/privacypolicy/" className="text-[#C7FF4D] hover:underline">their privacy policy</a>)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We may update this Privacy Policy from time to time. We'll notify you of significant changes 
              via email or through the app. Continued use of Nemyo after changes constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              Questions about privacy? We're here to help.
            </p>
            <ul className="list-none text-white/70 space-y-2 mt-4">
              <li>Email: <a href="mailto:privacy@nemyo.uk" className="text-[#C7FF4D] hover:underline">privacy@nemyo.uk</a></li>
              <li>General support: <a href="mailto:support@nemyo.uk" className="text-[#C7FF4D] hover:underline">support@nemyo.uk</a></li>
            </ul>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/40 text-sm">
              Nemyo is operated by NeoXten Ltd.<br />
              Registered in England and Wales.
            </p>
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#0A0A0F]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-[#C7FF4D] to-[#8BC34A] rounded-md" />
              <span className="font-semibold">Nemyo</span>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-white/40">
              <Link href="/privacy" className="text-white">Privacy Policy</Link>
              <Link href="/terms" className="hover:text-white transition">Terms of Service</Link>
              <Link href="/refund" className="hover:text-white transition">Refund Policy</Link>
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
