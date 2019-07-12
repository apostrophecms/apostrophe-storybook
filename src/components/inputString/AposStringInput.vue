<template>
  <AposInputWrapper :field="field" :error="status.error" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <input class="apos-input apos-input--text"
          v-model="next" :type="field.type" :placeholder=field.placeholder
          :disabled="status.disabled" />
        <!-- NOTE: This calendar icon might be a bad idea for date fields since
          they often have their own icon in the input. - AB -->
        <component :is="`${
          field.type === 'date' ? 'Calendar' : 'CircleMedium'}`"
        :size="14" class="apos-input-icon" v-if="hasIcon"></component>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import CircleMedium from "vue-material-design-icons/CircleMedium.vue";
import Calendar from "vue-material-design-icons/Calendar.vue";

const specialTypes = [ 'date' ]

export default {
  props: {
    field: Object,
    status: Object
  },
  components: {
    AposInputWrapper,
    CircleMedium,
    Calendar
  },
  mixins: [ AposInputMixin ],
  name: 'AposStringInput',
  computed: {
    hasIcon: function () {
      return this.status.error || specialTypes.includes(this.field.type);
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

<style lang="scss">
</style>
