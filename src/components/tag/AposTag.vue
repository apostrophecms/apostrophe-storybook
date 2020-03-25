<template>
  <div class="apos-tag">
    <button @click="click" class="apos-tag-button">
      <Close class="apos-tag__close-icon" title="Remove Tag" :size="10" />
    </button>
    {{ label }}
  </div>
</template>

<script>
import Close from 'vue-material-design-icons/Close.vue';
export default {
  props: {
    label: String,
    slug: String
  },
  components: { Close },
  methods: {
    click() {
      this.$emit('click', this.slug)
    }
  }
}
</script>

<style lang="scss">
@import '../../scss/_mixins';
.apos-tag {
  display: inline-flex;
  padding: 6px 12px;
  border-radius: var(--a-border-radius);
  background-color: var(--a-base-1);
  font-size: map-get($font-sizes, default);
  letter-spacing: 0.5px;
  color: var(--a-base-8);
  align-items: center;
  justify-content: center;
}

.apos-tag__close-icon {
  position: relative;
  top: 1px;
  margin-right: 5px;
  &:hover {
    cursor: pointer;
  }
}

.apos-tag-button {
  @include apos-button-reset();
}

.apos-tag-list {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.apos-tag-list .apos-tag {
  margin-right: 1rem;
}
</style>
