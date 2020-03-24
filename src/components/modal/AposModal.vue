<template>
  <transition :name="transitionType" @enter="modal.showModal = true"
    :duration="250">
    <section :class="[ 'apos-modal', `apos-modal--${modal.type}` ]"
      role="dialog" aria-modal="true" v-if="modal.active">
      <transition :name="transitionType" @after-leave="modal.active = false">
        <div class="apos-modal__inner"
          v-if="modal.showModal">
          <header class="apos-modal__header">
            <div class="apos-modal__header__main">
              <div class="apos-modal__controls--secondary"
                v-if="hasSecondaryControls">
                <slot name="secondaryControls"></slot>
              </div>
              <h2 class="apos-modal__heading o-heading">
                {{modal.title}}
              </h2>
              <div class="apos-modal__controls--primary"
                v-if="hasPrimaryControls">
                <slot name="primaryControls"></slot>
              </div>
            </div>
            <div class="apos-modal__breadcrumbs" v-if="hasBreadcrumbs">
              <slot class="apos-modal__breadcrumbs" name="breadcrumbs"></slot>
            </div>
          </header>
          <div class="apos-modal__main">
            <slot name="main"></slot>
          </div>
        </div>
      </transition>
      <transition :name="transitionType">
        <div class="apos-modal__overlay"
          v-if="modal.showModal"></div>
      </transition>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AposModal',
  props: {
    modal: Object,
    hasSecondaryControls: Boolean
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
    // hasSecondaryControls: function () {
    //   return !!this.$slots.secondaryControls;
    // },
    hasBreadcrumbs: function () {
      return !!this.$slots.breadcrumbs;
    }
  }
}
</script>

<style lang="scss" scoped>
  // NOTE: Transition timings below are set to match the wrapper transition
  // timing in the template to coordinate the inner and overlay animations.
  .apos-modal__inner {
    position: fixed;
    z-index: 1001;
    top: $spacing-double;
    right: $spacing-double;
    bottom: $spacing-double;
    left: $spacing-double;
    border-radius: var(--a-border-radius);
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-4);
    color: var(--a-text-primary);

    .apos-modal--slide & {
      position: fixed;
      transition: transform .15s ease;
      top: 0;
      right: 0;
      bottom: 0;
      left: auto;
      transform: translateX(0);
      width: 90%;
      border-radius: 0;

      @media screen and (min-width: 800px) {
        max-width: 600px;
      }
    }

    &.slide-enter,
    &.slide-leave-to {
      transform: translateX(100%);
    }

    .apos-modal--overlay & {
      transform: scale(1);
      transition: opacity .15s ease, transform .15s ease;
    }

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
      transform: scale(0.95);
    }
  }

  .apos-modal__overlay {
    position: fixed;
    z-index: 1000;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    background-color: var(--a-overlay);

    .apos-modal--slide & {
      transition: opacity .15s ease;
    }

    &.slide-enter,
    &.slide-leave-to {
      opacity: 0;
    }

    .apos-modal--overlay & {
      transition: opacity .15s ease;
    }

    &.fade-enter,
    &.fade-leave-to {
      opacity: 0;
    }
  }

  .apos-modal__header__main {
    display: flex;
    padding: $spacing-double;
    align-items: center;
    border-bottom: 1px solid var(--a-base-4);
  }

  .apos-modal__controls--primary {
    flex-grow: 1;
    text-align: right;
  }

  .apos-modal__heading {
    margin: 0 $spacing-double;

    &:first-child {
      margin-left: 0;
    }
  }
</style>
