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
import { Schema } from "@/components/Schema";
import { blogPosts } from "@/content/blog";
import { generateArticleSchema, generateBreadcrumbSchema } from "@/lib/schema";
import { formatDate, readingTime, SITE_URL } from "@/lib/utils";
import { getRelatedProductLinks } from "@/lib/internal-links";
import { RelatedLinks } from "@/components/InternalLinks";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: "Post Not Found | SwarShala Blog",
    };
  }

  return {
    title: `${post.title} | SwarShala Blog`,
    description: post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author }],
    alternates: {
      canonical: `https://swarshala.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author],
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: post.title, href: `/blog/${post.slug}` },
  ];

  // Related posts (same category)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.slug !== post.slug)
    .slice(0, 3);

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    slug: post.slug,
    date: post.publishedAt,
    author: post.author,
    image: post.image,
    tags: post.tags,
  });

  const breadcrumbSchema = generateBreadcrumbSchema(
    breadcrumbs.map((b) => ({ name: b.name, path: b.href })),
  );

  // Get internal links to product pages related to this blog post's tags
  const productLinks = getRelatedProductLinks(post.tags, 4);

  // Placeholder content since we don't have MDX files yet
  const placeholderContent = `
    <p class="lead">${post.excerpt}</p>
    
    <h2>Introduction</h2>
    <p>Learning music is a rewarding journey that requires dedication, patience, and the right guidance. In this article, we'll explore key insights and practical tips to help you progress faster and enjoy the learning process.</p>
    
    <h2>Key Takeaways</h2>
    <ul>
      <li>Consistent practice is more important than long, infrequent sessions</li>
      <li>Find a teacher who matches your learning style</li>
      <li>Set specific, measurable goals for your musical journey</li>
      <li>Record yourself to track progress and identify areas for improvement</li>
      <li>Join a community of fellow learners for motivation and support</li>
    </ul>
    
    <h2>Getting Started</h2>
    <p>Whether you're a complete beginner or looking to refine your skills, the principles remain the same. Start with the fundamentals, build a solid foundation, and gradually increase complexity as you progress.</p>
    
    <h2>Practice Tips</h2>
    <p>Quality practice involves focused, deliberate effort on specific skills. Break down difficult passages, use a metronome, and don't rush through challenging sections. Remember, slow practice leads to fast progress.</p>
    
    <h2>Conclusion</h2>
    <p>Music learning is a marathon, not a sprint. Embrace the journey, celebrate small wins, and stay consistent. With the right approach and guidance, you'll be amazed at what you can achieve.</p>
  `;

  return (
    <>
      <Schema schema={articleSchema} />
      <Schema schema={breadcrumbSchema} />

      <article>
        <PageHeader
          title={post.title}
          subtitle={`By ${post.author} • ${formatDate(post.publishedAt)} • ${readingTime(placeholderContent)} min read`}
          breadcrumbs={<Breadcrumbs items={breadcrumbs} />}
        />

        <Section>
          <div className="max-w-3xl mx-auto">
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 bg-gold/10 text-gold text-sm font-medium rounded-full">
                {post.category}
              </span>
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-surface-muted text-text-muted text-sm rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: placeholderContent }}
            />

            {/* Share */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="font-semibold text-midnight mb-4">
                Share this article
              </h3>
              <div className="flex gap-4">
                <a
                  href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#1DA1F2] text-white rounded-lg text-sm font-medium hover:opacity-90"
                >
                  Twitter
                </a>
                <a
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${SITE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#4267B2] text-white rounded-lg text-sm font-medium hover:opacity-90"
                >
                  Facebook
                </a>
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`${post.title} - ${SITE_URL}/blog/${post.slug}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#25D366] text-white rounded-lg text-sm font-medium hover:opacity-90"
                >
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Author */}
            <Card padding="lg" className="mt-8">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-surface-muted flex items-center justify-center text-2xl">
                  👤
                </div>
                <div>
                  <h3 className="font-semibold text-midnight">{post.author}</h3>
                  <p className="text-sm text-text-secondary">
                    Music educator and writer at SwarShala. Passionate about
                    making music education accessible to everyone.
                  </p>
                </div>
              </div>
            </Card>

            {/* Tags with links */}
            <div className="mt-8 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="px-3 py-1 bg-surface-muted text-text-muted text-sm rounded-full hover:bg-gold/10 hover:text-gold transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            {/* Internal links to product pages */}
            {productLinks.length > 0 && (
              <div className="mt-8">
                <RelatedLinks
                  links={productLinks}
                  title="Explore Related Programs"
                />
              </div>
            )}
          </div>
        </Section>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <Section background="muted">
          <h2 className="text-2xl font-bold font-serif text-midnight mb-8">
            Related Articles
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {relatedPosts.map((relatedPost) => (
              <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="p-5">
                    <span className="text-xs text-gold font-medium uppercase tracking-wide">
                      {relatedPost.category}
                    </span>
                    <h3 className="font-semibold text-midnight mt-2 mb-2 line-clamp-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-text-secondary line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
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
