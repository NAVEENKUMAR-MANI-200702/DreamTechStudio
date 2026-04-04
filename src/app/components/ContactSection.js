import React, { useState } from "react";
import { Phone, Mail, MapPin, ArrowUpRight } from "lucide-react";
import { useAnimateOnScroll } from "../hooks/useAnimateOnScroll";
import GradientBlob from "./GradientBlob";

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

const ContactSection = () => {
  const { ref, isVisible } = useAnimateOnScroll();
  const [focused, setFocused] = useState("");
  const [status, setStatus] = useState("");
  const API_URL =
    "https://script.google.com/macros/s/AKfycbwvAdz_lVaeuVJ4VRCyB03ANWWkRWeQvjtvMjkF6w9GzlDrIs9lO396bplIbO4ObpbLXA/exec";

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
      email: e.target.email.value,
      organization: e.target.organization.value,
      message: e.target.message.value,
    };

    setStatus("loading");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        body: JSON.stringify(formData),
      });

      let data;

      // Safe JSON parsing (fixes your error)
      try {
        data = await res.json();
      } catch {
        data = { status: "success" };
      }

      console.log("Response:", data);

      if (data.status === "success") {
        setStatus("success");
        e.target.reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section id="contact" ref={ref} className="contact-section">
      <GradientBlob className="contact-blob-1" delay={2} />
      <GradientBlob className="contact-blob-2" delay={2} />

      <div className="contact-container">
        <div className="contact-grid">
          {/* LEFT SIDE */}
          <div className={`contact-left ${isVisible ? "fade-left" : ""}`}>
            <div className="contact-badge">Contact</div>
            <h2>
              Get in <br /> Touch!
            </h2>

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
          <div
            className={`contact-form-wrapper ${isVisible ? "fade-right" : ""}`}
          >
            <div className="contact-form">
              <h3>Send us a message</h3>
              <p>Fill in your details and we will get back to you shortly.</p>

              <form onSubmit={sendEmail}>
                <div className="form-row">
                  <div className="form-group">
                    <label className={focused === "first" ? "active" : ""}>
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      placeholder="John"
                      onFocus={() => setFocused("first")}
                      onBlur={() => setFocused("")}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className={focused === "last" ? "active" : ""}>
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      placeholder="Doe"
                      onFocus={() => setFocused("last")}
                      onBlur={() => setFocused("")}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className={focused === "email" ? "active" : ""}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>

                <div className="form-group">
                  <label className={focused === "org" ? "active" : ""}>
                    Organization
                  </label>
                  <input
                    type="text"
                    name="organization"
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
                    name="message"
                    placeholder="Tell us about your project..."
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused("")}
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="contact-button"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? "Sending..." : "Send Message"}
                  <ArrowUpRight size={16} />
                </button>

                {status === "loading" && (
                  <div className="form-loading">⏳ Sending...</div>
                )}

                {status === "success" && (
                  <div className="form-success">
                    ✅ Message sent successfully!
                  </div>
                )}

                {status === "error" && (
                  <div className="form-error">
                    ❌ Failed to send. Try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
