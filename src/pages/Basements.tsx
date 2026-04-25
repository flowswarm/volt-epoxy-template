import ServicePageTemplate from "../components/ServicePageTemplate";

const Basements = () => (
    <ServicePageTemplate
        title="Basements"
        subtitle="Transform Your Basement Into a Haven of Comfort & Elegance"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-basements.jpeg"
        description="Transform your basement into a haven of comfort and elegance with our cutting-edge interior residential flooring solutions. Unlike conventional floor coverings, our offerings redefine flooring excellence — providing remarkable durability to withstand heavy foot and pet traffic, ensuring longevity that exceeds expectations."
        benefits={[
            "Durability Beyond Expectations — Handles heavy foot and pet traffic with ease",
            "Effortless Maintenance — Simple to clean and keep looking brand new",
            "Design Freedom — Wide range of colors, textures, and patterns to choose from",
            "Moisture Resistant — Protects against basement dampness and humidity",
            "Seamless Surface — No grout lines or joints for dirt and mold to hide",
            "Elevated Comfort — Transforms an ordinary space into a premium living area",
        ]}
        sections={[
            {
                heading: "Practicality Meets Aesthetics",
                body: "Revolutionize your basement with flooring solutions that unite practicality, aesthetics, and endurance. Experience the elevated comfort of spaces that adapt seamlessly to your lifestyle and vision — offering a new level of elegance that stands the test of time.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/basement-1-e1661898782951.jpeg",
            },
            {
                heading: "Perfect for Any Use Case",
                body: "Whether you're finishing your basement as a home theater, gym, playroom, or extra living space, our epoxy flooring solutions are designed to adapt. Durable enough for everyday use yet beautiful enough to impress any guest.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/basement-2-e1661898755477.jpeg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/cropped-basements.jpeg", alt: "Basement epoxy floor" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/garage-2-e1661898732677.jpeg", alt: "Basement garage floor" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/basement-2-e1661898755477.jpeg", alt: "Basement epoxy 2" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/basement-1-e1661898782951.jpeg", alt: "Basement epoxy 1" },
        ]}
    />
);

export default Basements;
