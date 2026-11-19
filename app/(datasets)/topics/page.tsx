import React from 'react';
import dynamic from 'next/dynamic';
import { getTopicsMetadata } from 'app/content/utils/mdx';

// @NOTE: Dynamically load to ensure only CSR since these depends on VedaUI ContextProvider for routing...
const StoriesHub = dynamic(() => import('../stories/hub'), {
  ssr: false,
  loading: () => <p>Loading...</p>, // @NOTE @TODO: We need a loading state!!!
});

export default function Page() {
  const stories = getTopicsMetadata().map((d) => ({
    ...d.metadata,
    path: `topics/${d.slug}`,
  }));

  return (
    <section className='margin-top-5 margin-bottom-8'>
      <div className='grid-container'>
        
        {/* HERO / HEADER SECTION */}
        <div className='grid-row margin-bottom-5 padding-4 radius-lg shadow-1 bg-base-lightest border border-base-lighter'>
          <div className='tablet:grid-col-10'>
            <h1 className='text-primary margin-bottom-2' style={{ fontSize: '2.5rem', fontWeight: 'bold' }}>
              Explore Water Insight Topics
            </h1>
            <p className='font-sans-lg text-base-dark line-height-sans-4 margin-bottom-2' style={{ fontSize: '1.25rem' }}>
              Dive into the critical indicators of Earth&apos;s water cycle.
            </p>
            <div className='body-text text-normal font-sans-md line-height-sans-5'>
              <p>
                This dashboard categorizes NASA&apos;s state-of-the-art land, weather, and water modeling capabilities into key thematic areas. Select a topic below to discover interactive data, historical trends, and scientific insights regarding droughts, floods, water availability, and more.
              </p>
            </div>
          </div>
        </div>

        {/* TOPICS HUB (VEDA UI COMPONENT) */}
        <div className='grid-row'>
          <div className='tablet:grid-col-12'>
            {/* 
              This component automatically renders the grid of your topics
              based on your MDX files. We leave it exactly as it is! 
            */}
            <StoriesHub stories={stories} />
          </div>
        </div>
        
      </div>
    </section>
  );
}
