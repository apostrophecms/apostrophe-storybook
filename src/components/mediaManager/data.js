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

function createImages(num) {
  const images = [];
  for (let i = 0; i < num; i++) {
    const title = lorem.generateSentences(1);
    images.push({
      id: `lesk-${Math.floor(Math.random() * Math.floor(10000)).toString()}`,
      path: `https://source.unsplash.com/random/300x300?q=${Math.floor(Math.random() * Math.floor(1000)).toString()}`,
      title,
      slug: title.replace(' ', '-').toLowerCase(),
      tags: randomTags()
    });
  };
  return images;
}

export default {
  images: createImages(30)
};
