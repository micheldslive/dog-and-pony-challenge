import React from 'react'
import { StoryFn, type Preview } from '@storybook/react'

import { withThemeByClassName } from '@storybook/addon-styling'

import RootLayout from '../src/app/layout'
import { OfficesLayout } from '../src/layouts/offices'

import '../src/styles/globals.css'

const withRootLayout = (Story: StoryFn) => {
  return (
    <RootLayout>
      <OfficesLayout.Main>
        <OfficesLayout.Section>
          <Story />
        </OfficesLayout.Section>
      </OfficesLayout.Main>
    </RootLayout>
  )
}

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'transparent',
      values: [
        {
          name: 'transparent',
          value: 'transparent',
        },
      ],
    },
  },
  decorators: [
    // Adds theme switching support.
    // NOTE: requires setting "darkMode" to "class" in your tailwind config
    withThemeByClassName({
      themes: {
        light: 'light',
        dark: 'dark',
      },
      defaultTheme: 'light',
    }),
    withRootLayout,
  ],
}

export const globalTypes = {
  locale: {
    name: 'Language',
    description: 'Internationalization locale',
    defaultValue: 'pt',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'pt', title: 'Português' },
        { value: 'en', title: 'English' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
  theme: {
    name: 'Theme',
    description: 'Global theme for components',
    defaultValue: 'dark',
    toolbar: {
      icon: 'circlehollow',
      items: [
        { value: 'dark', icon: 'moon', title: 'Dark' },
        { value: 'light', icon: 'sun', title: 'Light' },
      ],
      showName: true,
      dynamicTitle: true,
    },
  },
}

export default preview
