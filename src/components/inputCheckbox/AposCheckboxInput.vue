<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <label class="apos-choice-label" :for="getChoiceId(uid, choice.value)"
        v-for="choice in field.choices" :key="choice.value">
        <input type="checkbox" class="apos-input--choice apos-input--checkbox"
          :value="choice.value" :name="field.name" :id="getChoiceId(uid, choice.value)"
          @click="toggle(choice)" :disabled="status.disabled"/>
        <span class="apos-input-indicator" aria-hidden="true">
          <component :is="`${
              choice.indeterminate ? 'MinusIcon' : 'CheckBoldIcon'
            }`"
            :size="10" v-if="value.data.includes(choice.value)"></component>
        </span>
        {{ choice.label }}
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
    toggle: function (choice) {
      if (this.value.data.includes(choice.value)) {
        this.value.data = this.value.data.filter(value => {
          return value !== choice.value;
        })
      } else {
        this.value.data.push(choice.value);
      }
    },
    getChoiceId(uid, value) {
       return uid + value.replace(/\s/g, '');
    },
    validate(value) {
      if (!Array.isArray(this.field.choices)) {
        return 'choices';
      }

      if (this.field.required && this.value.data.length === 0) {
        return 'required';
      }

      this.value.data.forEach(chosen => {
        if (!this.field.choices.includes(chosen)) {
          return 'checked'
        }
      });

      return false;
    }
  },
  beforeMount: function () {
    this.value.data = Array.isArray(this.value.data) ? this.value.data : [];
  }
}
</script>

<style lang="scss" scoped>
</style>
