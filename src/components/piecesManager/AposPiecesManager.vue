<template>
  <AposModal :modal="modal">
    <template #primaryControls>
      <AposButton type="default" label="Finished" />
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyHeader v-if="!!rows.length">
          <AposPiecesManagerToolbar
            :selected-state="selectAllState"
            @select-click="selectAll"
            @trash-click="trashClick"
            @search="search"
          />
        </template>
        <template #bodyMain>
          <table class="apos-table" v-if="rows.length > 0">
            <tbody>
              <tr>
                <th class="apos-table__header" />
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
                    :id="row.id"
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
          <div v-else class="apos-pieces-manager__empty">
            <AposEmptyState :empty-state="emptyDisplay" />
          </div>
        </template>
      </AposModalBody>
    </template>
  </AposModal>
</template>

<script>
import AposModal from './../modal/AposModal.vue';
import AposModalBody from './../modal/AposModalBody.vue';
import AposTableMixin from '../../mixins/AposTableMixin';
import AposButton from './../button/AposButton.vue';
import AposEmptyState from './../emptyState/AposEmptyState.vue';
import AposPiecesManagerToolbar from './AposPiecesManagerToolbar.vue';
import AposCheckbox from '../inputCheckbox/AposCheckbox.vue';
import CheckBoldIcon from "vue-material-design-icons/CheckBold.vue";
import MinusIcon from "vue-material-design-icons/Minus.vue";
import LinkIcon from "vue-material-design-icons/LinkVariant.vue";

export default {
  components: {
    AposModal,
    AposModalBody,
    AposButton,
    AposPiecesManagerToolbar,
    AposEmptyState,
    AposCheckbox,
    CheckBoldIcon,
    MinusIcon,
    LinkIcon
  },
  mixins: [ AposTableMixin ],
  props: {
    tagList: {
      type: Array,
      default() {
        return [];
      }
    },
    applyTags: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      modal: {
        title: 'Manage Documents',
        active: true,
        type: 'overlay',
        showModal: true
      },
      lastSelected: null,
      emptyDisplay: {
        title: 'No Documents Found',
        message: '',
        emoji: '📄'
      }
    };
  },
  computed: {
    selectAllState() {
      if (this.selectAllValue.data.length && !this.selectAllChoice.indeterminate) {
        return 'checked';
      }
      if (this.selectAllValue.data.length && this.selectAllChoice.indeterminate) {
        return 'indeterminate';
      }
      return 'empty';
    }
  },
  methods: {
    // Toolbar handlers
    // TODO stub
    trashClick() {
      this.$emit('trash', this.selected);
    },

    search(query) {
      // TODO stub
      this.$emit('search', query);
    }

  }
};
</script>

<style lang="scss" scoped>
@import '../../sharedScss/_tables';
// TODO: .apos-pieces-manager__empty is shared with `apos-media-manager__empty`.
// We should combine somehow.
.apos-pieces-manager__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 130px;
}

</style>
