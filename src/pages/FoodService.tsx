import ServicePageTemplate from "../components/ServicePageTemplate";

const FoodService = () => (
    <ServicePageTemplate
        title="Restaurant & Kitchen Flooring"
        subtitle="Commercial Kitchen & Restaurant Flooring in Delaware"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-1.jpg"
        description="Running a restaurant means constant movement — from spills and cleanups to steam, heat, and heavy foot traffic. At First State Epoxy, we install durable, hygienic flooring systems designed specifically for the food and beverage industry. Whether you're a small café in Wilmington, a large commercial kitchen in Dover, or a brewery in Newark, we deliver flooring that's safe, compliant, and built to last."
        benefits={[
            "Slip-Resistant — Even when wet or greasy, our surfaces grip every step",
            "Antimicrobial & Seamless — No cracks, joints, or grout lines for bacteria to hide",
            "Stain & Chemical Resistant — Handles oils, acids, cleaning products, and food waste",
            "Thermal Shock Resistant — Won't crack during hot water or steam cleaning",
            "USDA & FDA Compliant — Fully approved for food-prep environments",
            "Faster Installs — Get back to serving customers as quickly as possible",
        ]}
        sections={[
            {
                heading: "Built for the Back & Front of House",
                body: "Our food-service flooring systems are ideal for commercial kitchens and prep areas, walk-in freezers and coolers, dishwashing zones and utility rooms, cafeterias, dining halls, and bars, as well as bakeries, breweries, and production lines. No space is too demanding.",
                img: "https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-12png.png",
            },
            {
                heading: "Outlasts Tile, Thin Coatings & Paint",
                body: "Compared to tile, thin-mil coatings, or painted floors, our resinous flooring offers better impact resistance, a seamless surface with no grout for mold, a longer lifespan with less downtime, and faster install times so you can get back to serving customers ASAP.",
                img: "https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-3.jpg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-1.jpg", alt: "Restaurant flooring Delaware 1" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-12png.png", alt: "Restaurant flooring Delaware 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2026/01/restauraunt-flooring-delaware-3.jpg", alt: "Restaurant flooring Delaware 3" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-Food-Service.jpeg", alt: "Food service epoxy floor" },
        ]}
    />
);

export default FoodService;
