import { motion } from "framer-motion";

const OttomanSilhouette = () => {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-[1]">
      <svg
        viewBox="0 0 1440 320"
        className="w-full h-auto"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="silhouetteGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="hsl(0 55% 38%)" stopOpacity="0.15" />
            <stop offset="100%" stopColor="hsl(15 12% 7%)" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        {/* Mosque skyline silhouette */}
        <motion.path
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          d="
            M0,280 L0,320 L1440,320 L1440,280
            L1400,260 L1380,240 L1360,260
            L1320,250 L1300,200 L1295,180 L1290,160 L1285,155
            A8,8 0 0,1 1275,155
            L1270,160 L1265,180 L1260,200 L1240,250
            L1200,255 L1180,240 L1175,200 L1170,180 L1168,150 L1165,140
            C1163,130 1157,130 1155,140
            L1152,150 L1150,180 L1145,200 L1140,240
            L1100,250 L1080,245 L1060,250
            L1020,240 L1000,220 L995,170 L990,150 L988,120 L985,100
            A6,6 0 0,1 975,100
            L972,120 L970,150 L965,170 L960,220 L940,240
            L920,245 L900,240 L880,245
            L840,235 L830,210 L825,180 L822,165
            A5,5 0 0,1 818,165
            L815,180 L810,210 L800,235
            L760,240 L740,235 L720,240
            L680,230 L660,200 L655,160 L650,130 L648,100 L645,80
            A8,8 0 0,1 635,80
            L632,100 L630,130 L625,160 L620,200 L600,230
            L560,240 L540,235 L520,240
            L480,230 L460,210 L455,180 L452,165
            A5,5 0 0,1 448,165
            L445,180 L440,210 L420,230
            L380,240 L360,235 L340,240
            L300,230 L280,200 L275,160 L272,140 L270,120
            A6,6 0 0,1 260,120
            L258,140 L255,160 L250,200 L230,230
            L200,240 L180,235 L160,240
            L120,245 L100,240 L80,245
            L60,250 L40,260 L20,270 L0,280 Z
          "
          fill="url(#silhouetteGrad)"
        />
        {/* Foreground darker layer */}
        <motion.path
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 0.7, y: 0 }}
          transition={{ duration: 2, delay: 0.8 }}
          d="
            M0,300 L0,320 L1440,320 L1440,300
            L1400,285 L1350,275 L1300,280 L1250,270
            L1200,275 L1150,270 L1100,275 L1050,268
            L1000,272 L950,268 L900,272 L850,265
            L800,270 L750,265 L700,270 L650,262
            L600,268 L550,262 L500,268 L450,260
            L400,265 L350,260 L300,265 L250,258
            L200,262 L150,258 L100,265 L50,275 L0,300 Z
          "
          fill="hsl(15 12% 7%)"
          fillOpacity="0.6"
        />
      </svg>
    </div>
  );
};

export default OttomanSilhouette;
