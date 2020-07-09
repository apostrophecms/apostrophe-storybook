<template>
  <td class="apos-table__cell" :class="`apos-table__cell--${cell.name}`">
    <!--
      Probably could do something like :is here to dynamically get
      templates instead of checking what type of cell it is.

      That would allow easier customization of individual cells.
    -->
    <AposTableCellLink v-if="cell.name === 'url'" :cell="cell" />
    <AposTableCellPublished
      v-else-if="cell.name === 'published'"
      :cell="cell"
    />
    <AposTableCellEdit v-else-if="cell.name === 'edit'" :cell="cell" />
    <p
      v-else
      class="apos-table__cell-field"
      :class="`apos-table__cell-field--${cell.name}`"
    >
      {{ cell.value }}
    </p>
  </td>
</template>

<script>
import AposTableCellLink from './AposTableCellLink';
import AposTableCellPublished from './AposTableCellPublished';
import AposTableCellEdit from './AposTableCellEdit';

export default {
  name: 'AposTableCell',
  components: {
    AposTableCellLink,
    AposTableCellPublished,
    AposTableCellEdit
  },
  props: {
    cell: Object
  }
};
</script>

<style lang="scss"></style>
