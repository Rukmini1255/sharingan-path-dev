import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <h2 className="section-heading text-center mb-12">
            <span className="text-primary">About</span> Me
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <div className="glass-card p-8 md:p-12">
            <p className="text-lg font-body text-secondary-foreground leading-relaxed mb-6">
              I am a dedicated Computer Science Engineering student with a strong foundation 
              in programming, problem-solving, and software development. With a passion for 
              building efficient, elegant solutions, I continuously explore new technologies 
              and methodologies to sharpen my craft. My approach to development is calm, 
              calculated, and purpose-driven.
            </p>
            <p className="text-lg font-body text-secondary-foreground leading-relaxed mb-8">
              I believe in the power of continuous learning and the pursuit of excellence. 
              Every line of code I write reflects discipline, clarity of thought, and an 
              unwavering commitment to quality.
            </p>
            <div className="border-l-2 border-primary/40 pl-6">
              <p className="text-primary/80 italic font-body text-lg">
                "Knowledge and awareness are vague, and perhaps better called illusions. 
                Everyone lives within their own subjective interpretation."
              </p>
              <p className="text-muted-foreground text-sm mt-2 font-body tracking-wider">
                — Itachi Uchiha
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
