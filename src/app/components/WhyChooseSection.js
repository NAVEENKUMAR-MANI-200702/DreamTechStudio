import React, { useEffect, useRef, useState } from "react";
import {
  Award,
  Film,
  Network,
  Lightbulb,
  Layers,
  TrendingUp,
  Sparkles,
  ShieldCheck,
  BadgeDollarSign,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Proven Expertise",
    desc: "5+ years in digital marketing & creative solutions",
  },
  
  {
    icon: Network,
    title: "Strong Network",
    desc: "1000+ influencers, 700+ Insta pages & 100+ Telegram groups",
  },
  {
    icon: Lightbulb,
    title: "Creative + Data-Driven",
    desc: "Blending viral trends with smart strategies",
  },
  {
    icon: Layers,
    title: "End-to-End Services",
    desc: "From branding to promotions under one roof",
  },
  {
    icon: TrendingUp,
    title: "Result-Oriented",
    desc: "Campaigns designed to drive measurable growth",
  },
  {
    icon: Sparkles,
    title: "Unique Ideas",
    desc: "We turn brands into stories and campaigns into trends",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Brands",
    desc: "Brands & Production Houses trust us for impactful promotions",
  },
  {
    icon: BadgeDollarSign,
    title: "Cost-Effective",
    desc: "High-quality campaigns at budget-friendly pricing",
  },
  {
    icon: Film,
    title: "100+ Campaigns",
    desc: "Movie Promotions & 60+ Brand Campaigns successfully executed",
  },
];


const WhyChooseSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="why-section">
      <div className="why-glow" />

      <div className="why-container">
        <div className="why-header">
          <div className={`why-title ${isVisible ? "fade-left" : ""}`}>
            <div className="why-badge">Our Advantage</div>
            <h2>Why Choose DTS?</h2>
          </div>

          <p className={`why-subtext ${isVisible ? "fade-right" : ""}`}>
            We combine creativity with data to build campaigns that deliver
            real, measurable results.
          </p>
        </div>

        <div className="why-grid">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <div
                key={i}
                className={`why-card ${isVisible ? "fade-up" : ""}`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className="why-card-inner">
                  <div className="why-icon">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3>{reason.title}</h3>
                    <p>{reason.desc}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseSection