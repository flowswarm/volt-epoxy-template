import ServicePageTemplate from "../components/ServicePageTemplate";

const Commercial = () => (
    <ServicePageTemplate
        title="Commercial & Retail"
        subtitle="Tailored Flooring for Commercial & Retail Spaces"
        heroImage="https://firststateepoxy.com/wp-content/uploads/2023/09/cropped-commercial.jpeg"
        description="Elevate your commercial and retail spaces with our tailored flooring solutions that seamlessly blend design versatility and durability. Our fluid-applied surfaces redefine commercial flooring — engineered for compliance, achieving the coefficients of friction to surpass ADA, OSHA, and NFPA standards."
        benefits={[
            "ADA, OSHA & NFPA Compliant — Meets all safety and access standards",
            "Remarkable Durability — Engineered for high-traffic environments",
            "Antimicrobial Surfaces — Hygienic and easy to maintain",
            "Chemical & Stain Resistant — Handles spills and industrial cleaners",
            "Brand Integration — Incorporate your logo and company colors",
            "Cost-Effective — A superior alternative to conventional VCT flooring",
        ]}
        sections={[
            {
                heading: "Typical Areas of Use",
                body: "Our commercial flooring solutions are ideal for retail stores, shopping malls, commercial complexes, offices, and any high-traffic commercial environment. We adapt our systems to fit your unique space, budget, and compliance needs.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-1-e1661898057885.jpeg",
            },
            {
                heading: "Exceptional Value & Longevity",
                body: "Our coatings are available in new constructions or existing floors, encompassing adjustable slip resistance coefficients that ensure safety aligns with your needs. As a cost-effective alternative to conventional VCT, our flooring offers exceptional longevity with minimal downtime during installation.",
                img: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-5-e1661898128538.jpeg",
            },
        ]}
        gallery={[
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-3-e1661898082381.jpeg", alt: "Commercial epoxy floor 3" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-1-e1661898057885.jpeg", alt: "Commercial epoxy floor 1" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-5-e1661898128538.jpeg", alt: "Commercial epoxy floor 5" },
            { src: "https://firststateepoxy.com/wp-content/uploads/2022/08/commercial-8-e1661898157354.jpeg", alt: "Commercial epoxy floor 8" },
        ]}
    />
);

export default Commercial;
