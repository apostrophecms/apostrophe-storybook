import {
  withKnobs,
  text,
  boolean
} from '@storybook/addon-knobs';
import AposButton from './../button/AposButton.vue';
import AposModal from './../modal/AposModal.vue';
import AposModalRail from './../modal/AposModalRail.vue';
import AposModalBody from './../modal/AposModalBody.vue';
import AposTagList from './../tagList/AposTagList.vue';
import AposMediaManagerToolbar from './AposMediaManagerToolbar.vue';
import AposMediaManagerDisplay from './AposMediaManagerDisplay.vue';

import mediaData from './data.js';
import tagData from './../tagList/data.js';
import TagApplyData from './../tagApplyMenu/data.js';

// import AposStringInput from './../inputString/AposStringInput.vue';

export default {
  title: 'Media Manager',
  decorators: [withKnobs]
};

export const mediaManager = () => {
  return {
    components: {
      AposModal,
      AposButton,
      AposModalRail,
      AposModalBody,
      AposTagList,
      AposMediaManagerToolbar,
      AposMediaManagerDisplay
    },
    props: {

    },
    data () {
      return {
        modal: {
          title: 'Manage Media',
          active: true,
          type: 'overlay',
          showModal: true
        },
        tags: tagData,
        applyTags: TagApplyData,
        images: mediaData.images
      };
    },
    template: `
      <div>
        <button type="button" class="apos-button">
          Activate modal
        </button>
        <AposModal :modal="modal">
          <template #primaryControls>
            <AposButton type="primary" label="Finished" />
          </template>
          <template #leftRail>
            <AposModalRail>
              <AposTagList title="Filter by Tag" :tags="tags" />
            </AposModalRail>
          </template>
          <template #main>
            <AposModalBody>
              <template #bodyHeader>
                <AposMediaManagerToolbar />
              </template>
              <template #bodyMain>
                <AposMediaManagerDisplay :images="images" />
              </template>
            </AposModalBody>
          </template>
          <template #rightRail>
            <AposModalRail type="right">
              I am on the right
            </AposModalRail>
          </template>
        </AposModal>
      </div>
      `
  };
};
