import { withKnobs } from '@storybook/addon-knobs';
import AposModal from '../modal/AposModal.vue';
import AposModalBody from '../modal/AposModalBody.vue';
import AposButton from '../button/AposButton.vue';
import AposTable from './AposTable.vue';
// import AposTagList from './AposTagList.vue';
import data from './data.js';

export default {
  title: 'Table',
  decorators: [withKnobs]
};

export const table = () => ({
  components: {
    AposModal,
    AposModalBody,
    AposButton,
    AposTable
  },
  mounted() {
    console.log(this.headers);
  },
  data() {
    return {
      modal: {
        title: 'Manage Articles',
        active: true,
        type: 'overlay',
        showModal: true
      },
      headers: data.headers,
      rows: data.rows
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
      <template #main>
        <AposModalBody>
          <template #bodyMain>
            <AposTable :headers="headers" :rows="rows" />
          </template>
        </AposModalBody>
      </template>
    </AposModal>
  </div>
  `
});
