<template>
  <div class="apos-apply-tag-menu">
    <AposContextMenu :tipAlignment="tipAlignment">
      <div class="apos-apply-tag-menu__inner">
        <AposStringInput 
          v-on:input="updateSearchInput"
          v-on:return="create"
          :field="searchField" :value="searchValue" :status="searchStatus" ref="textInput"
        />
        <div class="apos-apply-tag__create">
          <AposButton 
            v-on:click="create" 
            :label='createLabel'
            type="quiet"
            :disabled="disabledCreate"
          />
        </div>
        <transition name="fade">
          <ol v-if="searchTags.length && !creating" class="apos-apply-tag-menu__tags">
            <li class="apos-apply-tag-menu__tag" v-for="tag in searchTags" :key="keyPrefix + '-' + tag.slug">
              <AposCheckbox 
                :field="checkboxes[tag.slug].field" 
                :status="checkboxes[tag.slug].status" 
                :value="checkboxes[tag.slug].value"
                :choice="checkboxes[tag.slug].choice"
                v-on:toggle="update"
              />
            </li>
          </ol>
          <div v-if="!searchTags.length && !creating" class="apos-apply-tag-menu__empty">
            <p class="apos-apply-tag-menu__empty-message">
              We couldn't find any matching tags. Perhaps 
              <AposButton 
                v-on:click="create" 
                :label="'create ' + searchInputValue + '?'"
                type="quiet"
                :disabled="disabledCreate"
              />
            </p>
            <span class="apos-apply-tag-menu__empty-icon">🌾</span>
          </div>
        </transition>
      </div>
    </AposContextMenu>
  </div>
</template>

<script>
  import AposContextMenu from '../contextMenu/AposContextMenu.vue';
  import AposStringInput from '../inputString/AposStringInput.vue';
  import AposCheckbox from '../inputCheckbox/AposCheckbox.vue';
  import AposButton from '../button/AposButton.vue';
  import AposHelpers from '../../mixins/AposHelpersMixin';
  // import Icon from 'vue-material-design-icons/TailWind.vue';

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
      AposCheckbox,
      // GaugeEmpty
    },
    data() {
      const checkboxes = {};
      this.tags.forEach((tag) => {
        checkboxes[tag.slug] = createCheckbox(tag, this.applyTo);
      });
      return {
        creating: false,
        searchValue: { data: '' },
        searchStatus: {},
        checkboxes,
        myTags: this.tags,
        searchInputValue: '',
        keyPrefix: this.generateId('key') // used to keep checkboxes in sync w state
      }
    },
    computed: {
      
      disabledCreate() {
        const matches = this.myTags.filter((tag) => {
          return tag.slug === this.searchInputValue;
        });
        if (matches.length) {
          return true;
        } else {
          return false;
        }
      },
      searchTags() {
        if (this.creating) {
          return [];
        }
        if (this.searchInputValue.length > 2) {
          return this.myTags.filter((tag) => {
            return tag.slug.includes(this.searchInputValue);
          });
        } else {
          return this.myTags;
        }
      },
      createLabel() {
        if (this.searchInputValue.length) {
          return `Create tag "${this.searchInputValue}"`
        } else {
          return 'Create new tag'
        }
      },
      searchField() {
        return {
          name: 'tagSearch',
          label: 'Apply Tags',
          placeholder: 'Tags...',
          help: 'Find an existing tag or add a new one',
          icon: (!this.searchTags || !this.searchTags.length) ? 'Pencil' : 'Magnify'
        }
      }
    },
    methods: {
      create() {
        if (!this.searchInputValue || !this.searchInputValue.length) {
          this.creating = true;
          this.searchValue.data = 'New Tag';
          this.$refs.textInput.$el.querySelector('input').focus();
          this.$nextTick(() => {
            this.$refs.textInput.$el.querySelector('input').select();
          })
        } else {
          this.$emit('createTag', this.searchInputValue);
          const tag = {
            label: this.searchInputValue,
            slug: this.searchInputValue,
            checked: this.applyTo
          }
          this.checkboxes[tag.slug] = createCheckbox(tag, this.applyTo);
          this.myTags.unshift(tag);
          this.creating = false;
          this.emitState();
        }
      },
      update(slug) {
        const tag = this.myTags.find(tag => tag.slug === slug);
        const box = this.checkboxes[slug];
        if (!tag.checked) {
          tag.checked = this.applyTo;
          box.value.data.push(slug);
        } else {
          if (tag.checked.length === this.applyTo.length) {
            // previously full check, unapply to all
            
              delete tag.checked;
              box.value.data = [];
            
          } else {
            // mixed check, check all
            tag.checked = this.applyTo;
            this.checkboxes[slug].value.data = [slug];
            delete box.status.readOnly;
            delete box.choice.indeterminate;
          }
        }
        // refresh checkboxes :}
        this.keyPrefix = this.generateId('key');
        // done, emit
        this.emitState();
      },
      emitState() {
        this.$emit('update', this.myTags)
      },
      updateSearchInput(value) {
        this.searchInputValue = value.data.toLowerCase(); 
        if (!this.searchInputValue) {
          this.creating = false;
        }       
      }
    }
  }

  function createCheckbox(tag, applyTo) {
    const checkbox = {
      field: {
        type: 'checkbox',
        name: tag.slug
      },
      status: {},
      value: { data: [] },
      choice: {
        label: tag.label,
        value: tag.slug
      }
    }
    if (tag.checked && tag.checked.length) {
      if (tag.checked.length !== applyTo.length) {
        checkbox.choice.indeterminate = true;
        checkbox.status.readOnly = true;
      }
      checkbox.value.data.push(tag.slug)
    }
    return checkbox;
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

  .apos-apply-tag__create {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
  }

  .apos-apply-tag-menu__tags {
    @include apos-list-reset();
    max-height: 160px;
    overflow-y: scroll;
    margin-top: 15px;
  }

  .apos-apply-tag-menu__tag {
    margin-top: 10px;
  }

  .apos-apply-tag-menu__empty {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 40px 0 20px;
  }

  .apos-apply-tag-menu__empty-message {
    text-align: center;
    margin-bottom: 20px;
    max-width: 240px;
    font-size: map-get($font-sizes, default);
  }

  .apos-apply-tag-menu__empty-icon {
    color: var(--a-base-5);
  }

  .apos-apply-tag-menu__empty-icon {
    font-size: 32px;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all .5s;
  }

  .fade-enter, .fade-leave-to {
    position: absolute;
    width: 100%;
    opacity: 0;
    transform: translateY(-5px);
  }
  
</style>
