<template>
  <div class="apos-context-menu" :class="classList" ref="component">
    <!-- TODO refactor buttons to take a single config obj -->
    <AposButton 
      v-on:click="buttonClicked" :label="button.label" 
      :type="button.type" :icon="button.icon" 
      :iconOnly="button.iconOnly" :state="buttonState" ref="button"
    />
    <div 
      class="apos-primary-scrollbar apos-context-menu__popup" 
      :class="{'is-visible': open}" ref="popup" :aria-hidden="open ? 'false' : 'true'" 
      role="dialog" :style="position"
    >
      <AposContextMenuTip 
        :align="tipAlignment"
        :origin="origin"
      />
      <div class="apos-context-menu__pane">
        <slot>
          <ul class="apos-context-menu__items">
            <AposContextMenuItem 
              v-for="item in menu" 
              :key="item.action" 
              :menuItem="item" 
              v-on:clicked="menuItemClicked"
            />
          </ul>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
  import AposContextMenuItem from './AposContextMenuItem';
  import AposContextMenuTip from './AposContextMenuTip';
  import AposButton from './../button/AposButton';

  export default {
    name: 'AposContextMenu',
    components: {
      AposContextMenuItem,
      AposContextMenuTip,
      AposButton
    },
    props: {
      menu: Array,
      button: {
        type: Object,
        default() {
          return {
            label: 'Context Menu Label',
            iconOnly: true,
            icon: 'Label',
            type: 'outline',
          }
        }
      },
      tipAlignment: {
        type: String,
        default: 'left'
      },
      origin: {
        type: String,
        default: 'below'
      }
    },
    data() {
      return {
        open: false,
        vueId: this.$options._scopeId,
        position: ''
      }
    },
    watch: {
      open(newVal, oldVal) {
        if (newVal) {
          const top = 
          this.position = this.calculatePosition();
        }
      }
    },
    mounted() {
      // console.log(this.$refs.button);
      // console.log(this.$refs.button.$el.offsetTop);
      // console.log(this.$refs.button.$el.offsetLeft);
    },
    computed: {
      classList() {
        const classes = [];
        classes.push(`apos-context-menu--origin-${this.origin}`);
        classes.push(`apos-context-menu--tip-alignment-${this.tipAlignment}`);
        return classes.join(' ');
      },
      buttonState() {
        return this.open ? ['active'] : null;
      }
    },
    methods: {
      bind() {
        document.addEventListener('click', this.clicks);
        document.addEventListener('keydown', this.keyboard);
        window.addEventListener('resize', this.positionPopup);
      },
      unbind() {
        document.removeEventListener('click', this.clicks);
        document.removeEventListener('keydown', this.keyboard);
        window.removeEventListener('resize', this.positionPopup);
      },
      keyboard(event) {
        // if user hits esc, close menu
        if (event.keyCode === 27) {
          this.open = false;
          this.unbind();
        }
      },
      clicks (event) {
        // if user clicks outside menu component, close menu
        const result = event.path.filter((item) => {
          if (item.hasAttribute && item.hasAttribute(this.vueId)) {
            return item;
          }
        });
        if (!result.length) {
          this.open = false;
          this.unbind();
        }
      },
      buttonClicked() {
        this.open = !this.open;
        if (this.open) {
          this.bind();
        }
      },
      menuItemClicked(action) {
        this.$emit('itemClicked', action);
      },
      positionPopup() {
        this.position = this.calculatePosition();
      },
      calculatePosition() {
        const button = this.$refs.button.$el.querySelector('button');
        const popup = this.$refs.popup
        const rect = button.getBoundingClientRect();
        const buttonHeight = button.offsetHeight;
        let top, left;

        if (this.origin === 'above') {
          // menu appears above button
          top = rect.top - popup.offsetHeight - 40;
        } else {
          // menu should appear below the button
          top = rect.top + buttonHeight;
        }

        if (this.tipAlignment === 'center') {
          // center
          left = rect.left - (popup.offsetWidth / 2);
        } else if (this.tipAlignment === 'right') {
          //right
          left = rect.left - popup.offsetWidth + 31;
        } else {
          // left
          left = rect.left - 37;
        }

        return `top: ${top}px; left: ${left}px`;
      },
    }
  }
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

  .apos-context-menu {
    position: relative;
    display: inline;
  }

  .apos-context-menu__popup {
    z-index: 10;
    position: fixed;
    display: inline-block;
    color: var(--a-text-primary);
    opacity: 0;
    pointer-events: none;
    transform: scale(0.98) translateY(-8px);
    transform-origin: top left;
    transition: scale 0.15s ease, translateY 0.15s ease;
  }

  .apos-context-menu__popup.is-visible {
    opacity: 1;
    transform: scale(1) translateY(0);
    pointer-events: auto;
  }

  .apos-context-menu__inner {
    border-radius: var(--a-border-radius);
    box-shadow: var(--a-box-shadow);
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-8);
  }

  .apos-context-menu__pane {
    border-radius: var(--a-border-radius);
    box-shadow: var(--a-box-shadow);
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-8);
  }

  .apos-context-menu__items {
    @include apos-list-reset();
    display: inline-block;
    list-style-type: none;
    margin: none;
    width: max-content;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 10px 0;
  }

  // .apos-context-menu--tip-alignment-left .apos-context-menu__popup {
  //   left: -15px;
  // }

  // .apos-context-menu--tip-alignment-right .apos-context-menu__popup {
  //   right: -12px
  // }

  // .apos-context-menu--tip-alignment-center .apos-context-menu__popup {
  //   transform: translateX(-50%);
  //   left: 50%;
  // }

  // .apos-context-menu--origin-below .apos-context-menu__popup {
  //   top: 40px;
  // }

  // .apos-context-menu--origin-above .apos-context-menu__popup {
  //   bottom: calc(100% + 35px);
  // }
</style>
