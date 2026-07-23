import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black pt-32 pb-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto bg-[#111] p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-gray-400 mb-8 text-sm">Last Updated: July 2026</p>

        <div className="space-y-8 text-gray-300 leading-relaxed">
          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
            <p>
              Welcome to the official website of JANANI 2026 ("we," "our," or "us"). We are committed to protecting your personal data and respecting your privacy. This Privacy Policy outlines how we collect, process, use, and safeguard your personal data in accordance with the <strong>Digital Personal Data Protection (DPDP) Act, 2023</strong> of India.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">2. The Personal Data We Collect</h2>
            <p className="mb-2">We may collect and process the following categories of personal data (collectively, "Personal Data"):</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Identity Data:</strong> First name, last name, title, and institutional affiliation.</li>
              <li><strong>Contact Data:</strong> Email address, mobile number, and billing/mailing address.</li>
              <li><strong>Transaction Data:</strong> Details about payments to and from you, including ticket purchases (processed securely via third-party payment gateways; we do not store full credit card details).</li>
              <li><strong>Technical Data:</strong> IP address, browser type and version, time zone setting, and operating system used to access our website.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">3. Purpose and Lawful Basis for Processing</h2>
            <p className="mb-2">We will only use your Personal Data for lawful purposes, primarily based on your explicit consent, to:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>Process your event registration and issue event tickets.</li>
              <li>Communicate important updates regarding the JANANI 2026 schedule, speakers, or venue changes.</li>
              <li>Respond to your queries or support requests.</li>
              <li>Comply with legal obligations under Indian law.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">4. Your Consent</h2>
            <p>
              By providing your Personal Data on our website, you give clear, affirmative consent for us to process your data for the specified purposes. You have the right to withdraw your consent at any time. However, withdrawing consent may affect our ability to provide you with event access or updates.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">5. Rights of the Data Principal</h2>
            <p className="mb-2">Under the DPDP Act, you (the Data Principal) have the following rights:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Right to Access:</strong> You can request a summary of the personal data we process about you.</li>
              <li><strong>Right to Correction & Erasure:</strong> You can request the correction of inaccurate data or the erasure of your data when it is no longer necessary for the purpose it was collected.</li>
              <li><strong>Right of Grievance Redressal:</strong> You have the right to register a grievance with us regarding data processing.</li>
              <li><strong>Right to Nominate:</strong> You may nominate an individual to exercise your rights in the event of death or incapacity.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">6. Data Security and Retention</h2>
            <p>
              We implement reasonable security practices to protect your Personal Data against unauthorized access, loss, or misuse. We will only retain your data for as long as necessary to fulfill the purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white mb-4">7. Grievance Officer</h2>
            <p>
              If you have any questions, concerns, or wish to exercise your rights under the DPDP Act, please contact our Grievance Officer at:
            </p>
            <address className="mt-4 not-italic bg-white/5 p-4 rounded-lg border border-white/10">
              <strong>Email:</strong> privacy@myjanani.in<br />
              <strong>Address:</strong> JANANI Foundation, St. Teresa's College (Autonomous), Ernakulam, Kerala, India.
            </address>
          </section>
        </div>
      </div>
    </main>
  );
}
