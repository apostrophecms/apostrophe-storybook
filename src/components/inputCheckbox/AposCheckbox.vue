<template>
  <label class="apos-choice-label" :for="id">
    <input type="checkbox" class="apos-sr-only apos-input--choice apos-input--checkbox"
      :value="choice.value" :name="field.name" :id="id" :aria-label="choice.label"
      tabindex="0" :disabled="status.disabled" v-on="{ 'click': status.readOnly ? readOnly : toggle }" v-model="value.data"
    />
    <span class="apos-input-indicator" aria-hidden="true">
      <component :is="`${
          choice.indeterminate ? 'MinusIcon' : 'CheckBoldIcon'
        }`"
        :size="10" v-if="value.data.includes(choice.value)"></component>
    </span>
    <span :class="{'apos-sr-only': field.hideLabel }" v-if="choice.label" class="apos-choice-label-text">{{ choice.label }}</span>
  </label>
</template>

<script>
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";

export default {
  components: {
    CheckBoldIcon,
    MinusIcon
  },
  props: {
    choice: Object,
    field: Object,
    value: Object,
    status: Object,
    id: String,
  },
  methods: {
    readOnly(event) {
      this.$nextTick(() => {
        event.preventDefault();
        event.stopPropagation();
        console.log('readonlying');
        this.$emit('toggle', this.choice.value);
      })
    },
    toggle(event) {
      this.$nextTick(() => {
        console.log('toggling');
        this.$emit('toggle', this.choice.value);
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .apos-input-indicator {
    border-radius: 3px;
  }
</style>