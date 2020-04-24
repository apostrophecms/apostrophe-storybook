<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <label class="apos-choice-label" :for="getChoiceId(uid, choice.value)"
        v-for="choice in field.choices" :key="choice.value">
        <input type="checkbox" class="apos-sr-only apos-input--choice apos-input--checkbox"
          :value="choice.value" :name="field.name"
          :id="getChoiceId(uid, choice.value)" 
          tabindex="0"
          v-model="value.data" :disabled="status.disabled"/>
        <span class="apos-input-indicator" aria-hidden="true">
          <component :is="`${
              choice.indeterminate ? 'MinusIcon' : 'CheckBoldIcon'
            }`"
            :size="10" v-if="value.data.includes(choice.value)"></component>
        </span>
        <span class="apos-choice-label-text">{{ choice.label }}</span>
      </label>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin';
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";

export default {
  name: 'AposCheckboxInput',
  mixins: [ AposInputMixin ],
  components: {
    AposInputWrapper,
    CheckBoldIcon,
    MinusIcon
  },
  methods: {
    getChoiceId(uid, value) {
       return uid + value.replace(/\s/g, '');
    },
    validate(values) {
      if (!Array.isArray(this.field.choices)) {
        return 'choices';
      }

      if (this.field.required &&
        !Array.isArray(values) && values.length === 0) {
        return 'required';
      }

      if (Array.isArray(values)) {
        values.forEach(chosen => {
          if (!this.field.choices.includes(chosen)) {
            return 'selected'
          }
        });
      }

      return false;
    }
  },
  beforeMount: function () {
    this.value.data = Array.isArray(this.value.data) ? this.value.data : [];
  }
}
</script>

<style lang="scss" scoped>
  .apos-input-indicator {
    border-radius: 3px;
  }
</style>
