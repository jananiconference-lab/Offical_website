"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Programme", href: "#programme" },
  { label: "Speakers", href: "#speakers" },
  { label: "Awards", href: "#awards" },
  { label: "Partners", href: "#partners" },
  { label: "Media", href: "#media" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`${styles.navbar} ${
          scrolled ? styles.scrolled : ""
        }`}
      >
        <div className={styles.container}>
          {/* Logo */}

          <Link href="/" className={styles.logo}>
            <div className={styles.logoImage}>
              <Image
                src="/images/janani-logo.png"
                alt="Janani Logo"
                width={58}
                height={58}
                priority
              />
            </div>

            <div className={styles.logoText}>
              <h2>JANANI 2026</h2>

              <span>
                by APJ Abdul Kalam
                <br />
                International Foundation
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}

          <nav className={styles.desktopNav}>
            {navItems.map((item) => (
              <Link key={item.label} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right Side */}

          <div className={styles.rightSection}>
            <Link
              href="/register"
              className={styles.registerBtn}
            >
              Register Now
            </Link>

            <button
              className={`${styles.hamburger} ${
                menuOpen ? styles.active : ""
              }`}
              aria-label="Toggle Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}

      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles.showMenu : ""
        }`}
      >
        <div className={styles.mobileHeader}>
          <div className={styles.mobileLogo}>
            <Image
              src="/images/janani-logo.png"
              alt="Janani Logo"
              width={50}
              height={50}
            />

            <div>
              <h3>JANANI 2026</h3>

              <p>International Foundation</p>
            </div>
          </div>

          <button
            className={styles.closeBtn}
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>

        <div className={styles.mobileLinks}>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/register"
            className={styles.mobileRegister}
            onClick={() => setMenuOpen(false)}
          >
            Register Now
          </Link>
        </div>
      </div>
    </>
  );
}