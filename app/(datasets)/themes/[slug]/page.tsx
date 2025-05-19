import React from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getThemes } from 'app/content/utils/mdx';
import { LegacyGlobalStyles, PageHero } from '@lib';
import './index.scss';
import Providers from 'app/(datasets)/providers';

async function generateStaticParams() {
  const posts = getThemes();

  return posts.map((post) => ({ slug: post.slug }));
}

export default function StoryOverview({ params }: { params: any }) {
  const post = getThemes().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <script
        type='application/ld+json'
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Story',
            title: post.metadata.name,
            description: post.metadata.description,
            coverSrc: post.metadata.media?.src,
            coverAlt: post.metadata.media?.alt,
          }),
        }}
      />
      <article className='prose'>
        <Providers>
          <LegacyGlobalStyles />

          <PageHero
            title={post.metadata.name}
            description={post.metadata.description}
            coverSrc={post.metadata.media?.src}
            coverAlt={post.metadata.media?.alt}
          />
          <CustomMDX source={post.content} />
        </Providers>
      </article>
    </section>
  );
}
