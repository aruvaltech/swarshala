import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  variant?:
    | "navbar"
    | "primary"
    | "stacked"
    | "icon"
    | "wordmark"
    | "footer"
    | "monochrome";
  theme?: "light" | "dark";
  size?: "sm" | "md" | "lg";
  className?: string;
}

// Brand colors from the logo kit
export const brandColors = {
  gold: "#c9a84c",
  darkGold: "#8B6914",
  navy: "#0f2044",
  deepDark: "#1a1a2e",
  cream: "#f5f0e8",
  white: "#ffffff",
};

// Navbar logo - optimized for header use (light background)
export function NavbarLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/navbar-logo.svg"
      alt="SwarShala"
      width={200}
      height={44}
      className={cn("h-10 w-auto", className)}
      priority
    />
  );
}

// Primary logo with icon and tagline for dark background
export function PrimaryLogoDark({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { width: 200, height: 45 },
    md: { width: 300, height: 68 },
    lg: { width: 400, height: 90 },
  };
  const { width, height } = dimensions[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="62" r="9" fill="#c9a84c" />
      <rect x="32" y="24" width="3.5" height="39" fill="#c9a84c" />
      <ellipse
        cx="44"
        cy="26"
        rx="12"
        ry="4.5"
        fill="#c9a84c"
        transform="rotate(-14 44 26)"
      />
      <text
        x="72"
        y="57"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="42"
        fontWeight="700"
        fill="#c9a84c"
      >
        Swar
      </text>
      <text
        x="196"
        y="57"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="42"
        fontWeight="400"
        fill="#ffffff"
      >
        Shala
      </text>
      <text
        x="72"
        y="76"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="11"
        fill="#c9a84c"
        letterSpacing="5"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Primary logo for light background
export function PrimaryLogoLight({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { width: 200, height: 45 },
    md: { width: 300, height: 68 },
    lg: { width: 400, height: 90 },
  };
  const { width, height } = dimensions[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 400 90"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="62" r="9" fill="#8B6914" />
      <rect x="32" y="24" width="3.5" height="39" fill="#8B6914" />
      <ellipse
        cx="44"
        cy="26"
        rx="12"
        ry="4.5"
        fill="#8B6914"
        transform="rotate(-14 44 26)"
      />
      <text
        x="72"
        y="57"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="42"
        fontWeight="700"
        fill="#8B6914"
      >
        Swar
      </text>
      <text
        x="196"
        y="57"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="42"
        fontWeight="400"
        fill="#1a1a2e"
      >
        Shala
      </text>
      <text
        x="72"
        y="76"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="11"
        fill="#8B6914"
        letterSpacing="5"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Footer logo (for dark background with muted gold)
export function FooterLogo({ className }: { className?: string }) {
  return (
    <svg
      width="180"
      height="56"
      viewBox="0 0 180 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="38" r="8" fill="#c9a84c" opacity="0.85" />
      <rect x="19" y="10" width="3" height="29" fill="#c9a84c" opacity="0.85" />
      <ellipse
        cx="29"
        cy="12"
        rx="10"
        ry="4"
        fill="#c9a84c"
        opacity="0.85"
        transform="rotate(-14 29 12)"
      />
      <text
        x="42"
        y="38"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="24"
        fontWeight="700"
        fill="#c9a84c"
        opacity="0.9"
      >
        Swar
      </text>
      <text
        x="108"
        y="38"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="24"
        fontWeight="400"
        fill="#ffffff"
        opacity="0.9"
      >
        Shala
      </text>
      <text
        x="42"
        y="52"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="8"
        fill="#c9a84c"
        letterSpacing="3"
        opacity="0.6"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Icon/Mark logo for app icons (gold background)
export function LogoIconGold({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { width: 32, height: 32 },
    md: { width: 48, height: 48 },
    lg: { width: 80, height: 80 },
  };
  const { width, height } = dimensions[size];

  return (
    <Image
      src="/icon.svg"
      alt="SwarShala Icon"
      width={width}
      height={height}
      className={className}
    />
  );
}

// Stacked logo for vertical layouts (dark background)
export function StackedLogoDark({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="220"
      viewBox="0 0 300 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="120" cy="110" r="22" fill="#c9a84c" />
      <rect x="138" y="44" width="8" height="70" fill="#c9a84c" />
      <ellipse
        cx="166"
        cy="47"
        rx="26"
        ry="10"
        fill="#c9a84c"
        transform="rotate(-14 166 47)"
      />
      <text
        x="150"
        y="170"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="40"
        fontWeight="700"
        fill="#c9a84c"
        textAnchor="middle"
      >
        Swar
      </text>
      <text
        x="150"
        y="170"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="40"
        fontWeight="400"
        fill="#ffffff"
        textAnchor="middle"
        dx="88"
      >
        Shala
      </text>
      <text
        x="150"
        y="194"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="11"
        fill="#c9a84c"
        letterSpacing="6"
        textAnchor="middle"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Stacked logo for vertical layouts (light background)
export function StackedLogoLight({ className }: { className?: string }) {
  return (
    <svg
      width="300"
      height="220"
      viewBox="0 0 300 220"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="120" cy="110" r="22" fill="#8B6914" />
      <rect x="138" y="44" width="8" height="70" fill="#8B6914" />
      <ellipse
        cx="166"
        cy="47"
        rx="26"
        ry="10"
        fill="#8B6914"
        transform="rotate(-14 166 47)"
      />
      <text
        x="150"
        y="170"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="40"
        fontWeight="700"
        fill="#8B6914"
        textAnchor="middle"
      >
        Swar
      </text>
      <text
        x="150"
        y="170"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="40"
        fontWeight="400"
        fill="#1a1a2e"
        textAnchor="middle"
        dx="88"
      >
        Shala
      </text>
      <text
        x="150"
        y="194"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="11"
        fill="#8B6914"
        letterSpacing="6"
        textAnchor="middle"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Wordmark only (text without icon) - dark background
export function WordmarkDark({ className }: { className?: string }) {
  return (
    <svg
      width="280"
      height="56"
      viewBox="0 0 280 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <text
        x="0"
        y="42"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="44"
        fontWeight="900"
        fill="#c9a84c"
      >
        Swar
      </text>
      <text
        x="122"
        y="42"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="44"
        fontWeight="300"
        fill="#ffffff"
      >
        Shala
      </text>
      <line
        x1="0"
        y1="50"
        x2="120"
        y2="50"
        stroke="#c9a84c"
        strokeWidth="1.5"
      />
      <line
        x1="122"
        y1="50"
        x2="270"
        y2="50"
        stroke="#ffffff"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

// Wordmark only (text without icon) - light background
export function WordmarkLight({ className }: { className?: string }) {
  return (
    <svg
      width="280"
      height="56"
      viewBox="0 0 280 56"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <text
        x="0"
        y="42"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="44"
        fontWeight="900"
        fill="#8B6914"
      >
        Swar
      </text>
      <text
        x="122"
        y="42"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="44"
        fontWeight="300"
        fill="#1a1a2e"
      >
        Shala
      </text>
      <line
        x1="0"
        y1="50"
        x2="120"
        y2="50"
        stroke="#8B6914"
        strokeWidth="1.5"
      />
      <line
        x1="122"
        y1="50"
        x2="270"
        y2="50"
        stroke="#1a1a2e"
        strokeWidth="0.5"
        opacity="0.4"
      />
    </svg>
  );
}

// Monochrome white logo (for dark backgrounds, overlays)
export function MonochromeWhite({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { width: 150, height: 38 },
    md: { width: 200, height: 50 },
    lg: { width: 280, height: 70 },
  };
  const { width, height } = dimensions[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="36" r="8" fill="#ffffff" />
      <rect x="17" y="8" width="3.5" height="29" fill="#ffffff" />
      <ellipse
        cx="30"
        cy="10"
        rx="11"
        ry="4.5"
        fill="#ffffff"
        transform="rotate(-12 30 10)"
      />
      <text
        x="50"
        y="36"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="26"
        fontWeight="700"
        fill="#ffffff"
      >
        SwarShala
      </text>
      <text
        x="50"
        y="48"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="8"
        fill="#ffffff"
        letterSpacing="4"
        opacity="0.7"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Monochrome gold logo (premium feel)
export function MonochromeGold({
  className,
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md" | "lg";
}) {
  const dimensions = {
    sm: { width: 150, height: 38 },
    md: { width: 200, height: 50 },
    lg: { width: 280, height: 70 },
  };
  const { width, height } = dimensions[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 200 50"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="10" cy="36" r="8" fill="#c9a84c" />
      <rect x="17" y="8" width="3.5" height="29" fill="#c9a84c" />
      <ellipse
        cx="30"
        cy="10"
        rx="11"
        ry="4.5"
        fill="#c9a84c"
        transform="rotate(-12 30 10)"
      />
      <text
        x="50"
        y="36"
        fontFamily="Georgia, var(--font-playfair), serif"
        fontSize="26"
        fontWeight="700"
        fill="#c9a84c"
      >
        SwarShala
      </text>
      <text
        x="50"
        y="48"
        fontFamily="Georgia, var(--font-inter), sans-serif"
        fontSize="8"
        fill="#c9a84c"
        letterSpacing="4"
        opacity="0.7"
      >
        MUSIC ACADEMY
      </text>
    </svg>
  );
}

// Main Logo component with variant selection
export default function Logo({
  variant = "navbar",
  theme = "light",
  size = "md",
  className,
}: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      {variant === "navbar" && <NavbarLogo />}
      {variant === "primary" && theme === "dark" && (
        <PrimaryLogoDark size={size} />
      )}
      {variant === "primary" && theme === "light" && (
        <PrimaryLogoLight size={size} />
      )}
      {variant === "stacked" && theme === "dark" && <StackedLogoDark />}
      {variant === "stacked" && theme === "light" && <StackedLogoLight />}
      {variant === "icon" && <LogoIconGold size={size} />}
      {variant === "wordmark" && theme === "dark" && <WordmarkDark />}
      {variant === "wordmark" && theme === "light" && <WordmarkLight />}
      {variant === "footer" && <FooterLogo />}
      {variant === "monochrome" && theme === "dark" && (
        <MonochromeWhite size={size} />
      )}
      {variant === "monochrome" && theme === "light" && (
        <MonochromeGold size={size} />
      )}
    </div>
  );
}
