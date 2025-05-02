import React from 'react';
import Link from 'next/link';
import { navItems, subNavItems } from './header';
import NasaLogoColor from './nasa-logo-color';
import { PageFooter } from '@lib';
import VedaUIConfigProvider from 'app/store/providers/veda-ui-config';

export default function Footer() {
  const defaultFooterSettings = {
    secondarySection: {
      division: 'NASA Water Insight 2025',
      version: 'BETA VERSION',
      title: 'Point of Contact',
      name: 'Kyle Lesinger',
      to: 'test@example.com',
      type: 'email',
    },
    returnToTop: true,
  };

  return (
    <VedaUIConfigProvider>
      <PageFooter
        mainNavItems={navItems}
        subNavItems={subNavItems}
        hideFooter={false}
        logoSvg={<NasaLogoColor />}
        footerSettings={defaultFooterSettings}
      />
    </VedaUIConfigProvider>
  );
}
