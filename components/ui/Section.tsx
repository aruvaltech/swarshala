import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: "white" | "muted" | "dark";
  id?: string;
}

export function Section({
  children,
  className,
  background = "white",
  id,
}: SectionProps) {
  const backgrounds = {
    white: "bg-white",
    muted: "bg-surface-muted",
    dark: "bg-midnight text-white",
  };

  return (
    <section
      id={id}
      className={cn("py-16 lg:py-24", backgrounds[background], className)}
    >
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  title,
  subtitle,
  centered = true,
  className,
}: SectionHeaderProps) {
  return (
    <div className={cn(centered && "text-center", "mb-12", className)}>
      <h2 className="text-3xl lg:text-4xl font-bold font-serif text-midnight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg text-text-secondary",
            centered && "max-w-2xl mx-auto",
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

interface HeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
  className?: string;
  background?: "white" | "gradient" | "image";
  imageUrl?: string;
}

export function Hero({
  title,
  subtitle,
  children,
  className,
  background = "gradient",
}: HeroProps) {
  const backgrounds = {
    white: "bg-white",
    gradient: "bg-gradient-to-br from-midnight via-midnight-light to-midnight",
    image: "bg-midnight",
  };

  return (
    <section
      className={cn(
        "relative py-20 lg:py-32",
        backgrounds[background],
        background !== "white" && "text-white",
        className,
      )}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold font-serif leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p
              className={cn(
                "mt-6 text-lg lg:text-xl leading-relaxed",
                background !== "white"
                  ? "text-gray-300"
                  : "text-text-secondary",
              )}
            >
              {subtitle}
            </p>
          )}
          {children && <div className="mt-8">{children}</div>}
        </div>
      </div>

      {/* Decorative element */}
      {background === "gradient" && (
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
      )}
    </section>
  );
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: ReactNode;
  className?: string;
}

export function PageHeader({
  title,
  subtitle,
  breadcrumbs,
  className,
}: PageHeaderProps) {
  return (
    <header className={cn("bg-surface-muted py-12 lg:py-16", className)}>
      <div className="container mx-auto px-4">
        {breadcrumbs && <div className="mb-4">{breadcrumbs}</div>}
        <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold font-serif text-midnight">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 text-lg text-text-secondary max-w-3xl">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
}

interface ContainerProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

export function Container({
  children,
  className,
  size = "lg",
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
    xl: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div className={cn("mx-auto px-4", sizes[size], className)}>{children}</div>
  );
}

interface GridProps {
  children: ReactNode;
  cols?: 2 | 3 | 4;
  gap?: "sm" | "md" | "lg";
  className?: string;
}

export function Grid({ children, cols = 3, gap = "md", className }: GridProps) {
  const colsClass = {
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClass = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  return (
    <div className={cn("grid", colsClass[cols], gapClass[gap], className)}>
      {children}
    </div>
  );
}
