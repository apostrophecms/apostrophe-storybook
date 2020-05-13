<template>
  <div class="apos-apply-tag-menu">
    <AposContextMenu :tipAlignment="tipAlignment">
      <div class="apos-apply-tag-menu__inner">
        <input type="checkbox" @click.stop="dd">
        <AposStringInput v-on:input="updateInput" :field="field" :value="value" :status="status" />
        <ol v-if="tags" class="apos-apply-tag-menu__tags">
          <!-- <AposTagApplyTagItem v-for="tag in tags" :tag="tag" :key="tag.slug" /> -->
          <li v-for="(box, key) in checkboxes" :key="key">
            <AposCheckbox 
              :id="generateId(box.choice.value)" 
              :field="box.field" 
              :status="box.status" 
              :value="box.value" 
              :choice="box.choice"
              v-on:toggle="update"
            />
          </li>
        </ol>
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
  import AposCheckbox from '../inputCheckbox/AposCheckbox.vue';
  import AposButton from '../button/AposButton.vue';
  import AposHelpers from '../../mixins/AposHelpersMixin';

  export default {
    mixins: [AposHelpers],
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
      tags: Array,
      applyTo: {
        type: Array,
        required: true
      }
    },
    components: { 
      AposContextMenu,
      AposStringInput,
      AposButton,
      AposTagApplyTagItem,
      AposCheckbox
    },
    data() {
      const checkboxes = {};
      this.tags.forEach((tag) => {
        const box = {
          field: {
            type: 'checkbox',
          },
          status: {},
          value: { data: [] }
        };
        box.choice = {
          label: tag.label,
          value: tag.slug
        }
        if (tag.checked && tag.checked.length) {
          if (tag.checked.length !== this.applyTo.length) {
            box.choice.indeterminate = true;
          }
          box.value.data.push(tag.slug)
        }
        checkboxes[tag.slug] = box;
      });
      return {
        checkboxes,
        // previousData: JSON.parse(JSON.stringify(checkboxes.value.data)),
        myTags: this.tags,
        inputValue: '',
        skipNext: false,
        field: {
          name: 'tagSearch',
          label: 'Add Tags',
          placeholder: 'Tags...',
          help: 'Find an existing tag or add a new one',
          icon: 'Magnify'
        },
        value: { data: '' },
        status: {},
      }
    },
    methods: {
      dd(event) {
        event.stopPropagation();
        event.preventDefault();
      },
      update(slug) {
        const tag = this.myTags.find(tag => tag.slug === slug);
        const box = this.checkboxes[slug];
        if (!tag.checked) {
          tag.checked = this.applyTo;
        } else {
          if (tag.checked.length === this.applyTo.length) {
            // previously full check, unapply to all
            delete tag.checked;
          } else {
            // mixed check, check all
            // reinforce checked state
            // this.$nextTick(() => {
              tag.checked = this.applyTo;
              box.value.data.push(slug);
              delete box.choice.indeterminate;
            // });
          }
        }

        // update previousData for future comparison
        // this.previousData = [...this.checkboxes.value.data];
        // done, emit
        this.emitState();
      },
      emitState() {
        this.$emit('update', this.myTags)
      },
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
    // margin-top: 20px;
  }
</style>
