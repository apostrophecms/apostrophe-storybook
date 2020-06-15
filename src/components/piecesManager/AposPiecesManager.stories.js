import {
  withKnobs
} from '@storybook/addon-knobs';
import AposPiecesManager from './AposPiecesManager.vue';
import docsData from './data';
import tagListData from '../tagList/data.js';
import applyTagData from '../tagApplyMenu/data.js';

export default {
  title: 'Pieces Manager',
  decorators: [withKnobs]
};

export const piecesManager = () => {
  return {
    components: {
      AposPiecesManager
    },
    methods: {
      handleTrash(selected) {
        console.log(`trash ${selected}`);
      },
      log(action) {
        console.log(`sort by ${action}`);
      }
    },
    data () {
      return {
        data: docsData,
        tagList: tagListData,
        applyTags: applyTagData.applyTo,
        docType: 'Documents'
      };
    },
    template: `<AposPiecesManager
      :headers="data.headers"
      :rows="data.rows"
      :tagList="tagList"
      :applyTags="applyTags"
      :docType="docType"
      @trash="handleTrash"
      @sort="log"
    />`
  };
};
