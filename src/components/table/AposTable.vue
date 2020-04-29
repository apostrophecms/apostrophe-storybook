<template>
  <table class="apos-table">  
    <tbody>
      <tr>
        <AposTableHeader v-for="header in headers" :header="header" v-bind:key="header.label" />
      </tr>
      <AposTableRow v-for="row in rows" :row="row" v-bind:key="row.title" />
    </tbody>
  </table>  
</template>

<script>
import AposTableRow from './AposTableRow.vue';
import AposTableHeader from './AposTableHeader.vue';
export default {
  components: { 
    AposTableRow,
    AposTableHeader
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      // active: []
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
  @import '../../scss/_mixins';
  .apos-table {
    width: 100%; 
    font-size: map-get($font-sizes, default);
    border-collapse: collapse;
  }
</style>
