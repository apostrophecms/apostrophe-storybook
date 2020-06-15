<template>
  <div class="apos-media-manager-display">
    <div class="apos-media-manager-display__grid">
      <button class="apos-media-manager-display__cell apos-media-manager-display__media-drop">
        <div class="apos-media-manager-display__media-drop__inner">
          <div class="apos-media-manager-display__media-drop__icon">
            <CloudUpload :size="64" />
          </div>
          <div class="apos-media-manager-display__media-drop__instructions">
            <p class="apos-media-manager-display__media-drop__primary">
              Drop new media here
            </p>
            <p class="apos-media-manager-display__media-drop__secondary">
              Or click to open the file explorer
            </p>
          </div>
        </div>
      </button>
      <div
        class="apos-media-manager-display__cell" v-for="item in media"
        :key="generateId(item.id)"
        :class="{'is-selected': !!item.checkbox.value.data.length}"
      >
        <div class="apos-media-manager-display__checkbox">
          <AposCheckbox
            tabindex="-1"
            :field="item.checkbox.field"
            :value="item.checkbox.value"
            :status="item.checkbox.status"
            :choice="item.checkbox.choice"
          />
        </div>
        <button
          class="apos-media-manager-display__select"
          @click.exact="$emit('select', item.id)"
          @click.shift="$emit('select-series', item.id)"
          @click.meta="$emit('select-another', item.id)"
        >
          <!-- TODO make sure using TITLE is the correct alt tag application here. -->
          <img class="apos-media-manager-display__media" :src="item.path" :alt="item.title">
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import AposCheckbox from './../inputCheckbox/AposCheckbox.vue';
import AposHelpers from '../../mixins/AposHelpersMixin';
import CloudUpload from "vue-material-design-icons/CloudUpload.vue";

export default {
  components: {
    AposCheckbox,
    CloudUpload
  },
  mixins: [ AposHelpers ],
  props: {
    media: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  .apos-media-manager-display__grid {
    display: grid;
    grid-auto-rows: 140px;
    grid-template-columns: repeat(5, 17.1%);
    gap: 2.4% 2.4%;

    @include media-up(lap) {
      grid-template-columns: repeat(7, 12.22%);
      gap: 2.4% 2.4%;
    }
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

    &:hover,
    &.is-selected,
    &:focus {
      .apos-media-manager-display__media {
        opacity: 1;
      }
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
    max-width: 100%;
    max-height: 100%;
    opacity: 0.85;
    @include apos-transition();
  }

  .apos-media-manager-display__select {
    @include apos-button-reset();
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid var(--a-base-7);
    @include apos-transition();
    &:active + .apos-media-manager-display__checkbox {
      opacity: 1 !important;
    }
  }

  .apos-media-manager-display__cell.is-selected .apos-media-manager-display__select,
  .apos-media-manager-display__select:hover,
  .apos-media-manager-display__select:focus,
  .apos-media-manager-display__checkbox:hover ~ .apos-media-manager-display__select {
    border-color: var(--a-primary);
    outline: 1px solid var(--a-primary);
    box-shadow: 0 0px 10px 1px var(--a-base-7);
  }

  .apos-media-manager-display__media-drop {
    @include apos-button-reset();
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px dashed var(--a-base-3);
    grid-column-start: 1;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: span 2;
    @include apos-transition();
    &:hover, &:active, &:focus {
      border: 2px dashed var(--a-primary);
      box-shadow: 0 0px 10px -4px var(--a-primary-button-active);
      .apos-media-manager-display__media-drop__icon {
        color: var(--a-primary);
        filter: drop-shadow(0px 0px 5px var(--a-primary-50));
        transform: translateY(-2px);
      }
    }
    &:active, &:focus {
      outline: 1px solid var(--a-primary);
    }
  }

  .apos-media-manager-display__media-drop__inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .apos-media-manager-display__media-drop__icon {
    color: var(--a-base-5);
    height: 55px;
    margin-bottom: 5px;
    @include apos-transition();
  }

  .apos-media-manager-display__media-drop__instructions {
    padding: 0 5px;
  }

  .apos-media-manager-display__media-drop__primary,
  .apos-media-manager-display__media-drop__secondary {
    @include apos-p-reset();
    text-align: center;
  }
  .apos-media-manager-display__media-drop__primary {
    font-size: map-get($font-sizes, input-label);
    max-width: 100px;
    margin: 5px auto 10px;
  }
</style>
