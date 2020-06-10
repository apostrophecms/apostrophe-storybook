import {
  withKnobs
} from '@storybook/addon-knobs';
import AposPiecesManager from './AposPiecesManager.vue';
import docsData from '../table/data';
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
    template: `<AposPiecesManager
      :headers="data.headers"
      :docs="data.rows"
      :tagList="tagList"
      :applyTags="applyTags"
      :docType="docType"
      v-on:trash="handleTrash"
    />`
  };
};
