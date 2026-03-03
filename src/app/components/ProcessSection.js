import React from "react";
import {
    Search,
    Target,
    Palette,
    Rocket,
    MessageCircle,
    BarChart3,
    Zap,
} from "lucide-react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";


const steps = [
    { title: "Discover", desc: "Understand client goals, target audience, and challenges.", icon: Search },
    { title: "Strategize", desc: "Build a creative, data-driven marketing plan tailored to success.", icon: Target },
    { title: "Create", desc: "Design engaging content, campaigns, and digital assets.", icon: Palette },
    { title: "Promote", desc: "Execute campaigns across social media, influencers, and digital platforms.", icon: Rocket },
    { title: "Engage", desc: "Interact with audiences to build strong connections and communities.", icon: MessageCircle },
    { title: "Analyze", desc: "Track performance with real-time data and insights.", icon: BarChart3 },
    { title: "Optimize", desc: "Continuously improve campaigns for maximum ROI.", icon: Zap },
];


const ProcessSection = () => {
    const { ref, isVisible } = useAnimateOnScroll();

    return (
        <section id="process" ref={ref} className="process-section">
            <div className="process-container">
                <div className={`process-header ${isVisible ? "fade-up" : ""}`}>
                    <div className="process-badge">How We Work</div>
                    <h2>Our Process</h2>
                </div>

                <div className="timeline">
                    {steps.map((step, i) => {
                        const Icon = step.icon;
                        const isLeft = i % 2 === 0;

                        return (
                            <div
                                key={i}
                                className={`timeline-row ${isLeft ? "left" : "right"} ${isVisible ? "fade-in" : ""
                                    }`}
                                style={{ animationDelay: `${i * 0.15}s` }}
                            >
                                <div className="timeline-content">
                                    <div className="timeline-header">
                                        <div className="timeline-icon">
                                            <Icon size={18} />
                                        </div>

                                        <div className="timeline-step">
                                            <span className="step-label">STEP</span>
                                            <span className="step-number">
                                                {String(i + 1).padStart(2, "0")}
                                            </span>
                                        </div>
                                    </div>

                                    <h3 className="timeline-title">{step.title}</h3>
                                    <p className="timeline-desc">{step.desc}</p>
                                </div>
                            </div>
                        );
                    })}

                    <div className="timeline-line" />
                </div>
            </div>
        </section>
    );
}

export default ProcessSection