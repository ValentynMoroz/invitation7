import { useEffect, useRef, useState, type ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

type FadeInProps = {
  children: ReactNode;
  direction?: Direction;
  duration?: string; // в мілісекундах
};

export default function FadeIn({ children, direction = "up", duration = "1000" }: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // напрям зміщення
  const directionClasses: Record<Direction, string> = {
    up: "translate-y-12",
    down: "-translate-y-12",
    left: "translate-x-12",
    right: "-translate-x-12",
  };
  console.log(`${duration}ms`);
  return (
    <div
      style={{ transitionDuration: `${duration}ms` }}
      ref={ref}
      className={`transition-all ease-out transform  ${
        isVisible ? "opacity-100 translate-x-0 translate-y-0" : `opacity-0 ${directionClasses[direction]}`
      }`}>
      {children}
    </div>
  );
}
