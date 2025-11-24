'use client';

/**
 * Article Schema Component
 * Provides schema markup for blog posts, guides, and article pages
 * Includes: article headline, description, publication dates, author, image
 */

interface ArticleSchemaProps {
  title: string;
  description: string;
  publishedDate?: string;
  modifiedDate?: string;
  author?: string;
  authorUrl?: string;
  image?: string;
  imageAlt?: string;
  url: string;
  readingTimeMinutes?: number;
}

export function ArticleSchema({
  title,
  description,
  publishedDate,
  modifiedDate,
  author = 'RentReadyTools',
  authorUrl,
  image,
  imageAlt,
  url,
  readingTimeMinutes,
}: ArticleSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description: description,
    url: `https://rentreadytools.com${url}`,
    ...(publishedDate && { datePublished: publishedDate }),
    ...(modifiedDate && { dateModified: modifiedDate }),
    author: {
      '@type': 'Organization',
      name: author,
      ...(authorUrl && { url: authorUrl }),
    },
    publisher: {
      '@type': 'Organization',
      name: 'RentReadyTools',
      logo: {
        '@type': 'ImageObject',
        url: 'https://rentreadytools.com/logo.png',
        width: 256,
        height: 256,
      },
    },
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
        ...(imageAlt && { description: imageAlt }),
      },
    }),
    ...(readingTimeMinutes && {
      timeToRead: `PT${readingTimeMinutes}M`,
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
