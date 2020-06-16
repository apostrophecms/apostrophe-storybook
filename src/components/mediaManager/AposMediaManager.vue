<!--
  AposMediaManager will be in charge of all media-related state logic
  this includes doing the selecting and deselecting of items, deciding the editor/selection view,
  emitting batch action events, etc. All sub views will recieve `media` as a prop
-->

<template>
  <AposModal
    :modal="modal"
    @inactive="modal.active = false" @show-modal="modal.showModal = true"
    @esc="cancel" @no-modal="$emit('safe-close')"
  >
    <template #primaryControls>
      <AposButton type="default" label="Finished" @click="cancel" />
    </template>
    <template #leftRail v-if="!!media.length">
      <AposModalRail>
        <AposTagList title="Filter by Tag" :tags="tagList" />
      </AposModalRail>
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyHeader v-if="!!media.length">
          <AposMediaManagerToolbar
            :selected="selected" :media="myMedia"
            @select-click="selectClick"
            @trash-click="trashClick"
            @search="search"
          />
        </template>
        <template #bodyMain>
          <AposMediaManagerDisplay
            v-if="!!myMedia.length" :media="myMedia" ref="display"
            @edit="updateEditing"
            @toggle="selectAnother"
            @select="select"
            @select-series="selectSeries"
            @select-another="selectAnother"
          />
          <div v-else class="apos-media-manager__empty">
            <AposEmptyState :empty-state="emptyDisplay" />
          </div>
        </template>
      </AposModalBody>
    </template>
    <template #rightRail v-if="!!media.length">
      <AposModalRail type="right">
        <div class="apos-media-manager__sidebar" :class="{'apos-media-manager__sidebar--empty' : !selected.length}">
          <AposMediaManagerEditor
            v-show="editing" :media="editing" :selected="selected"
            @back="updateEditing(null)" @save="saveMedia"
          />
          <AposMediaManagerSelections
            :items="selected" @clear="clearSelected" @edit="updateEditing"
            v-show="!editing"
          />
        </div>
      </AposModalRail>
    </template>
  </AposModal>
</template>

<script>
import AposModal from './../modal/AposModal.vue';
import AposModalRail from './../modal/AposModalRail.vue';
import AposModalBody from './../modal/AposModalBody.vue';
import AposButton from './../button/AposButton.vue';
import AposTagList from './../tagList/AposTagList.vue';
import AposEmptyState from './../emptyState/AposEmptyState.vue';
import AposMediaManagerToolbar from './AposMediaManagerToolbar.vue';
import AposMediaManagerDisplay from './AposMediaManagerDisplay.vue';
import AposMediaManagerSelections from './AposMediaManagerSelections.vue';
import AposMediaManagerEditor from './AposMediaManagerEditor.vue';
import AposModalParentMixin from '../../mixins/AposModalParentMixin';

export default {
  components: {
    AposModal,
    AposModalRail,
    AposModalBody,
    AposButton,
    AposTagList,
    AposMediaManagerToolbar,
    AposMediaManagerDisplay,
    AposEmptyState,
    AposMediaManagerEditor,
    AposMediaManagerSelections
  },
  mixins: [AposModalParentMixin],
  props: {
    media: {
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
    const myMedia = [];
    this.media.forEach((media) => {
      const newMedia = { ...media };
      newMedia.checkbox = {
        status: {},
        value: {
          data: []
        },
        choice: { value: 'checked' },
        field: {
          name: media.id,
          type: 'checkbox',
          hideLabel: true,
          label: `Toggle selection of ${media.title}`,
          disableFocus: true
        }
      };
      myMedia.push(newMedia);
    });
    return {
      modal: {
        title: 'Manage Media',
        active: false,
        type: 'overlay',
        showModal: false
      },
      editing: null,
      lastSelected: null,
      myMedia,
      emptyDisplay: {
        title: 'No Media Found',
        message: 'Uploaded media will appear here',
        emoji: '🖼'
      }
    };
  },
  computed: {
    selected() {
      return this.myMedia.filter(item => item.checkbox.value.data.length);
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
    clearSelected() {
      // select(null) will match nothing and deselect all
      this.select(null);
      this.editing = null;
    },
    updateEditing(id) {
      this.editing = this.myMedia.find(item => item.id === id);
    },

    // select setters
    select(id) {
      this.myMedia.map((media) => {
        media.checkbox.value.data = media.id === id ? ['checked'] : [];
      });
      this.lastSelected = id;
    },

    selectAnother(id) {
      this.myMedia.forEach((media) => {
        if (media.id === id) {
          // meta deselect one
          if (this.selected.find(item => item.id === id)) {
            media.checkbox.value.data = [];
          } else {
            media.checkbox.value.data = ['checked'];
          }
        }
      });
      this.lastSelected = id;
      this.editing = null;
    },

    selectSeries(id) {
      if (!this.lastSelected) {
        this.select(id);
        return;
      }
      let beginIndex = this.myMedia.findIndex(media => media.id === this.lastSelected);
      let endIndex = this.myMedia.findIndex(media => media.id === id);
      const direction = beginIndex > endIndex ? -1 : 1;
      if (direction < 0) {
        [beginIndex, endIndex] = [endIndex, beginIndex];
      } else {
        endIndex++;
      }
      const sliced = this.myMedia.slice(beginIndex, endIndex);
      // always want to check, never toggle
      sliced.forEach(media => (media.checkbox.value.data = ['checked']));
      this.lastSelected = sliced[sliced.length - 1].id;
      this.editing = null;
    },

    // Toolbar handlers
    selectClick() {
      if (this.selected.length === this.myMedia.length) {
        // unselect all
        this.select(null);
      } else {
        // select all
        this.lastSelected = this.myMedia[0].id;
        this.selectSeries(this.myMedia[this.myMedia.length - 1].id);
      }
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
