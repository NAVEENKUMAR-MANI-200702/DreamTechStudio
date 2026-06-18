import React from 'react';
import { useState, useEffect } from "react";
import { X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Clients", href: "#clients" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navLinks.map((l) =>
        l.href.replace("#", "")
      );

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <nav className="nav-container">
        <a href="#" className="logo">
          <span className="header-logo-small">Dream</span>
          <span className="header-logo-main">TECH</span>
          <span className="header-logo-small">Studio</span>
        </a>

        <div className="nav-links">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            return (
              <a
                key={link.label}
                href={link.href}
                className={`nav-link ${
                  activeSection === sectionId ? "active" : ""
                }`}
              >
                {link.label}
              </a>
            );
          })}
          <a href="#contact" className="contact-btn">
            Get in Touch
          </a>
        </div>

        <button
          className={`hamburger ${isOpen ? "open" : ""}`}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="hamburger-icon" aria-hidden="true" />
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </button>
      </nav>

      <div className={`mobile-menu ${isOpen ? "show" : ""}`}>
        {navLinks.map((link, i) => (
          <a
            key={link.label}
            href={link.href}
            style={{
              transitionDelay: isOpen ? `${i * 80}ms` : "0ms",
            }}
            onClick={() => setIsOpen(false)}
          >
            {link.label}
          </a>
        ))}

        <a
          href="#contact"
          className="mobile-contact"
          onClick={() => setIsOpen(false)}
        >
          Get in Touch
        </a>
      </div>
    </header>
  );
};

export default Navbar;
