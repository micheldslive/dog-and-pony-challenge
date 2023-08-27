import type { StoryFn } from '@storybook/react'

import { Icon, IconProps } from '.'

const IconStory = {
  title: 'UI/Icon',
  component: Icon,
}

const Template: StoryFn<IconProps> = (args) => {
  return <Icon {...args} />
}

export const Default = Template.bind({})

Default.args = { as: 'add', label: '', size: 'md' }

export default IconStory
