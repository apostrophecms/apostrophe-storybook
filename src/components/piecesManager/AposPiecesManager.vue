<template>
  <AposModal :modal="modal">
    <template #primaryControls>
      <AposButton type="default" label="Finished" />
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyHeader v-if="!!docs.length">
          <AposPiecesManagerToolbar
            :selected="selected" :media="myMedia"
            @select-click="selectClick"
            @trash-click="trashClick"
            @search="search"
          />
        </template>
        <template #bodyMain>
          <AposTable
            @sort="log" v-if="docs.length > 0"
            :headers="headers" :rows="docs"
          />
          <div v-else class="apos-media-manager__empty">
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
import AposButton from './../button/AposButton.vue';
import AposEmptyState from './../emptyState/AposEmptyState.vue';
import AposPiecesManagerToolbar from './AposPiecesManagerToolbar.vue';
import AposTable from '../table/AposTable.vue';

export default {
  components: {
    AposModal,
    AposModalBody,
    AposButton,
    AposPiecesManagerToolbar,
    AposTable,
    AposEmptyState
  },
  props: {
    headers: {
      type: Array,
      required: true
    },
    docs: {
      type: Array,
      required: true
    },
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
      editing: null,
      lastSelected: null,
      emptyDisplay: {
        title: 'No Documents Found',
        message: '',
        emoji: '📄'
      }
    };
  },
  computed: {
    selected() {
      return []; // TEMP
      // return this.myMedia.filter(item => item.checkbox.value.data.length);
    }
  },
  watch: {
    selected(newVal) {
      if (newVal.length === 1) {
        this.editing = this.myMedia.find(item => item.id === newVal[0].id);
      } else {
        this.editing = null;
      }
    }
  },
  methods: {
    log(action) {
      console.log(`sort by ${action}`);
    },

    clearSelected() {
      // select(null) will match nothing and deselect all
      this.select(null);
      this.editing = null;
    },
    updateEditing(id) {
      this.editing = this.myMedia.find(item => item.id === id);
    },

    // TODO stub
    trashClick() {
      this.$emit('trash', this.selected);
    },

    // TODO stub
    saveMedia() {
      this.$emit('save');
    },

    search(query) {
      // TODO stub
      this.$emit('search', query);
    }

  }
};
</script>

<style lang="scss" scoped>
@import '../../scss/_mixins';
.apos-media-manager__empty {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-top: 130px;
}

.apos-media-manager__sidebar {
  position: relative;
  width: 100%;
}

.apos-media-manager__sidebar--empty {
  height: 100%;
}

</style>
