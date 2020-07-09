<template>
  <p
    class="apos-table__cell-field"
    :class="`apos-table__cell-field--${label.toLowerCase()}`"
  >
    <CircleIcon :size="10" /> {{ label }}
  </p>
</template>

<script>
import CircleIcon from 'vue-material-design-icons/Circle.vue';

export default {
  name: 'AposTableCellPublished',
  components: {
    CircleIcon
  },
  props: {
    cell: Object
  },
  computed: {
    label() {
      return this.$props.cell.value === true ? 'Published' : 'Unpublished';
    }
  }
};
</script>

<style lang="scss">
.apos-table__cell-field--published {
  .material-design-icon__svg {
    color: var(--a-success);
  }
}

.apos-table__cell-field--unpublished {
  color: var(--a-base-4);
}
</style>
