import React from 'react';
import Link from 'next/link';
import { getStoriesMetadata } from 'app/content/utils/mdx';

// If you need your base path for future images
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

// Updated topics to match Slide 3
const topicsData = [
  { title: 'Drought and Fire', path: '/topics/drought-and-fire' },
  { title: 'Floods and Landslides', path: '/topics/floods-and-landslides' },
  { title: 'Water Resources and Water Quality', path: '/topics/water-resources' },
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
    // Wraps the entire page in a dark theme
    <div style={{ backgroundColor: '#0b0b0b', color: '#f8f8f8', minHeight: '100vh', paddingBottom: '4rem' }}>
      
      {/* 
        ===========================================================
        NAVBAR MOCKUP (Match Slide 1)
        Note: You will want to move this into your real header component
        located at ./components/header.tsx !
        =========================================================== 
      */}
      <nav 
        className='padding-3' 
        style={{ 
          backgroundColor: '#000', 
          borderBottom: '2px solid #333', 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Placeholder for NASA logo, replace src with your actual logo path */}
          <div style={{ 
            backgroundColor: '#fff', 
            padding: '0.5rem 1rem', 
            borderRadius: '4px',
            color: '#000',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <span style={{ color: '#005ea2' }}>NASA</span> Water Insight <span style={{ backgroundColor: '#d32f2f', color: '#fff', padding: '0.1rem 0.3rem', borderRadius: '4px', fontSize: '0.8rem' }}>BETA</span>
          </div>
        </div>
        <div style={{ fontSize: '1.1rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href='#' style={{ color: '#fff', textDecoration: 'none' }}>Applications ⮟</Link> <span style={{ color: '#555' }}>|</span>
          <Link href='#' style={{ color: '#fff', textDecoration: 'none' }}>Dataset Info ⮟</Link> <span style={{ color: '#555' }}>|</span>
          <Link href='#' style={{ color: '#fff', textDecoration: 'none' }}>Events</Link> <span style={{ color: '#555' }}>|</span>
          <Link href='#' style={{ color: '#fff', textDecoration: 'none' }}>About</Link>
        </div>
      </nav>

      <div className='grid-container margin-top-6'>
        
        {/* ==========================================
            SLIDE 1: WELCOME TEXT & MAP PLACEHOLDER 
            ========================================== */}
        <div className='grid-row grid-gap-lg margin-bottom-6'>
          <div className='tablet:grid-col-6 display-flex flex-column flex-justify-center'>
            <div className='body-text text-normal font-sans-md line-height-sans-5'>
              <p>
                Water is arguably the most important resource for sustaining ecosystems, agriculture, and life itself. The water cycle describes how water moves throughout the planet’s atmosphere, oceans, and land impacting weather patterns, water availability, and natural disasters such as floods, wildfires, and droughts. Using a combination of Earth observing satellites and sensors, ground-based monitoring and scientific modeling, we can observe Earth’s water resources at all stages of the water cycle. NASA Water Insight data products leverage these capabilities to track changes in atmospheric and land surface properties including soil moisture, precipitation, and vegetation, and to place them in historical context for a dynamically changing world.
              </p>
            </div>
          </div>
          <div className='tablet:grid-col-6'>
            {/* MAP PLACEHOLDER */}
            <div 
              style={{ 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                borderRadius: '8px', 
                height: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#888',
                fontSize: '1.5rem'
              }}
            >
              pan/zoom domain graphic
            </div>
          </div>
        </div>

        {/* ==========================================
            SLIDE 2: TIME SERIES PLACEHOLDER & NLDAS 
            ========================================== */}
        <div className='grid-row grid-gap-lg margin-bottom-6'>
          <div className='tablet:grid-col-6'>
            {/* TIME SERIES PLACEHOLDER */}
            <div 
              style={{ 
                backgroundColor: '#222', 
                border: '1px solid #444', 
                borderRadius: '8px', 
                height: '400px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                color: '#888',
                fontSize: '1.5rem'
              }}
            >
              time series sample graphic
            </div>
          </div>
          <div className='tablet:grid-col-6 display-flex flex-column flex-justify-center'>
            <div className='body-text text-normal font-sans-md line-height-sans-5'>
              <p className='margin-bottom-2'>
                The third phase of North American Land Data Assimilation System (NLDAS-3) is currently in development. Building off the legacy of NLDAS-2, the new dataset will feature:
              </p>
              <ul className='margin-bottom-0 margin-left-4' style={{ listStyleType: 'disc', color: '#ccc' }}>
                <li className='margin-bottom-1'>An expanded domain covering all of North and Central America</li>
                <li className='margin-bottom-1'>Improved spatial resolution of 1-km</li>
                <li className='margin-bottom-1'>Reduced data latency to less than one day</li>
                <li className='margin-bottom-1'>More sophisticated land surface processes based on the Noah-MP model</li>
                <li className='margin-bottom-1'>Assimilation of remote sensing observations for vegetation, soil moisture, land surface temperature, snow, and ground water</li>
                <li className='margin-bottom-1'>Daily period of record covering 2001-present (hourly for forcings)</li>
              </ul>
            </div>
          </div>
        </div>

        <div className='grid-row margin-bottom-6'>
          <div className='tablet:grid-col-12 body-text text-normal font-sans-md line-height-sans-5'>
            <p>
              The beta version of NLDAS-3 forcing data is currently available for download and testing. For information on how to access it, visit the <a href='#' style={{ color: '#66b2ff', textDecoration: 'underline' }}>project GitHub page</a>. When model outputs are released, they will also feature 36 land surface variables from Noah-MP and streamflow information from the Hymap routing model. <a href='#' style={{ color: '#66b2ff', textDecoration: 'underline' }}>Click here for a full list of the anticipated data variables</a>.
            </p>
          </div>
        </div>

        {/* ==========================================
            SLIDE 3: HYDROGLOBE & TOPIC CARDS 
            ========================================== */}
        <div className='grid-row margin-bottom-4'>
          <div className='tablet:grid-col-12 body-text text-normal font-sans-md line-height-sans-5'>
            <p>
              The WaterInsight team is also developing HydroGlobe: a 5km dataset with many of the same features as NLDAS-3 covering the entire globe from 2003 to present.
            </p>
          </div>
        </div>

        <div className='grid-row grid-gap-lg margin-bottom-6'>
          {topicsData.map((d) => {
            return (
              <div key={d.title} className='tablet:grid-col-4'>
                <Link href={d.path} style={{ textDecoration: 'none' }}>
                  <div 
                    className='padding-4 radius-md display-flex flex-align-center flex-justify-center text-center shadow-1'
                    style={{ 
                      backgroundColor: '#e0e0e0', // Matches the light gray boxes from Slide 3
                      color: '#000', 
                      height: '200px',
                      transition: 'transform 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  >
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{d.title}</h3>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>

        {/* ==========================================
            FEATURED DATA STORIES 
            ========================================== */}
        <div className='grid-row margin-bottom-3'>
          <h2 style={{ color: '#fff' }}>Featured Data Stories</h2>
        </div>
        
        <div className='grid-row grid-gap-md'>
          {/* Main Top Story */}
          {topStory && (
            <div className='tablet:grid-col-6 display-flex'>
              <div
                className='card--homepage-topstory text-base-lightest radius-md display-flex flex-align-end padding-3 shadow-2 width-full'
                style={{
                  backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%), url(${topStory.media?.src})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  minHeight: '350px',
                  position: 'relative',
                  overflow: 'hidden',
                  border: '1px solid #333'
                }}
              >
                <div className='card--homepage-topstory-text position-relative' style={{ zIndex: 100 }}>
                  <h3 style={{ fontWeight: 'bold', fontSize: '1.5rem', marginBottom: '0.5rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                    {topStory.name}
                  </h3>
                  <p className='margin-top-1 text-sm' style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
                    {topStory.description}
                  </p>
                </div>
                <Link className='link--block' href={topStory.path} style={{ position: 'absolute', inset: 0, zIndex: 10 }} />
              </div>
            </div>
          )}

          {/* Sub Stories */}
          <div className='tablet:grid-col-6 display-flex flex-column' style={{ gap: '1rem' }}>
            {otherStories.map((d) => {
              return (
                <div key={d.id} className='flex-1 display-flex'>
                  <div
                    className='card--homepage-substory text-base-lightest radius-md display-flex flex-align-end padding-3 shadow-2 width-full'
                    style={{
                      backgroundImage: `linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%), url(${d.media?.src}?v=${d.id})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      minHeight: '167px',
                      position: 'relative',
                      overflow: 'hidden',
                      border: '1px solid #333'
                    }}
                  >
                    <div className='card--homepage-topstory-text position-relative' style={{ zIndex: 100 }}>
                      <h3 style={{ fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.25rem', textShadow: '1px 1px 4px rgba(0,0,0,0.8)' }}>
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
    </div>
  );
}