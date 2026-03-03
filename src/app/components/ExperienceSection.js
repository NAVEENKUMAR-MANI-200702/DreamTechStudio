import React, { useEffect, useRef, useState } from "react";
import { Briefcase, Film, Award, Users } from "lucide-react";

function AnimatedCounter({ target, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          const timeout = setTimeout(() => {
            const duration = 2000;
            const startTime = performance.now();

            function animate(currentTime) {
              const elapsed = currentTime - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easeOut = 1 - Math.pow(1 - progress, 4);

              setCount(Math.floor(easeOut * target));

              if (progress < 1) requestAnimationFrame(animate);
            }

            requestAnimationFrame(animate);
          }, delay);

          return () => clearTimeout(timeout);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, delay]);

  return (
    <div ref={ref} className="exp-number">
      {count}
      {suffix}
    </div>
  );
}

const stats = [
  { number: 5, suffix: "+", label: "Years of Experience", icon: Briefcase },
  { number: 100, suffix: "+", label: "Movie Promotions", icon: Film },
  { number: 60, suffix: "+", label: "Brand Campaigns", icon: Award },
  { number: 1000, suffix: "+", label: "Influencer Network", icon: Users },
];

const ExperienceSection = () => {

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
    <section id="experience" ref={sectionRef} className="exp-section">
      <div className="exp-glow" />

      <div className="exp-container">
        <div className={`exp-header ${isVisible ? "fade-up" : ""}`}>
          <div className="exp-badge">Track Record</div>
          <h2>Our Experience</h2>
        </div>

        <div className="exp-grid">
          {stats.map((stat, i) => {
            const Icon = stat.icon;

            return (
              <div
                key={i}
                className={`exp-card ${isVisible ? "fade-up" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <div className="exp-icon">
                  <Icon size={20} />
                </div>

                <AnimatedCounter
                  target={stat.number}
                  suffix={stat.suffix}
                  delay={i * 200}
                />

                <div className="exp-divider" />

                <p>{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection