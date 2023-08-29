import { CONTACT_INFO } from '@/core/mocks'
import type { StoryFn } from '@storybook/react'

import { Collapsible } from '@/ui/disclosure'

import { OfficeInfo } from './office-info'

const OfficeInfoStory = {
  title: 'Components/Office Info',
  component: OfficeInfo,
}

const Template: StoryFn = () => {
  return (
    <Collapsible.Base>
      <OfficeInfo contact={CONTACT_INFO} />
    </Collapsible.Base>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeInfoStory
