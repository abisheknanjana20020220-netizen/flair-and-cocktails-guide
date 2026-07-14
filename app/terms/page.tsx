export const metadata = {
  title: 'Terms & Conditions - Abishek Flair Bartender Guide',
  description: 'Terms & Conditions',
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1 className="text-4xl font-bold gradient-text mb-8">Terms & Conditions</h1>
        
        <div className="text-gray-400 space-y-6">
          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Agreement to Terms</h2>
            <p>
              These Terms and Conditions constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Abishek Flair Bartender Guide ("Company", "we", "us", or "our"), concerning your access to and use of the flair-and-cocktails-guide.com website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">User Responsibilities</h2>
            <p>
              By accessing and using this Website, you accept full responsibility and risk for your use of this Website. You agree to comply with all laws, rules, and regulations applicable to your use of the Website. Without limiting the foregoing, you agree:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-2">
              <li>Not to use the Website for any illegal or unauthorized purpose</li>
              <li>Not to interfere with or disrupt the integrity or performance of the Website</li>
              <li>Not to attempt to gain unauthorized access to the Website</li>
              <li>To comply with all usage policies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Intellectual Property Rights</h2>
            <p>
              Unless otherwise stated, the Company and/or its licensors own the intellectual property rights for all material on this Website. All intellectual property rights are reserved. You may view and print pages from the Website for your personal use, subject to restrictions set in these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">User-Generated Content</h2>
            <p>
              In these Website Standard Terms and Conditions, "User-Generated Content" shall mean any audio, video, text, images, or other material you choose to display on the Website. By displaying User-Generated Content, you grant the Company a non-exclusive, worldwide, irrevocable license to use, reproduce, adapt, publish, and distribute it in any media.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Limitation of Liability</h2>
            <p>
              In no event shall the Company or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on the Website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Modifications to Terms</h2>
            <p>
              The Company may revise these Terms and Conditions for the Website at any time without notice. By using this Website, you are agreeing to be bound by the then current version of these Terms and Conditions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-accent mb-3">Governing Law</h2>
            <p>
              These Terms and Conditions are governed by and construed in accordance with the laws of the jurisdiction in which the Company is located, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
