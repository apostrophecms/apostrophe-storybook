<template>
  <transition
    :name="transitionType"
    @enter="finishEnter"
    @leave="finishExit"
    :duration="250"
  >
    <section
      v-if="modal.active"
      :class="classes"
      role="dialog"
      aria-modal="true"
      :aria-labelledby="id"
    >
      <transition :name="transitionType" @after-leave="$emit('inactive')">
        <div
          v-if="modal.showModal"
          class="apos-modal__inner" data-apos-modal-inner
        >
          <header class="apos-modal__header" v-if="hasHeader">
            <div class="apos-modal__header__main">
              <div v-if="hasSecondaryControls" class="apos-modal__controls--secondary">
                <slot name="secondaryControls" />
              </div>
              <h2 :id="id" class="apos-modal__heading apos-heading">
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
            <div class="apos-modal__footer__inner">
              <slot name="footer" />
            </div>
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
// NOTE:
// To get the desired transition effect, modal props have two properties,
// `active` and `showModal`, which control their visibility. Basically,
// `active` starts the transition process for the overlay and the body of the
// modal, which enter at different speeds. `showModal` is what actually
// displays the modal.
// So as the modal exits, they should change in reverse. `showModal` becomes
// `false`, then `active` is set to `false` once the modal has finished its
// transition.
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

      if (!this.modal.title) {
        return rand;
      }
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
    hasHeader () {
      return this.modal.title || this.hasPrimaryControls ||
        this.hasSecondaryControls || this.hasBreadcrumbs;
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
      this.$emit('show-modal');
      this.bindEventListeners();
    },
    finishExit () {
      this.removeEventListeners();
      this.$emit('no-modal');
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

  .apos-modal__footer {
    position: relative;
    z-index: 0;

    &::before {
      content: '';
      position: absolute;
      z-index: 0;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 0;
      box-shadow: var(--a-box-shadow);
    }
  }

  .apos-modal__footer__inner,
  .apos-modal__header__main {
    display: flex;
    padding: $spacing-double;
    align-items: center;
  }

  .apos-modal__header__main {
    border-bottom: 1px solid var(--a-base-4);
  }

  .apos-modal__footer {
    grid-row: 3 / 4;
  }

  .apos-modal__footer__inner {
    position: relative;
    z-index: 1;
    justify-content: space-between;
    padding: 20px;
    background-color: var(--a-white);
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
    grid-template-columns: 18% 1fr minmax(250px, 22%);
  }

  .apos-modal__main--with-left-rail {
    grid-template-columns: 22% 78%;
  }

  .apos-modal__main--with-right-rail {
    grid-template-columns: 78% 22%;
  }
</style>
