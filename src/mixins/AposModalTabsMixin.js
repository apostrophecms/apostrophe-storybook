// Provide basic bridging functionality between tabs
// and the modal body.

export default {
  props: {

  },
  computed: {
    currentTab () {
      return Number(this.groups[0].uid);
    },
    options () {
      return window.apos.schemas;
    }
  },
  methods: {
    switchPane(id) {
      this.currentTab = Number(id);
    }
  }
};
