import type { Configuration } from 'webpack';
import type { Options, TypescriptConfig } from '@storybook/core-common';

export async function webpackFinal(config: Configuration) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      
    ],
  };
}
