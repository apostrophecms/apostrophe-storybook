<template>
  <component :is="wrapEl" :class="classList">
    <!-- TODO i18n -->
    <component :is="labelEl" class="apos-field-label" :for="uid">
      {{ field.label }}
      <span v-if="field.mandatory" class="apos-field-required">*</span>
    </component>
    <!-- TODO i18n -->
    <p v-if="field.help" class="apos-field-help">{{ field.help }}</p>
    <slot name="body"></slot>
  </component>
</template>

<script>
// A component designed to be used as a scaffold for AposStringInput and
// friends, which override the `body` slot
export default {
  name: 'AposInputWrapper',
  props: {
    field: Object,
    error: [ String, Boolean, Object ],
    uid: Number
  },
  data () {
    return {
      wrapEl: 'div',
      labelEl: 'label'
    }
  },
  mounted: function () {
    if (this.field.type === 'radio' || this.field.type === 'checkbox') {
      this.wrapEl = 'fieldset';
      this.labelEl = 'legend';
    }
  },
  computed: {
    classList: function () {
      return [
        'apos-field',
        `apos-field-${this.field.type}`,
        `apos-field-${this.field.name}`,
        this.field.classes,
        this.errorClasses
      ];
    },
    errorClasses: function () {
      if (!this.error) {
        return null;
      }

      let error = 'unknown';

      if (typeof this.error === 'String') {
        error = this.error;
      } else if (this.error.type) {
        error = this.error.type;
      }

      return `apos-field--error apos-field--error-${error}`;
    }
  }
};
</script>

<style lang="scss">
  @import '../scss/_inputs';
  .apos-field {
    border-width: 0;
    padding: 0;
    [disable]:hover, [disabled] ~ *:hover {
      cursor: not-allowed;
    }
  }

  .apos-field-label {
    display: block;
    padding: 0;
    font-size: map-get($font-sizes, input-label);
    font-weight: map-get($font-weights, medium);
    color: var(--neutral-one);
  }

  .apos-field-help {
    margin: $spacing-base 0 0;
    font-size: map-get($font-sizes, input-hint);
    font-weight: 500;
    color: var(--neutral-three);
  }

  .apos-field-required {
    color: var(--danger);
  }
</style>
