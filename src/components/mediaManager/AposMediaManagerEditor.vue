<template>
  <div class="apos-media-manager-editor">
    <div class="apos-media-manager-editor__inner" v-if="media">
      <div class="apos-media-manager-editor__thumb-wrapper">
        <img
          class="apos-media-manager-editor__thumb"
          :src="media.path" alt=""
        >
      </div>
      <ul class="apos-media-manager-editor__details">
        <li class="apos-media-manager-editor__detail">
          {{ media.uploadedAt }}
        </li>
        <li class="apos-media-manager-editor__detail">
          File Size: {{ media.fileSize }}
        </li>
        <li class="apos-media-manager-editor__detail">
          {{ media.dim }}
        </li>
      </ul>
      <AposStringInput
        v-for="input in inputs" :field="input.field"
        :status="input.status" :value="input.value"
        :key="input.field.name" :modifiers="['small', 'inverted']"
      />
      <AposBooleanInput
        :field="published.field" :status="published.status"
        :value="published.value"
        :modifiers="['small', 'inverted']"
      />
    </div>
    <AposModalLip :refresh="lipKey">
      <div
        class="apos-media-manager-editor__lip"
        :class="{
          'apos-media-manager-editor__lip--two-controls': selected.length > 1
        }"
      >
        <AposButton
          @click="$emit('back')" v-if="selected.length > 1"
          class="apos-media-manager-editor__back" type="outline"
          label="Back"
        />
        <AposButton
          @click="save" class="apos-media-manager-editor__save"
          label="Save" type="primary"
        />
      </div>
    </AposModalLip>
  </div>
</template>

<script>
import AposButton from './../button/AposButton.vue';
import AposStringInput from './../inputString/AposStringInput.vue';
import AposBooleanInput from './../inputBoolean/AposBooleanInput.vue';
import AposModalLip from './../modal/AposModalLip.vue';
import AposHelpers from '../../mixins/AposHelpersMixin';

export default {
  components: {
    AposButton,
    AposStringInput,
    AposBooleanInput,
    AposModalLip
  },
  mixins: [AposHelpers],
  props: {
    media: {
      type: Object,
      default: null
    },
    selected: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    const fields = [
      {
        label: 'Image Title',
        property: 'title'
      },
      {
        label: 'Alt Text',
        property: 'alt'
      },
      {
        label: 'Credit',
        property: 'credit'
      },
      {
        label: 'Credit URL',
        property: 'creditUrl'
      },
      {
        label: 'Slug',
        property: 'slug'
      }
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
      },
      lipKey: ''
    };
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
          };
        });
      } else {
        return [];
      }
    }
  },
  watch: {
    media() {
      this.generateLipKey();
    }
  },
  mounted() {
    this.generateLipKey();
  },
  methods: {
    save() {
      // TODO I have no idea what to bundle up and send back to parent at this point in dev -SR
      this.$emit('save');
    },
    generateLipKey() {
      this.lipKey = this.generateId();
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

  .apos-media-manager-editor {
    position: relative;
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

  .apos-media-manager-editor__controls {
    margin-bottom: 20px;
  }

  .apos-media-manager-editor__lip {
    display: flex;
    justify-content: flex-end;
  }

  .apos-media-manager-editor__lip--two-controls {
    justify-content: space-between;
  }

</style>
