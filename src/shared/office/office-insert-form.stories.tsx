import type { StoryFn } from '@storybook/react'

import { OfficeInsertForm } from './office-insert-form'

const OfficeInsertFormStory = {
  title: 'Components/Office Insert Form',
  component: OfficeInsertForm,
}

const Template: StoryFn = () => {
  return (
    <OfficeInsertForm
      onInsert={function (): void {
        throw new Error('Function not implemented.')
      }}
    />
  )
}

export const Default = Template.bind({})

Default.args = {}

export default OfficeInsertFormStory
