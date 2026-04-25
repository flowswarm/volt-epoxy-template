import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

const stats: StatItem[] = [
  { value: 80, suffix: "+", label: "5-Star Reviews" },
  { value: 5, suffix: ".0", prefix: "", label: "Google Rating" },
  { value: 500, suffix: "+", label: "Floors Completed" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

const CountUp = ({ target, suffix, prefix = "", duration = 2000 }: { target: number; suffix: string; prefix?: string; duration?: number }) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;

    const startTime = performance.now();
    const step = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [started, target, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatCounter = () => {
  return (
    <section className="bg-volt-black py-10 sm:py-14 border-y-2 border-volt-lime/20 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-volt-lime/5 via-transparent to-volt-lime/5" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl md:text-5xl font-black text-volt-lime mb-2 leading-none">
                <CountUp target={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
              </p>
              <p className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.2em] text-white/50">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatCounter;
