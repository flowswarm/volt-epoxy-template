import ServicePageTemplate from "../components/ServicePageTemplate";

const StrippingWaxing = () => (
    <ServicePageTemplate
        title="Stripping & Waxing"
        subtitle="Professional Stripping & Waxing Services for VCT Floors"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2023/01/IMG_2445.png"
        description="We service business offices, storefronts, recreational spaces, medical facilities, daycare centers, vet clinics, school gyms, warehouses, and professional buildings with VCT tiles. Our complete strip and wax process restores your floors to a sparkling, professional finish that leaves a lasting impression."
        benefits={[
            "Complete Floor Stripping — Removes old wax, dirt, and grime down to bare tile",
            "High-Quality Sealant — Buffed to a sparkling shine for extended VCT wear",
            "Industrial Grade Wax — Deep, rich protective glow that makes floors shine like new",
            "Reduces Marks & Scratches — Sealer and gloss finish protect against daily wear",
            "Guards Against Soil Penetration — Creates a barrier against dirt and stains",
            "Professional Appearance — Maintains clean, attractive flooring year-round",
        ]}
        sections={[
            {
                heading: "Our Three-Step Process",
                body: "Our floor stripping and waxing services are completed in three proven steps: First, we strip the floors to remove all top coatings, wax buildup, dirt, and grime — leaving the floors completely bare. Second, we seal the surface with a high-quality sealer and buff it to a sparkling shine, extending the wear of your VCT flooring. Third, we apply our industrial-grade VCT floor finish that gives your floors a deep, rich protective glow.",
                img: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-IMG_2511-300x300.png",
            },
            {
                heading: "Industrial & Commercial Hard Flooring Maintenance",
                body: "Daily cleaning is crucial to maintaining a professional appearance and preserving the integrity of hard surface flooring in your business. Over time, your floor can lose its luster as customers, employees, and visitors track dirt, dust, and debris into your building. Professional floor maintenance goes beyond regular sweeping to maintain a clean, attractive, and shiny appearance throughout the year. High-traffic areas are especially prone to dirt buildup that can leave an otherwise beautiful floor looking neglected.",
                img: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-IMG_2500-300x300.png",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/IMG_2445.png", alt: "VCT floor stripping and waxing" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-IMG_2511-300x300.png", alt: "Stripped and waxed floor 1" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-IMG_2500-300x300.png", alt: "Stripped and waxed floor 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/image2-300x200.jpeg", alt: "Floor waxing result" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-783B7B62-E27E-4DE2-B0EF-4CFF6D3D1B92-300x300.jpg", alt: "VCT waxing before after" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-B60E79D6-7257-46EC-8776-633CD9753B2A-300x300.jpg", alt: "Professional floor shine" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2023/01/cropped-948A3A64-A463-4FAF-8E48-BABAFEF25442-300x300.jpg", alt: "Floor maintenance result" },
        ]}
    />
);

export default StrippingWaxing;
