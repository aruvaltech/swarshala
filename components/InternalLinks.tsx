import Link from "next/link";
import type { InternalLink } from "@/lib/internal-links";

interface RelatedLinksProps {
  links: InternalLink[];
  title?: string;
  className?: string;
}

export function RelatedLinks({
  links,
  title = "Related Pages",
  className = "",
}: RelatedLinksProps) {
  if (links.length === 0) return null;

  return (
    <nav aria-label={title} className={`${className}`}>
      <h3 className="text-lg font-semibold text-midnight mb-4">{title}</h3>
      <ul className="grid sm:grid-cols-2 gap-3">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="block p-3 rounded-lg border border-border hover:border-gold hover:bg-gold/5 transition-colors group"
            >
              <span className="text-sm font-medium text-midnight group-hover:text-gold transition-colors">
                {link.anchor}
              </span>
              <span className="block text-xs text-text-muted mt-1 capitalize">
                {link.context}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

interface InlineLinksProps {
  links: InternalLink[];
  className?: string;
}

export function InlineLinks({ links, className = "" }: InlineLinksProps) {
  if (links.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="text-sm text-gold hover:text-gold-dark underline underline-offset-2 transition-colors"
        >
          {link.anchor}
        </Link>
      ))}
    </div>
  );
}

interface CrossLinkSectionProps {
  links: InternalLink[];
  title: string;
  description?: string;
  className?: string;
}

export function CrossLinkSection({
  links,
  title,
  description,
  className = "",
}: CrossLinkSectionProps) {
  if (links.length === 0) return null;

  return (
    <section className={`py-12 ${className}`}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-2">
          {title}
        </h2>
        {description && (
          <p className="text-text-secondary mb-6">{description}</p>
        )}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block p-4 bg-white rounded-lg border border-border hover:shadow-md hover:border-gold transition-all group"
            >
              <span className="font-medium text-midnight group-hover:text-gold transition-colors">
                {link.anchor}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
