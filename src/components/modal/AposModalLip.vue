<template>
 <div class="apos-modal-lip" ref="lip">
    <div class="apos-modal-lip__shadow">
      <svg width="406px" height="56px" viewBox="0 0 406 56" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <title>Shadow</title>
        <defs>
          <rect id="shadow-path-1" x="0" y="0" width="406" height="56"></rect>
          <rect id="shadow-path-3" x="-13" y="20" width="432" height="83"></rect>
          <filter x="-6.2%" y="-28.9%" width="112.5%" height="165.1%" filterUnits="objectBoundingBox" id="shadow-filter-4">
            <feMorphology radius="3" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"></feMorphology>
            <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="6.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"></feComposite>
            <feColorMatrix :values="shadow" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
          </filter>
        </defs>
        <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g transform="translate(0.000000, -1.000000)">
            <mask id="shadow-mask-2" fill="white">
              <use xlink:href="#shadow-path-1"></use>
            </mask>
            <g id="Mask"></g>
            <g fill-rule="nonzero" mask="url(#mask-2)">
              <use fill="black" fill-opacity="1" filter="url(#shadow-filter-4)" xlink:href="#shadow-path-3"></use>
              <rect stroke-width="1" stroke-linejoin="square" fill="transparent" fill-rule="evenodd" x="-12.5" y="20.5" width="431" height="82"></rect>
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="apos-modal-lip__content">
      <slot>Put something in the lip</slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'AposModalLip',
  props: {
    shadow: {
      type: String,
      default: '0 0 0 0 0   0 0 0 0 0   0 0 0 0 0   0 0 0 0.0812386775 0' // yikes
    },
    // watched to recalc parents bottom padding
    refresh: {
      type: String,
      default: 'hello'
    }
  },
  watch: {
    refresh(newVal) {
      this.padParent();
    }
  },
  methods: {
    padParent() {
      this.$parent.$el.style.marginBottom = `${this.$refs.lip.offsetHeight + 10}px`;
    }
  },
  mounted() {
    this.padParent();
  }
}
</script>

<style lang="scss" scoped>
  .apos-modal-lip {
    position: fixed;
    bottom: 0;
    box-sizing: border-box;
    transform: translateX(-20px);
    width: 18%;
  }

  .apos-modal-lip__shadow {
    position: absolute;
    max-width: 100%;
    top: -20px;
    overflow-x: hidden;
  }

  .apos-modal-lip__content {
    padding: 20px;
    background-color: var(--a-base-10);
  }

</style>
