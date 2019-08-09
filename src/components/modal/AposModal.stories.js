import { storiesOf } from '@storybook/vue'

import AposModal from './AposModal.vue'

storiesOf('Modal', module)
  .add('Primary', () => ({
    components: { AposModal },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay'
        }
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="toggleModal">Activate modal</button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <button class="apos-button apos-button--cancel" @click="toggleModal">Exit</button>
        </template>
        <template #primaryControls>
          <button class="apos-button">Save Page</button>
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      toggleModal: function () {
        this.modal.active = !this.modal.active
      }
    }
  }))
