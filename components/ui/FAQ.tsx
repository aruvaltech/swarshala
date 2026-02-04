"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
  className?: string;
}

export function FAQAccordion({ items, className }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={cn("divide-y divide-border-light", className)}>
      {items.map((item, index) => (
        <div key={index} className="py-4 first:pt-0 last:pb-0">
          <button
            type="button"
            className="w-full flex items-start justify-between gap-4 text-left"
            onClick={() => toggleItem(index)}
            aria-expanded={openIndex === index}
            aria-controls={`faq-answer-${index}`}
          >
            <span className="text-base font-medium text-text-primary">
              {item.question}
            </span>
            <span
              className={cn(
                "flex-shrink-0 mt-1 transition-transform duration-200",
                openIndex === index && "rotate-180",
              )}
            >
              <svg
                className="w-5 h-5 text-text-secondary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          </button>
          <div
            id={`faq-answer-${index}`}
            className={cn(
              "overflow-hidden transition-all duration-200",
              openIndex === index
                ? "max-h-96 opacity-100 mt-3"
                : "max-h-0 opacity-0",
            )}
          >
            <p className="text-text-secondary leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
  className?: string;
}

export function FAQSection({
  title = "Frequently Asked Questions",
  subtitle,
  items,
  className,
}: FAQSectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold font-serif text-midnight">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-4 text-lg text-text-secondary">{subtitle}</p>
            )}
          </div>
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
