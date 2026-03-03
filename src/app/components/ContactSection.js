import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import GradientBlob from "./GradientBlob";

const ContactSection = () => {
    const { ref, isVisible } = useAnimateOnScroll();
    const [focused, setFocused] = useState("");

    const contactItems = [
        {
            icon: Phone,
            label: "Phone",
            value: "8825820268",
            href: "tel:8825820268",
        },
        {
            icon: Mail,
            label: "Email",
            value: "dreamtechstudioofficial@gmail.com",
            href: "mailto:dreamtechstudioofficial@gmail.com",
        },
        {
            icon: MapPin,
            label: "Location",
            value: "India",
            href: null,
        },
    ];

    return (
        <section id="contact" ref={ref} className="contact-section">
            <GradientBlob className="contact-blob-1" delay={2} />
            <GradientBlob className="contact-blob-2" delay={2} />



            <div className="contact-container">
                <div className="contact-grid">

                    {/* LEFT SIDE */}
                    <div className={`contact-left ${isVisible ? "fade-left" : ""}`}>
                        <div className="contact-badge">Contact</div>
                        <h2>Get in<br />Touch!</h2>
                        <p className="contact-desc">
                            Are you a company or brand seeking creative services? Let’s
                            connect and build something impactful together.
                        </p>

                        <div className="contact-info">
                            {contactItems.map((item, i) => {
                                const Icon = item.icon;

                                return (
                                    <div
                                        key={i}
                                        className="contact-card"
                                        style={{ animationDelay: `${i * 0.1}s` }}
                                    >
                                        <div className="contact-icon">
                                            <Icon size={18} />
                                        </div>

                                        <div className="contact-details">
                                            <span className="contact-label">{item.label}</span>
                                            {item.href ? (
                                                <a href={item.href}>{item.value}</a>
                                            ) : (
                                                <span>{item.value}</span>
                                            )}
                                        </div>

                                        {item.href && (
                                            <ArrowUpRight size={16} className="contact-arrow" />
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* RIGHT SIDE */}
                    <div className={`contact-form-wrapper ${isVisible ? "fade-right" : ""}`}>
                        <div className="contact-form">
                            <h3>Send us a message</h3>
                            <p>Fill in your details and we will get back to you shortly.</p>

                            <form>
                                <div className="form-row">
                                    <div className="form-group">
                                        <label className={focused === "first" ? "active" : ""}>
                                            First Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="John"
                                            onFocus={() => setFocused("first")}
                                            onBlur={() => setFocused("")}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className={focused === "last" ? "active" : ""}>
                                            Last Name
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            onFocus={() => setFocused("last")}
                                            onBlur={() => setFocused("")}
                                        />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label className={focused === "email" ? "active" : ""}>
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        onFocus={() => setFocused("email")}
                                        onBlur={() => setFocused("")}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className={focused === "org" ? "active" : ""}>
                                        Organization
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your company"
                                        onFocus={() => setFocused("org")}
                                        onBlur={() => setFocused("")}
                                    />
                                </div>

                                <div className="form-group">
                                    <label className={focused === "message" ? "active" : ""}>
                                        Message
                                    </label>
                                    <textarea
                                        rows="4"
                                        placeholder="Tell us about your project..."
                                        onFocus={() => setFocused("message")}
                                        onBlur={() => setFocused("")}
                                    />
                                </div>

                                <button type="submit" className="contact-button">
                                    Send Message
                                    <ArrowUpRight size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection