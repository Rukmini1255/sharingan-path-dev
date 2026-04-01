import ScrollReveal from "./ScrollReveal";

const certs = [
  { title: "NPTEL Certification", issuer: "NPTEL / SWAYAM" },
  { title: "Generative AI Workshop", issuer: "Workshop Program" },
  { title: "Python Programming", issuer: "Sradex Learning" },
  { title: "Portfolio Development", issuer: "Siter Academy" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            <span className="text-primary">Certifications</span>
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {certs.map((cert, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="glass-card-hover p-6 flex items-start gap-4">
                {/* Badge icon */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-foreground">{cert.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
