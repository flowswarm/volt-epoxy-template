import ServicePageTemplate from "../components/ServicePageTemplate";

const Garages = () => (
    <ServicePageTemplate
        title="Garage Floors"
        subtitle="Durable & Aesthetic Garage Floors for Every Delaware Home"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2026/01/garages-flooring-delaware.jpg"
        description="Tired of looking at a dull, cracked, or stained garage floor? At First State Epoxy, we help homeowners across Delaware transform their garages into clean, durable, and high-performing spaces. Whether you're in Wilmington, Dover, or along the beaches in Rehoboth, our custom floor coatings handle daily wear while boosting your home's appearance and value."
        benefits={[
            "Slip-Resistant for Safety — Ideal for wet shoes, snowy boots, or spilled fluids",
            "Stain & Chemical Resistant — No more oil stains or de-icing salt damage",
            "High-End Look — Choose from flake, metallic, or solid color systems",
            "Easy to Clean — Dust, dirt, and debris wipe away with minimal effort",
            "Protects Concrete — Seals and strengthens your slab against cracking",
            "UV-Stable Options — Won't yellow or fade in sunlight",
        ]}
        sections={[
            {
                heading: "Custom Finishes to Match Your Style",
                body: "Your garage doesn't have to look like everyone else's. Choose from decorative flake systems for a classic granite look, solid colors or two-tone effects, high-gloss, matte, or satin topcoats, and UV-stable options. We'll help you find the perfect finish that reflects your home's character.",
                img: "https://firststateepoxy.com/wp-content/uploads/2026/01/garage-floors-delaware.jpg",
            },
            {
                heading: "Serving Homeowners Across Delaware",
                body: "We proudly install garage epoxy floors in Wilmington garages with heavy daily traffic, Newark homes looking for a cleaner workspace, Dover families using their garage as a gym or hangout space, Rehoboth Beach residents needing weather-resistant protection, and throughout Middletown, New Castle, and beyond.",
                img: "https://firststateepoxy.com/wp-content/uploads/2026/01/epoxy-garage-flooring-delaware.jpg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/garage-9-e1661898872407.jpeg", alt: "Garage epoxy floor 9" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/garage-5-e1661898795106.jpeg", alt: "Garage epoxy floor 5" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/garage-4-e1661898769696.jpeg", alt: "Garage epoxy floor 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-garages.jpeg", alt: "Garage epoxy overview" },
        ]}
    />
);

export default Garages;
