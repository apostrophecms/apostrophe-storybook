<template>
  <component :is="clickable ? 'button' : 'div'" :class="`apos-notification ${modifier}`" role="alert">
    <span class="apos-notification__indicator">
      <slot name="indicator"></slot>
    </span>
    <span class="apos-notification__label">{{ label }}</span>
    <component :is="clickable ? 'span' : 'button'" class="apos-notification__button">
      <slot name="button"></slot>
    </component>
  </component>
</template>

<script>
module.exports = {
  props: {
    label: {
      default: 'Set a label',
      type: String
    },
    modifier: {
      default: '',
      type: String
    },
    clickable: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style lang="scss">
  .apos-notification {
    display: inline-flex;
    align-items: center;
    color: var(--a-text-primary);
    background: var(--a-base-9);
    border: 1px solid var(--a-base-8);
    border-radius: var(--a-border-radius);
    padding: 15px 20px;
    box-shadow: var(--a-box-shadow);
  }

  .apos-notification__indicator {
    display: flex;
    margin-right: 10px;
    height: 13px;
  }

  .apos-notification__button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background-color: transparent;
    margin-left: 10px;

    .material-design-icon {
      height: 13px;
    }
  }

  .apos-notification__label {
    font-size: map-get($font-sizes, default);
    letter-spacing: 0.75px;
    color: var(--a-text-primary);
  }
</style>
