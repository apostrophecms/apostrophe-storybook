import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

export default {
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
      id: 'wqen23e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqenewwfe23e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqewfen23e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqwefween23e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wq333rwen23e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqen2fwef3e',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool'
    },
    {
      id: 'wqendby23e',
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
