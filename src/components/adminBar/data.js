export default {
  menu: [
    {
      label: 'Content',
      name: 'content',
      menu: true,
      items: [
        {
          label: 'Dogs and other stuff',
          name: 'dogs',
          options: {}
        },
        {
          label: 'Cats go meow',
          name: 'cats',
          options: {
            href: '#cats'
          }
        }
      ]
    },
    {
      label: 'Log out',
      name: 'logOut',
      options: {
        href: '#logout'
      }
    }
  ]
};
