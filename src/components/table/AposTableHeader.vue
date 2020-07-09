<template>
  <thead class="apos-table__head">
    <tr class="apos-table__head-row">
      <th v-if="selectable" colspan="1" />
      <th
        class="apos-table__header"
        v-for="(column, index) in columns"
        :key="column.name"
        scope="col"
      >
        <component
          :is="getEl(column.action)"
          @click="sort(column.action)"
          class="apos-table__header-label"
        >
          <component
            v-if="column.icon"
            :size="getIconSize(column.icon)"
            class="apos-table__header-icon"
            :is="icons[column.icon]"
          />
          {{ column.label }}
        </component>
      </th>
    </tr>
  </thead>
</template>

<script>
export default {
  name: 'AposTableHead',
  props: {
    selectable: Boolean,
    columns: Array
  },
  computed: {
    hasOffset() {
      return this.$props.columnOffset > 0;
    },
    icons() {
      const icons = {};
      this.$props.columns.forEach(({ icon }) => {
        if (icon) {
          icons[icon] = `${icon.toLowerCase()}-icon`;
        }
      });
      return icons;
    }
  },
  methods: {
    getEl(action) {
      if (action) {
        return 'button';
      } else {
        return 'span';
      }
    },
    getIconSize(icon) {
      if (icon === 'Circle') {
        return 8;
      } else {
        return 10;
      }
    },
    getColumnWidth(index) {
      return index === 0 && this.$props.columnWidth
        ? this.$props.columnWidth
        : 1;
    }
  }
};
</script>

<style lang="scss"></style>
