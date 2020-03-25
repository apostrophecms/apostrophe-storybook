<template>
  <div role="alert" :class="classList">
    <span class="apos-notification__indicator">
      <component 
        :decorative=true 
        :size="icon ? 16 : 12" 
        v-bind:is="iconComponent"
      ></component>
    </span>
    <span class="apos-notification__label">{{ label }}</span>
    <button class="apos-notification__button">
      <Close class="apos-notification__close-icon" title="Close Notification" :size="14" />
    </button>
  </div>
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
    }
  },
  computed: {
    classList() {
      const classes = ['apos-notification'];
      if (this.type) {
        classes.push(`apos-notification--${this.type}`);
      }

      return classes.join(' ');
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
  @import '../../scss/_mixins';
  .apos-notification {
    display: inline-flex;
    position: relative;
    align-items: center;
    min-width: 200px;
    max-width: 400px;
    color: var(--a-text-primary);
    background: var(--a-background);
    border: 1px solid var(--a-base-8);
    border-radius: var(--a-border-radius);
    padding: 15px 35px 15px 15px;
    box-shadow: var(--a-box-shadow);
  }

  .apos-notification__indicator {
    position: relative;
    top: 1px;
    margin-right: 15px;
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
    position: absolute;
    right: 0;
    align-items: center;
    border: none;
    padding: 20px 10px;
    background-color: transparent;
    color: var(--a-base-4);
    @include apos-transition(all);
    &:hover {
      cursor: pointer;
      color: var(--a-primary-text);
    }
  }

  .apos-notification__close-icon {
    height: 12px;
  }

  .apos-notification__label {
    font-size: map-get($font-sizes, default);
    letter-spacing: 0.75px;
    color: var(--a-text-primary);
  }
</style>
