export default {
  button: {
    label: 'Filter',
    icon: 'chevron-down-icon',
    modifiers: ['icon-right'],
    type: 'outline'
  },
  menu: {
    published: {
      field: {
        name: 'published',
        type: 'radio',
        label: 'Published State',
        choices: [
          {
            label: 'Published',
            value: 'published'
          },
          {
            label: 'Unpublished',
            value: 'unpublished'
          }
        ]
      },
      value: { data: 'published' },
      status: {}
    },
    trash: {
      field: {
        name: 'trash',
        type: 'radio',
        label: 'Trash',
        choices: [
          {
            label: 'No',
            value: 'false'
          },
          {
            label: 'Yes',
            value: 'true'
          }
        ]
      },
      value: { data: 'false' },
      status: {}
    }
  }
};
