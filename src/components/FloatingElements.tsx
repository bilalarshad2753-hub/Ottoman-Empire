import { motion } from "framer-motion";

const crescents = [
  { x: "10%", y: "15%", size: 24, delay: 0, duration: 6 },
  { x: "85%", y: "20%", size: 18, delay: 1.5, duration: 7 },
  { x: "25%", y: "70%", size: 14, delay: 3, duration: 5.5 },
  { x: "75%", y: "65%", size: 20, delay: 0.8, duration: 6.5 },
  { x: "50%", y: "10%", size: 16, delay: 2, duration: 7.5 },
  { x: "92%", y: "50%", size: 12, delay: 4, duration: 5 },
];

const stars = [
  { x: "15%", y: "30%", size: 8, delay: 0.5, duration: 4 },
  { x: "80%", y: "40%", size: 10, delay: 1, duration: 5 },
  { x: "40%", y: "20%", size: 6, delay: 2.5, duration: 4.5 },
  { x: "60%", y: "75%", size: 8, delay: 3.5, duration: 5.5 },
  { x: "30%", y: "55%", size: 7, delay: 1.8, duration: 4.8 },
  { x: "70%", y: "15%", size: 9, delay: 0.3, duration: 5.2 },
  { x: "5%", y: "60%", size: 6, delay: 2.2, duration: 4.2 },
  { x: "95%", y: "35%", size: 7, delay: 3, duration: 5 },
];

const CrescentMoon = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"
      fill="hsl(43 65% 55%)"
      fillOpacity="0.6"
    />
  </svg>
);

const Star = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path
      d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      fill="hsl(43 65% 55%)"
      fillOpacity="0.4"
    />
  </svg>
);

const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[2]">
      {crescents.map((c, i) => (
        <motion.div
          key={`crescent-${i}`}
          className="absolute"
          style={{ left: c.x, top: c.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0, 0.7, 0.3, 0.7, 0],
            y: [20, -15, 10, -10, 20],
            rotate: [0, 15, -10, 5, 0],
          }}
          transition={{
            duration: c.duration,
            delay: c.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <CrescentMoon size={c.size} />
        </motion.div>
      ))}

      {stars.map((s, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ left: s.x, top: s.y }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0, 0.6, 0.2, 0.6, 0],
            scale: [0.5, 1.2, 0.8, 1, 0.5],
          }}
          transition={{
            duration: s.duration,
            delay: s.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Star size={s.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingElements;
