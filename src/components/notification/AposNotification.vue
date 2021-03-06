<template>
  <div role="alert" :class="classList">
    <span class="apos-notification__indicator" v-if="type !== 'none'">
      <component
        :is="iconComponent"
        :decorative="true"
        :size="icon ? 16 : 12"
      />
    </span>
    <span class="apos-notification__label">
      {{ label }}
    </span>
    <div
      class="apos-notification__progress"
      v-if="progress && progress.current"
    >
      <div class="apos-notification__progress-bar">
        <div
          class="apos-notification__progress-now" role="progressbar"
          :aria-valuenow="progress.current" :style="`width: ${progressPercent}`"
          aria-valuemin="0" :aria-valuemax="100"
        />
      </div>
      <span class="apos-notification__progress-value">
        {{ progressPercent }}
      </span>
    </div>
    <button @click="close" class="apos-notification__button">
      <Close
        class="apos-notification__close-icon"
        title="Close Notification"
        :size="14"
      />
    </button>
  </div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';

export default {
  name: 'AposNotification',
  components: { Close },
  props: {
    type: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: null
    },
    label: {
      default: 'Set a label',
      type: String
    },
    progress: {
      type: Object,
      default: null
    }
  },
  computed: {
    classList() {
      const classes = ['apos-notification'];
      if (this.type && this.type !== 'none') {
        classes.push(`apos-notification--${this.type}`);
      }

      if (this.progress && this.progress.current) {
        classes.push('apos-notification--progress');
      }

      return classes.join(' ');
    },
    iconComponent () {
      if (this.icon) {
        return this.icon;
      } else {
        return 'circle-icon';
      }
    },
    progressPercent () {
      return `${Math.floor((this.progress.current / 100) * 100)}%`;
    }
  },
  methods: {
    close () {
      this.$emit('close', this);
    }
  }
};
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

  .apos-notification__label,
  .apos-notification__progress-value {
    font-size: map-get($font-sizes, default);
  }

  .apos-notification__label {
    letter-spacing: 0.75px;
    color: var(--a-text-primary);
  }

  .apos-notification__progress {
    display: flex;
    align-items: center;
    flex-shrink: 0;
  }

  .apos-notification__progress-bar {
    width: 70px;
    height: 4px;
    margin-left: 20px;
    // BG color consistent between themes.
    background-color: #2c354d;
    border-width: 0;

  }
  .apos-notification__progress-now {
    height: 100%;
    background-color: var(--a-brand-green);
    background-image: linear-gradient(46deg, var(--a-brand-gold) 0%, var(--a-brand-red) 26%, var(--a-brand-magenta) 47%, var(--a-brand-blue) 76%, var(--a-brand-green) 100%);
    transition: width 0.2s ease-out;
  }

  .apos-notification__progress-value {
    margin-left: 20px;
  }
</style>
