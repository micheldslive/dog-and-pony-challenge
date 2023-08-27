import type { StoryFn } from '@storybook/react'

import { Icon } from '@/ui/media'

import { IconButton, IconButtonProps } from '.'

const IconButtonStory = {
  title: 'UI/Icon Button',
  component: IconButton,
}

const Template: StoryFn<IconButtonProps> = ({ size, variant }) => {
  return (
    <IconButton size={size} variant={variant}>
      <Icon as='cross' />
    </IconButton>
  )
}

export const Default = Template.bind({})

Default.args = { size: 'sm', variant: 'neutral' }

export default IconButtonStory
