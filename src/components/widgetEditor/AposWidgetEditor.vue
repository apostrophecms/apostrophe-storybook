<template>
  <AposModal class="apos-widget-editor" :modal="modal">
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
    modal: {
      type: Object,
      required: true
    },
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
    },
    groups: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    const tabs = [];
    for (const key in this.groups) {
      if (key !== 'utility') {
        const temp = { ...this.groups[key] };
        temp.name = key;
        tabs.push(temp);
      }
    };

    const utility = [];
    if (this.groups.utility && this.groups.utility.fields) {
      this.groups.utility.fields.forEach((field) => {
        utility.push(this.schema.find(item => item.name === field));
      });
    }

    return {
      utility,
      tabs,
      myDoc: { ...this.doc }
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
  methods: {
    update(name, value) {
      this.myDoc[name] = value.data;
    },
    cancel() {
      this.$emit('cancel');
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
