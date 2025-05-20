import React from 'react';
import Link from 'next/link';
import { getStoriesMetadata } from 'app/content/utils/mdx';

const mainTopSectionData = [
  {
    title: 'Water Resources for People, Energy, Commerce and Planets',
    description:
      'Easily access high quality Earth data from NASA and its associated partners',
    img: '/images/homepage/water_avail_theme.png',
    path: '/themes/water-resources',
  },
  {
    title: 'Floods',
    description:
      'Easily access high quality Earth data from NASA and its associated partners.',
    img: '/images/homepage/flood_theme.png',
    path: '/themes/floods',
  },
  {
    title: 'Droughts',
    description:
      'Easily access high quality Earth data from NASA and its associated partners',
    img: '/images/homepage/drought_theme.png',
    path: '/themes/droughts',
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
        <div className='grid-row margin-top-5'>
          <h2>
          Water Quantity and the Water Cycle (draft text for Earth.gov Water Resources page) 
          </h2>
          <div className="body-text">
            <p>
              Water is arguably the most important resource for sustaining ecosystems, agriculture, and life itself. The water cycle describes how water moves throughout the planet’s atmosphere, oceans, and land impacting weather patterns, water availability and natural disasters such as floods and droughts. Although water covers the majority of the Earth’s surface, only 1% of it is readily available for our uses.
            </p>
            <p>
              Using a combination of Earth observing satellites and sensors, ground-based monitoring and scientific modeling, we can observe Earth’s water resources at all stages of the water cycle. An accurate understanding of the terrestrial water cycle is important for developing resilience across multiple sectors.
            </p>
            <p>
              Clean water is a fundamental human need, and understanding water cycle patterns help ensure sustainable management of freshwater resources for drinking, sanitation, commerce, and agriculture. Tracking precipitation, soil moisture, and groundwater levels helps predict floods and droughts, allowing communities to prepare and minimize damage.
            </p>
            <p>
              Accurate data on soil moisture, precipitation, and groundwater levels can help farmers optimize irrigation, reduce water waste and increase crop yields. Understanding water availability is critical in the energy sector for efficient power generation and avoiding resource shortages. The insurance sector benefits by evaluating flood and drought risks and improving disaster modeling.
            </p>
            <p>
              Water management efforts require satellite information to develop sustainable solutions for water conservation and distribution, while infrastructure development requires assessment of water-related risks. Thus, monitoring of the water cycle enables us to make data-driven decisions, reduce costs, and ultimately promote societal well-being and stability.
            </p>
            <p>
              Federal agencies are working together to develop a terrestrial water cycle monitoring and forecasting system for North America to enable accurate assessment of critical variables such as precipitation, soil moisture, snow, groundwater, and streamflow for water resources management.
            </p>
          </div>
        </div>
        <div className='grid-row grid-gap-lg card--homepage-main margin-top-2'>
          {mainTopSectionData.map((d) => {
            return (
              <div
                key={d.title}
                className='tablet:grid-col text-center padding-5'
              >
                <div>
                  <img
                    className='radius-pill'
                    src={d.img}
                    alt={d.title}
                    style={{ width: '150px', height: '150px', objectFit: 'cover' }}
                  ></img>
                </div>
                <div className='margin-top-3'>
                  <h3>{d.title}</h3>
                  <p className='margin-top-1'>{d.description}</p>
                  <Link href={d.path} className='display-inline-block margin-top-2 text-bold'>
                  Read More →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className='grid-row margin-top-5'>
          <h2>Featured Data Stories</h2>
        </div>
        <div className='grid-row grid-gap-md  margin-top-2'>
          <div className='tablet:grid-col-6'>
            <div
              className='card--homepage-topstory text-base-lightest radius-md display-flex flex-align-end padding-2'
              style={{ backgroundImage: `url(${topStory.media?.src})` }}
            >
              <div className='card--homepage-topstory-text'>
                <h3> {topStory.name}</h3>
                <p className='margin-top-1'> {topStory.description}</p>
              </div>
              <Link className='link--block' href={topStory.path} />
            </div>
          </div>
          <div className='tablet:grid-col-6'>
            {otherStories.map((d) => {
              return (
                <div key={d.id} className='grid-row'>
                  <div className='tablet:grid-col'>
                    <div
                      className='card--homepage-substory text-base-lightest radius-md display-flex flex-align-end padding-2'
                      style={{ backgroundImage: `url(${d.media?.src})` }}
                    >
                      <div className='card--homepage-topstory-text'>
                        <h3> {d.name}</h3>
                        <p className='margin-top-1'> {d.description}</p>
                      </div>
                      <Link className='link--block' href={d.path} />
                    </div>
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
