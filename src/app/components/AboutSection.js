import React, { useEffect, useRef, useState } from "react";

const stats = [
  {
    number: "5+",
    label: "Years of Experience",
    desc: "Delivering creative digital marketing solutions since 2019",
  },
  {
    number: "100+",
    label: "Movie Promotions",
    desc: "Successfully executed campaigns for major film releases",
  },
  {
    number: "60+",
    label: "Brand Campaigns",
    desc: "Helping brands build strong digital presence",
  },
  {
    number: "1000+",
    label: "Influencer Network",
    desc: "A vast network of influencers across platforms",
  },
];

const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="about-section">
      <div className="about-blob" />

      <div className="about-container">
        <div className="about-grid">
          {/* LEFT CONTENT */}
          <div className={`about-left ${isVisible ? "fade-left" : ""}`}>
            <div className="about-badge">About Us</div>

            <h2>
              About <br />
              Company
            </h2>

            <p className="about-text">
              At Dream Tech Studio (DTS), we are a creative marketing company
              established in 2019. With over 5 years of expertise in digital
              marketing, we specialize in helping brands, startups, and
              production houses connect with their audience through innovative
              strategies and impactful campaigns.
            </p>

            <div className="about-divider">
              <div className="line" />
              <span>Est. 2019</span>
            </div>
          </div>

          {/* RIGHT STATS */}
          <div className="about-stats">
            {stats.map((stat, i) => (
              <div
                key={i}
                className={`about-card ${isVisible ? "fade-up" : ""}`}
                style={{ animationDelay: `${i * 0.15}s` }}
              >
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
                <p>{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
