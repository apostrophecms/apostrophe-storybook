import {
  withKnobs
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
      },
      toggleActive: function () {
        this.active = !this.active;
      },
      finishExit: function () {
        this.active = false;
      }
    },
    data () {
      return {
        media: mediaData.media,
        tagList: tagListData,
        active: true,
        applyTags: applyTagData.applyTo
      };
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="toggleActive">
        Activate modal
      </button>
      <AposMediaManager
        v-if="active"
        :media="media"
        :tagList="tagList"
        :applyTags="applyTags"
        @trash="handleTrash"
        @safe-close="finishExit"
      />
    </div>
    `
  };
};
