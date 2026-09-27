import { motion } from "framer-motion";
import { useState } from "react";

const regions = [
  { name: "Constantinople", x: 52, y: 28, delay: 0.5 },
  { name: "Anatolia", x: 58, y: 38, delay: 0.8 },
  { name: "Egypt", x: 42, y: 58, delay: 1.1 },
  { name: "Baghdad", x: 68, y: 42, delay: 1.4 },
  { name: "Balkans", x: 42, y: 22, delay: 1.7 },
  { name: "Mecca", x: 55, y: 62, delay: 2.0 },
  { name: "N. Africa", x: 28, y: 48, delay: 2.3 },
  { name: "Hungary", x: 38, y: 15, delay: 2.6 },
];

const OttomanMap = () => {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="relative max-w-4xl mx-auto mt-4 sm:mt-8"
    >
      <div className="relative aspect-[16/9] rounded-xl overflow-hidden imperial-frame">
        {/* Map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-muted/30" />
        
        {/* Simplified Ottoman territory outline */}
        <svg viewBox="0 0 100 80" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="mapGlow" cx="50%" cy="40%" r="50%">
              <stop offset="0%" stopColor="hsl(0 55% 38%)" stopOpacity="0.25" />
              <stop offset="60%" stopColor="hsl(0 55% 38%)" stopOpacity="0.08" />
              <stop offset="100%" stopColor="transparent" stopOpacity="0" />
            </radialGradient>
            <filter id="mapBlur">
              <feGaussianBlur stdDeviation="1" />
            </filter>
          </defs>

          {/* Ottoman Empire territory - simplified shape */}
          <motion.path
            d="M20,45 C22,38 28,30 35,22 C38,18 42,15 48,14 C52,13 56,15 60,18 
               C64,22 68,25 72,28 C76,32 78,36 80,40 C82,44 80,48 76,52 
               C72,56 68,58 64,60 C58,63 52,65 46,64 C40,63 34,60 30,56 
               C26,52 22,50 20,45 Z"
            fill="url(#mapGlow)"
            stroke="hsl(0 55% 38%)"
            strokeWidth="0.5"
            strokeOpacity="0.5"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3, delay: 0.5 }}
          />

          {/* Extended territories */}
          <motion.path
            d="M20,45 C18,48 15,50 12,48 C10,46 12,42 16,40 C18,38 20,40 20,45"
            fill="hsl(0 55% 38%)"
            fillOpacity="0.1"
            stroke="hsl(43 65% 55%)"
            strokeWidth="0.3"
            strokeOpacity="0.4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 2 }}
          />

          {/* Grid lines */}
          {[20, 40, 60, 80].map((x) => (
            <line key={`v${x}`} x1={x} y1="0" x2={x} y2="80" stroke="hsl(43 65% 55%)" strokeWidth="0.1" strokeOpacity="0.15" />
          ))}
          {[20, 40, 60].map((y) => (
            <line key={`h${y}`} x1="0" y1={y} x2="100" y2={y} stroke="hsl(43 65% 55%)" strokeWidth="0.1" strokeOpacity="0.15" />
          ))}
        </svg>

        {/* City markers */}
        {regions.map((region) => (
          <motion.div
            key={region.name}
            className="absolute cursor-pointer group"
            style={{ left: `${region.x}%`, top: `${region.y}%`, transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: region.delay, type: "spring" }}
            onMouseEnter={() => setHoveredRegion(region.name)}
            onMouseLeave={() => setHoveredRegion(null)}
            onTouchStart={() => setHoveredRegion(region.name)}
            onTouchEnd={() => setHoveredRegion(null)}
          >
            {/* Pulse ring */}
            <motion.div
              className="absolute inset-0 rounded-full bg-ottoman-gold/30"
              animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, delay: region.delay * 0.5 }}
              style={{ width: 10, height: 10, margin: "auto", top: 0, left: 0, right: 0, bottom: 0 }}
            />
            {/* Dot */}
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-ottoman-gold border border-ottoman-red/50 group-hover:bg-ottoman-red group-hover:scale-150 transition-all duration-300 relative z-10" />
            {/* Label */}
            <motion.span
              className="absolute left-1/2 -translate-x-1/2 -top-5 sm:-top-6 whitespace-nowrap font-display text-[9px] sm:text-xs tracking-wider pointer-events-none"
              style={{ color: hoveredRegion === region.name ? "hsl(43 65% 55%)" : "hsl(43 65% 55% / 0.6)" }}
              animate={{ opacity: hoveredRegion === region.name ? 1 : 0.6 }}
            >
              {region.name}
            </motion.span>
          </motion.div>
        ))}

        {/* Corner ornaments */}
        {["top-1 left-1 sm:top-2 sm:left-2", "top-1 right-1 sm:top-2 sm:right-2 rotate-90", "bottom-1 left-1 sm:bottom-2 sm:left-2 -rotate-90", "bottom-1 right-1 sm:bottom-2 sm:right-2 rotate-180"].map((pos, i) => (
          <div key={i} className={`absolute ${pos} text-ottoman-gold/30 text-sm sm:text-lg font-display`}>
            ❧
          </div>
        ))}
      </div>

      <p className="text-center text-xs sm:text-sm text-muted-foreground font-display mt-3 sm:mt-4 tracking-wider">
        Ottoman Empire at its Greatest Extent — 1683
      </p>
    </motion.div>
  );
};

export default OttomanMap;
