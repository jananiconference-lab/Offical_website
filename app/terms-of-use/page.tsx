import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Terms of Use | JANANI 2026",
  description: "Terms and Conditions for JANANI 2026.",
};

export default function TermsOfUse() {
  return (
    <main style={{ background: "#08192d", color: "#d2d2d2", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "140px auto 100px", padding: "0 20px" }}>
        <h1 style={{ color: "#c89b39", fontSize: "2.5rem", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
          Terms of Use
        </h1>
        <p><strong>Last Updated: July 2026</strong></p>
        
        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>1. Acceptance of Terms</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          By accessing this website and registering for the JANANI 2026 event, you agree to comply with and be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our website or services.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>2. Event Registration and Passes</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          Registration is required to attend JANANI 2026. Upon successful registration, you will receive a digital pass with a unique QR code. <br/><br/>
          <strong>Rules regarding passes:</strong>
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Passes are strictly non-transferable.</li>
            <li>You must present your downloaded PDF pass (printed or on a mobile device) along with a valid government-issued ID at the venue.</li>
            <li>Do not share your QR code publicly to prevent fraudulent entry.</li>
          </ul>
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>3. Code of Conduct</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          JANANI 2026 is an inclusive global platform. Attendees are expected to behave professionally and respectfully towards all speakers, delegates, and staff. We reserve the right to revoke the pass of any individual who engages in disruptive, harassing, or unlawful behavior at the event without refund (if applicable).
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>4. Intellectual Property</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          All content on this website, including texts, graphics, logos, and images, is the property of the Dr. A.P.J. Abdul Kalam International Foundation and is protected by Indian copyright laws. Unauthorized reproduction is strictly prohibited.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>5. Limitation of Liability</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          The organizers shall not be held liable for any personal injury, property damage, or other loss suffered during the event, to the maximum extent permitted by applicable law in India.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>6. Governing Law</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          These terms are governed by and construed in accordance with the laws of India. Any disputes relating to these terms or the event shall be subject to the exclusive jurisdiction of the courts in Kochi, Kerala.
        </p>
      </div>
      <Footer />
    </main>
  );
}
