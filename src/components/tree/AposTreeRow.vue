<template>
  <li class="apos-tree--row">
    <div class="apos-tree--row-data">
      <component
        :is="cell.name === 'url' ? 'a' : 'span'"
        :href="cell.name === 'url' ? cell.value : false"
        :target="cell.name === 'url' ? '_blank' : false"
        v-for="(cell, index) in cells"
        :key="`${index}-${cell.name}`"
        :class="getCellClasses(cell)"
        :data-col="cell.name"
        :style="getCellStyles(cell.name, index)"
      >
        <component
          v-if="cell.icon" :is="cell.icon"
          class="apos-tree__cell__icon"
        />
        <span v-show="!cell.iconOnly">{{ cell.value }}</span>
      </component>
    </div>
    <ol class="apos-tree--list" v-if="row.children">
      <AposTreeRow
        v-for="(child, index) in row.children"
        :key="index"
        :row="child"
        :col-widths="colWidths"
        :headers="headers"
        :level="level + 1"
      />
    </ol>
  </li>
</template>

<script>
export default {
  name: 'AposTreeRow',
  props: {
    headers: {
      type: Array,
      required: true
    },
    row: {
      type: Object,
      required: true
    },
    colWidths: {
      type: Object,
      default () {
        return {};
      }
    },
    level: {
      type: Number,
      required: true
    }
  },
  computed: {
    isOpen() {
      return true;
    },
    cells() {
      const cellArray = [];
      this.headers.forEach(col => {
        cellArray.push({
          name: col.name,
          value: this.row[col.name],
          icon: col.icon,
          iconOnly: col.iconOnly
        });
      });

      return cellArray;
    }
  },
  methods: {
    getCellClasses(cell) {
      const classes = ['apos-tree__cell'];
      classes.push(`apos-tree__cell--${cell.name}`);

      if (cell.iconOnly) {
        classes.push('apos-tree__cell--icon');
      }

      // TODO: How does this work for i18n?
      if (cell.name === 'published' && cell.value === 'Unpublished') {
        classes.push('apos-tree__cell--disabled');
      }

      return classes;
    },
    getCellStyles(name, index) {
      const styles = {};
      if (this.colWidths && this.colWidths[name]) {
        styles.width = `${this.colWidths[name]}px`;
      }
      if (index === 0) {
        styles.paddingLeft = `${24 * this.level}px`
      }
      return styles;
    }
  }
};
</script>

<style lang="scss">
.apos-tree__cell--published {
  .material-design-icon__svg {
    fill: var(--a-success);
  }

  &.apos-tree__cell--disabled {
    color: var(--a-base-3);

    .material-design-icon__svg {
      fill: var(--a-base-3);
    }
  }
}
</style>
