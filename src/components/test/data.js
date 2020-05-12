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
      id: 'pathways-triggers-30th-gaelic-fighting',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool',
      status: {},
      value: { data: [] },
      field: {
        name: 'pathways-triggers-30th-gaelic-fighting',
        type: 'checkbox',
        choices: [ { value: 'checked' } ]
      }
    },
    {
      id: 'jealous-uptake-fostered-keller-legitimate',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool',
      status: {},
      value: { data: [] },
      field: {
        name: 'jealous-uptake-fostered-keller-legitimate',
        type: 'checkbox',
        choices: [ { value: 'checked' } ]
      }
    },
    {
      id: 'besieged-worn-strikes-reckon-seeker',
      title: lorem.generateSentences(1),
      updatedAt: 'Thursday January 12th, 2020',
      published: true,
      url: '/something cool',
      status: {},
      value: { data: [] },
      field: {
        name: 'besieged-worn-strikes-reckon-seeker',
        type: 'checkbox',
        choices: [ { value: 'checked' } ]
      }
    }
  ]
};
