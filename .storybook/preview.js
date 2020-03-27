import { addDecorator } from '@storybook/vue';
import { withContexts } from '@storybook/addon-contexts/vue';
import { contexts } from './configs/contexts';
// import '../src/scss/app.scss';

addDecorator(withContexts(contexts));
