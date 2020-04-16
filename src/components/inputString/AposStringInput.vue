<template>
  <AposInputWrapper :modifiers="modifiers" :field="field" :error="status.error" :uid="uid" >
    <template slot="body">
      <div class="apos-input-wrapper">
        <textarea :class="classes"
          v-if="type === 'textarea'" rows="5"
          v-model="next" :placeholder=field.placeholder
          :disabled="status.disabled" :required="field.required" :id="uid"></textarea>
        <input :class="classes" v-else
          v-model="next" :type="type" :placeholder=field.placeholder
          :disabled="status.disabled" :required="field.required" :id="uid">
        <component 
          v-if="iconComponent"
          :size="iconSize"
          class="apos-input-icon"
          v-bind:is="iconComponent"
        ></component>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin.js';

export default {
  components: {
    AposInputWrapper
  },
  mixins: [ AposInputMixin ],
  name: 'AposStringInput',
  computed: {
    type () {
      if (this.field.type) {
        return this.field.type;
      } else {
        return 'text';
      }
    },
    classes () {
      const classes = ['apos-input'];
      classes.push(`apos-input--${this.type}`);
      return classes;
    },
    iconComponent () {
      if (this.field.type === 'date') {
        return () => import(`vue-material-design-icons/Calendar.vue`);
      }
      if (this.field.type === 'time') {
        return () => import(`vue-material-design-icons/Clock.vue`);
      }
      if (this.field.icon) {
        return () => import(`vue-material-design-icons/${this.field.icon}.vue`);
      }
      if (this.status.error) {
        return () => import(`vue-material-design-icons/CircleMedium.vue`);
      }
      return false;
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
  .apos-input--date,
  .apos-input--time {
    // lame magic number .. 
    // height of date/time input is slightly larger than others due to the browser spinner ui
    height: 46px;
  }
  .apos-input--date {
    // padding is lessend to overlap with calendar UI
    padding-right: $input-padding * 1.4;
    &::-webkit-calendar-picker-indicator { opacity: 0; }
    &::-webkit-clear-button { 
      position: relative;
      right: 5px;
    }
  }
  .apos-input--time {
    padding-right: $input-padding * 2.5;
  }

  .apos-field--small .apos-input--date,
  .apos-field--small .apos-input--time {
    height: 33px;
  }
</style>
