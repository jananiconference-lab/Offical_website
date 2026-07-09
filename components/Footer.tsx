"use client";
import styles from "../styles/Footer.module.css";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTwitter,
} from "react-icons/fa";

import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* LEFT */}
        <div className={styles.brand}>
          <h2 className={styles.logo}>
            Janani
            <span>2026</span>
          </h2>

          <p className={styles.tagline}>
            Honouring Mothers.
            <br />
            Empowering Women.
            <br />
            Building Nations.
          </p>

          <div className={styles.socials}>
            <a href="https://www.facebook.com/share/1Fyh8ZvZpp/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">
              <FaFacebookF />
            </a>

            <a href="https://www.instagram.com/myjanani_?utm_source=qr" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>

            <a href="https://www.linkedin.com/in/janani-conference-a1931b420" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn />
            </a>

            <a href="https://www.youtube.com/channel/UClv0XLvK3z6RmURF70sOjpw" target="_blank" rel="noopener noreferrer">
              <FaYoutube />
            </a>

            <a href="https://x.com/jananiconf" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}

        <div className={styles.column}>
          <h4>Quick Links</h4>

          <a href="#">About JANANI</a>
          <a href="#">Programme</a>
          <a href="#">Speakers</a>
          <a href="#">Awards</a>
          <a href="#">Partners</a>
          <a href="#">Media Gallery</a>
        </div>

        {/* HELP */}

        <div className={styles.column}>
          <h4>Help & Support</h4>

          <a href="#">Registration</a>
          <a href="#">Accommodation</a>
          <a href="#">Volunteer</a>
          <a href="#">Partners Enquiry</a>
          <a href="#">FAQs</a>
        </div>

        {/* CONTACT */}

        <div className={styles.column}>
          <h4>Contact Us</h4>

          <div className={styles.contactItem}>
            <FiPhone />
            <span>+91 85909 36816</span>
          </div>

          <div className={styles.contactItem}>
            <FiMail />
            <span>drjerry@myjanani.in</span>
          </div>

          <div className={styles.contactItem}>
            <FiMapPin />
            <span>
              Le Meridien ,
              <br />
              Kochi,
              <br />
              India
            </span>
          </div>
        </div>

        {/* ORGANISED */}

        <div className={styles.organised}>
          <h4>Organised By</h4>

          <h3>
            Dr. A.P.J. Abdul Kalam
          </h3>

          <p>International Foundation</p>
        </div>

      </div>

      {/* Bottom */}

      <div className={styles.bottom}>
        <p>© 2026 JANANI. All rights reserved.</p>

        <div className={styles.bottomLinks}>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/terms-of-use">Terms of Use</a>
        </div>
      </div>
    </footer>
  );
}