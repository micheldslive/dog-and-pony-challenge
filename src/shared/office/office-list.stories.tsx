import type { StoryFn } from '@storybook/react'

import { OfficeList } from '.'

const OfficeListStory = {
  title: 'Components/Office List',
  component: OfficeList,
}

const Template: StoryFn = () => {
  return <OfficeList />
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeListStory
