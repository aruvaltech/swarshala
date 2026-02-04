import type { Metadata } from "next";
import Link from "next/link";
import {
  PageHeader,
  Section,
  Card,
  LinkButton,
  Breadcrumbs,
} from "@/components/ui";
import { blogPosts } from "@/content/blog";
import { formatDate, readingTime } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Music Learning Blog - Tips, Guides & Insights | SwarShala",
  description:
    "Expert music learning tips, instrument guides, practice techniques, and industry insights. Learn from SwarShala's experienced music educators.",
  alternates: {
    canonical: "https://swarshala.com/blog",
  },
};

const breadcrumbs = [
  { name: "Home", href: "/" },
  { name: "Blog", href: "/blog" },
];

// Group posts by category
const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

const featuredPosts = blogPosts.filter((p) => p.featured).slice(0, 3);
const recentPosts = blogPosts.slice(0, 9);

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Music Learning Blog"
        subtitle="Expert tips, guides, and insights to accelerate your musical journey"
        breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
      />

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <Section>
          <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
            Featured Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer overflow-hidden">
                  {/* Image placeholder */}
                  <div className="aspect-video bg-gradient-to-br from-midnight to-midnight/80 flex items-center justify-center">
                    <span className="text-4xl">
                      {post.category === "Beginner Tips"
                        ? "🎓"
                        : post.category === "Practice"
                          ? "🎯"
                          : "🎵"}
                    </span>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-2">
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
                    <p className="text-sm text-text-secondary line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-text-muted">
                      <span>{post.author}</span>
                      <span>{formatDate(post.publishedAt)}</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* Categories */}
      <Section background="muted">
        <h2 className="text-2xl font-bold font-serif text-midnight mb-6">
          Browse by Category
        </h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog?category=${encodeURIComponent(category)}`}
              className="px-4 py-2 bg-white border border-border rounded-full text-sm font-medium text-text-primary hover:border-gold hover:text-gold transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </Section>

      {/* All Posts */}
      <Section>
        <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
          Latest Articles
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs text-gold font-medium uppercase tracking-wide">
                      {post.category}
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
        <div className="text-center mt-8">
          <LinkButton href="/blog/archive" variant="outline">
            View All Articles
          </LinkButton>
        </div>
      </Section>

      {/* Newsletter */}
      <Section background="dark">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold font-serif mb-4">
            Get Weekly Music Tips
          </h2>
          <p className="text-gray-300 mb-8">
            Join 10,000+ music enthusiasts who receive our weekly newsletter
            with practice tips, learning strategies, and exclusive content.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-midnight focus:outline-none focus:ring-2 focus:ring-gold"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
          <p className="text-sm text-gray-400 mt-4">
            No spam. Unsubscribe anytime.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-4">
            Ready to Start Learning?
          </h2>
          <p className="text-text-secondary mb-6">
            Apply what you learn from our blog with expert-guided lessons.
          </p>
          <LinkButton href="/book-trial" variant="primary">
            Book Free Trial Class
          </LinkButton>
        </div>
      </Section>
    </>
  );
}
