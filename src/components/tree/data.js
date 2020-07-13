import { LoremIpsum } from 'lorem-ipsum';
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 8,
    min: 2
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
  rows: generateRows(randomNumber())
};

function generateRows(number) {
  const data = [];

  for (let i = 0; i < number; i++) {
    const row = generateRow();
    data.push(row);
  }

  return data;
}

function generateRow(maxDepth = 5) {
  const title = lorem.generateSentences(1);
  const id = title.toLowerCase().replace(' ', '-');

  const item = {
    id,
    title,
    updatedAt: randomDay(),
    published: randomBoolean(),
    url: `/${id}`
  };

  if (randomBoolean(0.3)) {
    item.children = [];
    for (let i = 0; i < randomNumber(); i++) {
      if (maxDepth > i) {
        const child = generateRow(i);
        item.children.push(child);
      } else {
        delete item.children;
      }
    }
  }

  return item;
}

function randomDay() {
  const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];
  const days = [...Array(31).keys()];
  const years = [2018, 2019, 2020, 2021];
  return `${weekdays[randomItem(weekdays)]}
    ${months[randomItem(months)]}
    ${days[randomItem(days)]},
    ${years[randomItem(years)]}`.replace(/[\n][\s]+/g, ' ');
}

function randomNumber(min = 1, max = 10) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomBoolean(threshold = 0.4) {
  return Math.random() >= threshold;
}

function randomItem(arr) {
  return Math.floor(Math.random() * arr.length);
}
