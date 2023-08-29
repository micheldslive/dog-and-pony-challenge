import React from 'react'
import { StoryFn, type Preview } from '@storybook/react'

import RootLayout from '../src/app/layout'
import { OfficesLayout } from '../src/layouts/offices'

import '../src/styles/globals.css'

const withRootLayout = (Story: StoryFn) => {
  return (
    <RootLayout>
      <OfficesLayout.Container>
        <OfficesLayout.Main>
          <OfficesLayout.Section>
            <div className='flex justify-center flex-col'>
              <Story />
            </div>
          </OfficesLayout.Section>
        </OfficesLayout.Main>
      </OfficesLayout.Container>
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
  decorators: [withRootLayout],
}

export default preview
