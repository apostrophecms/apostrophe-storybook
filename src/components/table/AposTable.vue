<template>
  <table class="apos-table">  
    <tbody>
      <tr>
        <th class="apos-table__header">
          <AposCheckboxInput :field="selectAllField.field" 
            :value="selectAllField.value" :status="selectAllField.status" 
            v-on:input="selectAll"
          />
        </th>
        <th v-for="header in headers" scope="col" class="apos-table__header" v-bind:key="header.label">
          <component :is="getEl(header)" @click="sort(header.action)" class="apos-table__header-label">
            <component 
              v-if="header.icon"
              :size="iconSize(header)"
              class="apos-table__header-icon"
              v-bind:is="icons[header.icon]"
            ></component>
            {{ header.label }}
          </component>
        </th>
      </tr>
      <AposTableRow :headers="headers" 
        v-for="row in rows" 
        :row="row" v-bind:key="row.id"
        :allChecked="allChecked"
        :someChecked="someChecked"
        v-on:checked="checkHandler"
      />
    </tbody>
  </table>  
</template>

<script>
import AposTableRow from './AposTableRow.vue';
import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';

export default {
  components: {
    AposTableRow,
    AposCheckboxInput
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
    // fetch all icons used in table headers
    const icons = {};
    this.headers.forEach(h => {
      if (h.icon) {
        icons[h.icon] = () => import(`vue-material-design-icons/${h.icon}.vue`);
      }
    });
    return {
      icons,
      allChecked: false,
      someChecked: false,
      checked: [],
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
  mounted() {
  },
  methods: {

    // handle state changes caused by checking and unchecking rows
    checkHandler(id, checked) {
      if (checked) {
        this.checked.push(id);
      }
      if (!checked) {
        this.checked = this.checked.filter(checkedId => checkedId !== id);
      }

      if (this.checked.length === 0) {
        this.selectAllField.value.data = [];
        this.someChecked = false;
        this.allChecked = false;
      }

      if (this.checked.length === this.rows.length) {
        this.allChecked = true;
        if (this.selectAllField.field.choices[0].indeterminate) {
          delete this.selectAllField.field.choices[0].indeterminate;
        }
        // don't know why i have to flush this out so hard
        this.selectAllField.value.data = [];
        this.selectAllField.value.data = ['checked'];
      }

      if (!checked && this.allChecked) {
        this.someChecked = true;
        this.allChecked = false;
        this.selectAllField.field.choices[0].indeterminate = true;
        // don't know why i have to flush this out so hard
        this.selectAllField.value.data = [];
        this.selectAllField.value.data = ['checked'];
      }
    },
    selectAll(response) {
      const checked = response.data.length > 0 ? true : false;
      const indeterminate = this.selectAllField.field.choices[0].indeterminate;

      // if selectAll is true but also indeterminate, bail out
      // the checkbox has to be checked to light up the indeterminate ui
      if (checked && indeterminate) {
        return;
      }

      // if selectAll is true but not indeterminate, clear to check all
      if (checked) {
        this.allChecked = true;
      }

      // if selectAll is false AND indeterminate, treat it as Unselect All
      // UX lifted from GMail
      if (!checked && indeterminate) {
        delete this.selectAllField.field.choices[0].indeterminate
        this.someChecked = false;
        return;
      }

      // if selectAll is false but not indeterminate we just toggled. reset the board
      if (!checked) {
        this.allChecked = false;
        this.someChecked = false;
      }
    },

    iconSize(header) {
      if (header.icon) {
        if (header.icon === 'Circle') {
          return 8;
        } else {
          return 10;
        }
      }
    },

    getEl(header) {
      if (header.action) {
        return 'button';
      } else {
        return 'span';
      }
    },

    sort(action) {
      this.$emit('sort', action);
    }
  }
}
</script>

<style lang="scss">
  @import '../../scss/_mixins';
  @import '../../scss/_inputs';
  .apos-table {
    width: 100%; 
    font-size: map-get($font-sizes, default);
    border-collapse: collapse;
  }

  .apos-table__header {
    text-align: left;
    margin-bottom: 10px;
    padding: 12.5px 4.5px;
    border-bottom: 1px solid var(--a-base-8);
    font-weight: 500;
    color: var(--a-base-3);
  }

  .apos-table__header-icon {
    @include apos-align-icon();
    margin-right: 5px;
  }

  .apos-table__header-label {
    @include apos-button-reset();
    display: flex;
    align-items: center;
  }
  span.apos-table__header-label:hover {
    cursor: auto;
  }
</style>
