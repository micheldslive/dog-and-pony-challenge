import type { StoryFn } from '@storybook/react'

import { Collapsible } from '@/ui/disclosure'

import { OfficeInsertForm } from './office-insert-form'

const OfficeInsertFormStory = {
  title: 'Components/Office Insert Form',
  component: OfficeInsertForm,
}

const Template: StoryFn = () => {
  return (
    <Collapsible.Base>
      <OfficeInsertForm
        onInsert={function (): void {
          throw new Error('Function not implemented.')
        }}
      />
    </Collapsible.Base>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeInsertFormStory
