<template>
  <tr class="apos-table__row" :class="{ 'is-selected': isChecked }">
    <td v-if="selectable" class="apos-table__cell apos-table__cell--checkbox">
      <!-- TODO: Add in Checkbox Component -->
      <input type="checkbox" name="" value="" />
    </td>
    <AposTableCell v-for="(cell, index) in row" :key="index" :cell="cell" />
  </tr>
</template>

<script>
import AposTableCell from './AposTableCell';

export default {
  name: 'AposTableRow',
  components: {
    AposTableCell
  },
  props: {
    selectable: Boolean,
    row: Array,
    id: Number
  },
  computed: {
    computedId() {
      return `${this.$props.row[0].name}-${this.$props.id}`;
    },
    label() {
      return `Toggle selection of ${this.$props.row[0].value}`;
    },
    isChecked() {
      console.log(this.$props.checked);
    }
  }
};
</script>

<style lang="scss">
.apos-table__cell--checkbox {
  width: 16px;
}
</style>
