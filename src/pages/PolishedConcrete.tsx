import ServicePageTemplate from "../components/ServicePageTemplate";

const PolishedConcrete = () => (
    <ServicePageTemplate
        title="Polished & Stained Concrete"
        subtitle="Polished and Stained Concrete Flooring in Delaware"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2022/08/polished-2-e1661899380405.jpeg"
        description="Elevate your spaces with the timeless allure of polished concrete surfaces. Discover a harmonious blend of aesthetics and durability that transforms interiors. If you're a business owner in Delaware looking for durable, low-maintenance, and visually striking flooring, polished and stained concrete is the gold standard."
        benefits={[
            "Superior Durability — Withstands forklifts, foot traffic, and heavy equipment",
            "Low Maintenance — No waxes or coatings needed, just a sleek easy-to-clean surface",
            "Sustainable Choice — Leverages your existing slab with a long-lasting finish",
            "Stunning Appearance — Choose high-gloss polishing or vibrant concrete stains",
            "Versatile Aesthetics — Earthy tones, bold colors, or marbled effects available",
            "Cost-Effective Solution — Long lifespan with minimal upkeep costs",
        ]}
        sections={[
            {
                heading: "Why Choose Polished & Stained Concrete Floors?",
                body: "At First State Epoxy, we specialize in concrete polishing and decorative staining for warehouses, retail showrooms, commercial kitchens, and industrial facilities across Wilmington, Newark, Dover, Rehoboth Beach, and throughout New Castle County. Whether you're revamping a high-traffic space or want a custom aesthetic for your facility, our expert team delivers flooring that works as hard as you do.",
                img: "https://firststateepoxy.com/wp-content/uploads/2025/07/Photo-1-PS-Concrete-2.png",
            },
            {
                heading: "Custom Staining Options for a Unique Look",
                body: "With stained concrete, you're not just getting durability — you're getting art. Our acid- or water-based stains offer earthy tones, bold colors, or marbled effects, glossy or matte sealing options, and logos and border effects. Let your Newark storefront or Dover facility stand out from the competition with personalized floors built to impress.",
                img: "https://firststateepoxy.com/wp-content/uploads/2025/07/Photo-2-PS-Color-Choices-scaled.jpg",
            },
            {
                heading: "Perfect for Commercial & Industrial Settings",
                body: "We proudly serve commercial businesses across all industries — auto dealerships and mechanic shops, manufacturing plants, office buildings, grocery stores and restaurants, retail showrooms, and storage and logistics facilities. Need your Rehoboth Beach café to pop or a Wilmington warehouse floor that's tough as nails? We've got you covered.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-4-e1661899408228.jpeg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-2-e1661899380405.jpeg", alt: "Polished concrete floor" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2025/07/Photo-1-PS-Concrete-2.png", alt: "Polished concrete 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-4-e1661899408228.jpeg", alt: "Polished concrete 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-6-e1661899436371.jpeg", alt: "Polished concrete 6" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/polished-9-e1661899474847.jpeg", alt: "Polished concrete 9" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2025/07/first-state-epoxy-Concrete-Gray-2-scaled.png", alt: "Concrete gray" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2025/07/Photo-2-PS-Color-Choices-scaled.jpg", alt: "Stain color choices" },
        ]}
    />
);

export default PolishedConcrete;
