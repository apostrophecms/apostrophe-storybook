<template>
  <AposModalToolbar className="apos-media-manager-toolbar">
    <template #leftControls>
      <AposButton label="Exit" :iconOnly="true" icon="CheckboxBlankOutline" type="outline" />
      <AposButton label="Tags" :iconOnly="true" icon="Label" type="outline">
        <template #contextMenu>
          <AposTagApply />
        </template>
      </AposButton>
      <AposButton label="Delete" :iconOnly="true" icon="Delete" type="outline" />
      <AposButton label="More" :iconOnly="true" icon="DotsVertical" type="outline" />
    </template>
    <template #rightControls>
      <AposButton label="Filter" icon="ChevronDown" type="outline"></AposButton>
      <AposStringInput :field="search.field" :status="search.status" :value="search.value" :modifiers="['small']"/>
    </template>
  </AposModalToolbar>
</template>

<script>
import AposContextMenu from './../contextMenu/AposContextMenu.vue';
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
    AposTagApply
  },
  props: {
    menu: {
      type: Array,
      required: true
    }
  },

  data() {
    return {
      search: {
        field: {
          name: 'search',
          placeholder: 'Search Images',
          icon: 'Magnify',
        },
        status: {},
        value: ''
      }
    }
  },
  computed: {

  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_mixins';

</style>
