import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Facebook, Instagram, Phone, Mail, MapPin, ArrowRight, Menu, X, ChevronDown, FileText } from "lucide-react";

const services = [
    { name: "First Responder Facilities", path: "/services/first-responder-facility" },
    { name: "Commercial / Retail", path: "/services/commercial-retail" },
    { name: "Garages", path: "/services/garages" },
    { name: "Basements", path: "/services/basements" },
    { name: "Restaurant & Kitchen", path: "/services/restaurant-and-kitchen-flooring" },
    { name: "Patios & Sidewalks", path: "/services/patios" },
    { name: "Polished & Stained Concrete", path: "/services/polished-and-stained-concrete" },
    { name: "Stripping & Waxing", path: "/services/stripping-and-waxing" },
];

const colorCharts = [
    { name: "Flake Color Chart", url: "https://firststateepoxy.com/wp-content/uploads/2023/06/First-State-Flake-Color-Chart.pdf" },
    { name: "Standard Colors", url: "https://firststateepoxy.com/wp-content/uploads/2023/06/first-state-standard-colors.pdf" },
    { name: "Gemtone Stain", url: "https://firststateepoxy.com/wp-content/uploads/2022/08/gemtone-stain-color-book.pdf" },
    { name: "Reflector", url: "https://firststateepoxy.com/wp-content/uploads/2022/08/Reflector-Color-Chart.pdf" },
    { name: "Metallics", url: "https://firststateepoxy.com/wp-content/uploads/2022/08/E4EMETALLICPIGMENTS-colorchart.png" },
    { name: "Consolideck", url: "https://firststateepoxy.com/wp-content/uploads/2022/08/consolideck-rotated.jpeg" },
];

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    const [chartsOpen, setChartsOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileChartsOpen, setMobileChartsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const isActive = (path: string) => location.pathname === path;

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "bg-white/95 backdrop-blur-lg shadow-md border-b border-black/5" : "bg-transparent"}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    <Link to="/" className="flex items-center">
                        <img src="/Logo.png" alt="First State Epoxy and Flooring" className={`h-14 object-contain transition-all duration-300 ${scrolled ? '' : 'brightness-0 invert'}`} />
                    </Link>

                    {/* Desktop Nav */}
                    <div className={`hidden lg:flex items-center space-x-6 xl:space-x-8 transition-colors duration-300 ${scrolled ? 'text-volt-black' : 'text-white'}`}>
                        <Link to="/" className={`text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors ${isActive("/") ? "text-volt-lime" : ""}`}>
                            Home
                        </Link>
                        <Link to="/#about" className="text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors">
                            About
                        </Link>

                        {/* Services Dropdown */}
                        <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
                            <button className="text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors flex items-center gap-1">
                                Services <ChevronDown size={14} className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {servicesOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-white border border-black/5 shadow-xl"
                                    >
                                        {services.map((s) => (
                                            <Link
                                                key={s.path}
                                                to={s.path}
                                                onClick={() => setServicesOpen(false)}
                                                className={`block px-5 py-3 text-sm font-bold hover:bg-volt-lime transition-colors border-b border-black/5 last:border-0 ${isActive(s.path) ? "bg-volt-lime" : ""}`}
                                            >
                                                {s.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Color Charts Dropdown */}
                        <div className="relative" onMouseEnter={() => setChartsOpen(true)} onMouseLeave={() => setChartsOpen(false)}>
                            <button className="text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors flex items-center gap-1">
                                Color Charts <ChevronDown size={14} className={`transition-transform ${chartsOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {chartsOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 8 }}
                                        transition={{ duration: 0.15 }}
                                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-black/5 shadow-xl"
                                    >
                                        {colorCharts.map((c) => (
                                            <a
                                                key={c.name}
                                                href={c.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={() => setChartsOpen(false)}
                                                className="flex items-center gap-2 px-5 py-3 text-sm font-bold hover:bg-volt-lime transition-colors border-b border-black/5 last:border-0"
                                            >
                                                <FileText size={14} className="opacity-40" /> {c.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button onClick={() => { if (location.pathname === '/') { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/#contact'); } }} className="text-sm font-bold uppercase tracking-wider hover:text-volt-lime transition-colors">
                            Contact
                        </button>
                        <button onClick={() => { if (location.pathname === '/') { document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); } else { navigate('/#contact'); } }} className={`px-6 py-2 text-sm font-bold uppercase tracking-wider active:scale-95 transition-all rounded-full ${scrolled ? 'border-2 border-volt-black hover:bg-volt-black hover:text-white' : 'bg-volt-lime text-volt-black hover:bg-white'}`}>
                            Free Quote
                        </button>
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="lg:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className={`transition-colors ${scrolled ? 'text-volt-black' : 'text-white'}`}>
                            {isOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="lg:hidden bg-volt-black text-white p-6 space-y-5 min-h-screen"
                    >
                        <Link to="/" onClick={() => setIsOpen(false)} className="block text-lg font-bold uppercase tracking-wider hover:text-volt-lime transition-colors">Home</Link>
                        <Link to="/#about" onClick={() => setIsOpen(false)} className="block text-lg font-bold uppercase tracking-wider hover:text-volt-lime transition-colors">About</Link>

                        {/* Mobile Services Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider"
                            >
                                Services <ChevronDown size={14} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden mt-2 ml-4 space-y-3"
                                    >
                                        {services.map((s) => (
                                            <Link
                                                key={s.path}
                                                to={s.path}
                                                onClick={() => { setIsOpen(false); setMobileServicesOpen(false); }}
                                                className="block text-sm font-medium hover:text-volt-lime transition-colors"
                                            >
                                                — {s.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Mobile Color Charts Accordion */}
                        <div>
                            <button
                                onClick={() => setMobileChartsOpen(!mobileChartsOpen)}
                                className="flex items-center justify-between w-full text-sm font-bold uppercase tracking-wider"
                            >
                                Color Charts <ChevronDown size={14} className={`transition-transform ${mobileChartsOpen ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {mobileChartsOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden mt-2 ml-4 space-y-3"
                                    >
                                        {colorCharts.map((c) => (
                                            <a
                                                key={c.name}
                                                href={c.url}
                                                target="_blank"
                                                rel="noreferrer"
                                                onClick={() => { setIsOpen(false); setMobileChartsOpen(false); }}
                                                className="block text-sm font-medium hover:text-volt-lime transition-colors"
                                            >
                                                — {c.name}
                                            </a>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        <button onClick={() => { setIsOpen(false); if (location.pathname === '/') { setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); } else { navigate('/#contact'); } }} className="block text-sm font-bold uppercase tracking-wider text-left">Contact</button>
                        <button onClick={() => { setIsOpen(false); if (location.pathname === '/') { setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 300); } else { navigate('/#contact'); } }} className="block w-full bg-volt-lime text-volt-black px-6 py-4 text-sm font-bold uppercase tracking-wider text-center active:scale-95 transition-all rounded-lg">
                            Free Quote
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export const Footer = () => {
    return (
        <footer className="bg-volt-black text-white py-12 sm:py-16 md:py-24">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-12 md:mb-24">
                    <div className="col-span-1">
                        <img src="/Logo.png" alt="First State Epoxy" className="h-16 object-contain mb-6 brightness-0 invert" />
                        <p className="text-sm font-bold uppercase tracking-widest opacity-60">
                            Quality Epoxy & Concrete Flooring<br />Serving Delaware & Surrounding Areas
                        </p>
                    </div>

                    <div>
                        <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Services</h4>
                        <ul className="space-y-3 text-sm sm:text-base">
                            {services.map((s) => (
                                <li key={s.path}>
                                    <Link to={s.path} className="hover:text-volt-lime transition-colors">{s.name}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Company</h4>
                        <ul className="space-y-3 text-sm sm:text-base">
                            <li><Link to="/" className="hover:text-volt-lime transition-colors">Home</Link></li>
                            <li><Link to="/#about" className="hover:text-volt-lime transition-colors">About</Link></li>
                            <li><Link to="/#services" className="hover:text-volt-lime transition-colors">Services</Link></li>
                            <li><Link to="/#contact" className="hover:text-volt-lime transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-volt-lime text-xs font-black uppercase tracking-widest mb-8">Connect</h4>
                        <div className="flex space-x-6 mb-6">
                            <a href="https://www.facebook.com/FirstStateEpoxyLLC" target="_blank" rel="noreferrer" className="hover:text-volt-lime transition-colors"><Facebook /></a>
                            <a href="https://www.instagram.com/first_state_epoxy_llc" target="_blank" rel="noreferrer" className="hover:text-volt-lime transition-colors"><Instagram /></a>
                        </div>
                        <div className="space-y-3 mb-8">
                            <div className="flex items-center gap-3 opacity-60 text-sm">
                                <Phone size={14} /><a href="tel:3026760123" className="hover:opacity-100">(302) 676-0123</a>
                            </div>
                            <div className="flex items-center gap-3 opacity-60 text-sm">
                                <Mail size={14} /><a href="mailto:kevinfirststateepoxy@gmail.com" className="hover:opacity-100 break-all">kevinfirststateepoxy@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-3 opacity-60 text-sm">
                                <MapPin size={14} /><span>Smyrna, DE 19977</span>
                            </div>
                        </div>
                        <a
                            href="https://www.bbb.org/us/de/middletown/profile/epoxy-floor-coating/first-state-epoxy-llc-0251-92020815"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-block mb-6 opacity-80 hover:opacity-100 transition-opacity"
                        >
                            <img
                                src="https://firststateepoxy.com/wp-content/uploads/2022/08/BBB_Accredited_Business_A_Rating-300x119.png"
                                alt="BBB Accredited Business A+ Rating"
                                className="h-12 object-contain"
                            />
                        </a>
                        <Link to="/#contact" className="block w-full bg-volt-lime text-volt-black py-4 font-black uppercase tracking-widest hover:bg-white active:scale-95 transition-all text-center">
                            Request Quote
                        </Link>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-[10px] uppercase font-bold tracking-widest opacity-40">© First State Epoxy and Flooring 2026 | All Rights Reserved</p>
                    <div className="flex items-center gap-6">
                        <Link to="/admin" className="text-[10px] uppercase font-bold tracking-widest opacity-20 hover:opacity-60 transition-opacity">Admin</Link>
                        <button className="text-[10px] uppercase font-bold tracking-widest opacity-40 hover:opacity-100 flex items-center gap-2" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
                            To Top <ArrowRight className="-rotate-90" size={12} />
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
};
