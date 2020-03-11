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
      return this.modifier ? 'apos-button--' + this.modifier : false;
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
    color: var(--text-primary);
    background-color: var(--default-button);
    padding: 10px 20px;
    border-radius: var(--border-radius);
    border: none;
    font-size: map-get($font-sizes, modal);
    letter-spacing: 0.75px; // how do we reuse this
    border: 1px solid var(--border-color);
    &:hover {
      cursor: pointer;
      background-color: var(--default-button-hover);
    }
    &:active {
      background-color: var(--default-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--default-button-hover);
      outline: none;
    }
    &[disabled] {
      background-color: var(--default-button-disabled);
      color: var(--neutral-three);
      &:hover {
        cursor: not-allowed;
      }
    }
  }

  .apos-button--primary {
    color: var(--white);
    background: var(--primary-button);
    border: none;
    &:hover {
      background-color: var(--primary-button-hover);
    }
    &:active {
      background-color: var(--primary-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--primary-button-disabled);
    }
    &[disabled] {
      background-color: var(--primary-button-disabled);
      color: var(--white);
    }
  }

  .apos-button--input {
    background-color: var(--input-button);
    color: var(--white);
    &:hover {
      background-color: var(--input-button-hover);
    }
    &:active {
      background-color: var(--input-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--input-button-disabled);
    }
    &[disabled] {
      background-color: var(--input-button-disabled);
    }
  }

  .apos-button--danger {
    color: var(--white);
    background-color: var(--danger);
    &:hover {
      background-color: var(--danger-button-hover);
    }
    &:active {
      background-color: var(--danger-button-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--danger-button-disabled);
    }
    &[disabled] {
      color: var(--white);
      background-color: var(--danger-button-disabled);
    }
  }


</style>
