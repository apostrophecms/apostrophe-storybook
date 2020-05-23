<template>
  <AposModal :modal="modal">
    <template #primaryControls>
      <AposButton type="primary" label="Finished" />
    </template>
    <template #leftRail v-if="!!media.length">
      <AposModalRail>
        <AposTagList title="Filter by Tag" :tags="tagList" />
      </AposModalRail>
    </template>
    <template #main>
      <AposModalBody>
        <template #bodyHeader v-if="!!media.length">
          <AposMediaManagerToolbar />
        </template>
        <template #bodyMain>
          <AposMediaManagerDisplay 
            v-if="!!media.length" :media="media" v-on:selected="updateSelected" 
            ref="display" v-on:edit="updateEditing"
          />
          <div v-else class="apos-media-manager__empty">
            <AposEmptyState :emptyState="emptyDisplay" />
          </div>
        </template>
      </AposModalBody>
    </template>
    <template #rightRail v-if="!!media.length">
      <AposModalRail type="right">
        <div class="apos-media-manager__sidebar">
          <AposMediaManagerEditor v-show="editing" :media="currentlyEditing" />
          <AposMediaManagerSelections 
            :items="selected" v-on:clear="clearSelected" v-on:edit="updateEditing"
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
  props: {
    media: {
      type: Array,
      default() {
        return [];
      }
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
        title: 'Manage Media',
        active: true,
        type: 'overlay',
        showModal: true
      },
      sidebar: 'selections',
      selected: [],
      editing: null,
      emptyDisplay: {
        title: 'No Media Found',
        message: 'Uploaded media will appear here',
        emoji: '🖼'
      }
    }
  },
  computed: {
    currentlyEditing() {
      return this.media.find(item => item.id === this.editing);
    }
  },
  methods: {
    updateSelected(selected) {
      this.selected = selected;
      if (selected.length > 1) {
        this.editing = null;
      }
    },
    clearSelected() {
      // select(null) will match nothing and deselect all
      this.$refs.display.select(null);
    },
    updateEditing(id) {
      this.editing = id;
    }
  }
}
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
  height: 100%;
}

</style>
