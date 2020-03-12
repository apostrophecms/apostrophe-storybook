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
    background-color: var(--neutral-nine);
    padding: 10px 20px;
    border-radius: var(--border-radius);
    border: none;
    font-size: map-get($font-sizes, modal);
    letter-spacing: 0.75px; // how do we reuse this
    border: 1px solid var(--neutral-five);
    &:hover {
      cursor: pointer;
      background-color: var(--neutral-eight);
    }
    &:active {
      background-color: var(--neutral-seven);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--neutral-six);
      outline: none;
    }
    &[disabled] {
      background-color: var(--neutral-nine);
      color: var(--neutral-five);
      border: 1px solid var(--neutral-eight);
      &:hover {
        cursor: not-allowed;
      }
    }
  }

  .apos-button--primary {
    color: var(--white);
    background: var(--primary);
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
      border: none;
    }
  }

  .apos-button--input {
    background-color: var(--neutral-two);
    color: var(--neutral-ten);
    border-color: var(--neutral-four);
    &:hover {
      background-color: var(--neutral-one);
    }
    &:active {
      background-color: var(--neutral-one);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--neutral-seven), 0 0 0 3px var(--neutral-one);
    }
    &[disabled] {
      background-color: var(--neutral-four);
      color: var(--neutral-seven);
    }
  }

  .apos-button--danger {
    color: var(--white);
    background-color: var(--danger);
    border: none;
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
      border: none;
    }
  }


</style>
