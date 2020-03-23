<template>
  <button type="button" @click="click" class="apos-button" :class="modifierClass" v-bind:busy="busy" v-bind:disabled="isDisabled">
    <AposLoading />
    <div class="apos-button__content">
      <component :size="15" class="apos-button__icon" v-if="icon" v-bind:is="iconComponent"></component>
      <span class="apos-button__label" :class="{ 'apos-sr-only' : iconOnly }">
        {{ label }}
      </span>
    </div>
  </button>
</template>

<script>
import AposLoading from '../loading/AposLoading.vue';

export default {
  name: 'AposButton',
  components: {
    AposLoading
  },
  props: {
    label: {
      required: true,
      type: String
    },
    modifiers: Array,
    disabled: Boolean,
    busy: Boolean,
    icon: String,
    type: String,
    iconOnly: Boolean
  },
  computed: {
    modifierClass() {
      const modifiers = [];

      if (this.modifiers) {
        this.modifiers.forEach((m) => {
          modifiers.push(`apos-button--${m}`);
        });
      }

      if (this.busy) {
        modifiers.push('apos-button--outline', 'apos-button--busy');
      }

      if (this.type) {
        modifiers.push(`apos-button--${this.type}`);
      }

      if (this.iconOnly) {
        modifiers.push(`apos-button--icon`);
      }

      if (modifiers.length > 0) {
        return modifiers.join(' ');
      } else {
        return false;
      }
    },
    iconComponent () {
      if (this.icon) {
        return () => import(`vue-material-design-icons/${this.icon}.vue`);
      }
    },
    isDisabled() {
      return (this.disabled || this.busy) ? true : false;
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
    position: relative;
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
    &[disabled].apos-button--busy {
      border: 1px solid var(--a-base-1);
    }
    .apos-loading {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      margin: auto;
      opacity: 0;
    }
  }

  .apos-button--outline,
  .apos-button[disabled].apos-button--outline {
    background-color: transparent;
  }

  .apos-button--outline {
    &:hover {
      background-color: var(--a-base-9);
    }
    &:active {
      background-color: var(--a-base-8);
    }
    &:focus {
      box-shadow: 0 0 0 1px var(--a-base-8), 0 0 0 3px var(--a-base--7);
    }
    &[disabled] {
      background-color: transparent;
      color: var(--a-base-9);
      border: 1px solid var(--a-base-9);
    }
    &.apos-button--busy {
      color: var(--a-base-5);
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
    &[disabled].apos-button--busy {
      border: 1px solid var(--a-primary-button-disabled);
    }
    .apos-loading__svg {
      color: var(--a-primary);
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
    &[disabled].apos-button--busy {
      border: 1px solid var(--a-base-1);
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
    &[disabled].apos-button--busy {
      border: 1px solid var(--a-danger-button-disabled);
    }
    .apos-loading__svg {
      color: var(--a-danger);
    }
  }

  .apos-button--busy {
    .apos-button__content {
      opacity: 0;
    }
    .apos-loading {
      opacity: 1;
    }
  }

  .apos-button--icon {
    padding: 10px;
    .apos-button__icon {
      margin-right: 0;
    }
  }

  .apos-button__label {
    display: inline-block;
  }

  .apos-button__content {
    display: flex;
    align-content: center;
    justify-items: center;
    transition: opacity 0.2s ease;
  }

  .apos-button__icon {
    display: inline-flex;
    margin-right: 5px;
    align-items: center;
  }

  .apos-button--danger-on-hover:hover {
    color: var(--a-danger);
  }

</style>