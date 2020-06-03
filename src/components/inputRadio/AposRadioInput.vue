<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <label class="apos-choice-label" :for="getChoiceId(uid, choice.value)"
        v-for="choice in field.choices" :key="choice.value">
        <input type="radio" class="apos-sr-only apos-input--choice apos-input--radio"
          :value="choice.value" :name="field.name"
          :id="getChoiceId(uid, choice.value)"
          v-model="next" :disabled="status.disabled"
          tabindex="1" />
        <span class="apos-input-indicator" aria-hidden="true">
          <component :is="`${
            next === choice.value ? 'CheckBoldIcon' : 'span'}`"
            :size="8" v-if="next === choice.value"></component>
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
  name: 'AposRadioInput',
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
    validate(value) {
      if (this.field.required && (!value || !value.length)) {
        return 'required';
      }


      if (!this.field.choices.map(choice => {return choice.value}).includes(value)) {
        return 'invalid'
      }

      return false;
    }
  }
}
</script>

<style lang="scss">
  .apos-input-indicator {
    .apos-input--radio + & {
      border-radius: 50%;
    }
  }
</style>
