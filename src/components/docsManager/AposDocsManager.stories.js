import {
  withKnobs
} from '@storybook/addon-knobs';
import AposDocsManager from './AposDocsManager.vue';
import mediaData from './data.js';
import tagListData from './../tagList/data.js';
import applyTagData from './../tagApplyMenu/data.js';

export default {
  title: 'Media Manager',
  decorators: [withKnobs]
};

export const mediaManager = () => {
  return {
    components: {
      AposDocsManager
    },
    methods: {
      handleTrash(selected) {
        console.log(`trash ${selected}`);
      }
    },
    data () {
      return {
        media: mediaData.media,
        tagList: tagListData,
        applyTags: applyTagData.applyTo
      };
    },
    template: `<AposDocsManager
      :media="media"
      :tagList="tagList"
      :applyTags="applyTags"
      v-on:trash="handleTrash"
    />`
  };
};
