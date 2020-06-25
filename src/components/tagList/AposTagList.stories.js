import { withKnobs } from '@storybook/addon-knobs';
import AposModal from '../modal/AposModal.vue';
import AposModalRail from '../modal/AposModalRail.vue';
import AposModalBody from '../modal/AposModalBody.vue';
import AposButton from './../button/AposButton.vue';
import AposTagList from './AposTagList.vue';
import tagListItems from './data.js';

export default {
  title: 'Tag List',
  decorators: [withKnobs]
};

export const tagList = () => ({
  components: {
    AposTagList,
    AposModal,
    AposButton,
    AposModalRail,
    AposModalBody
  },
  data() {
    return {
      tagListItems,
      modal: {
        title: 'Media Library',
        active: true,
        type: 'overlay',
        showModal: true
      }
    };
  },
  template: `
  <div>
    <button type="button" class="apos-button">
      Media Library
    </button>
    <AposModal :modal="modal">
      <template #primaryControls>
        <AposButton type="primary" label="Close" />
      </template>
      <template #leftRail>
        <AposModalRail>
          <AposTagList title="Image Tags" :tags="tagListItems" />
        </AposModalRail>
      </template>
      <template #main>
        <AposModalBody>
          <template #bodyHeader>
            <AposButton label="Exit" :iconOnly="true"  icon="Label" type="outline" />
            <AposButton label="Exit" :iconOnly="true"  icon="dots-vertical-icon" type="outline" />
            <AposButton label="Exit" :iconOnly="true"  icon="Delete" type="outline" />
            <AposButton label="Exit" :iconOnly="true"  icon="CheckboxBlankOutline" type="outline" />
          </template>
          <template #bodyMain>
            Hi :)
          </template>
        </AposModalBody>
      </template>
    </AposModal>
  </div>
  `
});
