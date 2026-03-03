import React from 'react'
import { useEffect, useState } from "react";
import GradientBlob from "./GradientBlob";

const HeroSection = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="hero-section">
      <div className="top-glow" />
      <GradientBlob className="blob-left" delay={0} />
      <GradientBlob className="blob-right-hero" delay={2} />

      <div className="hero-grid" />

      <div className="hero-content">
        <div className={`badge ${loaded ? "show" : ""}`}>
          <span className="dot" />
          <span className="badge-text">
           Creative marketing for the Digital World
          </span>
        </div>

        <h1 className={`hero-title ${loaded ? "show" : ""}`}>
          Dream Tech <br />
          <span className="studio">
            Studio
            <svg
              className="underline"
              viewBox="0 0 300 12"
              fill="none"
            >
              <path
                d="M2 8 C60 2, 120 2, 150 6 S240 10, 298 4"
                stroke="#c8956c"
                strokeWidth="2"
                strokeLinecap="round"
                className={loaded ? "draw-line" : ""}
              />
            </svg>
          </span>
        </h1>

        <p className={`hero-text ${loaded ? "show" : ""}`}>
          Turning brands into digital stories, campaigns into viral trends,
          and audiences into engaged communities — powered by creativity,
          technology, and influence.
        </p>

        <div className={`hero-buttons ${loaded ? "show" : ""}`}>
          <a href="#about" className="btn-primary">
            Explore Our Work ↓
          </a>

          <a href="#services" className="btn-secondary">
            ▶ Our Services
          </a>
        </div>
      </div>

      {/* <a href="#about" className="scroll-indicator">
        <span>Scroll</span>
        <div className="mouse">
          <div className="wheel" />
        </div>
      </a> */}
    </section>
  );
};

export default HeroSection;