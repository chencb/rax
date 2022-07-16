import { sync } from 'read-pkg-up';
import { LoadOptions } from '@storybook/core-common';

export default {
  packageJson: sync({ cwd: __dirname }).packageJson,
  framework: 'rax',
  frameworkPresets: [
    require.resolve('./framework-preset-rax.js'),
    require.resolve('./framework-preset-react-docgen'),
  ],
} as LoadOptions;
