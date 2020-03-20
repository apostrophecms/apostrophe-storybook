import Theme from './components/Theme.vue';
export const contexts = [
  {
    icon: 'mirror',
    title: 'Themes',
    components: [Theme],
    params: [
      // an array of params contains a set of predefined `props` for `components`
      { name: 'Light Theme', props: { theme: 'apos-theme-light' } },
      { name: 'Dark Theme', props: { theme: 'apos-theme-dark '}, default: true },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  },
  /* ... */ // multiple contexts setups are supported
];