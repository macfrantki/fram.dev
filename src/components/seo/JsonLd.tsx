'use client';

import { useMemo } from 'react';

type WebsiteData = {
  name: string;
  alternateName?: string;
  url: string;
  description: string;
  siteUrl: string;
};

type OrganizationData = {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs?: string[];
};

type ServiceData = {
  name: string;
  description: string;
  provider: {
    name: string;
    url: string;
  };
  url: string;
};

type ArticleData = {
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  author: {
    name: string;
  };
  publisher: {
    name: string;
    logo: {
      url: string;
    };
  };
  url: string;
};

type BreadcrumbData = {
  items: {
    position: number;
    name: string;
    item: string;
  }[];
};

type JsonLdProps = {
  type: 'website' | 'organization' | 'service' | 'article' | 'breadcrumb';
  data: WebsiteData | OrganizationData | ServiceData | ArticleData | BreadcrumbData;
};

const JsonLd = ({ type, data }: JsonLdProps) => {
  const jsonLd = useMemo(() => {
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: (data as WebsiteData).name,
          alternateName: (data as WebsiteData).alternateName,
          url: (data as WebsiteData).url,
          description: (data as WebsiteData).description,
        };
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: (data as OrganizationData).name,
          url: (data as OrganizationData).url,
          logo: (data as OrganizationData).logo,
          description: (data as OrganizationData).description,
          sameAs: (data as OrganizationData).sameAs,
        };
      case 'service':
        return {
          '@context': 'https://schema.org',
          '@type': 'Service',
          name: (data as ServiceData).name,
          description: (data as ServiceData).description,
          provider: {
            '@type': 'Organization',
            name: (data as ServiceData).provider.name,
            url: (data as ServiceData).provider.url,
          },
          url: (data as ServiceData).url,
        };
      case 'article':
        return {
          '@context': 'https://schema.org',
          '@type': 'Article',
          headline: (data as ArticleData).headline,
          description: (data as ArticleData).description,
          image: (data as ArticleData).image,
          datePublished: (data as ArticleData).datePublished,
          dateModified: (data as ArticleData).dateModified || (data as ArticleData).datePublished,
          author: {
            '@type': 'Person',
            name: (data as ArticleData).author.name,
          },
          publisher: {
            '@type': 'Organization',
            name: (data as ArticleData).publisher.name,
            logo: {
              '@type': 'ImageObject',
              url: (data as ArticleData).publisher.logo.url,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': (data as ArticleData).url,
          },
        };
      case 'breadcrumb':
        return {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: (data as BreadcrumbData).items.map((item) => ({
            '@type': 'ListItem',
            position: item.position,
            name: item.name,
            item: item.item,
          })),
        };
      default:
        return {};
    }
  }, [type, data]);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
};

export default JsonLd;
