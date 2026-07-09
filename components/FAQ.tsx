"use client";
import { useState } from "react";
import styles from "../styles/FAQ.module.css";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const faqs = [
  {
    question: "What are the timings and dates for JANANI 2026?",
    answer: "JANANI 2026 is a multi-day global conference. Please refer to our Programme Schedule section for detailed daily timings, keynotes, and breakout sessions."
  },
  {
    question: "How do I register and download my event pass?",
    answer: "You can register through our secure portal on this website. Once your registration is confirmed, you will be able to download your PDF pass containing a unique QR code. Please keep this QR code handy as it is required for entry."
  },
  {
    question: "Is accommodation provided for international delegates?",
    answer: "We offer special rates with our partner hotels, including Le Meridien Kochi. However, delegates are responsible for booking their own accommodation. Please check the 'Accommodation' link in the footer for partner discounts."
  },
  {
    question: "What is the primary focus of the JANANI 2026 conference?",
    answer: "JANANI 2026 focuses on honoring mothers, empowering women leaders, and building nations through female entrepreneurship, healthcare innovations, and educational reform across India and globally."
  },
  {
    question: "Can I transfer my registration pass to someone else?",
    answer: "Passes are non-transferable as they are linked to your specific QR code and identification. If you are unable to attend, please contact our support team regarding cancellation policies."
  },
  {
    question: "How does the QR code entry system work?",
    answer: "Your downloaded PDF pass contains a secure QR code. Upon arrival at the venue, our staff will scan this code to verify your registration in real-time. Do not share your QR code online to prevent unauthorized use."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection} id="faqs">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common queries about JANANI 2026.</p>
        </div>
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}
              onClick={() => toggleFAQ(index)}
            >
              <div className={styles.faqQuestion}>
                <h3>{faq.question}</h3>
                {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
              </div>
              <div className={styles.faqAnswer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
