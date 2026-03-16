import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { blogPosts } from "@/content/blog";
import { generateBlogTagMeta } from "@/lib/seo-middleware";
import { formatDate, readingTime } from "@/lib/utils";
import { Schema } from "@/components/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getRelatedProductLinks } from "@/lib/internal-links";
import { RelatedLinks } from "@/components/InternalLinks";

interface Props {
  params: Promise<{ slug: string }>;
}

function slugifyTag(tag: string): string {
  return tag.toLowerCase().replace(/\s+/g, "-");
}

// Get all unique tags
const allTags = [...new Set(blogPosts.flatMap((p) => p.tags))];

export async function generateStaticParams() {
  return allTags.map((tag) => ({
    slug: slugifyTag(tag),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tag = allTags.find((t) => slugifyTag(t) === slug);

  if (!tag) {
    return { title: "Tag Not Found | SwarShala Blog" };
  }

  return generateBlogTagMeta(tag, slug);
}

export default async function BlogTagPage({ params }: Props) {
  const { slug } = await params;
  const tag = allTags.find((t) => slugifyTag(t) === slug);

  if (!tag) {
    notFound();
  }

  const posts = blogPosts.filter((p) => p.tags.includes(tag));

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: `Tag: ${tag}`, href: `/blog/tag/${slug}` },
  ];

  const relatedLinks = getRelatedProductLinks([tag.toLowerCase()], 4);

  return (
    <>
      <Schema
        schema={generateBreadcrumbSchema(
          breadcrumbItems.map((b) => ({ name: b.name, path: b.href })),
        )}
      />

      <PageHeader
        title={`Articles tagged "${tag}"`}
        subtitle={`${posts.length} article${posts.length !== 1 ? "s" : ""} with this tag`}
        breadcrumbs={<Breadcrumbs items={breadcrumbItems} />}
      />

      <Section>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gold font-medium uppercase tracking-wide">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-muted">•</span>
                    <span className="text-xs text-text-muted">
                      {readingTime(post.excerpt.repeat(10))} min read
                    </span>
                  </div>
                  <h3 className="font-semibold text-midnight mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-text-secondary line-clamp-3 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-text-muted pt-4 border-t border-border">
                    <span>{post.author}</span>
                    <span>{formatDate(post.publishedAt)}</span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Section>

      {/* All Tags */}
      <Section background="muted">
        <h2 className="text-xl font-bold font-serif text-midnight mb-6">
          All Tags
        </h2>
        <div className="flex flex-wrap gap-2">
          {allTags.map((t) => (
            <Link
              key={t}
              href={`/blog/tag/${slugifyTag(t)}`}
              className={`px-3 py-1.5 rounded-full text-sm transition-colors ${
                t === tag
                  ? "bg-gold text-white"
                  : "bg-white border border-border text-text-muted hover:border-gold hover:text-gold"
              }`}
            >
              {t}
            </Link>
          ))}
        </div>
      </Section>

      {/* Internal Links */}
      {relatedLinks.length > 0 && (
        <Section>
          <RelatedLinks
            links={relatedLinks}
            title="Explore Our Music Programs"
          />
        </Section>
      )}

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-text-secondary mb-6">
            Book a free trial class and experience the SwarShala difference.
          </p>
          <LinkButton href="/book-trial" variant="primary">
            Book Free Trial
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
