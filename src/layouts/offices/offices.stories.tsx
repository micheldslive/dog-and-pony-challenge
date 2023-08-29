import type { StoryFn } from '@storybook/react'

import { ThemeToggle } from '@/shared/toggle-color'

import { OfficesLayout } from '.'

const OfficesLayoutStory = {
  title: 'Page/Offices',
  component: OfficesLayout,
}

const Template: StoryFn = () => {
  return (
    <>
      <ThemeToggle.Root />
      <OfficesLayout.Content />
    </>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficesLayoutStory
