import { Routes, Route } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Star, CheckCircle2, Shield, Calendar, Zap, Facebook, Instagram, Phone, Mail, MapPin } from "lucide-react";
import { useState } from "react";
import React from "react";
import { Navbar, Footer } from "./components/Layout";
import { OurWork } from "./components/OurWork";
import { cn } from "./lib/utils";
import TrustBar from "./components/TrustBar";
import FloatingMobileCTA from "./components/FloatingMobileCTA";
import StatCounter from "./components/StatCounter";
import BeforeAfter from "./components/BeforeAfter";

// Service pages
import FirstResponder from "./pages/FirstResponder";
import Commercial from "./pages/Commercial";
import Garages from "./pages/Garages";
import Basements from "./pages/Basements";
import FoodService from "./pages/FoodService";
import Patios from "./pages/Patios";
import PolishedConcrete from "./pages/PolishedConcrete";
import StrippingWaxing from "./pages/StrippingWaxing";
import Admin from "./pages/Admin";

// ─── Home Page Sections ───────────────────────────────────────────────────────

const FORM_EMAIL = localStorage.getItem("fse_notification_email") || "kevinfirststateepoxy@gmail.com";

const quoteServices = [
  "First Responder Facilities",
  "Commercial / Retail",
  "Garage Floor Coatings",
  "Basements",
  "Restaurant & Kitchen Flooring",
  "Patios & Sidewalks",
  "Polished & Stained Concrete",
  "Stripping & Waxing",
  "Other / Not Sure",
];

const useQuoteForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const update = (field: string, value: string) => setForm((f) => ({ ...f, [field]: value }));
  const canSubmit = form.name.trim() && form.phone.trim() && status === "idle";

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;
    setStatus("loading");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${FORM_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          Name: form.name,
          Email: form.email || "Not provided",
          Phone: form.phone,
          Service: form.service || "Not specified",
          Message: form.message || "No message",
          _subject: `🟢 New Quote Request — ${form.service || "General"} — ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", phone: "", service: "", message: "" });
      setTimeout(() => setStatus("idle"), 6000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return { form, update, status, canSubmit, submit };
};

const Hero = () => {
  const { form, update, status, canSubmit, submit } = useQuoteForm();
  const words = ["Delaware's", "Premier", "Epoxy", "Flooring", "Experts"];

  return (
  <section id="home" className="relative min-h-screen overflow-hidden">
    {/* Full-viewport video background */}
    <video src="/hero_video.mov" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-volt-black via-volt-black/70 to-volt-black/30" />
    <div className="absolute inset-0 noise-overlay" />

    {/* Content */}
    <div className="relative z-10 min-h-screen flex flex-col justify-center pt-28 pb-20 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Left: Headline */}
        <div className="w-full lg:w-[55%]">
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-volt-lime mb-4 sm:mb-6">
            5.0 ★ Rated · 80+ Google Reviews
          </motion.p>
          <h1 className="mb-6 sm:mb-8 leading-[0.9] flex flex-wrap gap-x-4 gap-y-0">
            {words.map((word, i) => (
              <motion.span key={i} initial={{ opacity: 0, y: 60, rotateX: -40 }} animate={{ opacity: 1, y: 0, rotateX: 0 }} transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`font-display-wide text-5xl sm:text-7xl md:text-8xl lg:text-9xl ${word === "Epoxy" || word === "Flooring" ? "text-gradient" : "text-white"}`}>
                {word}
              </motion.span>
            ))}
          </h1>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8, duration: 0.6 }} className="text-base sm:text-lg text-white/50 max-w-lg mb-6 font-medium leading-relaxed">
            Uncompromising strength meets stunning design. Transform your space with Delaware's most trusted epoxy flooring professionals.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.5 }} className="flex flex-wrap gap-x-5 gap-y-1 text-[10px] text-white/30 font-bold uppercase tracking-wider">
            <span>✓ No obligation</span><span>✓ Free consultation</span><span>✓ Same-day response</span>
          </motion.div>
        </div>

        {/* Right: Glassmorphism form card */}
        <motion.div initial={{ opacity: 0, y: 30, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="w-full lg:w-[40%]">
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-2 h-2 rounded-full bg-volt-lime animate-subtle-pulse" />
              <p className="text-xs font-bold uppercase tracking-widest text-white/60">Get your free estimate</p>
            </div>
            <form className="space-y-3" onSubmit={submit}>
              <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} disabled={status !== "idle"} placeholder="Your Name *" className="w-full bg-white/5 border border-white/10 rounded-lg p-3.5 focus:border-volt-lime outline-none transition-all placeholder:text-white/25 disabled:opacity-50 text-sm text-white" />
              <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} disabled={status !== "idle"} placeholder="Phone Number *" className="w-full bg-white/5 border border-white/10 rounded-lg p-3.5 focus:border-volt-lime outline-none transition-all placeholder:text-white/25 disabled:opacity-50 text-sm text-white" />
              <select value={form.service} onChange={(e) => update("service", e.target.value)} disabled={status !== "idle"} className="w-full bg-white/5 border border-white/10 rounded-lg p-3.5 focus:border-volt-lime outline-none transition-all appearance-none disabled:opacity-50 text-white/60 text-sm">
                <option value="" className="bg-volt-black">Select a service...</option>
                {quoteServices.map((s) => <option key={s} value={s} className="bg-volt-black">{s}</option>)}
              </select>
              <button type="submit" disabled={!canSubmit} className="w-full bg-volt-lime text-volt-black py-4 rounded-lg font-black uppercase tracking-widest text-sm hover:scale-[1.02] active:scale-95 transition-transform disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden group">
                <span className="absolute inset-0 shimmer-btn rounded-lg" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === "idle" && "Get My Free Quote →"}
                  {status === "loading" && <><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Sending...</>}
                  {status === "success" && <><CheckCircle2 size={20} /> Quote Sent!</>}
                  {status === "error" && "Error — Try Again"}
                </span>
              </button>
            </form>
            <div className="mt-4 flex items-center gap-2">
              <div className="flex -space-x-1">{[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-amber-400 text-amber-400" />)}</div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-white/40">Trusted by 500+ Delaware homeowners</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
      <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-white/30">Scroll</p>
      <div className="w-5 h-8 border border-white/20 rounded-full flex items-start justify-center p-1.5">
        <div className="w-1 h-2 bg-volt-lime rounded-full animate-scroll-hint" />
      </div>
    </div>
  </section>
  );
};

const Testimonial = () => {
  const testimonials = [
    { text: "Outstanding company that does an outstanding job! First State Epoxy just completed the floor in my pole building which came out amazing. The floor is beautiful and truly elevates the look of the building… This is truly one of the best companies I have ever dealt with.", author: "Ricky T.", timeAgo: "Google Review" },
    { text: "A special thanks to Kevin for hooking me up! He was very professional and did an awesome job on my boat deck. Made it look brand new and saved me a lot of money. Have gotten lots of compliments on the deck. I would highly recommend Kevin and his guys.", author: "Brian L.", timeAgo: "Google Review" },
    { text: "Kevin was so polite and knowledgeable when I called explaining my seriously messed up floor from a different company. 2 days of work later my flooring in our new Office at Golden Wood is absolutely beautiful. No questions asked we will be customers in the future!", author: "Ashley W.", timeAgo: "Google Review" },
  ];
  const [active, setActive] = useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => setActive((a) => (a + 1) % testimonials.length), 6000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="bg-volt-black text-white py-20 sm:py-28 md:py-36 px-4 relative overflow-hidden noise-overlay">
      {/* Giant decorative quote mark */}
      <div className="absolute top-8 left-8 sm:left-16 text-[20rem] sm:text-[30rem] font-serif leading-none text-white/[0.02] pointer-events-none select-none">"</div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12 sm:mb-16">
          <svg viewBox="0 0 24 24" className="w-6 h-6 shrink-0" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div className="flex space-x-1">{[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}</div>
          <span className="text-sm font-bold text-white/40">5.0 · 80 Reviews</span>
        </div>

        {/* Pull quote */}
        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light leading-snug sm:leading-snug md:leading-tight mb-10 sm:mb-14 italic" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              "{testimonials[active].text}"
            </p>
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-volt-lime rounded-full flex items-center justify-center font-black text-volt-black text-lg">{testimonials[active].author[0]}</div>
                <div>
                  <p className="font-black text-base">{testimonials[active].author}</p>
                  <p className="text-xs text-white/40 font-bold uppercase tracking-wider">Verified · {testimonials[active].timeAgo}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={() => setActive((active - 1 + testimonials.length) % testimonials.length)} className="w-12 h-12 border border-white/10 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"><ArrowRight className="rotate-180" size={18} /></button>
                <button onClick={() => setActive((active + 1) % testimonials.length)} className="w-12 h-12 border border-white/10 rounded-full hover:bg-white/10 transition-colors flex items-center justify-center"><ArrowRight size={18} /></button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-10 sm:mt-14">
          {testimonials.map((_, i) => (
            <button key={i} onClick={() => setActive(i)} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "bg-volt-lime w-8" : "bg-white/20 w-4"}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

import { HoverSlider, HoverSliderImageWrap, HoverSliderImage, TextStaggerHover } from "./components/HoverSlider";

const servicesList = [
  { title: "First Responder Facilities", desc: "Durable epoxy coatings for firehouses, EMS bays, and rescue operations.", img: "https://firststateepoxy.com/wp-content/uploads/2023/07/cropped-fire-stattion-epoxy-floor-2.jpeg", path: "/services/first-responder-facility" },
  { title: "Commercial & Retail", desc: "High-performance floor coatings for your commercial or retail space.", img: "https://firststateepoxy.com/wp-content/uploads/2022/12/cropped-firehouse-floor.jpg", path: "/services/commercial-retail" },
  { title: "Garage Floor Coatings", desc: "Transform your garage with a stunning, durable epoxy coating.", img: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-garages.jpeg", path: "/services/garages" },
  { title: "Basements", desc: "Turn your basement into a beautiful, functional living space.", img: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-basements.jpeg", path: "/services/basements" },
  { title: "Restaurant & Kitchen Flooring", desc: "Food-safe, slip-resistant coatings for commercial kitchens.", img: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-Food-Service.jpeg", path: "/services/restaurant-and-kitchen-flooring" },
  { title: "Patios & Sidewalks", desc: "Beautiful, weather-resistant concrete coatings for outdoor spaces.", img: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-patios.jpeg", path: "/services/patios" },
  { title: "Polished & Stained Concrete", desc: "Timeless polished concrete and custom staining for commercial spaces.", img: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-2-e1661899380405.jpeg", path: "/services/polished-and-stained-concrete" },
  { title: "Stripping & Waxing", desc: "Professional VCT stripping, sealing, and waxing for commercial floors.", img: "https://firststateepoxy.com/wp-content/uploads/2023/01/IMG_2445.png", path: "/services/stripping-and-waxing" },
];

// Need to define HoverSliderContextConsumer since we export context logic in the component but need it here.
// Better yet, we can export `useHoverSliderContext` from the HoverSlider file and use it in a subcomponent here.
import { useHoverSliderContext } from "./components/HoverSlider";

const ServiceItem = ({ index, service }: { index: number, service: typeof servicesList[0] }) => {
  const { activeSlide } = useHoverSliderContext()
  const isActive = activeSlide === index

  return (
    <div className="flex flex-col border-b border-black/5 pb-8 last:border-0 group relative overflow-hidden">
      <TextStaggerHover
        index={index}
        text={service.title}
        className={cn(
          "font-bold text-xl sm:text-2xl lg:text-5xl uppercase leading-tight hover:text-volt-lime transition-colors !mb-4 z-10",
          isActive ? "text-volt-lime" : "text-volt-black"
        )}
      />
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden z-0"
          >
            <div className="flex justify-between items-start pt-4 pr-4">
              <p className="text-lg opacity-60 w-[80%]">{service.desc}</p>
              <a href={service.path} className="p-4 border border-volt-black/10 hover:bg-volt-lime hover:border-volt-lime text-volt-black transition-all shrink-0">
                <ArrowRight size={24} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const Services = () => (
  <section id="services" className="py-24 bg-white relative">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex items-center justify-between mb-8 md:mb-16 border-b-2 border-volt-black pb-4">
        <h2 className="text-2xl tracking-widest uppercase font-bold text-volt-black">Services</h2>
      </div>

      <HoverSlider className="flex flex-col lg:flex-row gap-12 items-start">
        <div className="w-full lg:w-1/2 flex flex-col flex-wrap mb-10 overflow-hidden">
          {servicesList.map((service, index) => (
            <ServiceItem key={index} index={index} service={service} />
          ))}
        </div>

        <div className="hidden lg:flex w-1/2 items-center justify-center p-8 h-[500px] xl:h-[600px] sticky top-32">
          <HoverSliderImageWrap className="w-full h-full rounded-sm overflow-hidden border-2 border-volt-black">
            {servicesList.map((service, index) => (
              <HoverSliderImage
                key={index}
                index={index}
                imageUrl={service.img}
                className="w-full h-full object-cover"
                alt={service.title}
              />
            ))}
          </HoverSliderImageWrap>
        </div>
      </HoverSlider>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-volt-charcoal text-white py-20 sm:py-28 md:py-36 relative overflow-hidden">
    {/* Gradient watermark */}
    <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
      <span className="font-display-wide text-[30vw] sm:text-[25vw] leading-none text-white/[0.02]">FSE</span>
    </div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Left: Text */}
        <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-volt-lime mb-4">About Us</p>
          <h2 className="font-display-wide text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 leading-[0.95] normal-case tracking-normal">
            Family Owned<br />& Operated<br />In Delaware.
          </h2>
          <div className="h-1 w-20 bg-volt-lime mb-8" />
          <p className="text-lg leading-relaxed text-white/60 mb-8 max-w-lg">
            First State Epoxy and Flooring is a family owned business that prioritizes courteous service and personalized attention. Our commitment to good communication and hard work leads to strong working relationships with our customers. When you need uncompromising strength and performance — you need First State Epoxy.
          </p>
          <div className="flex items-center gap-4 glass-card p-4 rounded-xl inline-flex mb-8">
            <div>
              <p className="font-black text-sm uppercase tracking-widest">Kevin</p>
              <p className="text-[10px] uppercase text-white/40">Owner & Founder</p>
            </div>
            <div className="h-8 w-[1px] bg-white/10" />
            <span className="italic text-lg text-white/40">First State Epoxy</span>
          </div>
          {/* Trust badges */}
          <div className="flex flex-wrap gap-6 items-center">
            <a href="https://www.bbb.org/us/de/middletown/profile/epoxy-floor-coating/first-state-epoxy-llc-0251-92020815" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/40 hover:text-volt-lime transition-colors">
              <Shield size={18} /><span className="text-xs font-bold uppercase tracking-wider">BBB A+ Rated</span>
            </a>
            <a href="https://g.page/r/CaVGCsEDvEYiEAg/review" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-white/40 hover:text-volt-lime transition-colors">
              <div className="flex gap-0.5">{[...Array(5)].map((_, i) => <Star key={i} size={10} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="text-xs font-bold uppercase tracking-wider">5.0 Google</span>
            </a>
          </div>
        </motion.div>

        {/* Right: Overlapping image stack */}
        <motion.div className="w-full lg:w-1/2 relative" initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden">
              <img src="https://firststateepoxy.com/wp-content/uploads/2023/07/cropped-ems-epoxy-flooring-3-1.jpeg" alt="First State Epoxy team at work" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-64 rounded-xl overflow-hidden border-4 border-volt-charcoal shadow-2xl hidden sm:block">
              <img src="https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-garages.jpeg" alt="Epoxy floor installation" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="absolute -top-4 -right-4 glass-card rounded-xl p-4 text-center hidden sm:block">
              <p className="font-display-wide text-4xl text-volt-lime">100%</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/60">Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Process = () => {
  const steps = [
    { id: "01", title: "Inspection", desc: "Our team comes to your home or business for a thorough inspection to get the most accurate estimate and timeline.", icon: <Star size={22} /> },
    { id: "02", title: "Proposal", desc: "We'll put together a detailed proposal — what we'll do, why, and when. Once you approve, we move forward.", icon: <CheckCircle2 size={22} /> },
    { id: "03", title: "Schedule", desc: "We'll get your project scheduled as soon as possible, working around your timeline to minimize disruption.", icon: <Calendar size={22} /> },
    { id: "04", title: "Installation", desc: "Our certified team installs your high-performance coating with precision and care, ensuring a flawless finish.", icon: <Zap size={22} /> },
  ];
  return (
    <section className="bg-volt-cream py-20 sm:py-28 md:py-36 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-volt-lime mb-3" style={{ color: '#888' }}>How It Works</p>
          <h2 className="font-display-wide text-4xl sm:text-5xl md:text-7xl normal-case tracking-normal">Our Simple Process</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.12, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-white rounded-2xl p-6 sm:p-8 overflow-hidden hover-lift group">
              {/* Background step number */}
              <span className="absolute -top-4 -right-2 font-display-wide text-[8rem] leading-none text-black/[0.03] select-none pointer-events-none group-hover:text-volt-lime/10 transition-colors duration-500">{step.id}</span>
              <div className="relative z-10">
                <div className="w-12 h-12 bg-volt-lime/10 rounded-xl flex items-center justify-center mb-5 text-volt-black group-hover:bg-volt-lime transition-colors duration-300">{step.icon}</div>
                <h3 className="text-xl font-black uppercase tracking-wider mb-3">{step.title}</h3>
                <p className="text-sm leading-relaxed opacity-50">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.6, duration: 0.5 }} className="text-center mt-12">
          <a href="#contact" className="inline-flex items-center gap-3 bg-volt-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider text-sm hover:bg-volt-lime hover:text-volt-black transition-all active:scale-95">
            Start Step 1 Today <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

const CTA = () => (
  <section className="bg-volt-lime py-12 sm:py-16 px-4 relative overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <img src="https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-garages.jpeg" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" loading="lazy" />
      <div className="absolute inset-0 bg-volt-lime/90" />
    </div>
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 relative z-10">
      <div>
        <h2 className="font-display-wide text-4xl sm:text-5xl md:text-7xl leading-[0.95] mb-3 normal-case tracking-normal">Ready to Transform<br className="hidden sm:block" /> Your Floor?</h2>
        {/* Scrolling marquee */}
        <div className="overflow-hidden mt-4">
          <div className="animate-marquee whitespace-nowrap flex gap-8 text-sm font-bold uppercase tracking-widest opacity-50">
            <span>Free estimates</span><span>·</span><span>Same-day response</span><span>·</span><span>100% satisfaction guaranteed</span><span>·</span>
            <span>Free estimates</span><span>·</span><span>Same-day response</span><span>·</span><span>100% satisfaction guaranteed</span><span>·</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 shrink-0">
        <a href="#contact" className="bg-volt-black text-white px-10 py-5 rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-transform inline-block text-center text-sm">
          Get Free Quote
        </a>
        <a href="tel:3026760123" className="border-2 border-volt-black px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-volt-black hover:text-white transition-all inline-block text-center text-sm">
          (302) 676-0123
        </a>
      </div>
    </div>
  </section>
);

const Contact = () => {
  const { form, update, status, canSubmit, submit } = useQuoteForm();

  return (
    <section id="contact" className="bg-volt-black text-white py-20 sm:py-28 md:py-36 px-4 relative overflow-hidden noise-overlay">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-volt-lime mb-3">Contact Us</p>
          <h2 className="font-display-wide text-4xl sm:text-5xl md:text-7xl normal-case tracking-normal">Get Your Free Quote</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left: Info */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-subtle-pulse" />
              <p className="text-sm font-bold text-white/60">Currently accepting new projects · Avg Response: Under 2hrs</p>
            </div>
            <p className="text-lg leading-relaxed text-white/50 mb-10">
              Ready to transform your space? Fill out the form and we'll get back to you with a free estimate. No obligation, no pressure — just honest advice from a family-owned team that cares.
            </p>
            <div className="space-y-5 mb-8">
              <a href="https://maps.google.com/?q=36+Artisan+Dr+Smyrna+DE+19977" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-volt-lime group-hover:text-volt-black transition-all"><MapPin size={20} /></div>
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Location</p><p className="font-bold text-white/80">36 Artisan Dr, Smyrna, DE 19977</p></div>
              </a>
              <a href="tel:3026760123" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-volt-lime group-hover:text-volt-black transition-all"><Phone size={20} /></div>
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Phone</p><p className="font-bold text-white/80">(302) 676-0123</p></div>
              </a>
              <a href="mailto:kevinfirststateepoxy@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:bg-volt-lime group-hover:text-volt-black transition-all"><Mail size={20} /></div>
                <div><p className="text-[10px] uppercase font-bold tracking-widest text-white/30">Email</p><p className="font-bold text-white/80">kevinfirststateepoxy@gmail.com</p></div>
              </a>
            </div>
            <div className="flex space-x-3">
              <a href="https://www.facebook.com/FirstStateEpoxyLLC" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-volt-lime hover:text-volt-black transition-all"><Facebook size={18} /></a>
              <a href="https://www.instagram.com/first_state_epoxy_llc" target="_blank" rel="noreferrer" className="w-11 h-11 bg-white/5 rounded-xl flex items-center justify-center hover:bg-volt-lime hover:text-volt-black transition-all"><Instagram size={18} /></a>
            </div>
          </div>

          {/* Right: Glass form */}
          <div className="glass-card p-6 sm:p-8 rounded-2xl">
            <form className="space-y-4" onSubmit={submit}>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/40">Name *</label>
                <input type="text" value={form.name} onChange={(e) => update("name", e.target.value)} disabled={status !== "idle"} placeholder="Your full name" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-volt-lime outline-none transition-all disabled:opacity-50 placeholder:text-white/20 text-white" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/40">Phone *</label>
                <input type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} disabled={status !== "idle"} placeholder="(000) 000-0000" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-volt-lime outline-none transition-all disabled:opacity-50 placeholder:text-white/20 text-white" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/40">Email <span className="opacity-40">(optional)</span></label>
                <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)} disabled={status !== "idle"} placeholder="your@email.com" className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-volt-lime outline-none transition-all disabled:opacity-50 placeholder:text-white/20 text-white" />
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/40">Service Interested In</label>
                <select value={form.service} onChange={(e) => update("service", e.target.value)} disabled={status !== "idle"} className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-volt-lime outline-none transition-all appearance-none disabled:opacity-50 text-white/60">
                  <option value="" className="bg-volt-black">Select a service...</option>
                  {quoteServices.map((s) => <option key={s} value={s} className="bg-volt-black">{s}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[10px] uppercase font-bold tracking-widest mb-2 text-white/40">Message</label>
                <textarea rows={4} value={form.message} onChange={(e) => update("message", e.target.value)} disabled={status !== "idle"} placeholder="Tell us about your project..." className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-volt-lime outline-none transition-all resize-none disabled:opacity-50 placeholder:text-white/20 text-white" />
              </div>
              <button type="submit" disabled={!canSubmit} className="w-full bg-volt-lime text-volt-black py-4 rounded-lg font-black uppercase tracking-widest hover:scale-[1.02] active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 relative overflow-hidden">
                <span className="absolute inset-0 shimmer-btn rounded-lg" />
                <span className="relative z-10 flex items-center gap-2">
                  {status === "idle" && "Send Message"}
                  {status === "loading" && <><svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" /></svg> Sending...</>}
                  {status === "success" && <><CheckCircle2 size={20} /> Message Sent!</>}
                  {status === "error" && "Error — Try Again"}
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── Home Page ────────────────────────────────────────────────────────────────
const HomePage = () => (
  <div className="min-h-screen">
    <Navbar />
    <TrustBar />
    <Hero />
    <StatCounter />
    <Services />
    <BeforeAfter />
    <Testimonial />
    <About />
    <OurWork />
    <Process />
    <CTA />
    <Contact />
    <Footer />
    <FloatingMobileCTA />
  </div>
);

// ─── App Router ───────────────────────────────────────────────────────────────

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services/first-responder-facility" element={<FirstResponder />} />
      <Route path="/services/commercial-retail" element={<Commercial />} />
      <Route path="/services/garages" element={<Garages />} />
      <Route path="/services/basements" element={<Basements />} />
      <Route path="/services/restaurant-and-kitchen-flooring" element={<FoodService />} />
      <Route path="/services/patios" element={<Patios />} />
      <Route path="/services/polished-and-stained-concrete" element={<PolishedConcrete />} />
      <Route path="/services/stripping-and-waxing" element={<StrippingWaxing />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
}
