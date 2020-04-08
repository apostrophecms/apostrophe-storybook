<template>
  <AposInputWrapper :field="field" :error="status.error">
    <template slot="body">
      <div :class="classList">
        <input class="apos-sr-only" type="radio" :id="uid + '-true'" :value="true" v-model="next" :checked="value.data === true">
        <label :for="uid + '-true'" class="apos-boolean__label apos-input">
          <CircleIcon :size="12" class="apos-boolean__icon"
            title="" v-show="!field.toggle"></CircleIcon>
            {{ trueLabel || 'Yes' }}
        </label>
        <input class="apos-sr-only apos-boolean__input--false" type="radio" :id="uid + '-false'" :value="false" v-model="next" :checked="value.data === false">
        <label :for="uid + '-false'" class="apos-boolean__label apos-input">
          <CircleIcon :size="12" class="apos-boolean__icon"
            title="" v-show="!field.toggle"></CircleIcon>
            {{ falseLabel || 'No' }}
        </label>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin';
import CircleIcon from 'vue-material-design-icons/Circle.vue';

export default {
  components: {
    AposInputWrapper,
    CircleIcon
  },
  mixins: [ AposInputMixin ],
  name: 'AposBooleanField',
  computed: {
    classList: function () {
      return [
        'apos-input-wrapper',
        'apos-boolean',
        {
          'apos-boolean--toggle': this.field.toggle
        }
      ];
    },
    trueLabel: function () {
      if (this.field.toggle && this.field.toggle.true
        && typeof this.field.toggle.true === 'string') {
        return this.field.toggle.true;
      } else {
        return false;
      }
    },
    falseLabel: function () {
      if (this.field.toggle && this.field.toggle
        && typeof this.field.toggle.false === 'string') {
        return this.field.toggle.false;
      } else {
        return false;
      }
    }
  },
  methods: {
    validate(value) {
      if (this.field.required) {
        if (!value) {
          return 'required';
        }
      }
      return false;
    }
  }
};
</script>

<style lang="scss" scoped>
  .apos-boolean {
    position: relative;
    z-index: 0;
    display: inline-flex;
  }

  .apos-boolean__icon {
    color: var(--a-base-7);
  }

  .apos-boolean__label {
    min-width: 0;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ($boolean-padding / 2) $boolean-padding;

    &:first-of-type {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }

    &:last-of-type {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      margin-left: -1px;
    }

    &:hover,
    &:focus {
      z-index: 1;
    }

    input:checked + & {
      background-color: var(--a-base-10);

      .apos-boolean__icon {
        color: var(--a-success);
      }

      .apos-boolean--toggle &:first-of-type {
        background-color: var(--a-success);
        color: var(--a-white);
      }

      .apos-boolean--toggle &:last-of-type {
        background-color: var(--a-danger);
        color: var(--a-white);
      }

      &:hover,
      &:focus {
        // Prevent border change for active boolean.
        border-color: var(--a-base-4);
      }
    }

    input + & {
      &:hover {
        cursor: pointer;
      }

      &:active,
      &:focus {
        background-color: var(--a-base-10);
      }
    } 

    input:checked.apos-boolean__input--false + & {
      .apos-boolean__icon {
        color: var(--a-danger);
      }
    }
  }

  .apos-boolean__icon {
    display: inline-flex;
    margin-right: $spacing-base;

    svg {
      top: 1px;
      position: relative;
    }
  }
</style>
