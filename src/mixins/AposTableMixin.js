export default {
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
        icons[h.icon] = `${h.icon.toLowerCase()}-icon`;
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
      };
    });
    return {
      icons,
      checkboxes,
      checked: []
    };
  },
  computed: {
    selectAllValue() {
      return this.checked.length > 0 ? { data: ['checked'] } : { data: [] };
    },
    selectAllChoice() {
      const checkLen = this.checked.length;
      const rowLen = this.rows.length;

      return checkLen > 0 && checkLen !== rowLen ? {
        value: 'checked',
        indeterminate: true
      } : {
        value: 'checked'
      };
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
};
