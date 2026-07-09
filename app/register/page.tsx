"use client";

import { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Register.module.css";
import { Mail, Phone } from "lucide-react";
import { supabase } from "../../lib/supabaseClient";
import { QRCodeSVG } from "qrcode.react";
import jsPDF from "jspdf";

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [successData, setSuccessData] = useState<{ id: string; name: string } | null>(null);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const { data, error: sbError } = await supabase
        .from("registrations")
        .insert([
          {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            category: formData.category,
            downloaded: false,
          },
        ])
        .select()
        .single();

      if (sbError) throw sbError;
      
      setSuccessData({ id: data.id, name: data.name });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Failed to register. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const downloadPass = async () => {
    if (!successData) return;

    try {
      // 1. Generate PDF
      const doc = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: [100, 150], // custom small ticket format
      });

      // Background
      doc.setFillColor(8, 25, 45); // Dark blue background #08192d
      doc.rect(0, 0, 100, 150, "F");
      
      // Gold accents
      doc.setFillColor(216, 165, 72); // #D8A548
      doc.rect(0, 0, 100, 15, "F");
      doc.rect(0, 140, 100, 10, "F");

      // Text colors and fonts
      doc.setTextColor(255, 255, 255);
      
      doc.setFontSize(18);
      doc.text("JANANI 2026", 50, 30, { align: "center" });

      doc.setFontSize(10);
      doc.setTextColor(216, 165, 72);
      doc.text("EVENT PASS", 50, 40, { align: "center" });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text(successData.name, 50, 55, { align: "center" });

      doc.setFontSize(10);
      doc.text("Date: To be announced", 50, 65, { align: "center" });

      // Add QR Code
      const qrElement = document.getElementById("qr-code-svg") as any;
      if (qrElement) {
        const svgData = new XMLSerializer().serializeToString(qrElement);
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");
        const img = new Image();
        
        await new Promise((resolve, reject) => {
          img.onload = () => {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx?.drawImage(img, 0, 0);
            const imgData = canvas.toDataURL("image/png");
            doc.addImage(imgData, "PNG", 25, 75, 50, 50);
            resolve(true);
          };
          img.onerror = reject;
          img.src = "data:image/svg+xml;base64," + btoa(unescape(encodeURIComponent(svgData)));
        });
      }

      doc.setFontSize(8);
      doc.setTextColor(150, 150, 150);
      doc.text("Please present this QR code at the entrance.", 50, 135, { align: "center" });

      doc.save(`JANANI_2026_Pass_${successData.name.replace(/\s+/g, "_")}.pdf`);

      // 2. Update Supabase
      await supabase
        .from("registrations")
        .update({ downloaded: true })
        .eq("id", successData.id);

    } catch (err) {
      console.error("Error generating PDF:", err);
      alert("There was an error generating your pass. Please try again.");
    }
  };

  return (
    <main>
      <Navbar />
      <section className={styles.registerSection}>
        <div className={styles.container}>
          
          {!successData ? (
            <>
              <div className={styles.left}>
                <h1 className={styles.title}>Join JANANI 2026</h1>
                <p className={styles.description}>
                  Be part of a transformative movement shaping the future of India. Register your interest below and secure your pass.
                </p>
                
                <div className={styles.contactInfo}>
                  <h3>Need Help? Contact Us</h3>
                  <div className={styles.contactItem}>
                    <Mail size={18} color="#D8A548" />
                    <a href="mailto:drjerry@myjanani.in">drjerry@myjanani.in</a>
                  </div>
                  <div className={styles.contactItem}>
                    <Phone size={18} color="#D8A548" />
                    <a href="tel:+918590936816">+91 85909 36816</a>
                  </div>
                </div>
              </div>

              <form className={styles.form} onSubmit={handleSubmit}>
                {error && <div style={{ color: "red", marginBottom: "15px" }}>{error}</div>}

                <div className={styles.formGroup}>
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required 
                    placeholder="+91 9876543210" 
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="category">Registration Category</label>
                  <select 
                    id="category" 
                    name="category" 
                    required 
                    value={formData.category}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Select an option</option>
                    <option value="delegate">General Delegate</option>
                    <option value="student">Student / Academia</option>
                    <option value="sponsor">Sponsor / Partner</option>
                    <option value="speaker">Speaker</option>
                  </select>
                </div>

                <button type="submit" className={styles.submitBtn} disabled={loading}>
                  {loading ? "Processing..." : "Submit Registration"}
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: "center", width: "100%", padding: "40px" }}>
              <h1 className={styles.title} style={{ color: "#28a745" }}>Registration Successful!</h1>
              <p className={styles.description} style={{ margin: "20px auto" }}>
                Welcome to JANANI 2026, {successData.name}. 
              </p>
              
              <div style={{ background: "rgba(216, 165, 72, 0.1)", padding: "20px", borderRadius: "10px", margin: "30px auto", maxWidth: "500px", border: "1px solid #D8A548" }}>
                <h3 style={{ color: "#D8A548", marginBottom: "15px" }}>⚠️ IMPORTANT</h3>
                <p>You MUST download your Event Pass now. It contains your unique QR code required for entry.</p>
                
                {/* Hidden QR Code for PDF generation */}
                <div style={{ display: "none" }}>
                  <QRCodeSVG id="qr-code-svg" value={successData.id} size={200} level="H" />
                </div>
                
                <button 
                  onClick={downloadPass}
                  style={{
                    background: "#D8A548",
                    color: "#08192d",
                    padding: "15px 30px",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                    marginTop: "20px"
                  }}
                >
                  Download PDF Pass
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </main>
  );
}
