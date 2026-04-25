import { useState, useRef, useCallback } from "react";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const BeforeAfter = () => {
  const [sliderPos, setSliderPos] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const navigate = useNavigate();
  const location = useLocation();

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setSliderPos(percentage);
  }, []);

  const handleMouseDown = () => { isDragging.current = true; };
  const handleMouseUp = () => { isDragging.current = false; };
  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging.current) updatePosition(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  const handleQuote = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <section className="py-16 sm:py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8 md:mb-14 border-b-2 border-volt-black pb-4">
            <h2 className="text-2xl tracking-widest uppercase font-bold text-volt-black">The Transformation</h2>
          </div>

          {/* Slider Container */}
          <div
            ref={containerRef}
            className="relative w-full aspect-square sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden cursor-col-resize select-none rounded-2xl"
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleMouseUp}
          >
            {/* Before Image (full width, always visible) */}
            <div className="absolute inset-0">
              <img
                src="/AfterEpoxy.jpg"
                alt="Before — damaged concrete floor"
                className="w-full h-full object-cover brightness-75 grayscale-[30%]"
                draggable={false}
              />
              {/* Subtle overlay to make it look more "before" */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
            </div>

            {/* After Image (clipped by slider position) */}
            <div
              className="absolute inset-0 overflow-hidden"
              style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
            >
              <img
                src="/BeforeEpoxy.jpg"
                alt="After — stunning metallic epoxy floor"
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>

            {/* Slider Handle */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-volt-lime z-20 cursor-col-resize"
              style={{ left: `${sliderPos}%`, transform: "translateX(-50%)" }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-volt-lime rounded-full flex items-center justify-center shadow-lg shadow-black/30">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-volt-black" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path d="M8 4l-6 8 6 8M16 4l6 8-6 8" />
                </svg>
              </div>
            </div>

            {/* Labels */}
            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-10">
              <span className="bg-black/70 backdrop-blur-sm text-white px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                Before
              </span>
            </div>
            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-10">
              <span className="bg-volt-lime text-volt-black px-3 py-1.5 text-[10px] sm:text-xs font-black uppercase tracking-widest">
                After
              </span>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-between mt-8 gap-4">
            <div>
              <p className="text-lg sm:text-xl font-bold">500+ floors transformed across Delaware</p>
              <p className="text-sm opacity-60">Drag the slider to see the difference</p>
            </div>
            <button
              onClick={handleQuote}
              className="bg-volt-black text-white px-8 py-4 font-black uppercase tracking-widest text-sm hover:bg-volt-lime hover:text-volt-black active:scale-95 transition-all flex items-center gap-2 shrink-0"
            >
              See Your Floor's Potential <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BeforeAfter;
