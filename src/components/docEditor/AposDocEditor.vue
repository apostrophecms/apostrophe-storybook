<template>
  <AposModal
    class="apos-doc-editor" :modal="modal"
    @inactive="modal.active = false" @show-modal="modal.showModal = true"
    @esc="cancel" @no-modal="$emit('safe-close')"
  >
    <template #primaryControls>
      <AposButton
        type="primary" label="Save"
        @save="submit"
      />
    </template>
    <template #leftRail>
      <AposModalRail>
        <AposModalTabs
          :current="currentTab" :tabs="tabs"
          @select-tab="switchPane"
        />
      </AposModalRail>
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyMain>
          <AposModalTabsBody>
            <div class="apos-doc-editor__body">
              <AposSchema
                :schema="currentFields" :doc="myDoc"
                @input="update"
              />
            </div>
          </AposModalTabsBody>
        </template>
      </AposModalBody>
    </template>
    <template #rightRail>
      <AposModalRail type="right">
        <div class="apos-doc-editor__utility">
          <AposSchema
            :schema="utility" :doc="myDoc"
            @input="update" :modifiers="['small', 'inverted']"
          />
        </div>
      </AposModalRail>
    </template>
  </AposModal>
</template>

<script>
import AposButton from './../button/AposButton';
import AposSchema from './../schema/AposSchema';
import AposModal from './../modal/AposModal';
import AposModalRail from './../modal/AposModalRail';
import AposModalBody from './../modal/AposModalBody';
import AposModalTabs from './../modalTabs/AposModalTabs';
import AposModalTabsBody from './../modalTabs/AposModalTabsBody';
import AposModalTabsMixin from '../../mixins/AposModalTabsMixin';
import AposModalParentMixin from '../../mixins/AposModalParentMixin';

export default {
  name: 'AposDocEditor',
  components: {
    AposButton,
    AposSchema,
    AposModal,
    AposModalBody,
    AposModalRail,
    AposModalTabsBody,
    AposModalTabs
  },
  mixins: [
    AposModalTabsMixin,
    AposModalParentMixin
  ],
  props: {
    typeLabel: {
      type: String,
      required: true
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
      myDoc: { ...this.doc },
      modal: {
        title: `Edit ${this.typeLabel}`,
        active: false,
        type: 'overlay',
        showModal: false
      }
    };
  },

  computed: {
    currentFields: function() {
      const fields = [];
      if (this.currentTab) {
        const tabFields = this.tabs.find((item) => item.name === this.currentTab);
        tabFields.fields.forEach((field) => {
          fields.push(this.schema.find(item => field === item.name));
        });
      }
      return fields;
    }
  },
  methods: {
    update(name, value) {
      this.myDoc[name] = value.data;
    },
    submit() {
      this.$emit('save', this.myDoc);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-doc-editor__body {
    padding-top: 20px;
    max-width: 90%;
    margin-right: auto;
    margin-left: auto;
  }

  .apos-doc-editor__utility {
    padding: 40px 20px;
  }
</style>
