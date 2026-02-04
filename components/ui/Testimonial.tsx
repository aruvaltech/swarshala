import Image from "next/image";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/content/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "bg-white rounded-xl border border-border-light p-6 transition-shadow hover:shadow-lg",
        className,
      )}
    >
      {/* Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <svg
            key={i}
            className={cn(
              "w-5 h-5",
              i < testimonial.rating ? "text-gold" : "text-border-light",
            )}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-text-secondary leading-relaxed mb-4">
        &ldquo;{testimonial.text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3 pt-4 border-t border-border-light">
        {testimonial.photoPlaceholder && (
          <Image
            src={testimonial.photoPlaceholder}
            alt={testimonial.name}
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        )}
        <div>
          <p className="font-medium text-text-primary">{testimonial.name}</p>
          <p className="text-sm text-text-muted">
            {testimonial.instrument && `${testimonial.instrument} Student`}
            {testimonial.location && ` • ${testimonial.location}`}
          </p>
        </div>
      </div>
    </div>
  );
}

interface TestimonialGridProps {
  testimonials: Testimonial[];
  columns?: 2 | 3;
  className?: string;
}

export function TestimonialGrid({
  testimonials,
  columns = 3,
  className,
}: TestimonialGridProps) {
  return (
    <div
      className={cn(
        "grid gap-6",
        columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3",
        className,
      )}
    >
      {testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} testimonial={testimonial} />
      ))}
    </div>
  );
}

interface TestimonialSectionProps {
  title?: string;
  subtitle?: string;
  testimonials: Testimonial[];
  className?: string;
}

export function TestimonialSection({
  title = "What Our Students Say",
  subtitle,
  testimonials,
  className,
}: TestimonialSectionProps) {
  return (
    <section className={cn("py-16 lg:py-24 bg-surface-muted", className)}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold font-serif text-midnight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
        <TestimonialGrid testimonials={testimonials} />
      </div>
    </section>
  );
}
