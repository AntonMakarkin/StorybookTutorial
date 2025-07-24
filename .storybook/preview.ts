import type { Preview } from '@storybook/react-vite';

import { initialize, mswLoader } from 'msw-storybook-addon';

import '../src/index.css';

initialize();

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  loaders: [mswLoader],
};

export default preview;
