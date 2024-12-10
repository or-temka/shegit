import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/shegit/__docusaurus/debug',
    component: ComponentCreator('/shegit/__docusaurus/debug', 'f4a'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/config',
    component: ComponentCreator('/shegit/__docusaurus/debug/config', 'c2e'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/content',
    component: ComponentCreator('/shegit/__docusaurus/debug/content', 'e69'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/globalData',
    component: ComponentCreator('/shegit/__docusaurus/debug/globalData', '8f6'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/metadata',
    component: ComponentCreator('/shegit/__docusaurus/debug/metadata', '88f'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/registry',
    component: ComponentCreator('/shegit/__docusaurus/debug/registry', 'aa5'),
    exact: true
  },
  {
    path: '/shegit/__docusaurus/debug/routes',
    component: ComponentCreator('/shegit/__docusaurus/debug/routes', '851'),
    exact: true
  },
  {
    path: '/shegit/markdown-page',
    component: ComponentCreator('/shegit/markdown-page', 'e40'),
    exact: true
  },
  {
    path: '/shegit/docs',
    component: ComponentCreator('/shegit/docs', 'bff'),
    routes: [
      {
        path: '/shegit/docs/next',
        component: ComponentCreator('/shegit/docs/next', '4a6'),
        routes: [
          {
            path: '/shegit/docs/next/tags',
            component: ComponentCreator('/shegit/docs/next/tags', 'bfa'),
            exact: true
          },
          {
            path: '/shegit/docs/next/tags/array',
            component: ComponentCreator('/shegit/docs/next/tags/array', 'be5'),
            exact: true
          },
          {
            path: '/shegit/docs/next/tags/color',
            component: ComponentCreator('/shegit/docs/next/tags/color', '1ed'),
            exact: true
          },
          {
            path: '/shegit/docs/next/tags/object',
            component: ComponentCreator('/shegit/docs/next/tags/object', 'a47'),
            exact: true
          },
          {
            path: '/shegit/docs/next/tags/rgb',
            component: ComponentCreator('/shegit/docs/next/tags/rgb', '914'),
            exact: true
          },
          {
            path: '/shegit/docs/next',
            component: ComponentCreator('/shegit/docs/next', '9fc'),
            routes: [
              {
                path: '/shegit/docs/next/category/colors',
                component: ComponentCreator('/shegit/docs/next/category/colors', 'fa3'),
                exact: true,
                sidebar: "shegitSidebar"
              },
              {
                path: '/shegit/docs/next/colors/rgb-array-to-obj',
                component: ComponentCreator('/shegit/docs/next/colors/rgb-array-to-obj', 'c8b'),
                exact: true,
                sidebar: "shegitSidebar"
              },
              {
                path: '/shegit/docs/next/colors/to-color',
                component: ComponentCreator('/shegit/docs/next/colors/to-color', 'a5c'),
                exact: true,
                sidebar: "shegitSidebar"
              }
            ]
          }
        ]
      },
      {
        path: '/shegit/docs',
        component: ComponentCreator('/shegit/docs', '976'),
        routes: [
          {
            path: '/shegit/docs/tags',
            component: ComponentCreator('/shegit/docs/tags', 'dae'),
            exact: true
          },
          {
            path: '/shegit/docs/tags/array',
            component: ComponentCreator('/shegit/docs/tags/array', 'e82'),
            exact: true
          },
          {
            path: '/shegit/docs/tags/color',
            component: ComponentCreator('/shegit/docs/tags/color', '387'),
            exact: true
          },
          {
            path: '/shegit/docs/tags/object',
            component: ComponentCreator('/shegit/docs/tags/object', 'f4f'),
            exact: true
          },
          {
            path: '/shegit/docs/tags/rgb',
            component: ComponentCreator('/shegit/docs/tags/rgb', '66d'),
            exact: true
          },
          {
            path: '/shegit/docs',
            component: ComponentCreator('/shegit/docs', '230'),
            routes: [
              {
                path: '/shegit/docs/category/colors',
                component: ComponentCreator('/shegit/docs/category/colors', '21e'),
                exact: true,
                sidebar: "shegitSidebar"
              },
              {
                path: '/shegit/docs/colors/rgb-array-to-obj',
                component: ComponentCreator('/shegit/docs/colors/rgb-array-to-obj', '0d5'),
                exact: true,
                sidebar: "shegitSidebar"
              },
              {
                path: '/shegit/docs/colors/to-color',
                component: ComponentCreator('/shegit/docs/colors/to-color', 'b52'),
                exact: true,
                sidebar: "shegitSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/shegit/',
    component: ComponentCreator('/shegit/', '712'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
