import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import styles from "../../styles/Register.module.css";
import { Mail, Phone } from "lucide-react";

export default function Register() {
  return (
    <main>
      <Navbar />
      <section className={styles.registerSection}>
        <div className={styles.container}>
          <div className={styles.left}>
            <h1 className={styles.title}>Join JANANI 2026</h1>
            <p className={styles.description}>
              Be part of a transformative movement shaping the future of India. Register your interest below and our team will get back to you with detailed information.
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

          {/* Since Netlify natively supports forms, adding data-netlify="true" makes it work out of the box when deployed */}
          <form className={styles.form} name="janani-registration" method="POST" data-netlify="true">
            {/* Required hidden input for Netlify forms */}
            <input type="hidden" name="form-name" value="janani-registration" />

            <div className={styles.formGroup}>
              <label htmlFor="name">Full Name</label>
              <input type="text" id="name" name="name" required placeholder="John Doe" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" name="email" required placeholder="john@example.com" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" required placeholder="+91 00000 00000" />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="category">Registration Category</label>
              <select id="category" name="category" required>
                <option value="" disabled selected>Select an option</option>
                <option value="delegate">General Delegate</option>
                <option value="student">Student / Academia</option>
                <option value="sponsor">Sponsor / Partner</option>
                <option value="speaker">Speaker</option>
              </select>
            </div>

            <button type="submit" className={styles.submitBtn}>
              Submit Registration
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}
