import { motion } from "framer-motion";

const OttomanTughra = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, type: "spring", delay: 0.3 }}
      className="relative inline-block"
    >
      <motion.div
        animate={{ 
          filter: [
            "drop-shadow(0 0 8px hsl(43 65% 55% / 0.3))",
            "drop-shadow(0 0 20px hsl(43 65% 55% / 0.5))",
            "drop-shadow(0 0 8px hsl(43 65% 55% / 0.3))",
          ]
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg
          width="120"
          height="100"
          viewBox="0 0 200 160"
          className="mx-auto"
        >
          <defs>
            <linearGradient id="tughraGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="hsl(43 70% 70%)" />
              <stop offset="50%" stopColor="hsl(43 65% 55%)" />
              <stop offset="100%" stopColor="hsl(43 40% 35%)" />
            </linearGradient>
          </defs>
          {/* Stylized Tughra (Sultan's imperial monogram) */}
          {/* Main body - flowing calligraphic form */}
          <path
            d="M40,120 C40,120 50,60 80,40 C100,28 120,35 130,50 C140,65 135,85 120,95 C105,105 85,100 80,85 C75,70 85,55 100,55 C110,55 115,65 110,75"
            fill="none"
            stroke="url(#tughraGrad)"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Vertical strokes (tuğ - the three vertical lines) */}
          <line x1="95" y1="40" x2="95" y2="8" stroke="url(#tughraGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="105" y1="35" x2="105" y2="5" stroke="url(#tughraGrad)" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="115" y1="38" x2="115" y2="10" stroke="url(#tughraGrad)" strokeWidth="2.5" strokeLinecap="round" />
          {/* Sere (the S-curve at bottom) */}
          <path
            d="M40,120 C60,130 100,135 140,120 C160,112 170,100 175,85"
            fill="none"
            stroke="url(#tughraGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          {/* Beyze (the two oval loops on the left) */}
          <ellipse cx="55" cy="95" rx="20" ry="15" fill="none" stroke="url(#tughraGrad)" strokeWidth="2" />
          <ellipse cx="50" cy="105" rx="15" ry="10" fill="none" stroke="url(#tughraGrad)" strokeWidth="1.5" />
          {/* Hancer (the extensions to the right) */}
          <path
            d="M140,120 C150,115 165,108 180,118"
            fill="none"
            stroke="url(#tughraGrad)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M145,125 C155,122 168,118 185,125"
            fill="none"
            stroke="url(#tughraGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          {/* Decorative dots */}
          <circle cx="90" cy="12" r="2" fill="hsl(43 65% 55%)" />
          <circle cx="120" cy="8" r="2" fill="hsl(43 65% 55%)" />
          {/* Small crescent and star */}
          <path
            d="M155,20 A8,8 0 1,1 155,36 A6,6 0 1,0 155,20"
            fill="hsl(43 65% 55%)"
            fillOpacity="0.8"
          />
          <path
            d="M168,25 l1.5,3 3.2,0.5 -2.3,2.2 0.5,3.2 -2.9,-1.5 -2.9,1.5 0.5,-3.2 -2.3,-2.2 3.2,-0.5z"
            fill="hsl(43 65% 55%)"
            fillOpacity="0.8"
          />
        </svg>
      </motion.div>
      
      {/* Glow effect behind tughra */}
      <div className="absolute inset-0 bg-ottoman-gold/10 rounded-full blur-3xl -z-10" />
    </motion.div>
  );
};

export default OttomanTughra;
