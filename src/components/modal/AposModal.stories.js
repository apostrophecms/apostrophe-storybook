import { storiesOf } from '@storybook/vue'

import AposModal from './AposModal.vue'
import AposBreadcrumb from './../modalBreadcrumb/modalBreadcrumb.vue'
import AposButton from './../button/button.vue'

const breadcrumbs = [
  {
    href: '#',
    label: 'Manage pages'
  },
  {
    href: '#',
    label: 'Another step'
  },
  {
    label: 'Link Page'
  }
]

storiesOf('Modal', module)
  .add('Overlay', () => ({
    components: { AposModal, AposBreadcrumb, AposButton },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" />
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
  .add('Overlay (dark breadcrumbs', () => ({
    components: { AposModal, AposBreadcrumb, AposButton },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'overlay',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
        <template #breadcrumbs>
          <AposBreadcrumb :items="breadcrumbs" variant="dark" />
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
  .add('Slide out', () => ({
    components: { AposModal, AposBreadcrumb, AposButton },
    data () {
      return {
        modal: {
          title: 'New Page',
          active: false,
          type: 'slide',
          showModal: false
        },
        breadcrumbs: breadcrumbs
      }
    },
    template: `
    <div>
      <button type="button" class="apos-button" @click="startEnter">
        Activate modal
      </button>
      <AposModal :modal="modal">
        <template #secondaryControls>
          <AposButton @click="startExit" label="Exit" />
        </template>
        <template #primaryControls>
          <AposButton modifier="primary" @click="startExit" label="Save Page" />
        </template>
      </AposModal>
    </div>
    `,
    methods: {
      startEnter: function () {
        this.modal.active = true
      },
      startExit: function () {
        this.modal.showModal = false
      }
    }
  }))
