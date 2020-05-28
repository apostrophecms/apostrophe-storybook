import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';
import AposMediaManager from './AposMediaManager.vue';
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
      AposMediaManager
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
    template: `<AposMediaManager 
      :media="media" 
      :tagList="tagList" 
      :applyTags="applyTags"
      v-on:trash="handleTrash"
    />`
  };
};
