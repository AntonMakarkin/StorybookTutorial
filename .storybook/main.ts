import type { StorybookConfig } from '@storybook/react-vite';

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config: StorybookConfig = {
  stories: ['../src/components/**/*.stories.@(ts|tsx)'],
  staticDirs: ["../public"],
  addons: ["@storybook/addon-links", "@storybook/addon-a11y", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
};
export default config;
