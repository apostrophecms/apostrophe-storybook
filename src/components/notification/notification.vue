<template>
  <component 
    :is="clickable ? 'button' : 'div'" 
    :class="modifierClass" 
    :role="clickable ? false : 'alert'"
    class="apos-notification"
  >
    <span class="apos-notification__indicator">
      <component 
        :decorative=true 
        :size="icon ? 16 : 12" 
        v-bind:is="iconComponent"
      ></component>
    </span>
    <span class="apos-notification__label">{{ label }}</span>
    <component 
      :is="clickable ? 'span' : 'button'"
      class="apos-notification__button"
    >
      <Close title="Close Notification" :size="14" />
    </component>
  </component>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
export default {
  name: 'AposNotification',
  components: { Close },
  props: {
    type: String,
    icon: String,
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
  },
  computed: {
    modifierClass() {
      const modifiers = [];
      if (this.type) {
        modifiers.push(`apos-notification--${this.type}`);
      }
      if (modifiers.length > 0) {
        return modifiers.join(' ');
      } else {
        return false;
      }
    },
    iconComponent () {
      if (this.icon) {
        return () => import(`vue-material-design-icons/${this.icon}.vue`);
      } else {
        return () => import(`vue-material-design-icons/Circle.vue`);
      }
    }
  }
}
</script>

<style lang="scss">
  .apos-notification {
    display: inline-flex;
    align-items: center;
    color: var(--a-text-primary);
    background: var(--a-background);
    border: 1px solid var(--a-base-8);
    border-radius: var(--a-border-radius);
    padding: 15px 20px;
    box-shadow: var(--a-box-shadow);
  }

  .apos-notification__indicator {
    position: relative;
    top: 1px;
    display: flex;
    margin-right: 10px;
    color: var(--a-base-8);
  }

  .apos-notification--warning .apos-notification__indicator {
    color: var(--a-warning);
  }

  .apos-notification--success .apos-notification__indicator {
    color: var(--a-success);
  }

  .apos-notification--danger .apos-notification__indicator {
    color: var(--a-danger);
  }

  .apos-notification__button {
    display: flex;
    align-items: center;
    border: none;
    padding: 0;
    background-color: transparent;
    margin-left: 10px;
    color: var(--a-primary-text);

    .material-design-icon {
      height: 12px;
    }
  }

  .apos-notification__label {
    font-size: map-get($font-sizes, default);
    letter-spacing: 0.75px;
    color: var(--a-text-primary);
  }
</style>
