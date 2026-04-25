import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface WorkItem {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
}

const placeholderWorks: WorkItem[] = [
    {
        id: "1",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2022/09/IMG_532462-rotated-e1662048666696.jpg",
        title: "Residential Garage",
        description: "A complete transformation of a standard two-car garage featuring our durable, stain-resistant flake system in a custom color blend.",
    },
    {
        id: "2",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-1.jpeg",
        title: "Commercial Retail Space",
        description: "High-traffic commercial epoxy installation providing a seamless, high-gloss finish that's both slip-resistant and incredibly easy to maintain.",
    },
    {
        id: "3",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-2.jpeg",
        title: "Industrial Workshop",
        description: "Heavy-duty solid color epoxy coating designed to withstand dropped tools, chemical spills, and heavy machinery wear and tear.",
    },
    {
        id: "4",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring.jpeg",
        title: "First Responder Facility",
        description: "A custom installation for a local firehouse, requiring a rapid cure time and extreme durability for heavy vehicles and equipment.",
    },
    {
        id: "5",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-4.jpeg",
        title: "Showroom Floor",
        description: "A brilliant, high-sheen epoxy floor installed to showcase products effectively while providing a long-lasting, easy-to-clean environment.",
    },
    {
        id: "6",
        imageUrl: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-stattion-epoxy-floor-1.jpeg",
        title: "Heavy Equipment Bay",
        description: "This specialized epoxy coating provides a rugged surface that easily supports the weight and wear of heavy-duty municipal vehicles.",
    }
];

export const OurWork = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (selectedWork) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedWork]);

    const scroll = (direction: "left" | "right") => {
        if (!scrollContainerRef.current) return;

        const scrollAmount = window.innerWidth > 768 ? 600 : 300;
        const targetScroll = scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount);

        scrollContainerRef.current.scrollTo({
            left: targetScroll,
            behavior: "smooth"
        });
    };

    return (
        <section className="bg-volt-black py-16 sm:py-24 md:py-32 relative text-white">
            <div className="max-w-[100vw] overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 mb-16 flex items-end justify-between">
                    <div>
                        <p className="text-volt-lime text-xs font-black uppercase tracking-widest mb-4">Portfolio</p>
                        <h2 className="text-2xl sm:text-4xl md:text-6xl uppercase leading-none font-bold">Discover<br />Our Work</h2>
                    </div>

                    <div className="hidden md:flex gap-4">
                        <button
                            onClick={() => scroll("left")}
                            className="w-14 h-14 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-volt-lime hover:text-volt-lime active:scale-95 transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={() => scroll("right")}
                            className="w-14 h-14 border-2 border-white/20 flex items-center justify-center rounded-full hover:border-volt-lime hover:text-volt-lime active:scale-95 transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrolling Gallery */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto px-4 md:px-safe-area-inset snap-x snap-mandatory hide-scrollbar"
                    style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                >
                    {/* Padding block for left alignment equivalent to container margin */}
                    <div className="min-w-[max(0px,calc((100vw-80rem)/2))] shrink-0" />

                    {placeholderWorks.map((work) => (
                        <motion.div
                            key={work.id}
                            className="relative w-[260px] sm:w-[300px] md:w-[500px] aspect-[4/5] md:aspect-square shrink-0 snap-center md:snap-start cursor-pointer group"
                            onClick={() => setSelectedWork(work)}
                            whileHover={{ scale: 0.98 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="absolute inset-0 bg-volt-black/20 group-hover:bg-transparent transition-colors z-10" />
                            <img
                                src={work.imageUrl}
                                alt={work.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute bottom-0 left-0 p-4 sm:p-8 z-20 md:translate-y-4 md:opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                                <h3 className="text-lg sm:text-2xl font-bold uppercase">{work.title}</h3>
                                <div className="w-12 h-1 bg-volt-lime mt-4" />
                            </div>
                        </motion.div>
                    ))}

                    {/* Padding block for right scrolling room */}
                    <div className="min-w-[max(0px,calc((100vw-80rem)/2))] shrink-0" />
                </div>
            </div>

            {/* Mobile Scroll Controls */}
            <div className="flex md:hidden justify-center gap-4 mt-8 px-4">
                <button
                    onClick={() => scroll("left")}
                    className="w-12 h-12 border-2 border-white/20 flex items-center justify-center rounded-full active:bg-white/10 active:scale-95 transition-all"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={20} />
                </button>
                <button
                    onClick={() => scroll("right")}
                    className="w-12 h-12 border-2 border-white/20 flex items-center justify-center rounded-full active:bg-white/10 active:scale-95 transition-all"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={20} />
                </button>
            </div>

            {/* Expanded Image Modal */}
            <AnimatePresence>
                {selectedWork && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-volt-black/95 backdrop-blur-sm"
                        onClick={() => setSelectedWork(null)}
                    >
                        <button
                            className="absolute top-6 right-6 md:top-12 md:right-12 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-volt-lime hover:text-black rounded-full active:scale-95 transition-all z-[110]"
                            aria-label="Close modal"
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedWork(null);
                            }}
                        >
                            <X size={24} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 300 }}
                            className="relative max-w-5xl w-full bg-volt-gray md:flex flex-col md:flex-row overflow-hidden rounded-sm shadow-2xl"
                            onClick={(e) => e.stopPropagation()} // Prevent clicks inside from closing
                        >
                            <div className="w-full md:w-2/3 h-[40vh] md:h-[70vh]">
                                <img
                                    src={selectedWork.imageUrl}
                                    alt={selectedWork.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <div className="w-full md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white text-volt-black">
                                <h3 className="text-2xl sm:text-3xl lg:text-5xl uppercase font-bold leading-none mb-4 md:mb-6">
                                    {selectedWork.title}
                                </h3>
                                <div className="w-16 h-1 bg-volt-lime mb-8" />
                                <p className="text-lg leading-relaxed opacity-70">
                                    {selectedWork.description}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
