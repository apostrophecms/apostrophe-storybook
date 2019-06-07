<template>
  <button :class="`apos-notification apos-notification--${modifier}`" role="alert">
    <span class="apos-notification__indicator">
      <slot name="indicator"></slot>
    </span>
    <span class="apos-notification__label">{{ label }}</span>
    <button class="apos-notification__button">
      <slot name="button"></slot>
    </button>
  </button>
</template>

<script>
module.exports = {
  props: {
    label: String,
    modifier: String
  }
}
</script>

<style lang="scss">
  .apos-notification {
    display: inline-flex;
    align-items: center;
    color: var(--neutral-one);
    background: var(--neutral-eight);
    border: 1px solid var(--neutral-six);
    border-radius: var(--border-radius);
    padding: 15px 20px;
    box-shadow: var(--box-shadow);
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
    &:hover {
      cursor: pointer;
    }

    .material-design-icon {
      height: 13px;
    }
  }

  .apos-notification__label {
    font-size: 1.2em;
    letter-spacing: 0.75px;
    color: var(--neutral-one);
  }
</style>