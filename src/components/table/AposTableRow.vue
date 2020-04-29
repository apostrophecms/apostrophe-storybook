<template>
  <tr class="apos-table__row">
    <td class="apos-table__cell" v-for="(value, key) in row" v-bind:key="key">
      {{ value }}
    </td>
  </tr>
</template>

<script>
import Tag from 'vue-material-design-icons/Label.vue';
import Close from 'vue-material-design-icons/Close.vue';
export default {
  props: {
    row: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      active: false
    }
  },
  components: { 
    Tag,
    Close
  },
  methods: {
    click(tag) {
      this.active = !this.active;
      this.$emit('click', tag.slug)
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/_mixins';
  .apos-table__cell {
    padding: 10px 5px;
    border-bottom: 1px solid var(--a-base-8);
  }
</style>
