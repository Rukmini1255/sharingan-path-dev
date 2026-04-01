import ScrollReveal from "./ScrollReveal";

const items = [
  "Active participation in technical events and coding competitions",
  "Engaged in workshops on emerging technologies",
  "Sports & extracurricular activities participation",
  "Consistent academic excellence across all education levels",
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            Achievements & <span className="text-primary">Activities</span>
          </h2>
        </ScrollReveal>

        <div className="glass-card p-8 md:p-10">
          <ul className="space-y-5">
            {items.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <li className="flex items-start gap-4 font-body text-secondary-foreground">
                  <span className="flex-shrink-0 mt-1.5 w-2 h-2 rounded-full bg-primary" 
                        style={{ boxShadow: "0 0 8px hsl(0 100% 50% / 0.5)" }} />
                  {item}
                </li>
              </ScrollReveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
