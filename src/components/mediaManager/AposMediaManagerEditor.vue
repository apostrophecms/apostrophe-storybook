<template>
  <div class="apos-media-manager-editor">
    <div class="apos-media-manager-editor__inner" v-if="media">
      <div class="apos-media-manager-editor__thumb-wrapper">
        <img class="apos-media-manager-editor__thumb" :src="media.path" alt="">
      </div>
      <ul class="apos-media-manager-editor__details">
        <li class="apos-media-manager-editor__detail">Uploaded: March 6th, 2018</li>
        <li class="apos-media-manager-editor__detail">File Size 345KB</li>
        <li class="apos-media-manager-editor__detail">Dimensions: 1600 x 800</li>
      </ul>
      <AposStringInput
        v-for="input in inputs" :field="input.field" :status="input.status" :value="input.value" 
        :key="input.field.name" :modifiers="['small', 'inverted']"
      />
      <AposBooleanInput 
        :field="published.field" :status="published.status" :value="published.value" 
        :modifiers="['small', 'inverted']"
      />
    </div>
  </div>
</template>

<script>
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';
import AposBooleanInput from './../inputBoolean/AposBooleanInput.vue';

export default {
  components: { 
    AposButton,
    AposStringInput,
    AposBooleanInput
  },
  props: {
    media: {
      type: Object
    }
  },

  data() {
    const fields =[
      { label: 'Image Title', property: 'title' },
      { label: 'Alt Text', property: 'alt' },
      { label: 'Credit', property: 'credit' },
      { label: 'Credit URL', property: 'creditUrl' },
      { label: 'Slug', property: 'slug' }
    ];

    return {
      // this is not how this will work in the real thing!!!
      fields,
      published: {
        field: {
          required: false,
          name: 'published',
          type: 'radio',
          label: 'Published',
          toggle: {
            true: 'Published',
            false: 'Unpublished'
          }
        },
        status: {},
        value: {
          data: true
        }
      }
    }
  },
  computed: {
    inputs() {
      if (this.media) {
        return this.fields.map((field) => {
          const value = this.media[field.property];
          return {
            field: {
              name: value,
              label: field.label,
              type: 'text'
            },
            value: { data: value },
            status: {}
          }
        }); 
      }
    }
  },
  methods: {
    save() {
      this.$emit('save');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../scss/_mixins';

  .apos-media-manager-editor {
    height: 100%;
    padding: 20px;
  }

  .apos-media-manager-editor__thumb-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--a-base-7);
    height: 180px;
    margin-bottom: 20px;
  }
  .apos-media-manager-editor__thumb {
    max-width: 100%;
    max-height: 100%;
  }

  .apos-media-manager-editor /deep/ .apos-field {
    margin-bottom: 20px;
  }

  .apos-media-manager-editor__details {
    @include apos-list-reset();
    font-size: map-get($font-sizes, default);
    color: var(--a-base-4);
    font-weight: 500;
    margin-bottom: 20px;
  }

</style>