const Footer = () => {
  return (
    <footer className="relative py-16 px-4 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <p className="font-body text-primary/70 italic text-lg mb-4 max-w-2xl mx-auto">
          "Those who forgive themselves, and are able to accept their true nature... 
          they are the strong ones."
        </p>
        <p className="font-body text-muted-foreground text-xs tracking-[0.2em] uppercase">
          — Itachi Uchiha
        </p>
        <div className="mt-8 font-body text-muted-foreground text-xs tracking-wider">
          © {new Date().getFullYear()} Dhara Rukmini. Crafted with precision.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
