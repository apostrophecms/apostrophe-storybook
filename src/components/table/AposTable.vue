<template>
  <table class="apos-table">  
    <tbody>
      <tr>
        <th class="apos-table__header">
          <label class="apos-choice-label" for="aposSelectAll">
            <input type="checkbox" class="apos-sr-only apos-input--choice apos-input--checkbox"
              name="aposSelectAll"
              ref="input"
              id="aposSelectAll" aria-label="Toggle Select All Rows"
              tabindex="0"
              @input.stop="selectAll"
              v-model="selectAllValue"
            />
            <span class="apos-input-indicator" aria-hidden="true">
              <component :is="`${
                  selectAllIndeterminate ? 'MinusIcon' : 'CheckBoldIcon'
                }`"
                :size="10" v-if="selectAllValue"></component>
            </span>
            <span class="apos-sr-only apos-choice-label-text">
              Toggle Select All Rows
            </span>
          </label>
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
        v-on:checked="checkHandler"
        :ref="row.id"
      />
    </tbody>
  </table>  
</template>

<script>
import AposTableRow from './AposTableRow.vue';
import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";

export default {
  components: {
    AposTableRow,
    AposCheckboxInput,
    CheckBoldIcon,
    MinusIcon
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
      selectAllValue: false,
      selectAllIndeterminate: false,
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
  watch: {

  },
  methods: {
    selectAll(event) {
      // Must interrupt the checked/unchecked input cycle here to use indeterminate state,
      // which is technically checked and dependent on UI's state.
      // Also, instead of directly mutating the `checked` array here, fire a state change
      // from within the child checkbox. Make the appropriate mutations when those events bubble back up
      event.preventDefault();

      // select all
      if (!this.checked.length) {
        this.rows.forEach((row) => {
          this.$refs[row.id][0].check();
        });
        return;
      }
      
      // unselect all
      if (this.checked.length <= this.rows.length) {
        this.rows.forEach((row) => {
          this.$refs[row.id][0].clear();
        });
      }
    },

    // handle state via the checkbox input event
    // all state changes are 'heard' through here, even if we prompt them from elswhere
    checkHandler(id, isChecked) {
      if (isChecked && !this.checked.includes(id)) {
        this.checked.push(id);
      }
      if (!isChecked && this.checked.includes(id)) {
        this.checked = this.checked.filter(rowId => rowId !== id);
      }

      if (!this.checked.length) {
        this.allChecked = false;
        this.someChecked = false;
        this.selectAllValue = false;
        this.selectAllIndeterminate = false;
        return;
      }

      if (this.checked.length === this.rows.length) {
        this.allChecked = true;
        this.someChecked = false;
        this.selectAllValue = true;
        this.selectAllIndeterminate = false;
        return;
      }

      if (this.checked.length <= this.rows.length) {
        this.allChecked = false;
        this.someChecked = true;
        this.selectAllValue = true;
        this.selectAllIndeterminate = true;
        return;
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

<style lang="scss" scoped>
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

  .apos-table /deep/ .apos-choice-label {
    margin-top: 0;
  }
</style>
