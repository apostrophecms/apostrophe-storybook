import {
  withKnobs
} from '@storybook/addon-knobs';
import AposDocsManager from './AposDocsManager.vue';
import docsData from '../table/data';
import tagListData from './../tagList/data.js';
import applyTagData from './../tagApplyMenu/data.js';

export default {
  title: 'Docs Manager',
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
        data: docsData,
        tagList: tagListData,
        applyTags: applyTagData.applyTo,
        // TODO: use Storybook knob for doc type
        docType: 'Documents'
      };
    },
    template: `<AposDocsManager
      :headers="data.headers"
      :docs="data.rows"
      :tagList="tagList"
      :applyTags="applyTags"
      :docType="docType"
      v-on:trash="handleTrash"
    />`
  };
};
