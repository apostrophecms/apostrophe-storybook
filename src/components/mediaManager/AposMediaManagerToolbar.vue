<template>
  <AposModalToolbar class-name="apos-media-manager-toolbar">
    <template #leftControls>
      <AposButton
        label="Select" :icon-only="true"
        :icon="checkboxIcon" type="outline"
        @click="$emit('select-click')"
      />
      <AposTagApply :tags="applyTags" :apply-to="[]" />
      <!-- TODO trash component needs to be worked out with confirm, maybe separate into its own component -->
      <AposButton
        label="Delete" @click="$emit('trash-click')"
        :icon-only="true" icon="Delete"
        type="outline"
      />
      <AposContextMenu
        :button="more.button" :menu="more.menu"
        tip-alignment="right"
      />
    </template>
    <template #rightControls>
      <AposFilterMenu :menu="filterFields" @input="filter" />
      <AposStringInput
        @input="search" :field="searchField.field"
        :status="searchField.status" :value="searchField.value"
        :modifiers="['small']"
      />
    </template>
  </AposModalToolbar>
</template>

<script>
import AposContextMenu from './../contextMenu/AposContextMenu.vue';
import AposFilterMenu from './../filterMenu/AposFilterMenu.vue';
import AposTagApply from './../tagApplyMenu/AposTagApply.vue';
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';
import AposModalToolbar from './../modalToolbar/AposModalToolbar.vue';

export default {
  components: {
    AposButton,
    AposModalToolbar,
    AposStringInput,
    AposContextMenu,
    AposTagApply,
    AposFilterMenu
  },
  props: {
    selected: {
      type: Array,
      default () {
        return [];
      }
    },
    media: {
      type: Array,
      default () {
        return [];
      }
    },
    applyTags: {
      type: Array,
      default () {
        return [];
      }
    }
  },

  data() {
    return {
      more: {
        button: {
          label: 'More operations',
          iconOnly: true,
          icon: 'DotsVertical',
          type: 'outline'
        },
        menu: [
          {
            label: 'Unpublish All',
            action: 'unpublish-all'
          }
        ]
      },
      searchField: {
        field: {
          name: 'search',
          placeholder: 'Search Images',
          icon: 'Magnify'
        },
        status: {},
        value: { data: '' }
      },
      filterFields: {
        published: {
          field: {
            name: 'published',
            type: 'radio',
            label: 'Published State',
            choices: [
              {
                label: 'Published',
                value: 'published'
              },
              {
                label: 'Unpublished',
                value: 'unpublished'
              }
            ]
          },
          value: { data: 'published' },
          status: {}
        },
        trash: {
          field: {
            name: 'trash',
            type: 'radio',
            label: 'Trash',
            choices: [
              {
                label: 'No',
                value: 'false'
              },
              {
                label: 'Yes',
                value: 'true'
              }
            ]
          },
          value: { data: 'false' },
          status: {}
        }
      }
    };
  },
  computed: {
    checkboxIcon() {
      if (this.selected.length === this.media.length) {
        return 'CheckboxMarked';
      }
      if (this.selected.length < this.media.length && this.selected.length !== 0) {
        return 'MinusBox';
      }
      return 'CheckboxBlankOutline';
    }
  },
  methods: {
    filter(value, field) {
      this.$emit('filter', field, value.data);
    },
    search(value) {
      this.$emit('search', value.data);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

  .apos-media-manager-toolbar /deep/ .apos-field-search {
    width: 250px;
  }

</style>
