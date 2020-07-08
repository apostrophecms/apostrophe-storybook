<template>
  <AposModalToolbar class-name="apos-pieces-manager-toolbar">
    <template #leftControls>
      <AposButton
        label="Select" :icon-only="true"
        :icon="checkboxIcon" type="outline"
        @click="$emit('select-click')" :icon-color="iconColor"
      />
      <AposTagApply :tags="applyTags" :apply-to="[]" />
      <!-- TODO trash component needs to be worked out with confirm, maybe separate into its own component -->
      <AposButton
        label="Delete" @click="$emit('trash-click')"
        :icon-only="true" icon="delete-icon"
        type="outline"
      />
      <AposContextMenu
        :button="more.button" :menu="more.menu"
        tip-alignment="right"
      />
    </template>
    <template #rightControls>
      <AposPager
        v-if="totalPages > 1" class="apos-manager__pager"
        :total-pages="totalPages" :current-page="currentPage"
        @click="updatePage"
      />
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
import AposPager from '../pager/AposPager';

export default {
  components: {
    AposButton,
    AposModalToolbar,
    AposStringInput,
    AposContextMenu,
    AposPager,
    AposTagApply,
    AposFilterMenu
  },
  props: {
    selectedState: {
      type: String,
      required: true
    },
    applyTags: {
      type: Array,
      default () {
        return [];
      }
    },
    totalPages: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      more: {
        button: {
          label: 'More operations',
          iconOnly: true,
          icon: 'dots-vertical-icon',
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
          icon: 'magnify-icon'
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
      if (this.selectedState === 'checked') {
        return 'checkbox-marked-icon';
      } else if (this.selectedState === 'indeterminate') {
        return 'minus-box-icon';
      } else {
        return 'checkbox-blank-icon';
      }
    },
    iconColor() {
      if (this.selectedState === 'checked' || this.selectedState === 'indeterminate') {
        return 'var(--a-primary)';
      }

      return null;
    }
  },
  methods: {
    filter(value, field) {
      this.$emit('filter', field, value.data);
    },
    search(value) {
      this.$emit('search', value.data);
    },
    updatePage (newPage) {
      this.$emit('update-page', newPage);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

  .apos-pieces-manager-toolbar /deep/ .apos-field-search {
    width: 250px;
  }

</style>
