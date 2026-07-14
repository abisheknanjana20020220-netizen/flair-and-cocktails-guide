export const metadata = {
  title: 'Privacy Policy - Abishek Flair Bartender Guide',
  description: 'Privacy Policy',
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Privacy Policy</h1>
        
        <div className="text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Introduction</h2>
            <p>
              At Abishek Flair Bartender Guide, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Information We Collect</h2>
            <p>
              We may collect information about you in a variety of ways. The information we may collect on the Site includes:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Personal Data: name, email address, phone number</li>
              <li>Usage Data: pages visited, time spent, referring URL</li>
              <li>Device Information: browser type, IP address, operating system</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Use of Your Information</h2>
            <p>
              Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Deliver targeted advertising, coupons, newsletters, and promotional offers</li>
              <li>Email regarding your account or order confirmation</li>
              <li>Fulfill and manage purchases, orders, payments, and other transactions</li>
              <li>Generate a personal profile about you</li>
              <li>Increase the efficiency and operation of the Site</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Disclosure of Your Information</h2>
            <p>
              We may share information we have collected about you in certain circumstances:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>By Law or to Protect Rights</li>
              <li>Third-Party Service Providers</li>
              <li>Affiliates</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Security of Your Information</h2>
            <p>
              We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that no security measures are perfect or impenetrable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Contact Us</h2>
            <p>
              If you have questions or comments about this Privacy Policy, please contact us at:
            </p>
            <p className="mt-2 text-secondary">
              Email: privacy@abishekflair.com
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
