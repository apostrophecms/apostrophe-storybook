<template>
  <AposInputWrapper :field="field" :error="status.error">
    <template slot="body">
      <div class="apos-input-wrapper apos-boolean">
        <input class="apos-sr-only" type="radio" :id="uid + '-true'" :value="true" v-model="next" :checked="value.data === true">
        <label :for="uid + '-true'" class="apos-boolean__label apos-input">
          <CircleIcon :size="12" class="apos-boolean__icon"
            title=""></CircleIcon>Yes
        </label>
        <input class="apos-sr-only apos-boolean__input--false" type="radio" :id="uid + '-false'" :value="false" v-model="next" :checked="value.data === false">
        <label :for="uid + '-false'" class="apos-boolean__label apos-input">
          <CircleIcon :size="12" class="apos-boolean__icon"
            title=""></CircleIcon>No
        </label>
      </div>
    </template>
  </AposInputWrapper>
</template>

<script>
import AposInputWrapper from '../AposInputWrapper';
import AposInputMixin from '../../mixins/AposInputMixin';
import CircleIcon from "vue-material-design-icons/Circle.vue";

export default {
  components: {
    AposInputWrapper,
    CircleIcon
  },
  mixins: [ AposInputMixin ],
  name: 'AposBooleanField',
  methods: {
    validate(value) {
      if (this.field.mandatory) {
        if (!value) {
          return 'mandatory';
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
    color: var(--neutral-four);
  }

  .apos-boolean__label {
    min-width: 0;
    position: relative;
    display: inline-block;
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
      background-color: var(--neutral-eight);

      .apos-boolean__icon {
        color: var(--success);
      }
    }

    input:checked.apos-boolean__input--false + & {
      .apos-boolean__icon{
        color: var(--neutral-two);
      }
    }
  }

  .apos-boolean__icon {
    margin-right: $spacing-base;
    svg {
      top: 1px;
      position: relative;
    }
  }
</style>
