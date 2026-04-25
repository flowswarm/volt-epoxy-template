import ServicePageTemplate from "../components/ServicePageTemplate";

const FirstResponder = () => (
    <ServicePageTemplate
        title="First Responder Facilities"
        subtitle="Fire Stations, EMS & Rescue Facility Flooring"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2023/07/cropped-fire-stattion-epoxy-floor-2.jpeg"
        description="When it comes to uncompromising strength and performance, our First State Epoxy & Flooring services are second to none. We specialize in epoxy flooring for fire stations, EMS, and rescue facilities — delivering a surface that is as hardworking as the dedicated crew protecting our communities."
        benefits={[
            "Moisture Resistant — Built for wet, high-humidity environments",
            "Extremely Durable — Handles heavy loads, impact, and constant abrasion",
            "Low Maintenance — Easy to clean and keep in pristine condition",
            "Enhanced Safety — Slip-resistant surface prevents accidents and injuries",
            "Chemical Resistance — Protects against hazardous spills common in firehouses",
            "Customization Options — Vibrant colors to match your facility's aesthetic",
        ]}
        sections={[
            {
                heading: "Unmatched Durability",
                body: "Our epoxy flooring withstands heavy loads, impact, and abrasion, ensuring long-lasting performance and reduced maintenance costs in the most demanding first responder environments.",
                img: "https://firststateepoxy.com/wp-content/uploads/2023/07/cropped-ems-epoxy-flooring-3.jpeg",
            },
            {
                heading: "Designed for Busy Firehouses",
                body: "Your surface requires a unique flooring solution that can withstand heavy equipment, constant foot traffic, and potential chemical spills. We use products engineered to endure these challenges effortlessly, providing a long-lasting and easy-to-maintain surface that supports the demanding work carried out in fire stations, EMS bays, and rescue facilities.",
                img: "https://firststateepoxy.com/wp-content/uploads/2023/07/cropped-fire-station-epoxy-flooring-scaled-1.jpg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring-3-768x1024.jpg", alt: "Fire station epoxy floor" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring-2-1024x768.jpg", alt: "Fire station epoxy floor 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring-769x1024.jpeg", alt: "Fire station epoxy floor 3" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring-4-768x1024.jpg", alt: "Fire station epoxy floor 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooing-5-1024x768.jpg", alt: "Fire station epoxy floor 5" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-1-769x1024.jpeg", alt: "EMS epoxy flooring 1" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-2-769x1024.jpeg", alt: "EMS epoxy flooring 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-3-1-769x1024.jpeg", alt: "EMS epoxy flooring 3" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/ems-epoxy-flooring-4-473x1024.jpeg", alt: "EMS epoxy flooring 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-station-epoxy-flooring-6-768x1024.jpg", alt: "Fire station epoxy floor 6" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-stattion-epoxy-floor-1-1024x768.jpeg", alt: "Fire station epoxy floor alt 1" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-stattion-epoxy-floor-3-1024x768.jpeg", alt: "Fire station epoxy floor alt 3" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-stattion-epoxy-floor-4-1024x768.jpeg", alt: "Fire station epoxy floor alt 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/07/fire-stattion-epoxy-floor-5-1-1024x768.jpeg", alt: "Fire station epoxy floor alt 5" },
        ]}
    />
);

export default FirstResponder;
