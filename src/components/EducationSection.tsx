import ScrollReveal from "./ScrollReveal";

const education = [
  {
    title: "B.Tech — Computer Science Engineering",
    place: "MITS (Madanapalle Institute of Technology & Science)",
    period: "2024 – 2028",
    detail: "CGPA: 8.85",
  },
  {
    title: "Intermediate (12th)",
    place: "Board of Intermediate Education",
    period: "Completed",
    detail: "Percentage: 95.5%",
  },
  {
    title: "SSC (10th)",
    place: "Board of Secondary Education",
    period: "Completed",
    detail: "Percentage: 93%",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-16">
            <span className="text-primary">Education</span> Timeline
          </h2>
        </ScrollReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-primary/20 md:-translate-x-px" />

          {education.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className={`relative flex mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-background -translate-x-1.5 md:-translate-x-1.5 mt-6 z-10"
                     style={{ boxShadow: "0 0 10px hsl(0 100% 50% / 0.5)" }} />

                {/* Card */}
                <div className={`ml-12 md:ml-0 md:w-[45%] ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="glass-card-hover p-6">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-1">{edu.title}</h3>
                    <p className="font-body text-sm text-muted-foreground mb-2">{edu.place}</p>
                    <div className="flex gap-4 text-sm font-body">
                      <span className="text-primary">{edu.period}</span>
                      <span className="text-foreground font-semibold">{edu.detail}</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
