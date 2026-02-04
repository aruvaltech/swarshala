import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  disabled?: boolean;
  loading?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  disabled = false,
  loading = false,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-midnight text-white hover:bg-midnight-light focus:ring-midnight",
    secondary:
      "bg-surface-muted text-midnight hover:bg-surface-alt focus:ring-midnight",
    outline:
      "border-2 border-midnight text-midnight hover:bg-midnight hover:text-white focus:ring-midnight",
    ghost: "text-midnight hover:bg-surface-muted focus:ring-midnight",
    gold: "bg-gold text-white hover:bg-gold-dark focus:ring-gold shadow-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      type={type}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      disabled={disabled || loading}
      onClick={onClick}
    >
      {loading && (
        <svg
          className="animate-spin -ml-1 mr-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </button>
  );
}

interface LinkButtonProps {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  className?: string;
  external?: boolean;
}

import Link from "next/link";

export function LinkButton({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  external = false,
}: LinkButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

  const variants = {
    primary:
      "bg-midnight text-white hover:bg-midnight-light focus:ring-midnight",
    secondary:
      "bg-surface-muted text-midnight hover:bg-surface-alt focus:ring-midnight",
    outline:
      "border-2 border-midnight text-midnight hover:bg-midnight hover:text-white focus:ring-midnight",
    ghost: "text-midnight hover:bg-surface-muted focus:ring-midnight",
    gold: "bg-gold text-white hover:bg-gold-dark focus:ring-gold shadow-sm",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...linkProps}
    >
      {children}
    </Link>
  );
}
