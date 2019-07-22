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
            :size="10" v-if="checked.includes(choice.value)"></component>
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
  data () {
    return {
      checked: []
    }
  },
  components: {
    AposInputWrapper,
    CheckBoldIcon,
    MinusIcon
  },
  methods: {
    toggle: function (choice) {
      if (this.checked.includes(choice.value)) {
        this.checked = this.checked.filter(value => {
          return value !== choice.value;
        })
      } else {
        this.checked.push(choice.value);
      }
    },
    getChoiceId(uid, value) {
       return uid + value.replace(/\s/g, '');
    },
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
}
</script>

<style lang="scss" scoped>
</style>
