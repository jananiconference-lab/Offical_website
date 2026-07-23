import React from "react";

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Terms of Use</h1>
        <p className="text-gray-400 mb-8 text-sm">Last Updated: July 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing and using the official website of JANANI 2026 (the "Site"), you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. Event Registration and Ticketing</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Accuracy:</strong> You must provide accurate and complete information when registering for the event.</li>
              <li><strong>Non-Transferable:</strong> Tickets purchased for JANANI 2026 are non-transferable unless explicitly permitted by the organizers in writing.</li>
              <li><strong>Right of Admission:</strong> The organizers reserve the right of admission. We may refuse entry or ask attendees to leave the venue if they violate our Code of Conduct or pose a security risk, without refund.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Intellectual Property Rights</h2>
            <p>
              All content on this Site, including but not limited to text, graphics, logos, images, audio clips, digital downloads, and software, is the property of the JANANI Foundation or its content suppliers and is protected by Indian and international copyright laws. You may not reproduce, duplicate, copy, sell, or otherwise exploit the content without express written consent.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Code of Conduct</h2>
            <p>
              Attendees and users of this Site agree to interact respectfully. Harassment, discrimination, use of abusive language, or any disruption of the event or website functionality will result in immediate termination of access and possible legal action.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Disclaimer and Limitation of Liability</h2>
            <p>
              The materials on the Site are provided on an 'as is' basis. JANANI 2026 makes no warranties, expressed or implied, regarding the accuracy or reliability of the site's content. In no event shall the JANANI Foundation or its partners be liable for any consequential damages, lost profits, or business interruption arising out of the use or inability to use the Site or attendance at the event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Changes to the Event Schedule</h2>
            <p>
              While we strive to ensure the event proceeds as outlined on the Site, the schedule, speakers, and venue are subject to change without prior notice due to unforeseen circumstances. We will make reasonable efforts to communicate significant changes via the website or registered email.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Governing Law and Jurisdiction</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or relating to these terms, the Site, or the event shall be subject to the exclusive jurisdiction of the courts located in Ernakulam, Kerala.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Use, please contact us at contact@myjanani.in.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
