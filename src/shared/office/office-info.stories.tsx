import { CONTACT_INFO } from '@/core/mocks'
import type { StoryFn } from '@storybook/react'

import { OfficeInfo } from './office-info'

const OfficeInfoStory = {
  title: 'Components/Office Info',
  component: OfficeInfo,
}

const Template: StoryFn = () => {
  return <OfficeInfo contact={CONTACT_INFO} />
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeInfoStory
