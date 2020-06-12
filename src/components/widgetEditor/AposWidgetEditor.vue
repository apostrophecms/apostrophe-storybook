<template>
  <AposModal
    class="apos-widget-editor" :modal="modal"
    @inactive="modal.active = false" @show-modal="modal.showModal = true"
    @esc="cancel" @no-modal="$emit('safe-close')"
  >
    <template #breadcrumbs>
      <AposBreadcrumbs :items="breadcrumbs" />
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyMain>
          <div class="apos-widget-editor__body">
            <AposSchema :schema="schema" :doc="myDoc" @input="update" />
          </div>
        </template>
      </AposModalBody>
    </template>
    <template #footer>
      <AposButton type="default" label="Cancel" @click="cancel" />
      <AposButton type="primary" @click="save" :label="saveLabel" />
    </template>
  </AposModal>
</template>

<script>
import AposButton from './../button/AposButton';
import AposSchema from './../schema/AposSchema';
import AposModal from './../modal/AposModal';
import AposBreadcrumbs from '../modalBreadcrumb/modalBreadcrumb';
import AposModalBody from './../modal/AposModalBody';

export default {
  name: 'AposWidgetEditor',
  components: {
    AposButton,
    AposSchema,
    AposModal,
    AposBreadcrumbs,
    AposModalBody
  },
  props: {
    breadcrumbs: {
      type: Array,
      default: function () {
        return [];
      }
    },
    typeLabel: {
      type: String,
      default: ''
    },
    doc: {
      type: Object,
      required: true
    },
    schema: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      myDoc: { ...this.doc },
      modal: {
        title: `Edit ${this.typeLabel}`,
        active: false,
        type: 'slide',
        showModal: false
      }
    };
  },
  computed: {
    saveLabel: function () {
      if (this.typeLabel) {
        return `Save ${this.typeLabel}`;
      }
      return 'Save';
    }
  },
  mounted () {
    this.modal.active = true;
  },
  methods: {
    update(name, value) {
      this.myDoc[name] = value.data;
    },
    cancel() {
      this.modal.showModal = false;
    },
    save() {
      this.$emit('save', this.myDoc);
    }
  }
};
</script>

<style lang="scss" scoped>
  .apos-widget-editor /deep/ .apos-modal__inner {
    max-width: 458px;
  }
</style>
