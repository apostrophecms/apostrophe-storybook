import { storiesOf } from '@storybook/vue';

import AposAvatar from './AposAvatar.vue';

storiesOf('Avatars', module)
  .add('Avatar (single src file)', () => ({
    components: { AposAvatar },
    template: '<AposAvatar src="/avatars/gabrielle.jpg" alt="Gabrielle Giffords"/>'
  }))
  .add('Avatar (single src file, large)', () => ({
    components: { AposAvatar },
    template: '<AposAvatar src="/avatars/toni.jpg" size="120px" alt="Toni Morrison"/>'
  }));
