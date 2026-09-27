import { motion } from "framer-motion";

const OttomanSword = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -15 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 1, delay: 0.8, type: "spring" }}
      className="absolute left-10 md:left-20 top-1/3 w-20 h-40"
    >
      <svg viewBox="0 0 40 160" className="w-full h-full drop-shadow-xl">
        {/* Sword blade with gradient */}
        <defs>
          <linearGradient id="bladeGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(43, 95%, 60%)", stopOpacity: 1 }} />
            <stop offset="50%" style={{ stopColor: "hsl(0, 100%, 45%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(43, 95%, 60%)", stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="handleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: "hsl(0, 60%, 30%)", stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: "hsl(0, 80%, 40%)", stopOpacity: 1 }} />
          </linearGradient>
        </defs>

        {/* Main blade */}
        <polygon points="20,10 24,140 16,140" fill="url(#bladeGradient)" />

        {/* Blade shine */}
        <polygon points="20,15 21.5,130 18.5,130" fill="hsl(43, 100%, 80%)" opacity="0.4" />

        {/* Crossguard (hilt) */}
        <rect x="8" y="138" width="24" height="4" fill="url(#handleGradient)" rx="1" />

        {/* Crossguard ornament - left */}
        <circle cx="8" cy="140" r="3" fill="hsl(43, 95%, 60%)" />
        {/* Crossguard ornament - right */}
        <circle cx="32" cy="140" r="3" fill="hsl(43, 95%, 60%)" />

        {/* Handle */}
        <rect x="15" y="142" width="10" height="15" fill="url(#handleGradient)" rx="2" />

        {/* Handle wrapping */}
        <line x1="15" y1="147" x2="25" y2="147" stroke="hsl(43, 95%, 60%)" strokeWidth="0.8" opacity="0.6" />
        <line x1="15" y1="151" x2="25" y2="151" stroke="hsl(43, 95%, 60%)" strokeWidth="0.8" opacity="0.6" />

        {/* Pommel */}
        <circle cx="20" cy="160" r="2.5" fill="hsl(43, 95%, 60%)" />
      </svg>

      {/* Glow effect */}
      <motion.div
        className="absolute inset-0 rounded-full blur-lg"
        style={{
          boxShadow: "0 0 20px hsl(0, 100%, 45% / 0.3), 0 0 40px hsl(43, 95%, 60% / 0.2)",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 3, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default OttomanSword;
