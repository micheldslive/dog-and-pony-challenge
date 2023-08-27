import type { StoryFn } from '@storybook/react'

import { Button } from '.'

const ButtonStory = {
  title: 'UI/Button',
  component: Button,
}

const Template: StoryFn = () => {
  return <Button>Click me</Button>
}

export const Default = Template.bind({})

Default.args = {}

export default ButtonStory
