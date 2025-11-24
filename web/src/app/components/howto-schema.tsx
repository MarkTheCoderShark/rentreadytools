'use client';

/**
 * HowTo Schema Component
 * Provides schema markup for step-by-step guides and calculator tools
 * Includes: tool name, description, steps with instructions, and execution time
 */

export interface HowToStep {
  name: string;
  text: string;
  image?: string;
  url?: string;
}

interface HowToSchemaProps {
  name: string;
  description: string;
  steps: HowToStep[];
  totalTime?: string;
  yield?: string;
  image?: string;
  url: string;
}

export function HowToSchema({
  name,
  description,
  steps,
  totalTime,
  yield: yieldValue,
  image,
  url,
}: HowToSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: name,
    description: description,
    url: `https://rentreadytools.com${url}`,
    ...(image && {
      image: {
        '@type': 'ImageObject',
        url: image,
      },
    }),
    ...(totalTime && { totalTime: totalTime }),
    ...(yieldValue && { yield: yieldValue }),
    step: steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: step.name,
      text: step.text,
      ...(step.image && {
        image: {
          '@type': 'ImageObject',
          url: step.image,
        },
      }),
      ...(step.url && { url: step.url }),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
