<template>
  <AposInputWrapper :modifiers="modifiers" :field="field" :error="status.error" :uid="uid" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <input 
          type="date" 
          class="apos-input apos-input--date"
          v-model="next"
          :placeholder=field.placeholder
          :disabled="status.disabled" 
          :required="field.required" 
          :id="uid"
          >
        <CalendarIcon class="apos-input-icon" :size="iconSize" />
      </div>
    </template>
  </AposInputWrapper>
</template>


<script>
import 'date-input-polyfill';
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';
import CalendarIcon from 'vue-material-design-icons/Calendar.vue';

export default {
  components: {
    AposInputWrapper,
    CalendarIcon
  },
  mixins: [ AposInputMixin ],
  name: 'AposDateInput',
  data() {
    return {
      selectedDate: null,
      mode: 'single'
    }
  },
  computed: {
  },
  methods: {
    validate(value) {
      if (this.field.required && !value.length) {
        return 'required';
      }

      if (!this.field.choices.includes(value)) {
        return 'selected'
      }

      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/_inputs';

.apos-input--date {
  // lame magic number .. 
  // height of date input is slightly larger than others due to the browser spinner ui
  height: 46px;
  // padding is lessend to overlap with calendar UI
  padding-right: $input-padding * 1.4;
  &::-webkit-calendar-picker-indicator { opacity: 0; }
  &::-webkit-clear-button { 
    position: relative;
    right: 5px;
   }
}
.apos-field--small .apos-input--date {
  height: 33px;
}
</style>
