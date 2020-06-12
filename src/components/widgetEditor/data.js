export default {
  doc: {
    metaText: 'Outrage over police injustice is older than the nation',
    title: 'Porta Magna Egestas',
    description: 'A tip of the internet is assumed to be an unlet baritone. The literature would have us believe that a castled anthony is not but a jaw. Few can name a rimless cook that isn'
  },
  schema: [
    {
      name: 'metaText',
      label: 'Meta Text',
      type: 'string'
    },
    {
      name: 'title',
      label: 'Title',
      type: 'string',
      required: true
    },
    {
      name: 'description',
      label: 'Description',
      type: 'string',
      textarea: true
    }
  ]
};
