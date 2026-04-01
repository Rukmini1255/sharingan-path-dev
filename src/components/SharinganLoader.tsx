import { motion, AnimatePresence } from "framer-motion";

interface SharinganLoaderProps {
  isLoading: boolean;
}

const SharinganLoader = ({ isLoading }: SharinganLoaderProps) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Sharingan Eye */}
          <div className="relative w-32 h-32 mb-8">
            {/* Outer ring */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/60 animate-sharingan-pulse" />
            
            {/* Inner eye - red iris */}
            <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary to-deep-red">
              {/* Pupil */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-background" />
              </div>
              
              {/* Tomoe (spinning marks) */}
              <div className="absolute inset-0 animate-sharingan-spin">
                {[0, 120, 240].map((rotation) => (
                  <div
                    key={rotation}
                    className="absolute w-full h-full"
                    style={{ transform: `rotate(${rotation}deg)` }}
                  >
                    <div
                      className="absolute top-2 left-1/2 -translate-x-1/2 w-4 h-4"
                    >
                      {/* Tomoe shape using CSS */}
                      <div className="w-3 h-3 bg-background rounded-full relative">
                        <div className="absolute -bottom-1 left-1/2 w-2 h-3 bg-background rounded-bl-full" 
                             style={{ transform: 'translateX(-50%) rotate(-30deg)' }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pulse rings */}
            <div className="absolute inset-0 rounded-full border border-primary/30" 
                 style={{ animation: 'pulse-ring 2s ease-out infinite' }} />
            <div className="absolute inset-0 rounded-full border border-primary/20" 
                 style={{ animation: 'pulse-ring 2s ease-out infinite 0.5s' }} />
          </div>

          <motion.p
            className="font-display text-lg tracking-[0.3em] text-primary/80 uppercase"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Awakening...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SharinganLoader;
