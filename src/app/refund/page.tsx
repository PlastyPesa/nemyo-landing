import Link from 'next/link';

export default function RefundPolicy() {
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Refund Policy</h1>
        <p className="text-white/60 mb-12">Last updated: January 28, 2026</p>

        <div className="prose prose-invert prose-lg max-w-none space-y-8">
          <section className="bg-[#C7FF4D]/10 border border-[#C7FF4D]/30 rounded-2xl p-8">
            <h2 className="text-2xl font-semibold text-[#C7FF4D] mb-4">Our Promise</h2>
            <p className="text-white/90 leading-relaxed text-lg">
              We want you to love Nemyo. If it's not right for your family, we'll make it right. No
              complicated forms. No arguing. Just reach out.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5-Day Free Trial</h2>
            <p className="text-white/80 leading-relaxed">
              Every new subscription starts with a{' '}
              <strong className="text-[#C7FF4D]">free 5-day trial</strong>.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>You won't be charged until the trial ends</li>
              <li>Cancel anytime during the trial—no questions asked, no charges</li>
              <li>Full access to all features during the trial</li>
              <li>No credit card tricks—cancel means cancel</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">30-Day Money-Back Guarantee</h2>
            <p className="text-white/80 leading-relaxed">
              If you're not satisfied within the{' '}
              <strong className="text-[#C7FF4D]">first 30 days</strong> after your trial ends,
              contact us for a full refund.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>Full refund of your payment—no partial refunds, the whole thing</li>
              <li>No justification required (but feedback helps us improve)</li>
              <li>Processed within 5 business days</li>
              <li>Refunded to your original payment method</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">When You Cancel</h2>
            <p className="text-white/80 leading-relaxed mb-4">
              Canceling is easy and has predictable outcomes:
            </p>

            <div className="bg-white/5 border border-white/10 rounded-xl p-6 space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-2xl">📅</span>
                <div>
                  <h3 className="font-semibold text-white">Your subscription stays active</h3>
                  <p className="text-white/60 text-sm">
                    Protection continues until the end of your current billing period
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">💳</span>
                <div>
                  <h3 className="font-semibold text-white">No more charges</h3>
                  <p className="text-white/60 text-sm">
                    You will NOT be billed again after cancellation. Ever.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-2xl">🔄</span>
                <div>
                  <h3 className="font-semibold text-white">You can come back</h3>
                  <p className="text-white/60 text-sm">
                    Reactivate anytime—your devices and settings are saved for 30 days
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">After 30 Days</h2>
            <p className="text-white/80 leading-relaxed">
              Subscriptions are non-refundable after the first 30 days. However:
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>You can cancel anytime to prevent future charges</li>
              <li>
                If you experience technical issues we can't resolve, contact us—we'll work something
                out
              </li>
              <li>We're reasonable people. If something went wrong, just talk to us.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">How to Request a Refund</h2>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <p className="text-white/80 mb-4">Send an email to:</p>
              <a
                href="mailto:support@nemyo.uk?subject=Refund%20Request"
                className="text-xl font-semibold text-[#C7FF4D] hover:underline"
              >
                support@nemyo.uk
              </a>
              <p className="text-white/60 mt-4">Include:</p>
              <ul className="list-disc list-inside text-white/70 space-y-1 mt-2">
                <li>Subject line: "Refund Request"</li>
                <li>Your account email address</li>
                <li>Reason (optional, but helps us improve)</li>
              </ul>
              <p className="text-white/60 mt-4 text-sm">
                We'll respond within 24 hours and process your refund within 5 business days.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">
              Subscriptions Through App Stores
            </h2>
            <p className="text-white/80 leading-relaxed">
              If you subscribed through <strong>Google Play</strong> or the{' '}
              <strong>Apple App Store</strong>, refunds are handled by those platforms according to
              their policies.
            </p>
            <ul className="list-disc list-inside text-white/70 space-y-2 mt-4">
              <li>
                <strong className="text-white">Google Play:</strong>{' '}
                <a
                  href="https://support.google.com/googleplay/answer/2479637"
                  className="text-[#C7FF4D] hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Request a refund
                </a>
              </li>
              <li>
                <strong className="text-white">Apple App Store:</strong>{' '}
                <a
                  href="https://support.apple.com/en-us/HT204084"
                  className="text-[#C7FF4D] hover:underline"
                  target="_blank"
                  rel="noopener"
                >
                  Request a refund
                </a>
              </li>
            </ul>
            <p className="text-white/60 mt-4">
              We're happy to help you navigate the process—just email us.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">Questions?</h2>
            <p className="text-white/80 leading-relaxed">
              We're here to help. If you have any questions about refunds or billing, don't hesitate
              to reach out.
            </p>
            <ul className="list-none text-white/70 space-y-2 mt-4">
              <li>
                Email:{' '}
                <a href="mailto:support@nemyo.uk" className="text-[#C7FF4D] hover:underline">
                  support@nemyo.uk
                </a>
              </li>
            </ul>
          </section>

          <section className="border-t border-white/10 pt-8 mt-12">
            <p className="text-white/40 text-sm">
              Nemyo is operated by PLATYPESA S.R.L.
              <br />
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
              <Link href="/privacy" className="hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-white transition">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-white">
                Refund Policy
              </Link>
              <a href="mailto:support@nemyo.uk" className="hover:text-white transition">
                Support
              </a>
            </div>

            <p className="text-sm text-white/40">© 2026 PLATYPESA S.R.L. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
