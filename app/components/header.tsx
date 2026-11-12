// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck : until veda-ui fixes its types: NavItem type enum
import React from 'react';
import { PageHeader } from '@lib';
import { NavItem } from '@lib';
import {
  DATASET_CATALOG_PATH,
  EXPLORATION_PATH,
  STORY_HUB_PATH,
  TOPICS_PATH,
} from 'app/config';
import VedaUIConfigProvider from 'app/store/providers/veda-ui-config';

export const navItems: NavItem[] = [
  {
    id: 'topics',
    title: 'Topics',
    to: `/${TOPICS_PATH}`,
    type: 'internalLink',
  },
  {
    id: 'data-catalog',
    title: 'Data Catalog',
    to: `/${DATASET_CATALOG_PATH}`,
    type: 'internalLink',
  },
  {
    id: 'stories',
    title: 'Stories',
    to: `/${STORY_HUB_PATH}`,
    type: 'internalLink',
  },
  {
    id: 'exploration',
    title: 'Exploration',
    to: `/${EXPLORATION_PATH}`,
    type: 'internalLink',
  },  

];

export const subNavItems: NavItem[] = [
  {
    id: 'about',
    title: 'About',
    to: '/about',
    type: 'internalLink',
  },
  {
    id: 'contact-us',
    title: 'Contact us',
    to: '/contact',
    type: 'internalLink',
  },
];

export default function Header() {
  return (
    <VedaUIConfigProvider>
      <PageHeader
        title={'Water Insight'}
        mainNavItems={navItems}
        subNavItems={subNavItems}
      />
    </VedaUIConfigProvider>
  );
}
