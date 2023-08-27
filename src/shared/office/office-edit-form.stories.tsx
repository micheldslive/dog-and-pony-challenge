import { FORM_INFO } from '@/core/mocks'
import type { StoryFn } from '@storybook/react'

import { OfficeEditForm } from './office-edit-form'

const OfficeEditFormStory = {
  title: 'Components/Office Edit Form',
  component: OfficeEditForm,
}

const Template: StoryFn = () => {
  return (
    <OfficeEditForm
      office={FORM_INFO}
      onEdit={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeEditFormStory
