<template>
  <div>
    <li v-for="row in compFields" v-bind:key="row.id">
      <AposCheckboxInput :field="row.field" :value="row.value" :status="row.status" />
    </li>
    <button @click="toggle">toggle all</button>
  </div>
</template>

<script>
import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';

export default {
  components: {
    AposCheckboxInput,
  },
  props: {
    rows: {
      type: Array,
      required: true
    }
  },
  watch: {
    on(newVal, oldVal) {
      if (newVal) {
        for (const key in this.myRows) {
          this.myRows[key].value.data = ['checked']
        }
      } else {
        for (const key in this.myRows) {
          this.myRows[key].value.data = []
        }
      }
    }
  },
  data() {
    return {
      on: false,
      checked: [],
      myRows: this.rows,
      selectAllField: {
        status: {},
        value: { data: [] },
        field: {
          name: 'selectAll',
          type: 'checkbox',
          choices: [ { value: 'checked' } ]
        } 
      }
    }
  },
  methods: {
    toggle() {
      if (this.on) {
        this.on = false;
      } else {
        this.on = true;
      }
    }
  },
  computed: {
    compFields() {
      const fields = {};
      this.rows.forEach((row) => {
        fields[row.id] = {
          status: {},
          value: { data: [] },
          field: {
            name: row.id,
            type: 'checkbox',
            choices: [ { value: 'checked' } ]
          }
        }
      });
      return fields;
    }
  }

}
</script>

<style lang="scss" scoped>
  @import '../../scss/_mixins';
  @import '../../scss/_inputs';

</style>
