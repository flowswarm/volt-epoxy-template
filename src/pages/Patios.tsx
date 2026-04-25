import ServicePageTemplate from "../components/ServicePageTemplate";

const Patios = () => (
    <ServicePageTemplate
        title="Patios & Sidewalks"
        subtitle="Enduring Outdoor Coatings with Boundless Design Options"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2022/08/patio-9-e1661898451528.jpeg"
        description="Discover a world of possibilities for your patios and sidewalks with our enduring coatings that offer a boundless array of designs, textures, and colors. Our innovative products address surface deterioration — presenting a cost-effective solution that eliminates the need for concrete tear-out and repour."
        benefits={[
            "Wide Selection of Colors, Patterns & Textures — Endless design options",
            "Durable & Long-Lasting — Engineered to endure the elements year after year",
            "Easy to Clean & Maintain — Simple upkeep for a pristine appearance",
            "Abrasion & Chemical Resistant — Stands up to foot traffic, de-icers, and spills",
            "UV Resistant — Won't fade or discolor under direct sunlight",
            "Slip Resistant — Safe in both wet and dry conditions",
        ]}
        sections={[
            {
                heading: "Built for Every Climate",
                body: "Our coatings remain resilient against water damage, freeze/thaw conditions, and the corrosive effects of de-icing salts — perfect for Delaware's climate. Whether applied to new or existing concrete surfaces, our coatings provide a secure and stunning environment for any weather.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-7-e1661898436303.jpeg",
            },
            {
                heading: "Elevate Your Outdoor Living",
                body: "Transform your existing concrete surfaces with coatings that minimize downtime during installation. Enjoy quick installation options, the ability to mitigate surface temperatures in warmer climates, and a finished look that transforms your outdoor living space into an extension of your home.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-4-e1661898478105.jpeg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-9-e1661898451528.jpeg", alt: "Patio epoxy 9" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-4-e1661898478105.jpeg", alt: "Patio epoxy 4" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-7-e1661898436303.jpeg", alt: "Patio epoxy 7" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/patio-8-e1661898420191.jpeg", alt: "Patio epoxy 8" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-patios.jpeg", alt: "Patios overview" },
        ]}
    />
);

export default Patios;
