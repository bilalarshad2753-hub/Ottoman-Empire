import { motion } from "framer-motion";

const OttomanPen = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: 15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 1, type: "spring" }}
      className="absolute right-10 md:right-20 top-1/3 w-20 h-40"
    >
      <svg viewBox="0 0 40 160" className="w-full h-full drop-shadow-xl">
        <defs>
          <linearGradient id="penGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(43, 95%, 60%)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "hsl(43, 85%, 50%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(43, 95%, 60%)", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="barrelGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(0, 60%, 25%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(0, 70%, 35%)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Nib (writing tip) */}
        <path d="M 16 10 L 18 20 L 22 20 L 24 10 Q 20 8 16 10 Z" fill="hsl(0, 0%, 20%)" />

        {/* Nib highlight */}
        <line x1="17" y1="12" x2="19" y2="18" stroke="hsl(0, 0%, 40%)" strokeWidth="0.5" opacity="0.6" />
        <line x1="21" y1="12" x2="23" y2="18" stroke="hsl(0, 0%, 40%)" strokeWidth="0.5" opacity="0.6" />

        {/* Barrel (main body) - upper section */}
        <rect x="14" y="20" width="12" height="70" fill="url(#penGradient)" rx="3" />

        {/* Barrel ornamental bands */}
        <rect x="14" y="30" width="12" height="2" fill="hsl(0, 60%, 30%)" opacity="0.7" />
        <rect x="14" y="50" width="12" height="1.5" fill="hsl(0, 100%, 45%)" opacity="0.6" />
        <rect x="14" y="70" width="12" height="2" fill="hsl(0, 60%, 30%)" opacity="0.7" />

        {/* Barrel shine */}
        <rect x="15" y="22" width="3" height="65" fill="hsl(43, 100%, 80%)" opacity="0.3" rx="2" />

        {/* Grip section (hexagonal texture) */}
        <rect x="14" y="90" width="12" height="45" fill="url(#barrelGradient)" rx="2" />

        {/* Grip lines */}
        <line x1="14" y1="100" x2="26" y2="100" stroke="hsl(43, 95%, 60%)" strokeWidth="0.6" opacity="0.5" />
        <line x1="14" y1="110" x2="26" y2="110" stroke="hsl(43, 95%, 60%)" strokeWidth="0.6" opacity="0.5" />
        <line x1="14" y1="120" x2="26" y2="120" stroke="hsl(43, 95%, 60%)" strokeWidth="0.6" opacity="0.5" />

        {/* End cap (clip) */}
        <rect x="16" y="135" width="8" height="4" fill="hsl(43, 95%, 60%)" rx="1" />
        <circle cx="20" cy="139" r="1.5" fill="hsl(0, 60%, 30%)" />

        {/* Bottom ornament */}
        <circle cx="20" cy="148" r="2" fill="hsl(43, 95%, 60%)" />
      </svg>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-lg"
        style={{
          boxShadow: "0 0 20px hsl(43, 95%, 60% / 0.3), 0 0 40px hsl(0, 60%, 30% / 0.2)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.3 }}
      />
    </motion.div>
  );
};

export default OttomanPen;
