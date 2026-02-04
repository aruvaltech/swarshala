import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-h1-mobile md:text-h1 font-serif text-midnight mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-h2-mobile md:text-h2 font-serif text-midnight mt-12 mb-4">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-h3-mobile md:text-h3 font-serif text-midnight mt-8 mb-3">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-h4-mobile md:text-h4 font-serif text-midnight mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="text-body text-text-secondary mb-4 leading-relaxed">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-text-secondary">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-text-secondary">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="text-body">{children}</li>,
    a: ({ href, children }) => (
      <a
        href={href}
        className="text-gold hover:text-gold-600 underline transition-colors"
      >
        {children}
      </a>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gold pl-4 italic my-6 text-text-muted">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-surface-light px-2 py-1 rounded text-sm font-mono">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-midnight text-white p-4 rounded-card overflow-x-auto my-6">
        {children}
      </pre>
    ),
    ...components,
  };
}
