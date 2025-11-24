'use client';

/**
 * Organization Schema Component
 * Provides schema markup for the RentReadyTools organization
 * Includes: organization info, contact, social profiles, location
 */

interface OrganizationSchemaProps {
  schemaType?: 'Organization' | 'LocalBusiness';
  includeAddress?: boolean;
}

export function OrganizationSchema({
  schemaType = 'Organization',
  includeAddress = false,
}: OrganizationSchemaProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': schemaType,
    name: 'RentReadyTools',
    alternateName: 'Rent Ready Tools',
    description: 'Free tools to maximize rental income, cut vacancy, and know when DIY management stops paying off.',
    url: 'https://rentreadytools.com',
    logo: 'https://rentreadytools.com/logo.png',
    email: 'hello@rentreadytools.com',
    sameAs: [
      'https://www.linkedin.com/company/rentreadytools',
      'https://twitter.com/rentreadytools',
    ],
    ...(includeAddress && {
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
    }),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-XXX-XXX-XXXX',
      contactType: 'customer service',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
