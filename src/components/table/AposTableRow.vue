<template>
  <tr class="apos-table__row" :class="{'is-selected': false }">
    <td v-if="selectAll" class="apos-table__cell">
      <AposCheckboxInput :field="checkbox.field" 
        :value="checkbox.value" :status="checkbox.status" v-on:input="update"
      />
    </td>
    <td class="apos-table__cell" v-for="header in headers" v-bind:key="row[header.name]">
      <a class="apos-table__link" v-if="header.name === 'url'" :href="row[header.name]">
        <Link :size="12" />
      </a>
      <p v-else class="apos-table__cell-field" :class="`apos-table__cell-field--${header.name}`">
        {{ row[header.name] }}
      </p>
    </td>
  </tr>
</template>

<script>
import Link from 'vue-material-design-icons/LinkVariant.vue';
import AposCheckboxInput from '../inputCheckbox/AposCheckboxInput.vue';
export default {
  props: {
    row: {
      required: true,
      type: Object
    },
    headers: {
      required: true,
      type: Array
    },
    checkbox: {
      type: Object
    },
    selectAll: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log(this.checkbox);
  },
  data() {
    return {
    }
  },
  methods: {
    update() {
      console.log('i heard that');
      this.$emit('input', this.row.id, this.checkbox.value);
    }
  },
  components: { 
    AposCheckboxInput,
    Link
  }
}
</script>

<style lang="scss">
  @import '../../scss/_mixins';
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
