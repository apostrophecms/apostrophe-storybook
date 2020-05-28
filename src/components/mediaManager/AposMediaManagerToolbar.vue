<template>
  <AposModalToolbar className="apos-media-manager-toolbar">
    <template #leftControls>
      <AposButton label="Select" :iconOnly="true" :icon="checkboxIcon" type="outline" v-on:click="$emit('selectClick')" />
      <AposTagApply :tags="applyTags" :applyTo="[]"/>
      <!-- TODO trash component needs to be worked out with confirm, maybe separate into its own component --->
      <AposButton label="Delete" v-on:click="$emit('trashClick')" :iconOnly="true" icon="Delete" type="outline" />
      <AposContextMenu :button="more.button" :menu="more.menu" />
    </template>
    <template #rightControls>
      <AposContextMenu :button="filterFields.button" tipAlignment="center">
        <div class="apos-media-manager-toolbar__filters">
          <div class="apos-media-manager-toolbar__filter-set">
            <AposRadioInput v-on:input="filter($event, 'published')" 
              :field="filterFields.published.field" :status="filterFields.published.status" 
              :value="filterFields.published.value" 
            />
          </div>
          <div class="apos-media-manager-toolbar__filter-set">
            <AposRadioInput v-on:input="filter($event, 'trash')" :field="filterFields.trash.field"
             :status="filterFields.trash.status" :value="filterFields.trash.value" 
            />
          </div>
        </div>
      </AposContextMenu>
      <AposStringInput v-on:input="search" :field="searchField.field" 
        :status="searchField.status" :value="searchField.value" :modifiers="['small']"
      />
    </template>
  </AposModalToolbar>
</template>

<script>
import AposContextMenu from './../contextMenu/AposContextMenu.vue';
import AposTagApply from './../tagApplyMenu/AposTagApply.vue';
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';
import AposRadioInput from './../inputRadio/AposRadioInput.vue';
import AposModalToolbar from './../modalToolbar/AposModalToolbar.vue';

export default {
  components: { 
    AposButton,
    AposModalToolbar,
    AposStringInput,
    AposContextMenu,
    AposTagApply,
    AposRadioInput
  },
  props: {
    selected: Array,
    media: Array,
    applyTags: Array 
  },

  data() {
    return {
      more: {
        button: {
          label: 'More operations',
          iconOnly: true,
          icon: 'DotsVertical',
          type: 'outline',
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
          icon: 'Magnify',
        },
        status: {},
        value: { data: '' }
      },
      filterFields: {
        button: {
          label: 'Filter',
          icon: 'ChevronDown',
          modifiers: ['icon-right'],
          type: 'outline'
        },
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
    }
  },
  computed: {
    checkboxIcon() {
      if (this.selected.length === this.media.length) {
        return 'CheckboxMarked'
      }
      if (this.selected.length < this.media.length && this.selected.length !== 0) {
        return 'MinusBox'
      }
      return 'CheckboxBlankOutline'
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
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-media-manager-toolbar__filters {
    min-width: 140px;
  }

  .apos-media-manager-toolbar /deep/ .apos-field-search {
    width: 250px;
  }

  .apos-media-manager-toolbar__filters /deep/ .apos-field-label {
    display: block;
    width: 100%;
    padding-bottom: 10px;
    border-bottom: 1px solid var(--a-base-9);
    color: var(--a-base-3);
    font-weight: 400;
    margin-bottom: 10px;
  }

  .apos-media-manager-toolbar__filter-set {
    margin-bottom: 30px;
    &:last-child {
      margin-bottom: 0;
    }
  }

</style>
