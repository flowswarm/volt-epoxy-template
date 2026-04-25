import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";
import { Navbar, Footer } from "./Layout";

export interface ServicePageProps {
    title: string;
    subtitle: string;
    heroImage: string;
    description: string;
    benefits: string[];
    sections?: { heading: string; body: string; img?: string }[];
    gallery: { src: string; alt: string }[];
}

const ServicePageTemplate = ({
    title,
    subtitle,
    heroImage,
    description,
    benefits,
    sections = [],
    gallery,
}: ServicePageProps) => {
    return (
        <div className="min-h-screen">
            <Navbar />

            {/* Hero Banner */}
            <section className="relative pt-20 h-[40vh] sm:h-[50vh] md:h-[55vh] min-h-[300px] md:min-h-[400px] overflow-hidden">
                <img
                    src={heroImage}
                    alt={title}
                    className="absolute inset-0 w-full h-full object-cover brightness-40"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-volt-black/80 to-transparent" />
                <div className="relative z-10 h-full flex flex-col justify-end max-w-7xl mx-auto px-4 pb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                    >
                        <p className="text-volt-lime text-xs font-black uppercase tracking-widest mb-3">First State Epoxy & Flooring</p>
                        <h1 className="text-3xl sm:text-4xl md:text-7xl text-white leading-none mb-4">{title}</h1>
                        <div className="h-1 w-24 bg-volt-lime" />
                    </motion.div>
                </div>
            </section>

            {/* Intro + Benefits */}
            <section className="py-12 sm:py-16 md:py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-start">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <p className="text-xs font-black uppercase tracking-widest text-volt-lime mb-4">Overview</p>
                            <h2 className="text-2xl md:text-4xl leading-tight mb-4 md:mb-6">{subtitle}</h2>
                            <p className="text-base md:text-lg leading-relaxed opacity-70 mb-6 md:mb-8">{description}</p>

                            <a
                                href="/#contact"
                                className="inline-flex items-center justify-center bg-volt-lime text-black px-8 py-4 font-black uppercase tracking-wider hover:bg-black hover:text-white transition-all gap-2"
                            >
                                Free Quote <ArrowRight className="w-5 h-5" />
                            </a>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-4"
                        >
                            <p className="text-xs font-black uppercase tracking-widest mb-6">Key Benefits</p>
                            {benefits.map((b, i) => (
                                <div key={i} className="flex items-start gap-4 p-4 border border-black/5 group hover:border-volt-lime transition-all">
                                    <CheckCircle2 size={20} className="text-volt-lime mt-0.5 shrink-0" />
                                    <span className="font-medium">{b}</span>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Dynamic Content Sections */}
            {sections.length > 0 && (
                <section className="bg-volt-gray py-24">
                    <div className="max-w-7xl mx-auto px-4 space-y-24">
                        {sections.map((sec, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className={`flex flex-col ${sec.img ? "md:flex-row" : ""} items-center gap-12`}
                            >
                                {sec.img && i % 2 === 0 && (
                                    <div className="w-full md:w-1/2 overflow-hidden">
                                        <img src={sec.img} alt={sec.heading} className="w-full h-72 object-cover" />
                                    </div>
                                )}
                                <div className={sec.img ? "w-full md:w-1/2" : "w-full"}>
                                    <div className="h-1 w-12 bg-volt-lime mb-4" />
                                    <h3 className="text-2xl md:text-3xl mb-4">{sec.heading}</h3>
                                    <p className="text-lg leading-relaxed opacity-70">{sec.body}</p>
                                </div>
                                {sec.img && i % 2 !== 0 && (
                                    <div className="w-full md:w-1/2 overflow-hidden">
                                        <img src={sec.img} alt={sec.heading} className="w-full h-72 object-cover" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </section>
            )}

            {/* CTA Strip */}
            <section className="bg-volt-lime py-12 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
                    <div>
                        <h2 className="text-2xl sm:text-3xl md:text-5xl leading-none mb-2">Let's get started<br />on your project!</h2>
                        <p className="text-sm font-bold uppercase tracking-widest opacity-60">No obligation — fast, free quotes.</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="tel:3026760123" className="flex items-center gap-2 bg-white text-volt-black px-8 py-4 font-black uppercase tracking-wider hover:scale-105 transition-transform">
                            <Phone size={18} /> (302) 676-0123
                        </a>
                        <Link to="/#contact" className="bg-volt-black text-white px-8 py-4 font-black uppercase tracking-wider hover:scale-105 transition-transform flex items-center gap-2">
                            Request a Quote <ArrowRight size={18} />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            {gallery.length > 0 && (
                <section className="py-12 sm:py-16 md:py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="flex items-center justify-between mb-12 border-b-2 border-volt-black pb-4">
                            <h2 className="text-2xl tracking-widest">Gallery</h2>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
                            {gallery.map((img, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.05 }}
                                    className="overflow-hidden aspect-square group"
                                >
                                    <img
                                        src={img.src}
                                        alt={img.alt}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            <Footer />
        </div>
    );
};

export default ServicePageTemplate;
