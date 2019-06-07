<template>
  <button :class="`apos-notification apos-notification--${modifier}`" role="alert">
    <span class="apos-notification__label">{{ label }}</span>
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
    border-radius: var(--radius-medium);
    padding: 0 20px;
    height: 55px;
    box-shadow: 0 3px 13px 4px rgba(0,0,0,0.08);
  }
  .apos-notification__label {
    font-size: 1.4em;
    letter-spacing: 0.75px;
    color: var(--neutral-one);
    &:before {
      display: inline-block;
      content: '';
      width: 10px;
      height: 10px;
      background: #000;
      border-radius: 100%;
      margin-right: 10px;
      .apos-notification--success & { background: var(--success) }
      .apos-notification--danger & { background: var(--danger) }
      .apos-notification--info & { background: var(--info) }
      .apos-notification--warning & { background: var(--warning) }
    }
  }
</style>
