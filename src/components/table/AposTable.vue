<template>
  <table class="apos-table">
    <tbody>
      <tr>
        <th class="apos-table__header">
          <AposCheckbox
            v-on:toggle="selectAll"
            id="aposSelectAll"
            :choice="selectAllChoice"
            :field="selectAllField.field"
            :value="selectAllValue"
            :status="selectAllField.status"
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
      <tr class="apos-table__row"
        v-for="row in rows"
        :key="row.id"
        :class="{'is-selected': false }"
      >
        <td class="apos-table__cell">
          <AposCheckbox
            :field="checkboxes[row.id].field"
            :value="checkboxes[row.id].value"
            :status="checkboxes[row.id].status"
            :choice="checkboxes[row.id].choice"
            v-on:toggle="toggleRowCheck($event, row.id)"
          />
        </td>
        <td class="apos-table__cell" v-for="header in headers" :key="row[header.name]">
          <a class="apos-table__link" v-if="header.name === 'url'" :href="row[header.name]">
            <LinkIcon :size="12" />
          </a>
          <p v-else class="apos-table__cell-field" :class="`apos-table__cell-field--${header.name}`">
            {{ row[header.name] }}
          </p>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import AposCheckbox from '../inputCheckbox/AposCheckbox.vue';
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";
import LinkIcon from "vue-material-design-icons/LinkVariant.vue";

export default {
  components: {
    AposCheckbox,
    CheckBoldIcon,
    MinusIcon,
    LinkIcon
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
        // TODO: Replaces this import usage. Maybe import icons we use globally.
        // https://medium.com/bitbond/vue-load-dynamic-components-based-on-a-string-variable-52f54860a0d
        icons[h.icon] = () => import(`vue-material-design-icons/${h.icon}.vue`);
      }
    });
    // prep row checkbox fields
    const checkboxes = {};
    this.rows.forEach((row) => {
      checkboxes[row.id] = {
        status: {},
        value: {
          data: []
        },
        choice: { value: 'checked' },
        field: {
          name: row.id,
          type: 'checkbox',
          hideLabel: true,
          label: `Toggle selection of ${row.title}`
        }
      }
    });
    return {
      icons,
      checkboxes,
      checked: [],
      selectAllField: {
        status: {},
        field: {
          name: 'selectAll',
          type: 'checkbox',
        }
      }
    }
  },
  computed: {
    selectAllValue() {
      return this.checked.length > 0 ? { data: ['checked'] } : { data: [] }
    },
    selectAllChoice() {
      const checkLen = this.checked.length;
      const rowLen = this.rows.length;
      return checkLen > 0 && checkLen !== rowLen ? {
         value: 'checked',
         indeterminate: true
        } : { value: 'checked' }
    }
  },
  methods: {
    toggleRowCheck(event, id) {
      if (this.checked.includes(id)) {
        this.checked = this.checked.filter(item => item !== id);
        this.checkboxes[id].value.data = [];
      } else {
        this.checked.push(id);
        this.checkboxes[id].value.data = ['checked'];
      }
    },
    selectAll(event) {
      if (!this.checked.length) {
        this.rows.forEach((row) => {
          this.toggleRowCheck('checked', row.id);
        });
        return;
      }

      if (this.checked.length <= this.rows.length) {
        this.checked.forEach((id) => {
          this.toggleRowCheck('checked', id);
        });
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

  .apos-table__cell,
  .apos-table__row {
    @include apos-transition();
  }
  .apos-table__cell {
    padding: 12.5px 4.5px;
    border-bottom: 1px solid var(--a-base-9);
  }

  .apos-table__link {
    color: var(--a-primary);
  }

  .apos-table__row:hover {
    box-shadow:  0 8px 12px -12px rgba(0, 0, 0, 0.3);
  }
  .apos-table__row:hover .apos-table__cell,
  .apos-table__row.is-selected .apos-table__cell {
    background-color: var(--a-base-10);
    border-bottom: 1px solid var(--a-base-7)
  }

  .apos-table__cell-field {
    margin: 0;
  }
  // might have to be expanded kinda magic
  .apos-table__cell-field--title {
    max-width: 400px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
</style>
