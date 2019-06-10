<template>
  <button type="button" :class="`apos-button apos-button--${modifier}`" :disabled="disabled">
    {{ label }}
  </button>
</template>

<script>
module.exports = {
  props: {
    label: String,
    modifier: String,
    disabled: Boolean
  }
}
</script>

<style lang="scss">
  .apos-button {
    color: var(--neutral-eight);
    background: var(--primary);
    padding: 10px 20px; // re use this?
    border-radius: var(--border-radius);
    border: none;
    font-size: 1.3em;
    letter-spacing: 0.75px; // how do we reuse this
    &:hover {
      cursor: pointer;
      background-color: var(--primary-hover);
    }
    &:active {
      background-color: var(--primary-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px var(--primary-disabled);
      outline: none;
    }
    &[disabled] {
      background-color: var(--primary-disabled);
    }
    &[disabled]:hover {
      cursor: not-allowed;
    }
  }

  .apos-button--secondary {
    background-color: var(--secondary);
    &:hover {
      background-color: var(--secondary-hover);
    }
    &:active {
      background-color: var(--secondary-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px var(--secondary-disabled);
    }
    &[disabled] {
      background-color: var(--secondary-disabled);
    }
  }

  .apos-button--danger {
    background-color: var(--danger);
    &:hover {
      background-color: var(--danger-hover);
    }
    &:active {
      background-color: var(--danger-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px var(--danger-disabled);
    }
    &[disabled] {
      background-color: var(--danger-disabled);
    }
  }

  .apos-button--cancel {
    background-color: var(--cancel);
    color: var(--neutral-one);
    border: 1px solid var(--neutral-six);
    &:hover {
      background-color: var(--cancel-hover);
    }
    &:active {
      background-color: var(--cancel-active);
    }
    &:focus {
      box-shadow: 0 0 0 1px #ffffff, 0 0 0 3px var(--cancel-hover);
    }
    &[disabled] {
      background-color: var(--cancel-disabled);
      color: var(--neutral-three)
    }
  }
</style>
