// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck : until veda-ui fixes its types: NavItem type enum
import React from 'react';
import { PageHeader } from '@lib';
import { NavItem } from '@lib';
import NasaLogoColor from 'app/components/nasa-logo-color.js';
import VedaUIConfigProvider from 'app/store/providers/veda-ui-config';

// 1. Updated main navigation to match your slide deck!
export const navItems: NavItem[] = [
  {
    id: 'applications',
    title: 'Applications ⮟',
    to: '/applications', // TODO: Update to actual path when ready
    type: 'internalLink',
  },
  {
    id: 'dataset-info',
    title: 'Dataset Info ⮟',
    to: '/dataset-info', // TODO: Update to actual path when ready
    type: 'internalLink',
  },
  {
    id: 'events',
    title: 'Events',
    to: '/events', // TODO: Update to actual path when ready
    type: 'internalLink',
  },
  {
    id: 'about',
    title: 'About',
    to: '/about', // TODO: Update to actual path when ready
    type: 'internalLink',
  },
];

// 2. We empty this array so no extra links appear in the top-right corner
export const subNavItems: NavItem[] = [];

export default function Header() {
  return (
    <VedaUIConfigProvider>
      <PageHeader
        title={'Water Insight'}
        mainNavItems={navItems}
        subNavItems={subNavItems}
        logoSvg={
          <div id='logo-container-link'>
            {/*
              USWDS targets only <a> tags for styling links. However when the text is a <span>
              instead of a link, it does not inherit the color styling (it ends up being white).
              To fix this, we must add the color inline like this.
              TODO: Ideally we can address this on the veda-ui side so that the color applies to all elements within the logo.
            */}
            <NasaLogoColor />
          </div>
        }
      />
    </VedaUIConfigProvider>
  );
}