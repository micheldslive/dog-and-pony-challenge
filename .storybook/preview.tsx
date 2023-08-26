import React from 'react';
import { type Preview } from '@storybook/react';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    backgrounds: {
      default: 'transparent',
      values: [
        {
          name: 'transparent',
          value: 'transparent'
        }
      ]
    }
  },
  decorators: []
};

export const globalTypes = {
  locale: {
    name: 'Language',
    description: 'Internationalization locale',
    defaultValue: 'pt',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'pt', title: 'Português' },
        { value: 'en', title: 'English' }
      ],
      showName: true,
      dynamicTitle: true
    }
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'dark', icon: 'moon', title: 'Dark' },
        { value: 'light', icon: 'sun', title: 'Light' }
      ],
      showName: true,
      dynamicTitle: true
    }
  }
};

export default preview;
