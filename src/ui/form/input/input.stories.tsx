import type { StoryFn } from '@storybook/react'

import { Input, InputProps } from '.'

const InputStory = {
  title: 'UI/Input',
  component: Input,
}

const Template: StoryFn<InputProps> = (args) => {
  return <Input {...args} />
}

export const Default = Template.bind({})

Default.args = {
  helperText: 'Helper Text',
  label: 'Title',
  required: true,
  status: 'default',
  placeholder: 'Type a title',
}

export default InputStory
