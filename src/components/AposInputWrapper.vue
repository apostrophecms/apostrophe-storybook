<template>
  <div :class="classList">
    <!-- TODO i18n -->
    <label class="apos-field-label">
      {{ field.label }}
      <span v-if="field.mandatory" class="apos-field-required">*</span>
    </label>
    <!-- TODO i18n -->
    <p v-if="field.help" class="apos-field-help">{{ field.help }}</p>
    <slot name="body"></slot>
  </div>
</template>

<script>
// A component designed to be used as a scaffold for AposStringInput and
// friends, which override the `body` slot
export default {
  name: 'AposInputWrapper',
  props: {
    field: Object,
    error: [ String, Boolean, Object ]
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
  .apos-field-label {
    display: block;
    font-size: map-get($font-sizes, input);
    font-weight: map-get($font-weights, medium);
    color: var(--neutral-one);
  }

  .apos-field-help {
    font-size: map-get($font-sizes, input-hint);
    color: var(--neutral-two);
  }

  .apos-field-required {
    color: var(--danger);
  }
</style>
