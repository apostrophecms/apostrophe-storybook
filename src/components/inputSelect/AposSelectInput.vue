<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <select class="apos-input apos-input--select" name="" id="">
          <option v-for="choice in field.choices" :key="choice.value"
            :value="choice.value">{{ choice.label }}</option>
        </select>
        <MenuDown :size="24" class="apos-input-icon" ></MenuDown>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import MenuDown from "vue-material-design-icons/MenuDown.vue";

export default {
  components: {
    AposInputWrapper,
    MenuDown
  },
  mixins: [ AposInputMixin ],
  name: 'AposSelectInput',
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
.apos-input--select {
  -moz-appearance: none;
  -webkit-appearance: none;
  // background-image: url();
  background-repeat: no-repeat, repeat;

}

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
