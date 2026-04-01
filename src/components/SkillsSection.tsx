import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const skills = [
  { name: "Java", level: 85 },
  { name: "Python", level: 80 },
  { name: "SQL", level: 75 },
  { name: "Fullstack Development", level: 70 },
  { name: "Windows / Linux", level: 80 },
];

const SkillBar = ({ name, level, delay }: { name: string; level: number; delay: number }) => (
  <ScrollReveal delay={delay}>
    <div className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-body text-sm tracking-wider uppercase text-foreground">{name}</span>
        <span className="font-body text-sm text-primary">{level}%</span>
      </div>
      <div className="h-2 rounded-full bg-secondary overflow-hidden">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-deep-red to-primary"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: delay + 0.3, ease: "easeOut" }}
          style={{ boxShadow: "0 0 12px hsl(0 100% 50% / 0.4)" }}
        />
      </div>
    </div>
  </ScrollReveal>
);

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            <span className="text-primary">Skills</span> & Expertise
          </h2>
        </ScrollReveal>

        <div className="glass-card p-8 md:p-12">
          {skills.map((skill, i) => (
            <SkillBar key={skill.name} {...skill} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
