<template>
  <AposInputWrapper :field="field" :error="error" >
    <template slot="body">
      <input class="apos-input apos-input--text" v-model="next" type="text" :placeholder=field.placeholder :disabled="status.disabled" />
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';

export default {
  props: {
    field: Object,
    status: String
  },
  components: {
    AposInputWrapper
  },
  mixins: [ AposInputMixin ],
  name: 'AposTextInput',
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

<style lang="scss">
  .apos-input--text {
    padding: $input-padding;
  }
</style>
