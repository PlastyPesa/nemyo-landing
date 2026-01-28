import Link from "next/link";

export default function TermsOfService() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms of Service</h1>
        <p className="text-white/60 mb-12">Last updated: January 28, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-[#C7FF4D] mb-4">Welcome to Nemyo</h2>
            <p className="text-white/80 leading-relaxed">
              These Terms of Service ("Terms") govern your use of Nemyo, including our website, 
              mobile applications, browser extension, and related services (collectively, the "Service"). 
              By using Nemyo, you agree to these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. What Nemyo Does</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Nemyo is a parental control service that helps parents create a safer digital environment 
              for their children by:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Blocking access to specified apps (browsers, social media, app stores)</li>
              <li>Filtering adult content via DNS</li>
              <li>Providing curated, age-appropriate content through "Explore"</li>
              <li>Allowing parents to control which apps are blocked or allowed</li>
            </ul>
            <p className="text-white/60 mt-4 text-sm">
              Nemyo is a tool to assist parents—it does not replace parental supervision or guarantee 
              complete protection from all online risks.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Eligibility</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>You must be at least 18 years old to create a Nemyo account</li>
              <li>You must be the parent or legal guardian of any children whose devices you protect</li>
              <li>You are responsible for ensuring you have the legal right to install Nemyo on any device</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Your Account</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>You are responsible for maintaining the security of your account credentials</li>
              <li>You must provide accurate information when creating your account</li>
              <li>You are responsible for all activity that occurs under your account</li>
              <li>Notify us immediately if you suspect unauthorized access to your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Subscription & Payment</h2>
            
            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Pricing</h3>
            <p className="text-white/70">
              Nemyo costs €4.99/month. Prices may change with 30 days notice.
            </p>

            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Free Trial</h3>
            <p className="text-white/70">
              New accounts receive a 7-day free trial. You won't be charged until the trial ends. 
              Cancel anytime during the trial to avoid charges.
            </p>

            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Billing</h3>
            <p className="text-white/70">
              Subscriptions are billed monthly in advance. Payments are processed securely via Stripe.
            </p>

            <h3 className="text-xl font-medium text-white/90 mt-6 mb-3">Cancellation</h3>
            <p className="text-white/70">
              You may cancel your subscription at any time. When you cancel:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-2">
              <li>Your subscription remains active until the end of your current billing period</li>
              <li>You will NOT be charged again after cancellation</li>
              <li>Protection continues until your subscription expires</li>
              <li>You can reactivate anytime</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Refund Policy</h2>
            <p className="text-white/80 leading-relaxed">
              We offer a 30-day money-back guarantee. See our full{" "}
              <Link href="/refund" className="text-[#C7FF4D] hover:underline">Refund Policy</Link> for details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Device Limits</h2>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Each subscription protects up to <strong className="text-white">5 devices</strong></li>
              <li>Devices include phones, tablets, and computers with the browser extension</li>
              <li>You can remove devices from your account to free up slots</li>
              <li>One pairing code per device—save your codes securely</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Acceptable Use</h2>
            <p className="text-white/80 leading-relaxed mb-4">You agree NOT to:</p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Install Nemyo on devices you don't own or have permission to manage</li>
              <li>Use Nemyo to monitor adults without their consent</li>
              <li>Attempt to reverse engineer, modify, or circumvent Nemyo's security</li>
              <li>Share your account credentials with others</li>
              <li>Use Nemyo for any illegal purpose</li>
              <li>Resell or redistribute Nemyo</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Intellectual Property</h2>
            <p className="text-white/80 leading-relaxed">
              Nemyo and its original content, features, and functionality are owned by NeoXten Ltd 
              and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              To the maximum extent permitted by law:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2">
              <li>Nemyo is provided "as is" without warranties of any kind</li>
              <li>We do not guarantee that Nemyo will block all harmful content</li>
              <li>We are not liable for any content your child may access despite our protections</li>
              <li>Our total liability is limited to the amount you paid us in the past 12 months</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">10. Disclaimer</h2>
            <p className="text-white/80 leading-relaxed">
              Nemyo is a tool to help parents—not a replacement for parental supervision. 
              No technology can guarantee complete protection. We encourage open communication 
              with your children about online safety.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">11. Termination</h2>
            <p className="text-white/80 leading-relaxed">
              We may suspend or terminate your account if you violate these Terms. 
              Upon termination, your right to use the Service immediately ceases. 
              You may terminate your account at any time by canceling your subscription 
              and contacting us to request account deletion.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
            <p className="text-white/80 leading-relaxed">
              We may modify these Terms at any time. We'll notify you of material changes via email 
              or through the Service. Continued use after changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">13. Governing Law</h2>
            <p className="text-white/80 leading-relaxed">
              These Terms are governed by the laws of England and Wales. Any disputes shall be 
              resolved in the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">14. Contact Us</h2>
            <p className="text-white/80 leading-relaxed">
              Questions about these Terms?
            </p>
            <ul className="list-none text-white/70 space-y-2 mt-4">
              <li>Email: <a href="mailto:legal@nemyo.uk" className="text-[#C7FF4D] hover:underline">legal@nemyo.uk</a></li>
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
              <Link href="/privacy" className="hover:text-white transition">Privacy Policy</Link>
              <Link href="/terms" className="text-white">Terms of Service</Link>
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
