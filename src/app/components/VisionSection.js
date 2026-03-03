import React, { useEffect, useRef, useState } from "react";
import { Eye, Target } from "lucide-react";
import GradientBlob from "./GradientBlob";

const VisionSection = () => {
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
    <section ref={sectionRef} className="vision-section">
      <div className="vision-blob vision-blob-1" />
      <div className="vision-blob vision-blob-2" />

      <div className="vision-container">
        <div className={`vision-header ${isVisible ? "fade-up" : ""}`}>
          <div className="vision-badge">Our Direction</div>
          <h2>Vision & Mission</h2>
        </div>

        <div className="vision-grid">
          <div
            className={`vision-card ${isVisible ? "fade-left" : ""}`}
          >
            <div className="vision-icon">
              <Eye size={24} />
            </div>
            <h3>Vision</h3>
            <p>
              To become a global leader in creative digital marketing, where
              innovation meets impact. We envision building a world where every
              brand, movie, or startup can connect with its audience through
              authentic, engaging, and result-driven digital experiences.
            </p>
          </div>

          <div
            className={`vision-card ${isVisible ? "fade-right" : ""}`}
          >
            <div className="vision-icon">
              <Target size={24} />
            </div>
            <h3>Mission</h3>
            <p>
              To turn brands into digital stories, campaigns into viral trends,
              and audiences into engaged communities — powered by creativity,
              technology, and influence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionSection