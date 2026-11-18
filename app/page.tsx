import React from 'react';
import Link from 'next/link';
import { getStoriesMetadata } from 'app/content/utils/mdx';

const mainTopSectionData = [
  {
    title: 'Water Availability',
    description: 'Mapping water for human use, energy, agriculture, and ecosystems.',
    img: '/images/homepage/water_avail_theme.png',
    path: '/topics/water-resources',
  },
  {
    title: 'Floods',
    description: 'Data-driven insights for flood preparedness.',
    img: '/images/homepage/flood_theme.png',
    path: '/topics/floods',
  },
  {
    title: 'Droughts',
    description: 'Mapping droughts and drought conditions throughout the U.S.',
    img: '/images/homepage/drought_theme.png',
    path: '/topics/droughts',
  },
];

const featuredStories = getStoriesMetadata()
  .map((d) => ({
    ...d.metadata,
    path: `stories/${d.slug}`,
  }))
  .filter((_d, idx) => idx < 3);

const topStory = featuredStories[0];
const otherStories = featuredStories.slice(1);

export default function HomePage() {
  return (
    <section>
      <div className='grid-container'>
        
        {/* WELCOME SECTION */}
        <div className='grid-row margin-top-5 margin-bottom-4 padding-4 radius-lg bg-base-lightest shadow-1'>
          <div className='tablet:grid-col-10 tablet:grid-offset-1'>
            <h2 className='text-center margin-bottom-3 text-primary'>
              Welcome to NASA Water Insight
            </h2>
            <div className='body-text text-normal font-sans-md line-height-sans-4'>
              <p className='margin-bottom-2'>
                Water is arguably the most important resource for sustaining ecosystems, agriculture, and life itself. The water cycle describes how water moves throughout the planet’s atmosphere, oceans, and land impacting weather patterns, water availability, and natural disasters such as floods, wildfires, and droughts.
              </p>
              <p>
                Using a combination of Earth observing satellites and sensors, ground-based monitoring and scientific modeling, we can observe Earth’s water resources at all stages of the water cycle. NASA Water Insight data products leverage these capabilities to track changes in atmospheric and land surface properties including soil moisture, precipitation, and vegetation, and to place them in historical context for a dynamically changing world.
              </p>
            </div>
          </div>
        </div>

        {/* TOPICS SECTION */}
        <div className='grid-row grid-gap-lg card--homepage-main margin-top-4'>
          {mainTopSectionData.map((d) => {
            return (
              <div
                key={d.title}
                className='tablet:grid-col text-center padding-4 radius-lg border border-base-lighter shadow-1 bg-white display-flex flex-column flex-align-center'
                style={{ transition: 'box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div className='margin-bottom-2'>
                  <img
                    className='radius-pill shadow-2'
                    src={d.img}
                    alt={d.title}
                    style={{ 
                      width: '140px', 
                      height: '140px', 
                      objectFit: 'cover', 
                      border: '4px solid #fff' 
                    }}
                  />
                </div>
                <div className='display-flex flex-column flex-1 width-full'>
                  <h3 className='margin-top-1 text-secondary-dark'>{d.title}</h3>
                  <p className='margin-top-1 flex-1 text-base-dark'>{d.description}</p>
                  <Link 
                    href={d.path} 
                    className='display-inline-block margin-top-3 text-bold'
                    style={{
                      padding: '0.5rem 1.5rem',
                      border: '2px solid #005ea2', // Standard primary blue
                      borderRadius: '4px',
                      textDecoration: 'none',
                      color: '#005ea2'
                    }}
                  >
                    Explore {d.title} →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* FEATURED DATA STORIES SECTION */}
        <div className='grid-row margin-top-8 margin-bottom-3'>
          <h2 className='text-primary'>Featured Data Stories</h2>
        </div>
        
        <div className='grid-row grid-gap-md'>
          {/* Main Top Story */}
          <div className='tablet:grid-col-6 display-flex'>
            <div
              className='card--homepage-topstory text-base-lightest radius-lg display-flex flex-align-end padding-4 shadow-2 width-full'
              style={{
                backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%), url(${topStory.media?.src})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                minHeight: '420px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div className='card--homepage-topstory-text position-relative' style={{ zIndex: 100 }}>
                <span 
                  className='margin-bottom-2 display-inline-block text-bold' 
                  style={{ backgroundColor: '#e5a000', color: '#111', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem' }}
                >
                  Top Story
                </span>
                <h3 style={{ fontWeight: 'bold', fontSize: '1.75rem', marginBottom: '0.5rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  {topStory.name}
                </h3>
                <p className='margin-top-1' style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                  {topStory.description}
                </p>
              </div>
              <Link className='link--block' href={topStory.path} style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
            </div>
          </div>

          {/* Sub Stories */}
          <div className='tablet:grid-col-6 display-flex flex-column' style={{ gap: '1.5rem' }}>
            {otherStories.map((d) => {
              return (
                <div key={d.id} className='flex-1 display-flex'>
                  <div
                    className='card--homepage-substory text-base-lightest radius-lg display-flex flex-align-end padding-3 shadow-2 width-full'
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%), url(${d.media?.src}?v=${d.id})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '198px',
                      position: 'relative',
                      overflow: 'hidden',
                    }}
                  >
                    <div className='card--homepage-topstory-text position-relative' style={{ zIndex: 100 }}>
                      <h3 style={{ fontWeight: 'bold', fontSize: '1.25rem', marginBottom: '0.25rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                        {d.name}
                      </h3>
                      <p className='margin-top-1 text-sm' style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                        {d.description}
                      </p>
                    </div>
                    <Link className='link--block' href={d.path} style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
      </div>
    </section>
  );
}
