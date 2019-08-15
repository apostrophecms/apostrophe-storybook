<template>
<transition :name="transitionType" @enter="modal.showSlide = true"
  :duration="transitionType === 'slide' ? 500 : 250">
  <section :class="[
    'c-modal',
    `c-modal--${modal.type}`
  ]" role="dialog" aria-modal="true"
    v-if="modal.active">
    <transition :name="transitionType" @after-leave="modal.active = false">
    <div class="c-modal__inner" v-if="modal.showSlide">
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
    </div>
    </transition>
    <transition :name="transitionType">
      <div class="c-modal__overlay" v-if="modal.showSlide"></div>
    </transition>
  </section>
</transition>
</template>

<script>
export default {
  name: 'AposModal',
  props: {
    modal: Object
  },
  computed: {
    transitionType: function () {
      if (this.modal.type === 'slide') {
        return 'slide';
      } else {
        return 'fade';
      }
    },
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
  .c-modal--overlay {
    transition: opacity .25s ease;

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  .c-modal__inner {
    position: fixed;
    z-index: 1001;
    top: $spacing-double;
    right: $spacing-double;
    bottom: $spacing-double;
    left: $spacing-double;
    border-radius: var(--border-radius);
    background-color: var(--background-color);

    .c-modal--slide & {
      position: fixed;
      transition: transform .5s ease;
      top: 0;
      bottom: 0;
      right: 0;
      transform: translateX(0);
      border-radius: 0;
    }

    &.slide-enter,
    &.slide-leave-to {
      transform: translateX(100%);
    }
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

    .c-modal--slide & {
      transition: opacity .5s ease;
    }

    &.slide-enter,
    &.slide-leave-to {
      opacity: 0;
    }
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
