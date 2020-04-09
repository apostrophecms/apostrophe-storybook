import Theme from './components/Theme.vue';
export const contexts = [
  {
    icon: 'mirror',
    title: 'Themes',
    components: [Theme],
    params: [
      { name: 'Dark Theme', props: { theme: 'apos-theme-dark'}, default: true },
      { name: 'Dark Theme, in Rail', props: { theme: 'apos-theme-dark apos-theme-rail'} },
      { name: 'Light Theme', props: { theme: 'apos-theme-light' } },
      { name: 'Light Theme, in Rail', props: { theme: 'apos-theme-light apos-theme-rail' } },
    ],
    options: {
      deep: true, // pass the `props` deeply into all wrapping components
      disable: false, // disable this contextual environment completely
      cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
    },
  }
  // {
  //   icon: 'switchalt',
  //   title: 'Context',
  //   components: [Theme],
  //   params: [
  //     { name: 'None', props: { context: 'null' } },
  //     { name: 'Rail', props: { context: 'rail' }, default: true },
  //   ],
  //   options: {
  //     deep: true, // pass the `props` deeply into all wrapping components
  //     disable: false, // disable this contextual environment completely
  //     cancelable: false, // allow this contextual environment to be opt-out optionally in toolbar
  //   },
  // }
];
