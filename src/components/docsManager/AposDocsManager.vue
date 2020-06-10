<template>
  <AposModal :modal="modal">
    <template #primaryControls>
      <AposButton type="default" label="Finished" />
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyHeader v-if="!!docs.length">
          <!-- <AposDocsManagerToolbar
            :selected="selected" :media="myMedia"
            @select-click="selectClick"
            @trash-click="trashClick"
            @search="search"
          /> -->
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
// import AposDocsManagerToolbar from './AposDocsManagerToolbar.vue';
import AposTable from '../table/AposTable.vue';

export default {
  components: {
    AposModal,
    AposModalBody,
    AposButton,
    // AposDocsManagerToolbar,
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

    // // select setters
    // select(id) {
    //   this.myMedia.map((media) => {
    //     media.checkbox.value.data = media.id === id ? ['checked'] : [];
    //   });
    //   this.lastSelected = id;
    // },

    // selectAnother(id) {
    //   this.myMedia.forEach((media) => {
    //     if (media.id === id) {
    //       // meta deselect one
    //       if (this.selected.find(item => item.id === id)) {
    //         media.checkbox.value.data = [];
    //       } else {
    //         media.checkbox.value.data = ['checked'];
    //       }
    //     }
    //   });
    //   this.lastSelected = id;
    //   this.editing = null;
    // },

    // selectSeries(id) {
    //   if (!this.lastSelected) {
    //     this.select(id);
    //     return;
    //   }
    //   let beginIndex = this.myMedia.findIndex(media => media.id === this.lastSelected);
    //   let endIndex = this.myMedia.findIndex(media => media.id === id);
    //   const direction = beginIndex > endIndex ? -1 : 1;
    //   if (direction < 0) {
    //     [beginIndex, endIndex] = [endIndex, beginIndex];
    //   } else {
    //     endIndex++;
    //   }
    //   const sliced = this.myMedia.slice(beginIndex, endIndex);
    //   // always want to check, never toggle
    //   sliced.forEach(media => (media.checkbox.value.data = ['checked']));
    //   this.lastSelected = sliced[sliced.length - 1].id;
    //   this.editing = null;
    // },

    // // Toolbar handlers
    // selectClick() {
    //   if (this.selected.length === this.myMedia.length) {
    //     // unselect all
    //     this.select(null);
    //   } else {
    //     // select all
    //     this.lastSelected = this.myMedia[0].id;
    //     this.selectSeries(this.myMedia[this.myMedia.length - 1].id);
    //   }
    // },

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
