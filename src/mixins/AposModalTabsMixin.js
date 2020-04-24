// Provide basic bridging functionality between tabs
// and the modal body.

export default {
  data() {
    return {
      currentTab: null
    };
  },
  mounted() {
    this.currentTab = Number(this.groups[0].uid);
  },
  computed: {
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
