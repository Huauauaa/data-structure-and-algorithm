import nav from './nav';
import sidebar from './sidebar';

export default {
  base: '/data-structure-and-algorithm/',
  themeConfig: {
    siteTitle: '数据结构和算法',
    nav: nav(),
    sidebar: sidebar(),
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/Huauauaa/data-structure-and-algorithm',
      },
      { icon: 'twitter', link: 'https://twitter.com/Harvey27171313' },
      { icon: 'weibo', link: 'https://weibo.com/u/1880842922' },
    ],
    lastUpdated: true,
    editLink: {
      pattern: 'Huauauaa/data-structure-and-algorithm/edit/main/docs/:path',
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Huauauaa',
    },
  },
};
