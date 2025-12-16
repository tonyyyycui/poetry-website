interface BotanicalSketchProps {
  variant?: "leaf" | "branch" | "flower" | "fern" | "sprig" | "bud";
  className?: string;
  flip?: boolean;
}

const BotanicalSketch = ({ 
  variant = "leaf", 
  className = "",
  flip = false
}: BotanicalSketchProps) => {
  const baseClasses = `opacity-[0.35] ${flip ? "scale-x-[-1]" : ""} ${className}`;

  if (variant === "leaf") {
    return (
      <svg viewBox="0 0 60 100" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M30 95 Q30 50 30 10" strokeLinecap="round" />
        <path d="M30 20 Q45 30 50 50 Q45 55 30 45" strokeLinecap="round" />
        <path d="M30 35 Q15 45 10 65 Q15 70 30 60" strokeLinecap="round" />
        <path d="M30 50 Q42 58 45 75 Q40 78 30 70" strokeLinecap="round" />
        <path d="M32 25 L38 35" strokeLinecap="round" />
        <path d="M28 40 L22 52" strokeLinecap="round" />
        <path d="M32 55 L37 65" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "branch") {
    return (
      <svg viewBox="0 0 120 80" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M5 70 Q40 65 60 50 Q80 35 115 30" strokeLinecap="round" />
        <path d="M25 62 Q30 50 35 42" strokeLinecap="round" />
        <path d="M35 42 Q40 35 38 25" strokeLinecap="round" />
        <path d="M35 42 Q45 38 52 30" strokeLinecap="round" />
        <path d="M55 48 Q58 40 55 32" strokeLinecap="round" />
        <path d="M55 48 Q65 45 72 38" strokeLinecap="round" />
        <path d="M80 38 Q82 30 78 22" strokeLinecap="round" />
        <path d="M80 38 Q90 36 98 30" strokeLinecap="round" />
        <path d="M100 32 Q102 26 100 18" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "flower") {
    return (
      <svg viewBox="0 0 50 70" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M25 68 Q25 45 25 30" strokeLinecap="round" />
        <path d="M25 50 Q18 48 12 52" strokeLinecap="round" />
        <path d="M25 40 Q32 38 38 42" strokeLinecap="round" />
        <circle cx="25" cy="18" r="4" />
        <path d="M25 10 Q25 5 25 2" strokeLinecap="round" />
        <path d="M19 14 Q14 12 10 14" strokeLinecap="round" />
        <path d="M31 14 Q36 12 40 14" strokeLinecap="round" />
        <path d="M20 22 Q15 25 12 28" strokeLinecap="round" />
        <path d="M30 22 Q35 25 38 28" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "fern") {
    return (
      <svg viewBox="0 0 40 120" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M20 115 Q20 60 20 10" strokeLinecap="round" />
        <path d="M20 20 Q28 22 35 18" strokeLinecap="round" />
        <path d="M20 20 Q12 22 5 18" strokeLinecap="round" />
        <path d="M20 32 Q30 35 38 30" strokeLinecap="round" />
        <path d="M20 32 Q10 35 2 30" strokeLinecap="round" />
        <path d="M20 45 Q28 48 35 44" strokeLinecap="round" />
        <path d="M20 45 Q12 48 5 44" strokeLinecap="round" />
        <path d="M20 58 Q26 60 32 57" strokeLinecap="round" />
        <path d="M20 58 Q14 60 8 57" strokeLinecap="round" />
        <path d="M20 70 Q24 72 28 70" strokeLinecap="round" />
        <path d="M20 70 Q16 72 12 70" strokeLinecap="round" />
        <path d="M20 82 Q23 83 26 82" strokeLinecap="round" />
        <path d="M20 82 Q17 83 14 82" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === "sprig") {
    return (
      <svg viewBox="0 0 80 60" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M5 55 Q25 50 45 35 Q65 20 75 10" strokeLinecap="round" />
        <ellipse cx="18" cy="48" rx="6" ry="10" transform="rotate(-20 18 48)" />
        <ellipse cx="35" cy="38" rx="5" ry="9" transform="rotate(-30 35 38)" />
        <ellipse cx="52" cy="26" rx="5" ry="8" transform="rotate(-40 52 26)" />
        <ellipse cx="67" cy="15" rx="4" ry="7" transform="rotate(-50 67 15)" />
      </svg>
    );
  }

  if (variant === "bud") {
    return (
      <svg viewBox="0 0 30 50" className={baseClasses} fill="none" stroke="currentColor" strokeWidth="0.5">
        <path d="M15 48 Q15 30 15 18" strokeLinecap="round" />
        <path d="M15 18 Q12 12 15 5 Q18 12 15 18" strokeLinecap="round" />
        <path d="M15 18 Q8 15 5 10" strokeLinecap="round" />
        <path d="M15 18 Q22 15 25 10" strokeLinecap="round" />
        <path d="M15 32 Q10 30 6 34" strokeLinecap="round" />
        <path d="M15 32 Q20 30 24 34" strokeLinecap="round" />
      </svg>
    );
  }

  return null;
};

export default BotanicalSketch;
