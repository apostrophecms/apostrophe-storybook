<template>
  <AposInputWrapper
    :field="field" :error="status.error"
    :uid="uid"
  >
    <template #body>
      <div class="apos-input-wrapper">
        <select
          class="apos-input apos-input--select" :id="uid"
          v-model="next"
        >
          <option
            v-for="choice in field.choices" :key="choice.value"
            :value="choice.value"
          >
            {{ choice.label }}
          </option>
        </select>
        <MenuDown :size="24" class="apos-input-icon" />
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import MenuDown from "vue-material-design-icons/MenuDown.vue";

export default {
  name: 'AposSelectInput',
  components: {
    AposInputWrapper,
    MenuDown
  },
  mixins: [ AposInputMixin ],
  computed: {
    hasIcon: function () {
      return this.status.error || (this.field.icon && this.field.icon !== null);
    }
  },
  methods: {
    validate(value) {
      if (this.field.required && !value.length) {
        return 'required';
      }

      if (!this.field.choices.includes(value)) {
        return 'invalid';
      }

      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
.apos-input-icon {
  @include apos-transition();
}
</style>
