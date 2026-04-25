import { useRef, useEffect, useState, type ReactNode } from "react";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale-in" | "fade-down";

interface ScrollRevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  className?: string;
  stagger?: number; // ms between children
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

const variantStyles: Record<Variant, { from: string; to: string }> = {
  "fade-up":    { from: "opacity-0 translate-y-10", to: "opacity-100 translate-y-0" },
  "fade-down":  { from: "opacity-0 -translate-y-10", to: "opacity-100 translate-y-0" },
  "fade-left":  { from: "opacity-0 -translate-x-10", to: "opacity-100 translate-x-0" },
  "fade-right": { from: "opacity-0 translate-x-10", to: "opacity-100 translate-x-0" },
  "scale-in":   { from: "opacity-0 scale-95", to: "opacity-100 scale-100" },
};

export const ScrollReveal = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  className = "",
  threshold = 0.15,
  as: Tag = "div",
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style = variantStyles[variant];
  const Component = Tag as any;

  return (
    <Component
      ref={ref}
      className={`transition-all ease-out-expo ${visible ? style.to : style.from} ${className}`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </Component>
  );
};

// Stagger container — wraps children with incremental delays
export const StaggerReveal = ({
  children,
  stagger = 100,
  variant = "fade-up" as Variant,
  className = "",
  threshold = 0.1,
}: {
  children: ReactNode[];
  stagger?: number;
  variant?: Variant;
  className?: string;
  threshold?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold, rootMargin: "0px 0px -40px 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  const style = variantStyles[variant];

  return (
    <div ref={ref} className={className}>
      {(children as ReactNode[]).map((child, i) => (
        <div
          key={i}
          className={`transition-all ease-out-expo ${visible ? style.to : style.from}`}
          style={{
            transitionDuration: "700ms",
            transitionDelay: `${i * stagger}ms`,
          }}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default ScrollReveal;
