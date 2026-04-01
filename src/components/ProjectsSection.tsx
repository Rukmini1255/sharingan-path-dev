import ScrollReveal from "./ScrollReveal";

const projects = [
  {
    title: "Generative AI Workshop Project",
    description:
      "Explored the frontiers of generative AI through a hands-on workshop project. Built an intelligent application leveraging modern AI techniques, prompt engineering, and model interaction patterns to generate creative and context-aware outputs.",
    tags: ["AI", "Machine Learning", "Python", "Generative Models"],
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            <span className="text-primary">Projects</span>
          </h2>
        </ScrollReveal>

        <div className="grid gap-8">
          {projects.map((project, i) => (
            <ScrollReveal key={i} delay={i * 0.15}>
              <div className="glass-card-hover p-8 md:p-10 group relative overflow-hidden">
                {/* Decorative corner glow */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full blur-2xl transition-all duration-500 group-hover:bg-primary/10" />
                
                <h3 className="font-display text-2xl font-bold text-foreground mb-4 relative z-10">
                  {project.title}
                </h3>
                <p className="font-body text-secondary-foreground leading-relaxed mb-6 relative z-10">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 relative z-10">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-body tracking-wider uppercase rounded-full border border-primary/20 text-primary bg-primary/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
