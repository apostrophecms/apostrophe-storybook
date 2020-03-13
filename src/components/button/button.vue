<template>
  <button type="button" @click="click" class="apos-button" :class="modifierClass" v-bind:disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
module.exports = {
  props: {
    label: String,
    modifier: String,
    disabled: Boolean
  },
  computed: {
    modifierClass() {
      return this.modifier ? `apos-button--${this.modifier}` : false;
    }
  },
  methods: {
    click() {
    	this.$emit('click');
    }
  }
}
</script>

<style lang="scss">
  .apos-button {
    color: var(--a-text-primary);
    background-color: var(--a-base-9);
    padding: 10px 20px;
    border-radius: var(--a-border-radius);
    border: none;
    font-size: map-get($font-sizes, modal);
    letter-spacing: 0.75px; // how do we reuse this
    border: 1px solid var(--a-base-5);
    &:hover {
      cursor: pointer;
      background-color: var(--a-base-8);
    }
    &:active {
      background-color: var(--a-base-7);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--a-base-7), 0 0 0 3px var(--a-base--6);
      outline: none;
    }
    &[disabled] {
      background-color: var(--a-base-9);
      color: var(--a-base-5);
      border: 1px solid var(--a-base-8);
      &:hover {
        cursor: not-allowed;
      }
    }
  }

  .apos-button--primary {
    color: var(--a-white);
    background: var(--a-primary);
    border: none;
    &:hover {
      background-color: var(--a-primary-button-hover);
    }
    &:active {
      background-color: var(--a-primary-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--a-base-7), 0 0 0 3px var(--a-primary-button-disabled);
    }
    &[disabled] {
      background-color: var(--a-primary-button-disabled);
      color: var(--a-white);
      border: none;
    }
  }

  .apos-button--input {
    background-color: var(--a-base-2);
    color: var(--a-base-10);
    border-color: var(--a-base-4);
    &:hover {
      background-color: var(--a-base-1);
    }
    &:active {
      background-color: var(--a-base-1);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--a-base-7), 0 0 0 3px var(--a-base-1);
    }
    &[disabled] {
      background-color: var(--a-base-4);
      color: var(--a-base-7);
    }
  }

  .apos-button--danger {
    color: var(--a-white);
    background-color: var(--a-danger);
    border: none;
    &:hover {
      background-color: var(--a-danger-button-hover);
    }
    &:active {
      background-color: var(--a-danger-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--a-base-7), 0 0 0 3px var(--a-danger-button-disabled);
    }
    &[disabled] {
      color: var(--a-white);
      background-color: var(--a-danger-button-disabled);
      border: none;
    }
  }


</style>
