import { useEffect, useRef, useState } from "react";

interface PoemProps {
  title?: string;
  author?: string;
  lines: string[];
  className?: string;
}

const Poem = ({ title, author, lines, className = "" }: PoemProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
    >
      {title && (
        <header className="mb-8">
          <h2 className="poetry-title text-muted-foreground tracking-widest">
            {title}
          </h2>
        </header>
      )}
      
      <div className="poetry-text text-xl md:text-2xl text-foreground/90">
        {lines.map((line, index) => (
          <p key={index} className={`${line === "" ? "h-6" : ""}`}>
            {line || "\u00A0"}
          </p>
        ))}
      </div>

      {author && (
        <footer className="mt-10">
          <p className="section-marker text-sm text-muted-foreground">
            — {author}
          </p>
        </footer>
      )}
    </article>
  );
};

export default Poem;
