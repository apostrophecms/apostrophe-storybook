import { addDecorator } from '@storybook/vue';
import { withContexts } from '@storybook/addon-contexts/vue';
import { contexts } from './configs/contexts'; // we will define the contextual setups later in API section
 
addDecorator(withContexts(contexts));