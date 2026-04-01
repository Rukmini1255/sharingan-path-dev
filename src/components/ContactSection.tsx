import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            <span className="text-primary">Contact</span> Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <ScrollReveal delay={0.1}>
            <div className="glass-card p-8 h-full flex flex-col justify-center space-y-6">
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Email</p>
                <p className="font-body text-foreground">dhararukmini@example.com</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">Phone</p>
                <p className="font-body text-foreground">+91 XXXXX XXXXX</p>
              </div>
              <div>
                <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1">LinkedIn</p>
                <a href="#" className="font-body text-primary hover:underline">linkedin.com/in/dhara-rukmini</a>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={0.2}>
            <form className="glass-card p-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              {(["name", "email"] as const).map((field) => (
                <div key={field}>
                  <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 block">
                    {field}
                  </label>
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={formData[field]}
                    onChange={handleChange}
                    className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(0_85%_45%/0.3)] transition-all duration-300"
                  />
                </div>
              ))}
              <div>
                <label className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground mb-1 block">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-secondary/50 border border-border rounded-lg px-4 py-3 font-body text-foreground focus:outline-none focus:border-primary focus:shadow-[0_0_15px_hsl(0_85%_45%/0.3)] transition-all duration-300 resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm hover:shadow-[var(--shadow-crimson)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
