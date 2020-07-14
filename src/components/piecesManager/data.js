import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default {
  totalPages: 4,
  headers: [
    {
      label: 'Title',
      action: 'title-desc',
      name: 'title'
    },
    {
      label: 'Last Updated',
      action: 'updated-at-desc',
      icon: 'Calendar',
      name: 'updatedAt'
    },
    {
      label: 'Published',
      action: 'published-desc',
      name: 'published'
    },
    {
      label: 'Link',
      name: 'url'
    }
  ],
  rows: [
    {
      id: 'pathways-triggers-30th-gaelic-fighting',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'jealous-uptake-fostered-keller-legitimate',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'besieged-worn-strikes-reckon-seeker',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'willed-industries-roller-watery-weighing',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'medicinal-recourse-award-educating-venerable',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'defeats-kinetic-recent-conjecture-premiums',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'putative-apology-doyle-holden-ascribed',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqen23e0re0e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqen098r89023e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    }
  ]
};
