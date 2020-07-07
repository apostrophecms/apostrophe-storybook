<template>
  <div
    class="apos-context-menu" :class="classList"
    ref="component" :style="localCssVar"
    :data-apos-context-menu="uid"
  >
    <!-- TODO refactor buttons to take a single config obj -->
    <AposButton
      class="apos-context-menu__btn"
      @click="buttonClicked" :label="button.label"
      :type="button.type" :icon="button.icon"
      :icon-only="button.iconOnly" :state="buttonState"
      ref="button"
      :modifiers="button.modifiers"
    />
    <div
      class="apos-primary-scrollbar apos-context-menu__popup"
      :class="{'is-visible': open}" ref="popup"
      :aria-hidden="open ? 'false' : 'true'"
      role="dialog"
    >
      <AposContextMenuTip
        :align="tipAlignment"
        :origin="origin"
        :width="tipWidth"
      />
      <div class="apos-context-menu__pane">
        <slot>
          <ul class="apos-context-menu__items" v-if="menu">
            <AposContextMenuItem
              v-for="item in menu"
              :key="item.action"
              :menu-item="item"
              @clicked="menuItemClicked"
              :open="open"
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
import AposHelpers from '../../mixins/AposHelpersMixin';

export default {
  name: 'AposContextMenu',
  components: {
    AposContextMenuItem,
    AposContextMenuTip,
    AposButton
  },
  mixins: [AposHelpers],
  props: {
    menu: {
      type: Array,
      default: null
    },
    modifiers: {
      type: Array,
      default() {
        return [];
      }
    },
    button: {
      type: Object,
      default() {
        return {
          label: 'Context Menu Label',
          iconOnly: true,
          icon: 'label-icon',
          type: 'outline'
        };
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
      tipWidth: '27'
    };
  },
  computed: {
    uid() {
      return this.generateId();
    },
    classList() {
      const classes = [];
      classes.push(`apos-context-menu--origin-${this.origin}`);
      classes.push(`apos-context-menu--tip-alignment-${this.tipAlignment}`);
      if (this.modifiers) {
        this.modifiers.forEach((m) => {
          classes.push(`apos-context-menu--${m}`);
        });
      }
      if (this.menu) {
        classes.push('apos-context-menu--unpadded');
      }
      return classes.join(' ');
    },
    buttonState() {
      return this.open ? ['active'] : null;
    },
    localCssVar() {
      // Set the CSS custom property for this specific context menu.
      return { '--tip-width': `${this.tipWidth}px` };
    }
  },
  watch: {
    open(newVal, oldVal) {
      this.$emit('open', newVal);
    }
  },
  methods: {
    bind() {
      document.addEventListener('click', this.clicks);
      document.addEventListener('keydown', this.keyboard);
    },
    unbind() {
      document.removeEventListener('click', this.clicks);
      document.removeEventListener('keydown', this.keyboard);
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
      if (!event.target.closest(`[data-apos-context-menu="${this.uid}"]`)) {
        this.open = false;
        this.unbind();
      }
    },
    buttonClicked() {
      this.open = !this.open;
      if (this.open) {
        this.bind();
      } else {
        this.unbind();
      }
    },
    menuItemClicked(action) {
      this.$emit('item-clicked', action);
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';

  .apos-context-menu {
    position: relative;
    display: inline-block;
  }

  .apos-context-menu--unpadded .apos-context-menu__pane  {
    padding: 0;
  }

  .apos-context-menu__popup {
    z-index: 2;
    position: absolute;
    display: inline-block;
    color: var(--a-text-primary);
    opacity: 0;
    pointer-events: none;
    transform: scale(0.98) translateY(-8px);
    transform-origin: top left;
    transition: scale 0.15s ease, translateY 0.15s ease;

    $popup-vert-offset: 16px;
    .apos-context-menu--origin-above & {
      bottom: calc(100% + #{$popup-vert-offset});
      // bottom: 0;
    }
    .apos-context-menu--origin-below & {
      top: calc(100% + #{$popup-vert-offset});
    }
    .apos-context-menu--tip-alignment-center & {
      left: 50%;
      transform: translatex(-50%);
    }
    // We're positioning with the popup-tip in the center of the parent,
    // so we adjust based on the tip's width and the tip offset.
    .apos-context-menu--tip-alignment-left & {
      left: 50%;
      transform: translatex(calc(#{-$menuTipOffset} - var(--tip-width)/2));
    }
    .apos-context-menu--tip-alignment-right & {
      right: 50%;
      transform: translatex(calc(#{$menuTipOffset} + var(--tip-width)/2));
    }
  }

  .apos-context-menu__popup.is-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .apos-context-menu__inner {
    border-radius: var(--a-border-radius);
    box-shadow: var(--a-box-shadow);
    background-color: var(--a-background-primary);
    border: 1px solid var(--a-base-8);
  }

  .apos-context-menu__pane {
    padding: 20px;
    font-size: map-get($font-sizes, default);
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
</style>
