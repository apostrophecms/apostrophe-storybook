<template>
  <component :is="wrapEl" :class="classList">
    <!-- TODO i18n -->
    <component
      v-if="field.label" :class="{'apos-sr-only': field.hideLabel }"
      class="apos-field-label"
      :is="labelEl" :for="uid"
    >
      {{ field.label }}
      <span v-if="field.required" class="apos-field-required">
        *
      </span>
    </component>
    <!-- TODO i18n -->
    <p v-if="field.help" class="apos-field-help">
      {{ field.help }}
    </p>
    <slot name="body" />
    <!-- TODO i18n -->
    <div v-if="errorMessage" class="apos-field-error">
      {{ errorMessage }}
    </div>
  </component>
</template>

<script>
// A component designed to be used as a scaffold for AposStringInput and
// friends, which override the `body` slot
export default {
  name: 'AposInputWrapper',
  props: {
    field: {
      type: Object,
      required: true
    },
    error: {
      type: [ String, Boolean, Object ],
      default: null
    },
    uid: {
      type: Number,
      required: true
    },
    modifiers: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data () {
    return {
      wrapEl: 'div',
      labelEl: 'label'
    };
  },
  computed: {
    classList: function () {
      const classes = [
        'apos-field',
        `apos-field-${this.field.type}`,
        `apos-field-${this.field.name}`
      ];
      if (this.field.classes) {
        classes.push(this.field.classes);
      }
      if (this.errorClasses) {
        classes.push(this.errorClasses);
      }
      if (this.modifiers) {
        this.modifiers.forEach((m) => {
          classes.push(`apos-field--${m}`);
        });
      }
      return classes;
    },
    errorClasses: function () {
      if (!this.error) {
        return null;
      }

      let error = 'unknown';

      if (typeof this.error === 'string') {
        error = this.error;
      } else if (this.error.type) {
        error = this.error.type;
      }

      return `apos-field--error apos-field--error-${error}`;
    },
    errorMessage () {
      if (this.error) {
        if (this.error.message) {
          return this.error.message;
        } else {
          return 'Error';
        }
      } else {
        return false;
      }
    }
  },
  mounted: function () {
    if (this.field.type === 'radio' || this.field.type === 'checkbox') {
      this.wrapEl = 'fieldset';
      this.labelEl = 'legend';
    }
  }
};
</script>

<style lang="scss">
  @import '../scss/_inputs';
  .apos-field {
    border-width: 0;
    padding: 0;
    [disable]:hover, [disabled] ~ .apos-choice-label-text:hover {
      cursor: not-allowed;
    }
  }

  .apos-field-text {
    font-size: map-get($font-sizes, input-label);
  }

  .apos-field-label {
    display: block;
    padding: 0;
    font-size: map-get($font-sizes, input-label);
    font-weight: map-get($font-weights, medium);
    color: var(--a-text-primary);
  }

  .apos-field-help,
  .apos-field-error {
    margin: $spacing-base 0 0;
    font-size: map-get($font-sizes, input-hint);
    font-weight: 500;
  }

  .apos-field-help {
    color: var(--a-base-3);
  }

  .apos-field-error {
    color: var(--a-danger);
  }

  .apos-field-required {
    color: var(--a-danger);
  }
</style>
