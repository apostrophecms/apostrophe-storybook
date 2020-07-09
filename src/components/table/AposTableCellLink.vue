<template>
  <a class="apos-table__link" :href="cell.value">
    <LinkIcon :size="12" />
  </a>
</template>

<script>
import LinkIcon from 'vue-material-design-icons/LinkVariant.vue';

export default {
  name: 'AposTableCellLink',
  components: {
    LinkIcon
  },
  props: {
    cell: Object
  }
};
</script>

<style lang="scss"></style>
