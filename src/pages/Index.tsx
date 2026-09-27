import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { Crown } from "lucide-react";
import { useRef } from "react";
import { sultans } from "@/data/sultans";
import SultanAvatar from "@/components/SultanAvatar";
import Navbar from "@/components/Navbar";
import OrnamentDivider from "@/components/OrnamentDivider";
import OttomanSilhouette from "@/components/OttomanSilhouette";
import FloatingElements from "@/components/FloatingElements";
import OttomanTughra from "@/components/OttomanTughra";
import OttomanMap from "@/components/OttomanMap";

const Index = () => {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="min-h-screen bg-background ottoman-pattern ottoman-texture">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-14 sm:pt-16">
        {/* Parallax background layer */}
        <motion.div className="absolute inset-0" style={{ y: bgY }}>
          <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 rounded-full bg-primary/8 blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-40 sm:w-60 lg:w-80 h-40 sm:h-60 lg:h-80 rounded-full bg-secondary/6 blur-3xl animate-pulse" style={{ animationDelay: "1.5s" }} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[450px] lg:w-[600px] h-[300px] sm:h-[450px] lg:h-[600px] rounded-full bg-primary/3 blur-[100px]" />
        </motion.div>

        {/* Animated geometric pattern overlay */}
        <motion.div
          className="absolute inset-0 opacity-[0.04]"
          style={{ y: bgY }}
          animate={{ backgroundPosition: ["0px 0px", "60px 60px"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `repeating-conic-gradient(hsl(43 65% 55%) 0% 25%, transparent 0% 50%)`,
              backgroundSize: '60px 60px',
            }}
          />
        </motion.div>

        {/* Ottoman-style animated border frame */}
        <div className="absolute inset-2 sm:inset-4 md:inset-8 pointer-events-none z-[3]">
          <motion.div
            className="absolute inset-0 border border-ottoman-gold/10 rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 1.5 }}
          />
          {/* Corner ornaments */}
          {[
            "top-0 left-0",
            "top-0 right-0 rotate-90",
            "bottom-0 left-0 -rotate-90",
            "bottom-0 right-0 rotate-180",
          ].map((pos, i) => (
            <motion.div
              key={i}
              className={`absolute ${pos} text-ottoman-gold/20`}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 2 + i * 0.2, type: "spring" }}
            >
              <svg width="30" height="30" viewBox="0 0 40 40" className="sm:w-[40px] sm:h-[40px]">
                <path d="M0,0 L20,0 L20,3 L3,3 L3,20 L0,20 Z" fill="currentColor" />
                <path d="M8,0 L8,2 L2,2 L2,8 L0,8 L0,0 Z" fill="currentColor" opacity="0.5" />
              </svg>
            </motion.div>
          ))}
        </div>

        {/* Floating crescents and stars */}
        <FloatingElements />

        {/* Mosque silhouette at bottom */}
        <OttomanSilhouette />

        {/* Main content - parallax foreground */}
        <motion.div className="container mx-auto px-4 text-center relative z-10" style={{ y: fgY, opacity }}>
          {/* Imperial Tughra */}
          <OttomanTughra />

          {/* Imperial insignia - Crescent and Star */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex items-center justify-center gap-2 sm:gap-3 mt-3 sm:mt-4 mb-4 sm:mb-6"
          >
            <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-ottoman-gold/50" />
            <svg width="16" height="16" viewBox="0 0 24 24" className="text-ottoman-gold sm:w-[20px] sm:h-[20px]">
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="currentColor" fillOpacity="0.7" />
            </svg>
            <svg width="11" height="11" viewBox="0 0 24 24" className="text-ottoman-gold sm:w-[14px] sm:h-[14px]">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill="currentColor" fillOpacity="0.7" />
            </svg>
            <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-ottoman-gold/50" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-display font-bold ottoman-gradient-text leading-tight mb-3 sm:mb-4"
          >
            Ottoman Empire
          </motion.h1>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-32 sm:w-48 h-0.5 mx-auto bg-gradient-to-r from-transparent via-ottoman-gold to-transparent mb-4 sm:mb-6"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-body max-w-2xl mx-auto mb-2 sm:mb-3 px-2"
          >
            Explore 600 Years of Imperial Legacy
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="text-sm sm:text-lg text-muted-foreground/60 font-body mb-8 sm:mb-10 px-2"
          >
            From Osman I (1299) to Mehmed VI (1922) — 36 Sultans Who Shaped the World
          </motion.p>

          {/* Timeline bar */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 1.2, delay: 1.6 }}
            className="mt-8 sm:mt-16 max-w-4xl mx-auto px-2"
          >
            <div className="relative h-1 sm:h-1.5 bg-muted rounded-full overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-ottoman-red via-ottoman-gold to-ottoman-crimson rounded-full"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 2, delay: 2 }}
                style={{ transformOrigin: "left" }}
              />
            </div>
            <div className="flex justify-between mt-2 sm:mt-3 text-xs sm:text-sm text-muted-foreground font-display">
              <span className="text-ottoman-gold">1299</span>
              <span className="text-ottoman-red font-semibold hidden sm:inline">Rise</span>
              <span className="text-ottoman-gold font-semibold hidden sm:inline">Golden Age</span>
              <span className="text-muted-foreground hidden sm:inline">Stagnation</span>
              <span className="text-ottoman-gold">1922</span>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <OrnamentDivider />

      {/* Ottoman Map Section */}
      <section className="container mx-auto px-3 sm:px-4 py-10 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 sm:mb-8"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-display font-bold ottoman-gradient-text mb-3">
            The Imperial Domain
          </h2>
          <div className="w-20 sm:w-24 h-0.5 mx-auto bg-gradient-to-r from-ottoman-red via-ottoman-gold to-ottoman-red rounded-full" />
        </motion.div>
        <OttomanMap />
      </section>

      <OrnamentDivider />

      {/* All Sultans Timeline */}
      <section id="sultans-timeline" className="container mx-auto px-3 sm:px-4 py-12 sm:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold ottoman-gradient-text mb-4">
            The Complete Timeline
          </h2>
          <div className="w-24 sm:w-32 h-0.5 mx-auto bg-gradient-to-r from-ottoman-red via-ottoman-gold to-ottoman-red rounded-full" />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-1 sm:space-y-2">
          {sultans.map((sultan, i) => (
            <motion.div
              key={sultan.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                to={`/sultan/${sultan.id}`}
                className="flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg hover:bg-primary/10 transition-all duration-300 group imperial-frame"
              >
                <span className="font-display text-xs sm:text-sm text-muted-foreground w-12 sm:w-20 flex-shrink-0">
                  {sultan.reignStart}
                </span>
                <div className="timeline-dot flex-shrink-0 w-3 h-3 sm:w-4 sm:h-4" />
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden gold-border flex-shrink-0 group-hover:shadow-[0_0_12px_hsl(0_55%_38%/0.3)] transition-shadow duration-300">
                  <SultanAvatar src={sultan.portrait} name={sultan.name} className="w-full h-full" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="font-display font-semibold text-sm sm:text-base text-foreground group-hover:text-ottoman-gold transition-colors truncate">
                    {sultan.name}
                  </p>
                  <p className="text-xs sm:text-sm text-muted-foreground truncate">
                    {sultan.nickname || `${sultan.reignStart}–${sultan.reignEnd}`}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground font-display group-hover:text-ottoman-red transition-colors hidden sm:inline">
                  {sultan.reignEnd - sultan.reignStart} yrs
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 sm:py-10 mt-12 sm:mt-20 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ottoman-gold/30 to-transparent" />
        <div className="container mx-auto px-4 text-center">
          <Crown className="w-5 h-5 sm:w-6 sm:h-6 text-ottoman-gold mx-auto mb-3" />
          <p className="text-xs sm:text-sm text-muted-foreground font-display tracking-wider">
            Ottoman Empire — Ottoman Dynasty Explorer
          </p>
          <p className="text-xs text-muted-foreground/40 font-body mt-1">
            1299 – 1922
          </p>
          <p className="text-xs text-muted-foreground/60 font-body mt-3">
            By Bilal Arshad
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
