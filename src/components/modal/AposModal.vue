<template>
  <section class="c-modal" role="dialog" aria-modal="true"
    v-if="modal.active">
    <div class="c-modal__inner">
      <header class="c-modal__header">
        <div class="c-modal__header__main">
          <div class="c-modal__controls--secondary" v-if="hasSecondaryControls">
            <slot name="secondaryControls"></slot>
          </div>
          <h2 class="c-modal__heading o-heading">
            {{modal.title}}
          </h2>
          <div class="c-modal__controls--primary" v-if="hasSecondaryControls">
            <slot name="primaryControls"></slot>
          </div>
        </div>
        <div class="c-modal__breadcrumbs" v-if="hasBreadcrumbs">
          <slot class="c-modal__breadcrumbs" name="breadcrumbs"></slot>
        </div>
      </header>
      <div class="c-modal__main">
        <slot name="main"></slot>
      </div>
      <div class="c-modal__"></div>
      <slot name="right"></slot>
    </div>
    <div class="c-modal__overlay" v-if="modal.type === 'overlay'"></div>
  </section>
</template>

<script>
export default {
  name: 'AposModal',
  props: {
    modal: Object
  },
  computed: {
    hasPrimaryControls: function () {
      return !!this.$slots.primaryControls;
    },
    hasSecondaryControls: function () {
      return !!this.$slots.secondaryControls;
    },
    hasBreadcrumbs: function () {
      return !!this.$slots.breadcrumbs;
    }
  }
}
</script>

<style lang="scss" scoped>
  .c-modal__inner {
    position: fixed;
    z-index: 1001;
    top: $spacing-double;
    right: $spacing-double;
    bottom: $spacing-double;
    left: $spacing-double;
    border-radius: var(--border-radius);
    background-color: var(--background-color);

  }

  .c-modal__overlay {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: rgba(#000, .8);
  }

  .c-modal__header__main {
    display: flex;
    padding: $spacing-double;
    align-items: center;
    border-bottom: 1px solid var(--border-color);
  }

  .c-modal__controls--primary {
    flex-grow: 1;
    text-align: right;
  }

  .c-modal__heading {
    margin: 0 $spacing-double;

    &:first-child {
      margin-left: 0;
    }
  }

  .c-modal__breadcrumbs {
    padding-top: $spacing-base;
    padding-bottom: $spacing-base;
    background-color: var(--background-alt);
    color: var(--text-alt);
  }
</style>
