<template>
  <transition
    :name="transitionType"
    @enter="finishEnter"
    @leave="removeEventListeners"
    :duration="250"
  >
    <section
      v-if="modal.active"
      :class="classes"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="id"
    >
      <transition :name="transitionType" @after-leave="modal.active = false">
        <div
          class="apos-modal__inner" data-apos-modal-inner v-if="modal.showModal"
        >
          <header class="apos-modal__header">
            <div class="apos-modal__header__main">
              <div v-if="hasSecondaryControls" class="apos-modal__controls--secondary">
                <slot name="secondaryControls" />
              </div>
              <h2 :id="id" class="apos-modal__heading o-heading">
                {{ modal.title }}
              </h2>
              <div
                class="apos-modal__controls--primary" v-if="hasPrimaryControls"
              >
                <slot name="primaryControls" />
              </div>
            </div>
            <div class="apos-modal__breadcrumbs" v-if="hasBreadcrumbs">
              <slot class="apos-modal__breadcrumbs" name="breadcrumbs" />
            </div>
          </header>
          <div class="apos-modal__main" :class="gridModifier">
            <slot v-if="hasLeftRail" name="leftRail" />
            <slot name="main" />
            <slot name="rightRail" />
          </div>
          <footer v-if="hasFooter" class="apos-modal__footer">
            <slot name="footer" />
          </footer>
        </div>
      </transition>
      <transition :name="transitionType">
        <div class="apos-modal__overlay" v-if="modal.showModal" />
      </transition>
    </section>
  </transition>
</template>

<script>
export default {
  name: 'AposModal',
  props: {
    modal: {
      type: Object,
      required: true
    }
  },
  computed: {
    id() {
      const rand = (Math.floor(Math.random() * Math.floor(10000)));
      // replace everything not A-Za-z0-9_ with _
      const title = this.modal.title.replace(/\W/g, '_');
      return `${title}-${rand}`;
    },
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
    },
    hasLeftRail: function () {
      return !!this.$slots.leftRail;
    },
    hasRightRail: function () {
      return !!this.$slots.rightRail;
    },
    hasFooter: function () {
      return !!this.$slots.footer;
    },
    classes() {
      const classes = ['apos-modal'];
      classes.push(`apos-modal--${this.modal.type}`);
      if (this.modal.type === 'slide') {
        classes.push(`apos-modal--full-height`);
      }
      return classes.join(' ');
    },
    gridModifier() {
      if (this.hasLeftRail && this.hasRightRail) {
        return 'apos-modal__main--grid apos-modal__main--with-rails';
      }
      if (this.hasLeftRail && !this.hasRightRail) {
        return 'apos-modal__main--grid apos-modal__main--with-left-rail';
      }
      if (!this.hasLeftRail && this.hasRightRail) {
        return 'apos-modal__main--grid apos-modal__main--with-right-rail';
      }
      return false;
    }
  },
  methods: {
    esc (e) {
      if (e.keyCode === 27) {
        this.$emit('esc');
      }
    },
    finishEnter () {
      this.modal.showModal = true;
      this.bindEventListeners();
    },
    bindEventListeners () {
      window.addEventListener('keydown', this.esc);
    },
    removeEventListeners () {
      window.removeEventListener('keydown', this.esc);
    }
  }
};
</script>

<style lang="scss" scoped>
  // NOTE: Transition timings below are set to match the wrapper transition
  // timing in the template to coordinate the inner and overlay animations.
  .apos-modal__inner {
    display: grid;
    position: fixed;
    grid-template-rows: auto 1fr auto;
    z-index: 1001;
    top: $spacing-double;
    right: $spacing-double;
    bottom: $spacing-double;
    left: $spacing-double;
    height: calc(100vh - #{$spacing-double * 2});
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
        max-width: 540px;
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

  .apos-modal--full-height .apos-modal__inner {
    height: 100%;
  }

  .apos-modal__header {
    grid-row: 1 / 2;
  }

  .apos-modal__main {
    grid-row: 2 / 3;
    overflow-y: auto;
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
    margin: 0;

    &:first-child {
      margin-left: 0;
    }
  }

  .apos-modal__main--grid {
    display: grid;
  }

  .apos-modal__controls--secondary {
    margin-right: 20px;
  }

  .apos-modal__main--with-rails {
    grid-template-columns: 22% 60% 18%;
  }

  .apos-modal__main--with-left-rail {
    grid-template-columns: 22% 78%;
  }

  .apos-modal__main--with-right-rail {
    grid-template-columns: 78% 22%;
  }
</style>
