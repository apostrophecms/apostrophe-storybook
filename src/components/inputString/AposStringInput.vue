<template>
  <AposInputWrapper :field="field" :error="status.error" :uid="uid" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <textarea class="apos-input apos-input--text"
          v-if="field.type === 'textarea'" rows="5"
          v-model="next" :placeholder=field.placeholder
          :disabled="status.disabled" :required="field.required" :id="uid"></textarea>
        <input class="apos-input apos-input--text" v-else
          v-model="next" :type="field.type" :placeholder=field.placeholder
          :disabled="status.disabled" :required="field.required" :id="uid">
        <component 
          v-if="iconComponent"
          :size="20"
          class="apos-input-icon"
          v-bind:is="iconComponent"
        ></component>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';

export default {
  components: {
    AposInputWrapper
  },
  mixins: [ AposInputMixin ],
  name: 'AposStringInput',
  computed: {
    iconComponent () {
      if (this.field.icon) {
        return () => import(`vue-material-design-icons/${this.field.icon}.vue`);
      } if (this.status.error) {
        return () => import(`vue-material-design-icons/CircleMedium.vue`);
      }
      return false;
    }
  },
  methods: {
    validate(value) {
      if (this.field.required) {
        if (!value.length) {
          return 'required';
        }
      }
      if (this.field.min) {
        if (value.length && (value.length < this.field.min)) {
          return 'min';
        }
      }
      if (this.field.max) {
        if (value.length && (value.length > this.field.max)) {
          return 'max';
        }
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.apos-input-icon {
  position: absolute;
  right: $input-padding;
  top: 50%;
  transform: translateY(-50%);
  color: var(--a-base-2);
  pointer-events: none;

  .apos-field--error & {
    color: var(--a-danger);
  }
}

textarea.apos-input--text {
  // Some  browser styles set `textarea` to monospace.
  font-family: inherit;
  resize: none;
}

.apos-input-icon svg {
  // little bit better centering
  display: flex;
}
</style>
