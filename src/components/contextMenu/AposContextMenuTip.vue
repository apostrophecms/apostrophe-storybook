<template>
  <!-- Disabling since the SVG is mostly not active vue template code. -->
  <!-- eslint-disable vue/max-attributes-per-line -->
  <!-- NOTE: the `width` att -->
  <svg
    :class="[alignmentModifier, originModifier]"
    class="apos-context-menu__tip" :width="width" :height="height" :viewBox="`0 0 ${width} ${height}`" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
      <g transform="translate(-0.375000, 1.312500)">
        <path class="apos-context-menu__tip-outline" d="M17.2842712,1.46446609 L25.748,9.928 L1.749,9.928 L10.2132034,1.46446609 C12.1658249,-0.488155365 15.3316498,-0.488155365 17.2842712,1.46446609 Z" stroke="var(--a-base-8)" />
        <path class="apos-context-menu__tip-background" d="M17.0029602,1.84623992 C15.3903198,0.179595947 12.5749711,0.0148310371 10.7918701,1.61499023 C9.60313614,2.68176303 9.52086075,2.75884626 10.5450439,1.84623992 L0.815307617,11.4361572 L26.6676025,11.4361572 L17.0029602,1.84623992 Z" fill="var(--a-background-primary)" fill-rule="nonzero" />
      </g>
    </g>
  </svg>
  <!-- eslint-enable vue/max-attributes-per-line -->
</template>

<script>
export default {
  name: 'AposContextMenuTip',
  props: {
    align: {
      type: String,
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: '27px'
    }
  },
  computed: {
    height() {
      return this.width * 0.4815;
    },
    alignmentModifier () {
      return `apos-context-menu__tip--alignment-${this.align}`;
    },
    originModifier () {
      return `apos-context-menu__tip--origin-${this.origin}`;
    }
  }
};
</script>

<style lang="scss">
  .apos-context-menu__tip {
    position: absolute;
  }

  .apos-context-menu__tip--alignment-left {
    left: $menuTipOffset;
  }

  .apos-context-menu__tip--alignment-center {
    right: 0;
    left: 0;
    margin-left: auto;
    margin-right: auto;
  }

  .apos-context-menu__tip--alignment-right {
    right: $menuTipOffset;
  }

  .apos-context-menu__tip--origin-below {
    top: -11px;
  }

  .apos-context-menu__tip--origin-above {
    bottom: -11px;
    transform: rotate(180deg);
  }
</style>
