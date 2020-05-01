<template>
  <table class="apos-table">  
    <tbody>
      <tr>
        <th v-if="!options.noSelectAll" class="apos-table__header">
          <AposCheckboxInput :field="checkboxes.all.field" 
            :value="checkboxes.all.value" :status="checkboxes.all.status"
          />
        </th>
        <th v-for="header in headers" scope="col" class="apos-table__header" v-bind:key="header.label">
          <component :is="getEl(header)" @click="click" class="apos-table__header-label">
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
        :checkbox="checkboxes[row.id]" v-for="row in rows" 
        :row="row" v-bind:key="row.id"
        v-on:input="updateCheckbox"
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
    options: {
      type: Object,
      default () {
        return {};
      }
    },
    headers: {
      type: Array,
      required: true
    },
    rows: {
      type: Array,
      required: true
    }
  },
  computed: {
    checkboxes() {
      const checkboxes = {};
      this.rows.forEach(row => {
        checkboxes[row.id] = newCheckbox(row.id)
      });
      checkboxes.all = newCheckbox('all');
      return checkboxes;
    }
  },
  data() {
    const icons = {};
    this.headers.forEach(h => {
      if (h.icon) {
        icons[h.icon] = () => import(`vue-material-design-icons/${h.icon}.vue`);
      }
    });
    return {
      icons
    }
  },
  mounted() {
    console.log(this.checkboxes);
  },
  methods: {
    updateCheckbox(id, value) {
      console.log(this.checkboxes[id]);
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
    newCheckbox() {

    },
    click(tag) {
      this.active = !this.active;
      this.$emit('click', tag.slug)
    }
  }
}

  function newCheckbox(name) {
    return {
      status: {},
      value: {
        data: null
      },
      field: {
        name,
        type: 'checkbox',
        choices: [ { value: 'true' } ]
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
