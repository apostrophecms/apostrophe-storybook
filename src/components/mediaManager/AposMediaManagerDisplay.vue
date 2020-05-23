<template>
  <div class="apos-media-manager-display">
    <div class="apos-media-manager-display__grid">
      <div class="apos-media-manager-display__cell apos-media-manager-display__cell--media-drop">
        media here
      </div>
      <div class="apos-media-manager-display__cell" v-for="item in media" :key="generateId(item.id)"
        :class="{'is-selected': !!item.checkbox.value.data.length}"
      >
        <div class="apos-media-manager-display__checkbox">
          <AposCheckbox 
            :field="item.checkbox.field" 
            :value="item.checkbox.value" 
            :status="item.checkbox.status" 
            :choice="item.checkbox.choice"
          />
        </div>
        <img class="apos-media-manager-display__media" :src="item.path" alt="">
        <button class="apos-media-manager-display__select"
          @click.exact="$emit('select', item.id)"
          @click.shift="$emit('selectSeries', item.id)"
          @click.meta="$emit('selectAnother', item.id)"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
import AposButton from './../button/AposButton.vue';
import AposCheckbox from './../inputCheckbox/AposCheckbox.vue';
import AposHelpers from '../../mixins/AposHelpersMixin';

export default {
  mixins: [ AposHelpers ],
  components: {
    AposCheckbox
  },
  props: {
    media: {
      type: Array
    }
  },

  data() {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-media-manager-display__grid {
    display: grid;
    grid-template-columns: repeat(7, 12.22%);
    grid-template-rows: repeat(3, auto);
    gap: 2.4% 2.4%;
  }

  .apos-media-manager-display__cell {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    @include apos-transition();

    &:before {
      content: "";
      display: inline-block;
      width: 1px;
      height: 0;
      padding-bottom: calc(100% / (1/1));
    }
  }

  .apos-media-manager-display__checkbox {
    z-index: 2;
    position: absolute;
    top: -6px;
    left: -6px;
    opacity: 0;
    @include apos-transition();
  }

  .apos-media-manager-display__cell:hover .apos-media-manager-display__checkbox,
  .apos-media-manager-display__cell.is-selected .apos-media-manager-display__checkbox {
    opacity: 1;
  }

  .apos-media-manager-display__media {
    z-index: 0;
    position: relative;
    max-width: 100%;
    max-height: 100%;
    pointer-events: none;
  }

  .apos-media-manager-display__select {
    @include apos-button-reset();
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 1px solid var(--a-base-7);
  }

  .apos-media-manager-display__cell.is-selected .apos-media-manager-display__select,
  .apos-media-manager-display__select:hover,
  .apos-media-manager-display__select:focus,
  .apos-media-manager-display__checkbox:hover ~ .apos-media-manager-display__select {
    border-color: var(--a-primary);
    outline: 1px solid var(--a-primary);
  }

  .apos-media-manager-display__cell--media-drop {
    border: 1px dashed var(--a-base-3);
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: span 2;
  }
</style>
