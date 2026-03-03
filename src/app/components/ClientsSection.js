import React, { useEffect, useRef, useState } from "react";

const clientsRow1 = [
  "SONY LIV",
  "Amazon",
  "Hotstar",
  "Flipkart",
  "Aha",
  "Redmi",
  "Zee5",
  "Netflix",
];

const clientsRow2 = [
  "Jio Cinema",
  "Samsung",
  "Spotify",
  "Snapdeal",
  "MX Player",
  "Vivo",
  "OnePlus",
  "Realme",
];

function MarqueeRow({ clients, reverse = false }) {
  const doubled = [...clients, ...clients];

  return (
    <div className="marquee-wrapper">
      <div className="marquee-fade-left" />
      <div className="marquee-fade-right" />

      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
      >
        {doubled.map((client, i) => (
          <div key={i} className="marquee-item">
            <div className="client-card">
              <span>{client}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


const ClientsSection = () => {
   const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="clients" ref={sectionRef} className="clients-section">
      <div className="clients-blob blob-left" />
      <div className="clients-blob blob-right" />

      <div className="clients-container">
        <div className={`clients-header ${isVisible ? "fade-up" : ""}`}>
          <div className="clients-badge">Trusted By</div>
          <h2>Our Clients</h2>
          <p>
            We have partnered with leading brands and production houses to
            deliver impactful digital campaigns.
          </p>
        </div>
      </div>

      <div className={`clients-marquee ${isVisible ? "fade-up" : ""}`}>
        <MarqueeRow clients={clientsRow1} />
        <MarqueeRow clients={clientsRow2} reverse />
      </div>
    </section>
  );
}

export default ClientsSection
