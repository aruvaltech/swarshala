"use client";

import Link from "next/link";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarLogo } from "@/components/Logo";

const navItems = [
  {
    label: "Classes",
    href: "/classes",
    children: [
      { label: "Online Classes", href: "/online-classes" },
      { label: "Center Classes", href: "/offline-classes" },
      { label: "Home Tutor", href: "/classes" },
      { label: "Group Classes", href: "/classes" },
    ],
  },
  {
    label: "Instruments",
    href: "/instruments",
    children: [
      { label: "Guitar", href: "/instruments/guitar" },
      { label: "Piano", href: "/instruments/piano" },
      { label: "Vocals", href: "/instruments/vocals-western" },
      { label: "Tabla", href: "/instruments/tabla" },
      { label: "Violin", href: "/instruments/violin" },
      { label: "View All", href: "/instruments" },
    ],
  },
  {
    label: "Cities",
    href: "/cities",
    children: [
      { label: "Delhi", href: "/cities/delhi" },
      { label: "Mumbai", href: "/cities/mumbai" },
      { label: "Bengaluru", href: "/cities/bengaluru" },
      { label: "Hyderabad", href: "/cities/hyderabad" },
      { label: "View All Cities", href: "/cities" },
    ],
  },
  // { label: "Teachers", href: "/teachers" },
  { label: "Pricing", href: "/pricing" },
  { label: "Resources", href: "/resources" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border-light">
      <nav className="container mx-auto px-4" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2"
            aria-label="SwarShala Home"
          >
            <NavbarLogo theme="light" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "px-4 py-2 text-sm font-medium text-text-secondary hover:text-midnight transition-colors rounded-lg hover:bg-surface-muted",
                    activeDropdown === item.label &&
                      "text-midnight bg-surface-muted",
                  )}
                >
                  {item.label}
                  {item.children && (
                    <svg
                      className="inline-block w-4 h-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </Link>

                {/* Dropdown */}
                {item.children && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 pt-2">
                    <div className="bg-white rounded-xl shadow-lg border border-border-light p-2 min-w-48">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-secondary hover:text-midnight hover:bg-surface-muted rounded-lg transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium text-text-secondary hover:text-midnight transition-colors"
            >
              Contact
            </Link>
            <Link
              href="/book-trial"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gold hover:bg-gold-dark rounded-lg transition-colors shadow-sm"
            >
              Book Free Trial
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="lg:hidden p-2 text-text-secondary hover:text-midnight"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden py-4 border-t border-border-light"
          >
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.href}>
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-midnight hover:bg-surface-muted rounded-lg"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="pl-6 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2 text-sm text-text-muted hover:text-midnight"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-border-light space-y-2">
              <Link
                href="/contact"
                className="block px-4 py-3 text-base font-medium text-text-secondary hover:text-midnight"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <Link
                href="/book-trial"
                className="block mx-4 px-4 py-3 text-base font-semibold text-center text-white bg-gold hover:bg-gold-dark rounded-lg"
                onClick={() => setMobileMenuOpen(false)}
              >
                Book Free Trial
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
