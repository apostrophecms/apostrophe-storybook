<template>
  <table class="apos-table">
    <tbody>
      <tr>
        <th class="apos-table__header">
          <AposCheckbox
            @toggle="selectAll"
            id="aposSelectAll"
            :choice="selectAllChoice"
            :field="selectAllField.field"
            :value="selectAllValue"
            :status="selectAllField.status"
          />
        </th>
        <th
          v-for="header in headers" scope="col" class="apos-table__header"
          :key="header.label"
        >
          <component :is="getEl(header)" @click="sort(header.action)" class="apos-table__header-label">
            <component
              v-if="header.icon"
              :size="iconSize(header)"
              class="apos-table__header-icon"
              :is="icons[header.icon]"
            />
            {{ header.label }}
          </component>
        </th>
      </tr>
      <tr
        class="apos-table__row"
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
            @toggle="toggleRowCheck($event, row.id)"
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
import AposTableMixin from '../../mixins/AposTableMixin';
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
  mixins: [ AposTableMixin ]
};
</script>

<style lang="scss" scoped>
  @import '../../sharedScss/_tables';
</style>
