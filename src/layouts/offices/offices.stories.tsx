import type { StoryFn } from '@storybook/react'

import { OfficesLayout } from '.'

const OfficesLayoutStory = {
  title: 'Page/Offices',
  component: OfficesLayout,
}

const Template: StoryFn = () => {
  return <OfficesLayout.Root />
}

export const Default = Template.bind({})

Default.args = {}

export default OfficesLayoutStory
