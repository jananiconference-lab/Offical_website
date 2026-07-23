"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/Navbar.module.css";

const navLinks = [
  { label: "Schedule", href: "/schedule" },
  { label: "Speakers", href: "/#speakers" },
  { label: "Tickets", href: "/#register" },
  { label: "Team", href: "/team" },
  { label: "Partners & Sponsors", href: "/sponsors" },
  { label: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Helper to determine if a link is active
  const isLinkActive = (href: string) => {
    // If it's the home page, only match exactly "/"
    if (href === "/") return pathname === "/";
    // If it's a hash link on the home page, we won't highlight it globally as "active" 
    // unless we implement scrollspy. For now, it prevents "About" from staying active.
    if (href.startsWith("/#")) return false; 
    return pathname === href;
  };

  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <Link href="/" className={styles.logo}>
          Janani
        </Link>

        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`${styles.navLink} ${
                isLinkActive(link.href) ? styles.active : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <button
          className={`${styles.menuButton} ${
            isOpen ? styles.menuOpen : ""
          }`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuOpen : ""
        }`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </header>
  );
}