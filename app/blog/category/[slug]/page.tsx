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
import { blogPosts, blogCategories } from "@/content/blog";
import { generateBlogCategoryMeta } from "@/lib/seo-middleware";
import { formatDate, readingTime } from "@/lib/utils";
import { Schema } from "@/components/Schema";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { getRelatedProductLinks } from "@/lib/internal-links";
import { RelatedLinks } from "@/components/InternalLinks";

interface Props {
  params: Promise<{ slug: string }>;
}

function slugifyCategory(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export async function generateStaticParams() {
  return blogCategories.map((category) => ({
    slug: slugifyCategory(category),
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = blogCategories.find((c) => slugifyCategory(c) === slug);

  if (!category) {
    return { title: "Category Not Found | SwarShala Blog" };
  }

  return generateBlogCategoryMeta(category, slug);
}

export default async function BlogCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = blogCategories.find((c) => slugifyCategory(c) === slug);

  if (!category) {
    notFound();
  }

  const posts = blogPosts.filter((p) => p.category === category);

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: category, href: `/blog/category/${slug}` },
  ];

  const relatedLinks = getRelatedProductLinks(
    [category.toLowerCase(), "music"],
    4,
  );

  return (
    <>
      <Schema
        schema={generateBreadcrumbSchema(
          breadcrumbItems.map((b) => ({ name: b.name, path: b.href })),
        )}
      />

      <PageHeader
        title={category}
        subtitle={`${posts.length} article${posts.length !== 1 ? "s" : ""} in this category`}
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

      {/* Other Categories */}
      <Section background="muted">
        <h2 className="text-xl font-bold font-serif text-midnight mb-6">
          All Categories
        </h2>
        <div className="flex flex-wrap gap-3">
          {blogCategories.map((cat) => (
            <Link
              key={cat}
              href={`/blog/category/${slugifyCategory(cat)}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === category
                  ? "bg-gold text-white"
                  : "bg-white border border-border text-text-primary hover:border-gold hover:text-gold"
              }`}
            >
              {cat}
            </Link>
          ))}
        </div>
      </Section>

      {/* Internal Links - connect blog to product pages */}
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
            Ready to Start Your Musical Journey?
          </h2>
          <p className="text-text-secondary mb-6">
            Book a free trial class and learn from expert teachers.
          </p>
          <LinkButton href="/book-trial" variant="primary">
            Book Free Trial
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
