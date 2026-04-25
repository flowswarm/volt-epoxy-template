import { useState, useEffect, useRef } from "react";
import { Phone, FileText } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const FloatingMobileCTA = () => {
  const [visible, setVisible] = useState(false);
  const heroRef = useRef<HTMLElement | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const hero = document.getElementById("home");
    heroRef.current = hero;

    if (!hero) {
      // Not on home page — always show
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show when hero is NOT visible (scrolled past)
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, [location.pathname]);

  const handleQuote = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
  };

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-all duration-300 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="bg-volt-black/90 backdrop-blur-xl border-t border-white/10 px-4 py-3 flex gap-3">
        <a
          href="tel:3026760123"
          className="flex-1 flex items-center justify-center gap-2 bg-white/10 text-white py-3.5 font-black uppercase tracking-wider text-xs rounded-sm hover:bg-white/20 active:scale-95 transition-all"
        >
          <Phone size={16} />
          Call Now
        </a>
        <button
          onClick={handleQuote}
          className="flex-1 flex items-center justify-center gap-2 bg-volt-lime text-volt-black py-3.5 font-black uppercase tracking-wider text-xs rounded-sm hover:brightness-110 active:scale-95 transition-all animate-subtle-pulse"
        >
          <FileText size={16} />
          Free Quote
        </button>
      </div>
    </div>
  );
};

export default FloatingMobileCTA;
