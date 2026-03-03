import React, { useEffect, useRef, useState } from "react";
import {
    Smile,
    Users,
    Send,
    Play,
    Instagram,
    Megaphone,
    ArrowUpRight,
} from "lucide-react";
import GradientBlob from "./GradientBlob";

const services = [
    {
        number: "01",
        title: "Memes Marketing",
        desc: "Engaging meme-based promotions to connect with audiences in a fun and viral way.",
        icon: Smile,
    },
    {
        number: "02",
        title: "Influencer Marketing",
        desc: "Collaborations with 1000+ influencers to amplify brand reach and visibility.",
        icon: Users,
    },
    {
        number: "03",
        title: "Telegram Promotion",
        desc: "Promotions across 100+ Telegram channels for targeted audience engagement.",
        icon: Send,
    },
    {
        number: "04",
        title: "YouTube Promotion",
        desc: "Creative campaigns to boost visibility, reach, and engagement on YouTube.",
        icon: Play,
    },
    {
        number: "05",
        title: "Instagram Marketing",
        desc: "Strategic content and campaigns across 700+ Instagram pages for maximum reach.",
        icon: Instagram,
    },
    {
        number: "06",
        title: "Brand Campaigns",
        desc: "End-to-end brand promotion from strategy to execution across all digital platforms.",
        icon: Megaphone,
    },
];

const ServicesSection = () => {
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
        <section id="services" ref={sectionRef} className="services-section">
            <div className="services-blob" />
            <GradientBlob className="blob-right-hero" delay={2} />


            <div className="services-container">
                <div className="services-header">
                    <div className={`services-title ${isVisible ? "fade-left" : ""}`}>
                        <div className="services-badge">What We Do</div>
                        <h2>Our Services</h2>
                    </div>

                    <p className={`services-subtext ${isVisible ? "fade-right" : ""}`}>
                        From meme marketing to full-scale brand campaigns, we offer
                        comprehensive digital marketing solutions.
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, i) => {
                        const Icon = service.icon;

                        return (
                            <div
                                key={i}
                                className={`service-card ${isVisible ? "fade-up" : ""}`}
                                style={{ animationDelay: `${i * 0.12}s` }}
                            >
                                <div className="service-card-inner">
                                    <div className="service-top">
                                        <div className="service-icon">
                                            <Icon size={20} />
                                        </div>
                                        <ArrowUpRight size={18} className="service-arrow" />
                                    </div>

                                    <span className="service-number">{service.number}</span>
                                    <h3>{service.title}</h3>
                                    <p>{service.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default ServicesSection