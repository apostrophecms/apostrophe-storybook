<template>
  <AposInputWrapper :field="field" :error="status.error" :uid="uid" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <input class="apos-input apos-input--text"
          v-model="next" :type="field.type" :placeholder=field.placeholder
          :disabled="status.disabled" :required="field.mandatory" :id="uid"/>
        <component :is="`${
          field.icon ? field.icon : 'CircleMedium' }`"
          :size="20" class="apos-input-icon" v-if="hasIcon"></component>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import CircleMedium from "vue-material-design-icons/CircleMedium.vue";
import Calendar from "vue-material-design-icons/Calendar.vue";

export default {
  components: {
    AposInputWrapper,
    CircleMedium,
    Calendar
  },
  mixins: [ AposInputMixin ],
  name: 'AposStringInput',
  computed: {
    hasIcon: function () {
      return this.status.error || (this.field.icon && this.field.icon !== null);
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
  color: var(--neutral-two);
  pointer-events: none;

  .apos-field--error & {
    color: var(--danger);
  }
}
</style>
