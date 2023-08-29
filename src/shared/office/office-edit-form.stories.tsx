import { FORM_INFO } from '@/core/mocks'
import type { StoryFn } from '@storybook/react'

import { Collapsible } from '@/ui/disclosure'

import { OfficeEditForm } from './office-edit-form'

const OfficeEditFormStory = {
  title: 'Components/Office Edit Form',
  component: OfficeEditForm,
}

const Template: StoryFn = () => {
  return (
    <Collapsible.Base>
      <OfficeEditForm
        office={FORM_INFO}
        onEdit={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Collapsible.Base>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeEditFormStory
