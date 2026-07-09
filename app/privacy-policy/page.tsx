import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Privacy Policy | JANANI 2026",
  description: "Privacy Policy for JANANI 2026 Registration and Event.",
};

export default function PrivacyPolicy() {
  return (
    <main style={{ background: "#08192d", color: "#d2d2d2", minHeight: "100vh" }}>
      <Navbar />
      <div style={{ maxWidth: "800px", margin: "140px auto 100px", padding: "0 20px" }}>
        <h1 style={{ color: "#c89b39", fontSize: "2.5rem", marginBottom: "30px", fontFamily: "'Playfair Display', serif" }}>
          Privacy Policy
        </h1>
        <p><strong>Last Updated: July 2026</strong></p>
        
        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>1. Introduction</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          Welcome to JANANI 2026. This Privacy Policy is published in compliance with the provisions of the Information Technology Act, 2000, and the Digital Personal Data Protection (DPDP) Act, 2023 of India. This policy explains how the Dr. A.P.J. Abdul Kalam International Foundation collects, uses, shares, and protects your personal information when you use our website and register for the JANANI 2026 event.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>2. Data Collection</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          When you register for a pass to attend JANANI 2026, we collect certain Personally Identifiable Information (PII) required to facilitate your participation. This includes:
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Full Name</li>
            <li>Email Address</li>
            <li>Phone Number</li>
            <li>Organization / Affiliation</li>
          </ul>
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>3. Use of Your Information</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          We use your data solely for the following purposes:
          <ul style={{ paddingLeft: "20px", marginTop: "10px" }}>
            <li>Generating your digital event pass and unique QR code.</li>
            <li>Verifying your identity at the event venue.</li>
            <li>Sending you important updates and schedules regarding the conference.</li>
            <li>Tracking whether your pass has been downloaded to assist with technical support.</li>
          </ul>
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>4. Data Protection and Security</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          We implement stringent security measures to prevent unauthorized access, alteration, disclosure, or destruction of your personal data. Your data is stored securely in our databases (hosted on Supabase) and is accessed only by authorized personnel for verification purposes via our secure scanning application.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>5. Your Rights</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          Under the DPDP Act, you have the right to request access to, correction of, or deletion of your personal data. If you wish to exercise these rights or withdraw your consent for data processing, please contact our grievance officer.
        </p>

        <h2 style={{ color: "#f7f4ef", marginTop: "40px", marginBottom: "15px" }}>6. Contact Us</h2>
        <p style={{ marginBottom: "20px", lineHeight: "1.8" }}>
          If you have any questions about this Privacy Policy, please contact us at: <br/>
          <strong>Email:</strong> drjerry@myjanani.in <br/>
          <strong>Phone:</strong> +91 85909 36816
        </p>
      </div>
      <Footer />
    </main>
  );
}
