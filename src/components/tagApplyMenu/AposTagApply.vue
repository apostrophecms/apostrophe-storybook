<template>
  <div class="apos-apply-tag-menu">
    <AposContextMenu :tipAlignment="tipAlignment">
      <div class="apos-apply-tag-menu__inner">
        <AposStringInput v-on:input="updateInput" :field="field" :value="value" :status="status" />
        <ul v-if="tags" class="apos-apply-tag-menu__tags">
          <AposTagApplyTagItem v-for="tag in tags" :tag="tag" v-bind:key="tag.slug" />
        </ul>
        <div class="apos-apply-tag-menu__primary-action">
          <AposButton 
            v-on:click="$emit(primaryAction.action, inputValue)" 
            :label="primaryAction.label"
            type="primary"
          />
        </div>
      </div>
    </AposContextMenu>
  </div>
</template>

<script>
  import AposTagApplyTagItem from './AposTagApplyTagItem.vue';
  import AposContextMenu from '../contextMenu/AposContextMenu.vue';
  import AposStringInput from '../inputString/AposStringInput.vue';
  import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';
  import AposButton from '../button/AposButton.vue';

  export default {
    props: {
      tipAlignment: {
        type: String,
        default: 'left'
      },
      primaryAction: {
        type: Object,
        default() {
          return {
            label: 'Add Tag',
            action: 'add-tag'
          }
        }
      },
      tags: Array
    },
    components: { 
      AposContextMenu,
      AposStringInput,
      AposButton,
      AposTagApplyTagItem
    },
    data() {
      return {
        inputValue: '',
        field: {
          name: 'tagSearch',
          label: 'Add Tags',
          placeholder: 'Tags...',
          help: 'Find an existing tag or add a new one',
          icon: 'Magnify'
        },
        value: { data: '' },
        status: {}
      }
    },
    computed: {
    },
    methods: {
      updateInput(value) {
        this.inputValue = value.data;
      },
      // emitPrimaryAction() {
      //   this.$emit()
      // }
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-apply-tag-menu__inner {
    padding: 20px;
    min-width: 280px;
  }

  .apos-apply-tag-menu__primary-action {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .apos-apply-tag-menu__tags {
    @include apos-list-reset();
    margin-top: 20px;
  }
</style>
