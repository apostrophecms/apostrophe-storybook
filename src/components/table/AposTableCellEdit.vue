<template>
  <a class="apos-table__edit" :href="cell.value">
    <PencilIcon :size="12" />
  </a>
</template>

<script>
import PencilIcon from 'vue-material-design-icons/Pencil.vue';

export default {
  name: 'AposTableCellLink',
  components: {
    PencilIcon
  },
  props: {
    cell: Object
  }
};
</script>

<style lang="scss">
.apos-table__edit {
  color: var(--a-base-1);
}
</style>
