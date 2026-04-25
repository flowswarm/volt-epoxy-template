import { useState, useEffect } from "react";
import { Star, Shield, MapPin, Phone } from "lucide-react";

const TrustBar = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`fixed top-20 left-0 right-0 z-40 bg-volt-black text-white py-2 px-4 border-b border-white/5 hidden md:block transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 overflow-x-auto scrollbar-hide">
        {/* Google Rating */}
        <a
          href="https://g.page/r/CaVGCsEDvEYiEAg/review"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 shrink-0 hover:text-volt-lime transition-colors group"
        >
          <div className="flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={10} className="fill-volt-lime text-volt-lime" />
              ))}
            </div>
          </div>
          <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">
            5.0 <span className="opacity-60 group-hover:opacity-100">(80 Reviews)</span>
          </span>
        </a>

        {/* BBB Badge */}
        <a
          href="https://www.bbb.org/us/de/middletown/profile/epoxy-floor-coating/first-state-epoxy-llc-0251-92020815"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 shrink-0 hover:text-volt-lime transition-colors"
        >
          <Shield size={14} className="text-volt-lime" />
          <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">BBB A+ Rated</span>
        </a>

        {/* Service Area */}
        <div className="flex items-center gap-2 shrink-0">
          <MapPin size={14} className="text-volt-lime" />
          <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">Serving All of Delaware</span>
        </div>

        {/* Phone */}
        <a
          href="tel:3026760123"
          className="flex items-center gap-2 shrink-0 hover:text-volt-lime transition-colors ml-auto"
        >
          <Phone size={14} className="text-volt-lime" />
          <span className="text-[11px] font-bold tracking-wide whitespace-nowrap">(302) 676-0123</span>
        </a>
      </div>
    </div>
  );
};

export default TrustBar;
