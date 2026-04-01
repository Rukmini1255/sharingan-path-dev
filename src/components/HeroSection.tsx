import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Radial glow behind hero */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Small Sharingan icon */}
          <div className="mx-auto mb-6 w-12 h-12 rounded-full border border-primary/40 flex items-center justify-center">
            <div className="w-6 h-6 rounded-full bg-primary/80 animate-sharingan-pulse" />
          </div>
        </motion.div>

        <motion.h1
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-wider mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <span className="text-foreground">Dhara </span>
          <span className="text-primary glow-text">Rukmini</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl font-body tracking-[0.15em] text-muted-foreground uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          CSE Student · Aspiring Software Developer
        </motion.p>

        <motion.p
          className="text-base md:text-lg font-body text-primary/70 italic max-w-lg mx-auto mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          "Walking the path of code with calm and precision"
        </motion.p>

        <motion.div
          className="flex gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-body font-semibold tracking-wider uppercase text-sm hover:shadow-[var(--shadow-crimson)] transition-all duration-300"
          >
            Get in Touch
          </a>
          <a
            href="#projects"
            className="px-8 py-3 rounded-lg border border-primary/30 text-primary font-body font-semibold tracking-wider uppercase text-sm hover:bg-primary/10 transition-all duration-300"
          >
            View Work
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-5 h-8 rounded-full border border-primary/30 flex justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-primary/60" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
