import { LoremIpsum } from 'lorem-ipsum';
import _ from 'underscore';
import tags from './../tagApplyMenu/data';
const lorem = new LoremIpsum({
  wordsPerSentence: {
    max: 6,
    min: 1
  }
});

function randomTags() {
  const randTags = [];
  randTags.push(_.shuffle(tags.tags)[0]);
  randTags.push(_.shuffle(tags.tags)[0]);
  return randTags;
};

function randomNum() {
  return (Math.floor(Math.random() * (6 - 2) + 2)).toString();
}

function createImages(num) {
  const images = [];
  for (let i = 0; i < num; i++) {
    const title = lorem.generateSentences(1);
    const alt = lorem.generateSentences(1);
    const credit = lorem.generateSentences(1);
    const creditUrl = lorem.generateSentences(1);
    const dim = `${randomNum()}00/${randomNum()}00`;
    images.push({
      id: `lesk-${Math.floor(Math.random() * Math.floor(10000)).toString()}`,
      path: `https://picsum.photos/${dim}?q=${Math.floor(Math.random() * Math.floor(1000)).toString()}`,
      title,
      alt,
      credit,
      creditUrl,
      slug: title.replace(' ', '-').toLowerCase(),
      tags: randomTags()
    });
  };
  return images;
}

export default {
  media: createImages(30)
};
