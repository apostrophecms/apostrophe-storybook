<template>
  <div :class="cssClass">
    <!-- TODO i18n -->
    <label class="apos-field-label">{{ field.label }}</label>
    <!-- TODO i18n -->
    <p v-if="field.help" class="apos-field-help">{{ field.help }}</p>
    <slot name="body"></slot>
  </div>
</template>

<script>
// A component designed to be used as a scaffold for
// AposTextInput and friends, which override the `body`
// slot
export default {
  name: 'ApostropheInputWrapper',
  props: {
    field: Object,
    error: [ String, Boolean ]
  },
  computed: {
    cssClass() {
      return `apos-field apos-field-${this.field.type} apos-field-${this.field.name} ${this.field.classes} ${this.errorClasses}`;
    },
    errorClasses() {
      if (!this.error) {
        return '';
      }
      return `apos-field-error apos-${this.error}-error`;
    }
  }
};
</script>