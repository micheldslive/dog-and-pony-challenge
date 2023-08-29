import type { StoryFn } from '@storybook/react'

import { Button } from '.'
import { Icons } from '../icons'

const ButtonStory = {
  title: 'Theme/Button',
  component: Button,
}

const Template: StoryFn = () => {
  return (
    <Button>
      <Icons.moon />
    </Button>
  )
}

export const Default = Template.bind({})

Default.args = {}

export default ButtonStory
