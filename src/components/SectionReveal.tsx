"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type SectionRevealProps = {
  children: ReactNode;
  className?: string;
};

export default function SectionReveal({ children, className = "" }: SectionRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={elementRef} className={`section-reveal ${isVisible ? "is-visible" : ""} ${className}`}>
      {children}
    </div>
  );
}
